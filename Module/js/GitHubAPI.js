// It's a module no UI
xui.Class('Module.GitHubAPI', 'xui.Module',{
    Instance:{
        // Dependency libs
        Required:[
            "https://linb.github.io/CrossUI_Assets/thirdparty/base64.min.js",
            "https://linb.github.io/CrossUI_Assets/thirdparty/octokit-rest.min.js"
        ],
        // To initialize properties
        properties : {
        },
        // To initialize instance(e.g. properties)
        initialize : function(){
            // set a global variable, for other html calling
            window.xui_GithubHandler = this;
        },     
        // api
        getGithubClient:function(){
            if(this.clientWithAuth){
                return this.clientWithAuth;
            }else{
                this.ensureGithubAuth();
                throw new Error("No github auth yet!");
            }
        },
        ensureGithubAuth:function(){
            var api = this;
            var loginLayer = api.loginLayer;
            if(!loginLayer){
                loginLayer = api.loginLayer= (new xui.UI.Div())
                    .setDock('cover')
                    .setShowEffects("Slide In TB")
                    .setHideEffects("Slide In TB")
                    .setPanelBgClr("#fff")
                    .setIframeAutoLoad("{/}Module/js/GitHubAPI/pages/GithubLoginLayer.html");
                // ensure effects
                loginLayer.render(true);
            }

            function showGithubLogInLayer(){
                var body=xui('body'),
                    top = body.first().topZindex();
                loginLayer.setZIndex(top+1).setDisplay('');
                loginLayer.show(body).setDock('cover',true);
            }

            var token = api.getToken();
            if(!token){
                showGithubLogInLayer();
            }else{
                api.clientWithAuth = new Octokit({
                    auth: 'token ' + token
                });
                api.getGithubClient().users.getAuthenticated().then(function(rsp){
                    api._userProfile = rsp.data;
                    api.fireEvent("onGithubLogin", [rsp.data.login, rsp.data.avatar_url, rsp.data]);

                    var action = api._lastActionConf;
                    if(action){
                        action.fun.apply(action.scope, action.params);
                        delete api._lastActionConf;
                    }
                }, function(e){
                    console.error(e);
                    api.clientWithAuth = null;
                    if(err.message == "Bad credentials"){
                        showGithubLogInLayer();
                    }
                });
            }
        },
        getToken:function (){
            return this._githubAccessToken || ( this._githubAccessToken  = xui.Cookies.get('access_token'));
        },
        setToken: function (token){
            var ns=this;
            xui.Cookies.set("access_token", ns._githubAccessToken = token);
        },
        getGithubUser:function(){
            return this._userProfile && this._userProfile.login || "";
        },
        setLastActionConf:function(conf){
            this._lastActionConf = conf;
        },
        githubTokenResponse:function(tokenHash){
            var ns=this,
                paras = xui.urlDecode(tokenHash);
            // save to cookie
            if(paras.access_token){
                ns.setToken(paras.access_token);
            }
            ns.ensureGithubAuth();
        },

        // APIs
        listRepos : function(requestId, page, per_page, nameIn, sort, order, onSuccess, onFail){
            var api=this,
                clientWithAuth = this.getGithubClient();
            clientWithAuth.search.repos({
                q: "user:" +api.getGithubUser() + (nameIn?("+"+nameIn + "+in:name"):""),
                sort:sort||"updated",
                order:order || "desc",
                page:page|| 1,
                per_page:per_page || 20
            }).then( function(rst){
                var repos = [];
                rst.data.items.forEach( function(v, i){
                    repos.push({
                        id:v.name,
                        caption:v.name,
                        tagVar:v
                    });
                });
                var args = [requestId, repos, rst.data.total_count||0, page, per_page];
                if(false !== xui.tryF(onSuccess, args))
                    api.fireEvent("onListGithubRepos", args);
            }).catch(function(e){
                console.error(e);                
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", [xui.Debugger.getErrMsg(e)]);
                }
            });            
        },
        listFiles : function(requestId, repo, parentPath, fileType, fileExt, filter, onSuccess, onFail){
            var api=this,
                clientWithAuth = this.getGithubClient();            
            clientWithAuth.repos.getContents({
                owner:api.getGithubUser(),
                repo:repo,
                path: parentPath||""
            }).then(function(rst){
                var files=[];
                rst.data.forEach(function(v,i){
                    if(!fileType || fileType=="all" || fileType==v.type){
                        if(!filter || (xui.isFun(filter) ? filter(v,i) : true)){
                            if(v.type!='file' || !fileExt || new RegExp("\\.(" + fileExt + ")$").test(v.name)){
                                files.push({
                                    id: v.path,
                                    caption: v.name,
                                    type: v.type,
                                    isFolder: v.type=="dir",
                                    sub:v.type=="dir", 
                                    group:true,
                                    sha: v.sha,
                                    tagVar:v
                                });
                            }
                        }
                    }
                }); 
                var args = [requestId, files, parentPath];
                if(false !== xui.tryF(onSuccess, args))
                    api.fireEvent("onListGithubFiles", args);                
            }).catch(function(e){
                console.error(e);
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", [xui.Debugger.getErrMsg(e)]);
                }
            });
        },
        readFile : function(requestId, repo, path, decode, onSuccess, onFail){
            var api=this,
                clientWithAuth = this.getGithubClient();        
            clientWithAuth.repos.getContents({
                owner:api.getGithubUser(),
                repo:repo,
                path: path
            }).then(function(rst){
                // folder
                if(rst.data[0]){
                    var e="This's a folder, not a file!";
                    console.error(e);
                    if(false!==xui.tryF(onFail,[e] )){
                        api.fireEvent("onError", [xui.Debugger.getErrMsg(e)]);
                    }
                }
                else{
                    var args = [requestId, decode ? Base64.decode( rst.data.content ): rst.data.content, rst.data.sha, decode];
                    if(false !== xui.tryF(onSuccess, args))
                        api.fireEvent("onReadGithubFile", args);                           
                }
            }).catch(function(e){
                console.error(e);
                if(false!==xui.tryF(onFail,[e] )){
                    api.fireEvent("onError", [xui.Debugger.getErrMsg(e)]);
                }
            });
        },
        createFile : function(requestId, repo, path, content, encode, onSuccess, onFail){
            var api=this,
                clientWithAuth = this.getGithubClient();  
            clientWithAuth.repos.createFile({
                owner:api.getGithubUser(),
                repo:repo,
                path: path,
                message:"Created by CrossUI Github JSON Editor",
                content: encode ? Base64.encode( content ) : content
            }).then(function(rsp){
                var args = [requestId, rsp.data.content.name, rsp.data.content.path, rst.data.sha];
                if(false !== xui.tryF(onSuccess, args))
                    api.fireEvent("onCreateGithubFile", args);                
            }).catch(function(e){
                console.error(e);
                xui.tryF(onFail,[e] );
            });            
        },
        updateFile : function(requestId, repo, path, sha, content, encode, onSuccess, onFail){
            var api=this,
                clientWithAuth = this.getGithubClient();              
            clientWithAuth.repos.updateFile({
                owner:api.getGithubUser(),
                repo:repo,
                path:path,
                sha:sha,                    
                message:"Updated by CrossUI GitHub JSON Editor",
                content: encode? Base64.encode( content ) : content
            }).then(function(rsp){
                var args = [requestId, path, rsp.data.content.sha];
                if(false !== xui.tryF(onSuccess, args))
                    api.fireEvent("onUpdateGithubFile", args);                    
            }).catch(function(e){
                console.error(e);
                xui.tryF(onFail,[e] );
            });
        },
        deleteFile : function(requestId, repo, path, sha, onSuccess, onFail){
            var api=this,
                clientWithAuth = this.getGithubClient();              
            clientWithAuth.repos.deleteFile({
                owner:api.getGithubUser(),
                repo:repo,
                path:path,
                sha:sha,                    
                message:"Deleted by CrossUI GitHub JSON Editor"
            }).then(function(rsp){
                var args = [requestId, path, sha];
                if(false !== xui.tryF(onSuccess, args))
                    api.fireEvent("onDeleteGithubFile", args);                    
            }).catch(function(e){
                console.error(e);
                xui.tryF(onFail,[e] );
            });
        }
    }, 
    Static:{
        $Functions:{
            ensureGithubAuth : function(){},
            setLastActionConf : function(lastActionConf/*Object, {fun:Function, scope:Object, params:Array}*/){},
            listRepos : function(requestId /*String, requestid*/, 
                                  page /*Number, current page*/,
                                  per_page /*Number, per page count*/,
                                  nameIn /*String, search name*/, 
                                  sort/*String, sort byc*/,  
                                  order/*String, desc, asc*/, 
                                  onSuccess/*Function*/, onFail/*Function*/){},
            listFiles : function(requestId /*String, requestid*/, 
                                  repo /*String, repo name */, 
                                  parentPath/*String, parent path*/, 
                                  fileType /*String: file,dir,all*/, 
                                  fileExt /*String, file extension, js|css|html*/, 
                                  filter /*Function, filter*/, 
                                  onSuccess /*Function*/, onFail/*Function*/){},
            readFile:function(requestId /*String, requestid*/, 
                               repo /*String, repo name */, 
                               path/*String, file path*/, 
                               decode /*Boolean, need to decode?*/,
                               onSuccess /*Function*/, onFail/*Function*/){},
            createFile:function(requestId /*String, requestid*/, 
                                 repo /*String, repo name */, 
                                 path/*String, file path*/, 
                                 content /*String, file content*/, 
                                 encode /*Boolean, need to encode?*/,
                                 onSuccess /*Function*/, onFail/*Function*/){},
            updateFile:function(requestId /*String, requestid*/, 
                                 repo /*String, repo name */, 
                                 path/*String, file path*/, 
                                 sha/*String, GitHub file sha*/, 
                                 content /*String, file content*/, 
                                 encode /*Boolean, need to encode?*/,
                                 onSuccess /*Function*/, onFail/*Function*/){},
            deleteFile:function(requestId /*String, requestid*/, 
                                 repo /*String, repo name */, 
                                 path/*String, file path*/, 
                                 sha/*String, GitHub file sha*/, 
                                 onSuccess /*Function*/, onFail/*Function*/){}
        },
        $EventHandlers :{
            onError : function(error /*Strin, error message*/){},
            onGithubLogin : function(name /*String, user name*/, 
                                      avatar /*String, user avatar url*/, 
                                      user /*Object, user object*/
                                     ){},
            onListGithubRepos : function(requestId /*String, requestid*/, 
                                          repoItems /*List{id,name}, result list*/, 
                                          total /*Number, total count*/,
                                          page /*Number, current page*/,
                                          per_page /*Number, per page count*/
                                         ){},
            onListGithubFiles : function(requestId /*String, requestid*/, 
                                          fileItems /*List{id,name,type,sha}, result list*/, 
                                          parentPath /*String, parent path*/
                                         ){},
            onReadGithubFile : function(requestId /*String, requestid*/, 
                                         content /*String, file content*/, 
                                         sha/*String, GitHub file sha*/, 
                                         decoded /*Boolean, decoded?*/
                                        ){},
            onCreateGithubFile : function(requestId /*String, requestid*/, 
                                           path /*String, file path*/, 
                                           name /*String, file name*/, 
                                           sha/*String, GitHub file sha*/
                                          ){},
            onUpdateGithubFile : function(requestId /*String, requestid*/, 
                                           path /*String, file path*/, 
                                           sha/*String, GitHub file sha*/
                                          ){},
            onDeleteGithubFile : function(requestId /*String, requestid*/, 
                                           path /*String, file path*/, 
                                           sha/*String, GitHub file sha*/
                                          ){}
        }
    }
});