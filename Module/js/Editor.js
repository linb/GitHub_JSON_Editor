// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support Dependencies, and those async functions
xui.Class('Module.Editor', 'xui.Module',{
    Instance:{
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1")
                .setDirtyMark(false)
                .setDock("fill")
                .setLeft("5.833333333333333em")
                .setTop("2.5em")
                .setWidth("18em")
                .setHeight("10em")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block19")
                .setDock("bottom")
                .setLeft("14.166666666666666em")
                .setTop("25em")
                .setHeight("3.3333333333333335em")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        // To determine how properties affects this module
        propSetAction : function(prop){
        }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        },
        $Functions:{
        }
    }
});