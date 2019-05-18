xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"xui_ui_layout3")
                .setItems([
                    {
                        "id":"before",
                        "size":200,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":true,
                        "pos":"before"
                    },
                    {
                        "id":"main",
                        "size":80,
                        "min":10
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setType("horizontal")
            );
            
            host.xui_ui_layout3.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"xui_ui_layout4")
                .setItems([
                    {
                        "id":"before",
                        "size":220,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":true,
                        "pos":"before"
                    },
                    {
                        "id":"main",
                        "size":80,
                        "min":10
                    }
                ])
                .setLeft("0em")
                .setTop("0em"),
                "main"
            );
            
            host.xui_ui_layout4.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs2")
                .setItems([
                    {
                        "id":"code",
                        "caption":"JSON Code"
                    },
                    {
                        "id":"editor",
                        "caption":"JSON Editor"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("code"),
                "main"
            );
            
            host.xui_ui_tabs2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1")
                .setDirtyMark(false)
                .setDock("fill")
                .setLeft("5em")
                .setTop("4.166666666666667em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("8em")
                .setLabelPos("none")
                .setLabelCaption("多行输入框")
                .setMultiLines(true),
                "code"
            );
            
            host.xui_ui_tabs2.append(
                xui.create("xui.Module.JSONEditor", "xui.Module")
                .setHost(host,"xui_module_jsoneditor2"),
                "editor"
            );
            
            host.xui_ui_layout4.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block8")
                .setDock("bottom")
                .setLeft("28.333333333333332em")
                .setTop("0em")
                .setHeight("3.3333333333333335em"),
                "main"
            );
            
            host.xui_ui_block8.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button23")
                .setDirtyMark(false)
                .setLeft("2.5em")
                .setTop("0.5833333333333334em")
                .setWidth("7.5em")
                .setCaption("Save")
                .setImageClass("xui-uicmd-save")
            );
            
            host.xui_ui_layout4.append(
                xui.create("xui.UI.ToolBar")
                .setHost(host,"xui_ui_toolbar5")
                .setItems([
                    {
                        "id":"grp1",
                        "sub":[
                            {
                                "id":"new",
                                "caption":"New",
                                "imageClass":"xui-icon-file"
                            },
                            {
                                "id":"delete",
                                "caption":"Delete",
                                "imageClass":"xui-uicmd-close"
                            }
                        ],
                        "caption":"grp1"
                    },
                    {
                        "id":"grp2",
                        "sub":[
                            {
                                "id":"refresh",
                                "caption":"Refresh",
                                "imageClass":"xui-uicmd-refresh"
                            }
                        ],
                        "caption":"grp2"
                    }
                ])
                .setTop("7.5em"),
                "before"
            );
            
            host.xui_ui_layout4.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"xui_ui_treegrid22")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setRowNumbered(true)
                .setGridHandlerCaption("No.")
                .setRowHandlerWidth("2em")
                .setHeader([
                    {
                        "id":"name",
                        "caption":"File Name",
                        "type":"label",
                        "flexSize":true,
                        "width":"8em"
                    },
                    {
                        "id":"url",
                        "caption":"URL",
                        "type":"label",
                        "width":"24em"
                    },
                    {
                        "id":"size",
                        "caption":"Size",
                        "type":"label",
                        "width":"8em"
                    }
                ])
                .setTreeMode("none"),
                "before"
            );
            
            host.xui_ui_layout3.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"xui_ui_treeview1")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em"),
                "before"
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block15")
                .setDock("top")
                .setLeft("15.833333333333334em")
                .setTop("0em")
                .setHeight("4.166666666666667em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_block15.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div26")
                .setHoverPop("xui_ui_list39")
                .setTop("0.16666666666666666em")
                .setWidth("auto")
                .setHeight("3.3333333333333335em")
                .setRight("1em")
            );
            
            host.xui_ui_div26.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image5")
                .setTop("0.8333333333333334em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                .setPosition("relative")
                .setSrc("{xui.ini.img_pic}")
            );
            
            host.xui_ui_div26.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label2")
                .setTop("1em")
                .setTabindex(2)
                .setPosition("relative")
                .setCaption("User")
                .setFontSize("1.5em")
                .setCustomStyle({
                    "KEY":{
                        "margin":"0px 0px 0px 8px"
                    }
                })
            );
            
            host.xui_ui_div26.append(
                xui.create("xui.UI.Icon")
                .setHost(host,"xui_ui_icon3")
                .setTop("1.0833333333333333em")
                .setTabindex(3)
                .setPosition("relative")
                .setImageClass("xui-uicmd-arrowdrop")
            );
            
            host.xui_ui_block15.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1")
                .setDock("center")
                .setLeft("26.583333333333332em")
                .setTop("0.8333333333333334em")
                .setHeight("2.5em")
                .setCaption("GitHub JSON Editor")
                .setHAlign("left")
                .setFontSize("2em")
                .setFontFamily("comic sans ms,cursive")
                .setCustomStyle({
                    "KEY":{ }
                })
            );
            
            host.xui_ui_block15.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button46")
                .setDirtyMark(false)
                .setClassName("xui-css-can")
                .setLeft("0.6666666666666666em")
                .setTop("0.9333333333333333em")
                .setCaption("Repo 1")
                .setType("drop")
                .setCustomStyle({
                    "KEY":{
                        "font-size":"1.25em"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_ui_list39")
                .setDirtyMark(false)
                .setItems([
                    {
                        "id":"logout",
                        "caption":"Log out",
                        "imageClass":"xui-icon-back"
                    }
                ])
                .setLeft("50em")
                .setTop("3.3333333333333335em")
                .setWidth("15.833333333333334em")
                .setHeight("3.3333333333333335em")
                .setDisplay("none")
                .setSelMode("none")
                .setLabelSize("8.333333333333334em")
                .setLabelPos("none")
                .setCustomStyle({
                    "ITEM":{
                        "font-family":"arial black,avant garde",
                        "font-size":"1.5em"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block16")
                .setDock("bottom")
                .setLeft("15.833333333333334em")
                .setTop("49.166666666666664em")
                .setHeight("2.1666666666666665em")
                .setHtml("<i>\n    Created by&nbsp;\n    <a target=\"_blank\" href=\"https://crossui.com/RADGithub\">\n        CrossUI Web App Builder\n    </a>&nbsp;&nbsp;&nbsp;&nbsp;\n</i>\n")
                .setBorderType("ridge")
                .setCustomStyle({
                    "PANEL":{
                        "padding":"4px",
                        "text-align":"right"
                    }
                })
            );
            
            append(
                xui.create("Module.GitHubAPI", "xui.Module")
                .setHost(host,"module_githubapi1")
                .setEvents({
                    "onGithubLogin":[
                        {
                            "desc":"动作 1",
                            "type":"other",
                            "target":"msg",
                            "args":[
                                "{args[0]}",
                                "{args[1]}",
                                "{args[2]}"
                            ],
                            "method":"log"
                        }
                    ]
                })
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox1")
                .setClassName("xui-css-can")
                .setNormalStatus({
                    "color":"#222222",
                    "background-color":"transparent",
                    "background-image":"none",
                    "border-top":"none",
                    "border-right":"none",
                    "border-bottom":"none",
                    "border-left":"none",
                    "border-radius":"6px",
                    "text-shadow":"0 -1px 0 #ffffff",
                    "box-shadow":"none",
                    "cursor":"pointer"
                })
                .setHoverStatus({
                    "background-color":"#cccccc",
                    "background-image":"none"
                })
                .setActiveStatus({
                    "background-color":"#999",
                    "background-image":"none"
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        customAppend : function(parent, subId, left, top){
            return false;
        },
        events:{
            "onRender":[
                {
                    "desc":"action 1",
                    "type":"module",
                    "target":"module_githubapi1",
                    "args":[
                        "{page.module_githubapi1.ensureGithubAuth}"
                    ],
                    "method":"$Functions.ensureGithubAuth",
                    "redirection":"other:callback:call"
                }
            ]
        }
    }
});