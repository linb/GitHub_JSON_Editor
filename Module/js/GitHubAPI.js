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
            window.GithubHandler = this;
        },        
        ensureGithubAuth:function(){
            console.log(9);
        }
    },
    Static:{
        $Functions:{
            ensureGithubAuth:function(){}
        }
    }
});