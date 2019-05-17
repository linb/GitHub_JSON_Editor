// It's a module no UI
xui.Class('Module.GitHubAPI', 'xui.Module',{
    Instance:{
        // Dependency classes
        Required:["https://linb.github.io/CrossUI_Assets/thirdparty/octokit-rest.min.js"],
        // To initialize properties
        properties : {
//            OctkitCDN:"https://linb.github.io/CrossUI_Assets/thirdparty/octokit-rest.min.js"
        },
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label13")
                .setLeft("10.833333333333334em")
                .setTop("8.333333333333334em")
                .setCaption("标 签")
            );

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