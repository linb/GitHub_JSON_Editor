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
                .setTop("0.5em")
                .setWidth("10em")
                .setHeight("2.3333333333333335em")
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
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div36")
                .setDock("fill")
                .setLeft("30em")
                .setTop("5em")
                .setConDockFlexFill("width")
            );
            
            host.xui_ui_div36.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_div37")
                .setDock("left")
                .setLeft("25.833333333333332em")
                .setTop("11.666666666666666em")
                .setCaption("Advanced")
            );
            
            host.xui_ui_div37.append(
                xui.create("xui.Module.JSONEditor", "xui.Module")
                .setHost(host,"xui_module_jsoneditor4")
                .setEvents({
                    "onchange":[
                        {
                            "desc":"stop set back",
                            "type":"other",
                            "target":"var",
                            "args":[
                                "DontSetBackNow",
                                "{true}"
                            ],
                            "method":"global",
                            "adjust":""
                        },
                        {
                            "desc":"format",
                            "type":"other",
                            "target":"var",
                            "args":[
                                "format",
                                "{args[1]}"
                            ],
                            "method":"temp",
                            "adjust":"{xui.Coder.formatText}"
                        },
                        {
                            "desc":"sync text",
                            "type":"control",
                            "target":"xui_ui_textarea",
                            "args":[
                                "{page.xui_ui_textarea.setUIValue()}",
                                undefined,
                                undefined,
                                "{temp.format}"
                            ],
                            "method":"setUIValue",
                            "redirection":"other:callback:call"
                        },
                        {
                            "desc":"clear the stop",
                            "type":"other",
                            "target":"var",
                            "args":[
                                "DontSetBackNow",
                                "{false}"
                            ],
                            "method":"global",
                            "timeout":0,
                            "resetid":""
                        }
                    ]
                })
            );
            
            host.xui_ui_div36.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_div58")
                .setDock("left")
                .setTop("0.8333333333333334em")
                .setWidth("6em")
                .setCaption("Basic")
                .setBorderType("none")
            );
            
            host.xui_ui_div58.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_textarea")
                .setDirtyMark(false)
                .setDock("fill")
                .setLeft("1.6666666666666667em")
                .setTop("5em")
                .setHeight("10em")
                .setMultiLines(true)
                .onChange([
                    {
                        "desc":"sync editor",
                        "type":"module",
                        "target":"xui_module_jsoneditor4",
                        "args":[
                            "{page.xui_module_jsoneditor4.setValue}",
                            undefined,
                            undefined,
                            "{args[2]}"
                        ],
                        "method":"$Functions.setValue",
                        "redirection":"other:callback:call",
                        "conditions":[
                            {
                                "left":"{global.DontSetBackNow}",
                                "symbol":"!=",
                                "right":"{true}"
                            }
                        ]
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox8")
                .setClassName("xui-css-csj")
                .setNormalStatus({
                    "color":"#222222",
                    "border-radius":"6px",
                    "box-shadow":"inset 0px 1px 0px #ffffff",
                    "text-shadow":"0 1px 0 #ffffff",
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"0%",
                                "clr":"#7fe0f8"
                            },
                            {
                                "pos":"100%",
                                "clr":"#9bf1ff"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    },
                    "cursor":"pointer",
                    "border-top":"solid #9bf1ff 1px",
                    "border-right":"solid #9bf1ff 1px",
                    "border-bottom":"solid #9bf1ff 1px",
                    "border-left":"solid #9bf1ff 1px"
                })
                .setHoverStatus({
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"0%",
                                "clr":"#9bf1ff"
                            },
                            {
                                "pos":"100%",
                                "clr":"#4fd4f5"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    }
                })
                .setActiveStatus({
                    "box-shadow":"inset 0px 1px 2px #239397 ",
                    "background-image":"none",
                    "background-color":"#cef8ff"
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
                        "desc":"set json to txt",
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
                    },
                    {
                        "desc":"set json to eidtor",
                        "type":"module",
                        "target":"xui_module_jsoneditor4",
                        "args":[
                            "{page.xui_module_jsoneditor4.setValue}",
                            undefined,
                            undefined,
                            "{args[1]}"
                        ],
                        "method":"$Functions.setValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"freeUI",
                        "type":"control",
                        "target":"xui_ui_block19",
                        "args":[ ],
                        "method":"free"
                    }
                ]
            },
            "busyUI":{
                "desc":"",
                "params":[ ],
                "actions":[
                    {
                        "desc":"Action 1",
                        "type":"control",
                        "target":"xui_ui_block19",
                        "args":[ ],
                        "method":"busy"
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