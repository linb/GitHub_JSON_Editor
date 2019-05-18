// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.RepoSelector', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"xui_ui_dialog24")
                .setLeft("20.833333333333332em")
                .setTop("3.3333333333333335em")
                .setWidth("18.333333333333332em")
                .setHeight("29.166666666666668em")
                .setCaption("Select a repo")
                .setMinBtn(false)
                .setMaxBtn(false)
                .setRestoreBtn(false)
                .setCloseBtn(false)
            );
            
            host.xui_ui_dialog24.append(
                xui.create("xui.Module.PageGrid", "xui.Module")
                .setHost(host,"xui_module_pagegrid1")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    }
});