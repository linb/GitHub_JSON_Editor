// It's a module no UI
xui.Class('Module.GitHubAPI', 'xui.Module',{
    Instance:{ 
        // Dependency classes
        Required:["https://linb.github.io/CrossUI_Assets/thirdparty/octokit-rest.min.js"],
        // To initialize properties
        properties : {
        },
        // To initialize instance(e.g. properties)
        initialize : function(){
            // set a global variable, for other html calling
            window.xui_GithubHandler = this;
        },     
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
                }, function(err){
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
        listRepos:function(requestId, page, per_page, nameIn, sort, order, onSuccess, onFail){
            var api=this,
                client = this.getGithubClient();
            clientWithAuth.search.repos({
                q: "user:" +sourceOwner + (nameIn?("+"+nameIn + "+in:name"):""),
                sort:sort||"updated",
                order:order || "desc",
                page:page|| 1,
                per_page:per_page || 20
            }).then( (rst) => {
                var repos = [];
                rst.data.items.forEach( (v, i) => {
                    repos.push({
                        id: "*."+(i+1),
                        name: v.name,
                    });
                });
                if(false !== xui.tryF(onSuccess,[repos, rst.data.total_count, page, per_page]))
                    api.fireEvent("onGithubReposList", [requestId, repos, rst.data.total_count, page, per_page]);
            }) .catch( e => {
                xui.tryF(onFail,[e] );
            });            
        }
    },
    Static:{
        $Functions:{
            ensureGithubAuth:function(){},
            setLastActionConf:function(lastActionConf/*Object, {fun:Function, scope:Object, params:Array}*/){},
            listRepos：function(requestId /*String, requestid*/, 
                                 page /*Number, current page*/,
                                 per_page /*Number, per page count*/,
                                 nameIn /*String, search name*/, 
                                 sort/*String, sort byc*/, 
                                 order/*String, desc, asc*/, 
                                 onSuccess/*Function*/, onFail/*Function*/){}
        },
        $EventHandlers:{
            onGithubLogin: function(name /*String, user name*/, 
                                     avatar /*String, user avatar url*/, 
                                     user /*Object, user object*/
                                    ){},
            onGithubReposList: function(requestId /*String, requestid*/, 
                                         repoItems /*List{id,name}, result list*/, 
                                         total /*Number, total count*/,
                                         page /*Number, current page*/,
                                         per_page /*Number, per page count*/
                                        ){}  
             
        }
    }
});