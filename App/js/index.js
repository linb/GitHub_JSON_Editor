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
                .setValue("editor"),
                "main"
            );
            
            host.xui_ui_tabs2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_json_txt")
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
                .setHost(host,"xui_json_editor"),
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
                .setHost(host,"xui_btn_save")
                .setDirtyMark(false)
                .setLeft("2.5em")
                .setTop("0.5833333333333334em")
                .setWidth("7.5em")
                .setCaption("Save")
                .setImageClass("xui-uicmd-save")
            );
            
            host.xui_ui_layout4.append(
                xui.create("xui.UI.ToolBar")
                .setHost(host,"xui_tb_files")
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
                .setHost(host,"xui_grid_files")
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
                .setHost(host,"xui_tv_folders")
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
                .setBorderType("none")
                .setBackground("#FFFFFF")
                .setOverflow("hidden")
            );
            
            host.xui_ui_block15.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div26")
                .setHoverPop("xui_lst_usermenu")
                .setTop("0.16666666666666666em")
                .setWidth("auto")
                .setHeight("3.3333333333333335em")
                .setRight("1em")
            );
            
            host.xui_ui_div26.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_avatar")
                .setTop("0.8333333333333334em")
                .setWidth("2.5em")
                .setHeight("2.5em")
                .setPosition("relative")
                .setSrc("{xui.ini.img_pic}")
                .setCustomStyle({
                    "KEY":{
                        "border-radius":"16px 16px 16px 16px"
                    }
                })
            );
            
            host.xui_ui_div26.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelUser")
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
                .setHost(host,"xui_btn_popRepoList")
                .setDirtyMark(false)
                .setClassName("xui-css-can")
                .setLeft("0.6666666666666666em")
                .setTop("0.9333333333333333em")
                .setCaption("Select Repo")
                .setType("drop")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "{page.functions.popRepoSearchBlock}"
                        ],
                        "method":"call",
                        "event":1
                    }
                ])
                .onClickDrop([
                    {
                        "desc":"Action 1",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "{page.functions.popRepoSearchBlock}"
                        ],
                        "method":"call",
                        "event":1
                    }
                ])
                .setCustomStyle({
                    "KEY":{
                        "font-size":"1.25em"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_lst_usermenu")
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
                xui.create("xui.UI.Block")
                .setHost(host,"xui_sel_repo")
                .setLeft("0.8333333333333334em")
                .setTop("3.6666666666666665em")
                .setWidth("21em")
                .setHeight("19.166666666666668em")
                .setShadow(true)
                .setBorderType("flat")
                .setBackground("#FFFFFF")
                .setOverflow("hidden")
            );
            
            host.xui_sel_repo.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_inp_search")
                .setDirtyMark(false)
                .setShowDirtyMark(false)
                .setLeft("0.75em")
                .setTop("0.6666666666666666em")
                .setWidth("19.25em")
                .setDynCheck(true)
                .setLabelSize("5em")
                .setLabelCaption("Search")
                .setType("none")
                .setImageClass("xui-icon-filter")
                .setCommandBtn("delete")
                .onChange([
                    {
                        "desc":"search",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "{page.functions.doSearch}",
                            undefined,
                            undefined,
                            "{1}"
                        ],
                        "method":"call",
                        "timeout":500,
                        "resetid":"searchName"
                    }
                ])
            );
            
            host.xui_sel_repo.append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_lst_repos")
                .setDirtyMark(false)
                .setLeft("0.8333333333333334em")
                .setTop("3.3333333333333335em")
                .setWidth("19.166666666666668em")
                .setHeight("11.666666666666666em")
                .setSelMode("none")
                .setLabelSize("auto")
                .setLabelPos("none")
                .setValue("a")
            );
            
            host.xui_sel_repo.append(
                xui.create("xui.UI.PageBar")
                .setHost(host,"xui_ui_pagebar5")
                .setLeft("0.75em")
                .setTop("15.833333333333334em")
                .setWidth("19.25em")
                .setHeight("2.1666666666666665em")
                .setCaption("")
                .setPageCount(3)
                .onPageSet([
                    {
                        "desc":"busy ui",
                        "type":"other",
                        "target":"msg",
                        "args":[ ],
                        "method":"busy",
                        "okFlag":"_prompt_ok",
                        "koFlag":"_prompt_cancel"
                    },
                    {
                        "desc":"query list",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "{page.functions.doSearch}",
                            undefined,
                            undefined,
                            "{args[1]}"
                        ],
                        "method":"call",
                        "conditions":[
                            {
                                "left":"{args[4]}",
                                "symbol":"!=",
                                "right":"inited"
                            }
                        ]
                    }
                ])
            );
            
            append(
                xui.create("Module.GitHubAPI", "xui.Module")
                .setHost(host,"module_githubapi1")
                .setEvents({
                    "onGithubLogin":[
                        {
                            "desc":"set avatar",
                            "type":"control",
                            "target":"xui_ui_avatar",
                            "args":[
                                { },
                                {
                                    "src":"{args[1]}"
                                }
                            ],
                            "method":"setProperties"
                        },
                        {
                            "desc":"set name",
                            "type":"control",
                            "target":"xui_ui_labelUser",
                            "args":[
                                { },
                                {
                                    "caption":"{args[0]}"
                                }
                            ],
                            "method":"setProperties"
                        },
                        {
                            "desc":"pop repos list",
                            "type":"other",
                            "target":"callback",
                            "args":[
                                "{page.functions.popRepoSearchBlock}"
                            ],
                            "method":"call"
                        }
                    ],
                    "onListGithubRepos":[
                        {
                            "desc":"ensure request",
                            "type":"none",
                            "target":"none",
                            "args":[ ],
                            "method":"none",
                            "conditions":[
                                {
                                    "left":"{args[0]}",
                                    "symbol":"!=",
                                    "right":"forSelectRepo"
                                }
                            ],
                            "return":false
                        },
                        {
                            "desc":"set list",
                            "type":"control",
                            "target":"xui_lst_repos",
                            "args":[
                                "{args[1]}",
                                true,
                                true
                            ],
                            "method":"setItems"
                        },
                        {
                            "desc":"set total",
                            "type":"control",
                            "target":"xui_ui_pagebar5",
                            "args":[
                                "{page.xui_ui_pagebar5.setTotalCount()}",
                                undefined,
                                undefined,
                                "{args[2]}"
                            ],
                            "method":"setTotalCount",
                            "redirection":"other:callback:call"
                        },
                        {
                            "desc":"free ui",
                            "type":"other",
                            "target":"msg",
                            "args":[ ],
                            "method":"free"
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
                    "background-color":"#EEEEEE",
                    "background-image":"none"
                })
                .setActiveStatus({
                    "background-color":"#CCCCCC",
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
        },
        properties:{
            "cur_repo":null,
            "ur_path":null,
            "per_page":null,
            "cur_page":null,
            "json_path":null
        },
        functions:{
            "popRepoSearchBlock":{
                "desc":"pop repo search wnd",
                "params":[ ],
                "actions":[
                    {
                        "desc":"busy ui",
                        "type":"other",
                        "target":"msg",
                        "args":[ ],
                        "method":"busy"
                    },
                    {
                        "desc":"Empty search",
                        "type":"control",
                        "target":"xui_inp_search",
                        "args":[
                            "{page.xui_inp_search.setUIValue()}",
                            "none",
                            "",
                            "{}"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"Empty list",
                        "type":"control",
                        "target":"xui_lst_repos",
                        "args":[ ],
                        "method":"clearItems"
                    },
                    {
                        "desc":"Reset page",
                        "type":"control",
                        "target":"xui_ui_pagebar5",
                        "args":[
                            "{page.xui_ui_pagebar5.setUIValue()}",
                            undefined,
                            undefined,
                            "1:1:1"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"show search wnd",
                        "type":"control",
                        "target":"xui_sel_repo",
                        "args":[
                            "{page.xui_sel_repo.popUp()}",
                            undefined,
                            undefined,
                            "{page.xui_btn_popRepoList}"
                        ],
                        "method":"popUp",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"Request list",
                        "type":"module",
                        "target":"module_githubapi1",
                        "args":[
                            "{page.module_githubapi1.listRepos}",
                            undefined,
                            undefined,
                            "forSelectRepo",
                            "{1}",
                            "{page.xui_ui_pagebar5.getPageCount()}"
                        ],
                        "method":"$Functions.listRepos",
                        "redirection":"other:callback:call"
                    },
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ]
            },
            "doSearch":{
                "desc":"do search",
                "params":[
                    {
                        "id":"page",
                        "type":"Number",
                        "desc":""
                    }
                ],
                "actions":[
                    {
                        "desc":"search",
                        "type":"module",
                        "target":"module_githubapi1",
                        "args":[
                            "{page.module_githubapi1.listRepos}",
                            undefined,
                            undefined,
                            "forSelectRepo",
                            "{args[0]}",
                            "{page.xui_ui_pagebar5.getPageCount()}",
                            "{page.xui_inp_search.getValue()}"
                        ],
                        "method":"$Functions.listRepos",
                        "redirection":"other:callback:call"
                    },
                    null,
                    null
                ]
            }
        }
    }
});