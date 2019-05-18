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
        githubTokenResponse:function(info){
            //
        }
    },
    Static:{
        $Functions:{
            ensureGithubAuth:function(){}
        }
    }
});