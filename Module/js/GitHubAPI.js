// It's a module no UI
xui.Class('Module.GitHubAPI', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            OctkitCDN:"https://linb.github.io/CrossUI_Assets/thirdparty/octokit-rest.min.js"
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
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        iniResource:function(module, tid){
            xui.Thread.suspend(tid);
            xui.include("Octokit",module.properties.OctkitCDN,function(){
                xui.Thread.resume(tid);
            },function(e){
                xui.Thread.resume(tid);
                xui.alert(e);
                console.log(e);
            });
        }
    }
});