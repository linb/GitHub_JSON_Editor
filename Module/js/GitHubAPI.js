// It's a module no UI
xui.Class('Module.GitHubAPI', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:["https://linb.github.io/CrossUI_Assets/thirdparty/octokit-rest.min.js"],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
//            OctkitCDN:"https://linb.github.io/CrossUI_Assets/thirdparty/octokit-rest.min.js"
        },

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
        /*,
        iniResource:function(module, tid){
            xui.Thread.suspend(tid);
            xui.include("Octokit",module.properties.OctkitCDN,function(){
                xui.Thread.resume(tid);
            },function(e){
                xui.Thread.resume(tid);
                xui.alert(e);
                console.log(e);
            });
        }*/
    }
});