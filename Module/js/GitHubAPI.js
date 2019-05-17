// It's a module no UI
xui.Class('Module.GitHubAPI', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:["https://linb.github.io/CrossUI_Assets/thirdparty/octokit-rest.min.js"],
        // To initialize properties
        properties : {
//            OctkitCDN:"https://linb.github.io/CrossUI_Assets/thirdparty/octokit-rest.min.js"
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