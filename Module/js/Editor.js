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
                .setHost(host,"xui_ui_textarea")
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
            
            host.xui_ui_block19.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_save")
                .setLeft("1.6666666666666667em")
                .setTop("0.6666666666666666em")
                .setWidth("10em")
                .setCaption("Save")
                .onClick({
                    "newbies":{ },
                    "actions":[
                        {
                            "desc":"get json",
                            "type":"control",
                            "target":"xui_ui_textarea",
                            "args":[
                                "{page.xui_ui_textarea.getUIValue()}",
                                "temp",
                                "json"
                            ],
                            "method":"getUIValue",
                            "redirection":"other:callback:call",
                            "event":1
                        },
                        {
                            "desc":"post msg",
                            "type":"other",
                            "target":"msg",
                            "args":[
                                "{xui.broadcast()}",
                                "none",
                                "",
                                "saveFile",
                                "{page.properties.path}",
                                "{page.properties.sha}",
                                "{temp.json}"
                            ],
                            "method":"gbroadcast",
                            "redirection":"other:callback:call"
                        },
                        {
                            "desc":"busy UI",
                            "type":"other",
                            "target":"msg",
                            "args":[ ],
                            "method":"busy"
                        }
                    ]
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        functions:{
            "setjson":{
                "desc":"",
                "params":[
                    {
                        "id":"id",
                        "type":"String",
                        "desc":""
                    },
                    {
                        "id":"json",
                        "type":"String",
                        "desc":""
                    }
                ],
                "actions":[
                    {
                        "desc":"fomat",
                        "type":"other",
                        "target":"var",
                        "args":[
                            "json",
                            "{args[1]}"
                        ],
                        "method":"temp",
                        "adjust":"{xui.Coder.formatText}"
                    },
                    {
                        "desc":"set json",
                        "type":"control",
                        "target":"xui_ui_textarea",
                        "args":[
                            "{page.xui_ui_textarea.setUIValue()}",
                            undefined,
                            undefined,
                            "{temp.json}"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    }
                ]
            }
        },
            events:{
                "onGlobalMessage":{
                    "newbies":{ },
                        "actions":[
                            {
                                "desc":"refresh sha",
                                "type":"other",
                                "target":"var",
                                "args":[
                                    "sha",
                                    "{args[1]}"
                                ],
                                "method":"page.properties",
                                "conditions":[
                                    {
                                        "left":"{args[0]}",
                                        "symbol":"=",
                                        "right":"{page.properties.path}"
                                    }
                                ]
                            }
                        ]
                }
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