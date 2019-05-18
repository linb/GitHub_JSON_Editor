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
            window.xui_GithubHandler = this;
        },        
        ensureGithubAuth:function(){
            console.log(9);
        },
        githubTokenResponse:function(tokenHash){
            var ns=this,
                paras = xui.urlDecode(tokenHash);
            // save to cookie
            if(paras.access_token){
              ns.setToken(paras.access_token);
            }
            ns.ensureGithubAuth();
        }
    },
    Static:{
        $Functions:{
            ensureGithubAuth:function(){}
        }
    }
});