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
                        "size":260,
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
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_panel_left")
                .setLeft("9.166666666666666em")
                .setTop("7.5em")
                .setCaption("No Repo seleted")
                .setNoFrame(true)
                .setPopBtn(true)
                .beforePop({
                    "return":"{false}",
                    "actions":[
                        {
                            "desc":"if",
                            "type":"none",
                            "target":"none",
                            "args":[ ],
                            "method":"none",
                            "conditions":[
                                {
                                    "left":"{global.repoName}",
                                    "symbol":"empty",
                                    "right":""
                                }
                            ],
                            "return":false,
                            "event":2
                        },
                        {
                            "desc":"goto github",
                            "type":"other",
                            "target":"url",
                            "args":[
                                "https://github.com/{global.githubUser}/{global.repoName} "
                            ],
                            "method":"open----_blank"
                        }
                    ]
                }),
                "before"
            );
            
            host.xui_panel_left.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"xui_tv_folders")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setSelMode("none")
                .onGetContent([
                    {
                        "desc":"fetchFolderContent",
                        "type":"module",
                        "target":"module_githubapi1",
                        "args":[
                            "{page.module_githubapi1.listFiles}",
                            undefined,
                            undefined,
                            "{args[1].id}",
                            "{global.repoName}",
                            "{args[1].id}",
                            "",
                            "json",
                            undefined,
                            ""
                        ],
                        "method":"$Functions.listFiles",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"set callback",
                        "type":"other",
                        "target":"var",
                        "args":[
                            "treeviewCallback",
                            "{args[2]}"
                        ],
                        "method":"global"
                    }
                ])
                .onItemSelected({
                    "newbies":{
                        "clfjj5fi":"Module.Editor"
                    },
                    "actions":[
                        {
                            "desc":"pick item",
                            "type":"other",
                            "target":"var",
                            "args":[
                                "item",
                                "{args[1]}"
                            ],
                            "method":"temp",
                            "event":2
                        },
                        {
                            "desc":"adjust item",
                            "type":"other",
                            "target":"var",
                            "args":[
                                "item.closeBtn",
                                "{true}"
                            ],
                            "method":"temp",
                            "event":2
                        },
                        {
                            "desc":"add tab",
                            "type":"control",
                            "target":"xui_tabs_json",
                            "args":[
                                "{temp.item}",
                                true,
                                true
                            ],
                            "method":"insertItems",
                            "event":2
                        },
                        {
                            "desc":"active tab",
                            "type":"control",
                            "target":"xui_tabs_json",
                            "args":[
                                "{args[1].id}"
                            ],
                            "method":"setValue"
                        },
                        {
                            "desc":"crete inputmodule",
                            "type":"module",
                            "target":"{temp.newbies.clfjj5fi}",
                            "args":[
                                {
                                    "path":"{args[1].id}",
                                    "sha":"{args[1].sha}"
                                }
                            ],
                            "method":"setProperties"
                        },
                        {
                            "desc":"show mdl",
                            "type":"module",
                            "target":"{temp.newbies.clfjj5fi}",
                            "args":[
                                "{page.xui_tabs_json}",
                                "{args[1].id}"
                            ],
                            "method":"show"
                        },
                        {
                            "desc":"set callback",
                            "type":"other",
                            "target":"callback",
                            "args":[
                                "setJson",
                                "{temp.newbies.clfjj5fi.functions.setjson}"
                            ],
                            "method":"setmp"
                        },
                        {
                            "desc":"to read file",
                            "type":"module",
                            "target":"module_githubapi1",
                            "args":[
                                "{page.module_githubapi1.readFile}",
                                undefined,
                                undefined,
                                "readFile",
                                "{global.repoName}",
                                "{args[1].id}",
                                "{true}",
                                "{temp.setJson}"
                            ],
                            "method":"$Functions.readFile",
                            "redirection":"other:callback:call"
                        }
                    ]
                })
            );
            
            host.xui_panel_left.append(
                xui.create("xui.UI.ToolBar")
                .setHost(host,"xui_tb_files")
                .setItems([
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
                .setTop("7.5em")
                .onClick([
                    {
                        "desc":"refresh",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "{page.functions.refreshRoot}"
                        ],
                        "method":"call",
                        "conditions":[
                            {
                                "left":"{args[1].id}",
                                "symbol":"=",
                                "right":"refresh"
                            }
                        ],
                        "event":3
                    }
                ])
            );
            
            host.xui_ui_layout3.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_tabs_json")
                .setLeft("0em")
                .setTop("0em")
                .setValue("a"),
                "main"
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
                .setCustomStyle({
                    "PANEL":{
                        "$gradient":{
                            "stops":[
                                {
                                    "pos":"0%",
                                    "clr":"#CEF8FF"
                                },
                                {
                                    "pos":"50%",
                                    "clr":"#7FE0F8"
                                },
                                {
                                    "pos":"100%",
                                    "clr":"#9BF1FF"
                                }
                            ],
                            "type":"linear",
                            "orient":"L"
                        }
                    }
                })
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
                xui.create("xui.UI.Span")
                .setHost(host,"xui_ui_span182")
                .setLeft("0.9166666666666666em")
                .setTop("1.5833333333333333em")
                .setHeight("1.6666666666666667em")
                .setHtml("<svg aria-label=\"Repository\" class=\"octicon octicon-repo flex-shrink-0\" viewBox=\"0 0 12 16\" version=\"1.1\" width=\"12\" height=\"16\" role=\"img\"><path fill-rule=\"evenodd\" d=\"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z\"></path></svg>")
            );
            
            host.xui_ui_block15.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1")
                .setDock("center")
                .setTop("0.6666666666666666em")
                .setHeight("2.6666666666666665em")
                .setCaption("<svg class=\"octicon octicon-mark-github v-align-middle\" height=\"28\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"28\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg>   GitHub JSON Editor")
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
                .setLeft("2em")
                .setTop("0.9333333333333333em")
                .setCaption("Select Repo")
                .setType("drop")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "{page.functions.popRepoSearchWnd}"
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
                            "{page.functions.popRepoSearchWnd}"
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
                .setHtml("<div style=\"padding-top:4px;\">\n    <i>\n        \n    Created by&nbsp;\n        <a target=\" _blank\" href=\"https://crossui.com/RADGithub\">\n            CrossUI Web App Builder\n        </a>\n        ,\n    without coding!\n    </i>\n</div>\n")
                .setBorderType("ridge")
                .setCustomStyle({
                    "PANEL":{
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
                .setVisibility("hidden")
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
                            "{page.functions.doRepoSearch}",
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
                .onItemSelected([
                    {
                        "desc":"hide me",
                        "type":"control",
                        "target":"xui_sel_repo",
                        "args":[ ],
                        "method":"hide",
                        "event":2
                    },
                    {
                        "desc":"load repo layer 1",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "{page.functions.loadRootFiles}",
                            undefined,
                            undefined,
                            "{args[1].id}"
                        ],
                        "method":"call"
                    }
                ])
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
                            "{page.functions.doRepoSearch}",
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
                            "desc":"set name to global",
                            "type":"other",
                            "target":"var",
                            "args":[
                                "githubUser",
                                "{args[0]}"
                            ],
                            "method":"global"
                        },
                        {
                            "desc":"pop repos list",
                            "type":"other",
                            "target":"callback",
                            "args":[
                                "{page.functions.popRepoSearchWnd}"
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
                                "{page.xui_lst_repos.setItems()}",
                                "none",
                                "true",
                                "{args[1]}"
                            ],
                            "method":"setItems",
                            "redirection":"other:callback:call"
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
                    ],
                    "onListGithubFiles":[
                        {
                            "desc":"fill root",
                            "type":"control",
                            "target":"xui_tv_folders",
                            "args":[
                                "{page.xui_tv_folders.setItems()}",
                                "{args[1]}",
                                "",
                                "{args[1]}"
                            ],
                            "method":"setItems",
                            "redirection":"other:callback:call",
                            "conditions":[
                                {
                                    "left":"{args[0]}",
                                    "symbol":"=",
                                    "right":"fetchRoot"
                                }
                            ]
                        },
                        {
                            "desc":"fill sub",
                            "type":"other",
                            "target":"callback",
                            "args":[
                                "{global.treeviewCallback}",
                                undefined,
                                undefined,
                                "{args[1]}"
                            ],
                            "method":"call"
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
            ],
            "onGlobalMessage":{
                "newbies":{ },
                "actions":[
                    {
                        "desc":"set callback",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "freeUI",
                            "{xui.free}"
                        ],
                        "method":"setmp"
                    },
                    {
                        "desc":"save",
                        "type":"module",
                        "target":"module_githubapi1",
                        "args":[
                            "{page.module_githubapi1.updateFile}",
                            undefined,
                            undefined,
                            "{args[0]}",
                            "{global.repoName}",
                            "{args[1]}",
                            "{args[2]}",
                            "{args[3]}",
                            "{true}",
                            "{temp.freeUI}",
                            "{temp.freeUI}"
                        ],
                        "method":"$Functions.updateFile",
                        "conditions":[
                            {
                                "left":"{args[0]}",
                                "symbol":"=",
                                "right":"saveFile"
                            }
                        ],
                        "redirection":"other:callback:call"
                    }
                ]
            }
        },
        properties:{
            "cur_repo":null,
            "ur_path":null,
            "per_page":null,
            "cur_page":null,
            "json_path":null
        },
        functions:{
            "popRepoSearchWnd":{
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
                    }
                ]
            },
            "doRepoSearch":{
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
                    }
                ]
            },
            "loadRootFiles":{
                "desc":"load root files",
                "params":[
                    {
                        "id":"repoName",
                        "type":"String",
                        "desc":""
                    },
                    {
                        "id":"parentPath",
                        "type":"String",
                        "desc":""
                    }
                ],
                "actions":[
                    {
                        "desc":"set caption",
                        "type":"control",
                        "target":"xui_panel_left",
                        "args":[
                            "{page.xui_panel_left.setCaption()}",
                            undefined,
                            undefined,
                            "Repo: {args[0]}"
                        ],
                        "method":"setCaption",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"set var to global",
                        "type":"other",
                        "target":"var",
                        "args":[
                            "repoName",
                            "{args[0]}"
                        ],
                        "method":"global"
                    },
                    {
                        "desc":"fetchFiles",
                        "type":"module",
                        "target":"module_githubapi1",
                        "args":[
                            "{page.module_githubapi1.listFiles}",
                            undefined,
                            undefined,
                            "fetchRoot",
                            "{global.repoName}",
                            undefined,
                            "all",
                            "json"
                        ],
                        "method":"$Functions.listFiles",
                        "redirection":"other:callback:call"
                    }
                ]
            },
            "refreshRoot":{
                "desc":"refresh root files",
                 "params":[ ],
                "actions":[
                    {
                        "desc":"fetchFiles",
                        "type":"module",
                        "target":"module_githubapi1",
                        "args":[
                            "{page.module_githubapi1.listFiles}",
                            undefined,
                            undefined,
                            "fetchRoot",
                            "{global.repoName}",
                            undefined,
                            "all",
                            "json"
                        ],
                        "method":"$Functions.listFiles",
                        "redirection":"other:callback:call"
                    }
                ]
            }
        }
    }
});