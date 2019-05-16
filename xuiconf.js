
/*Do not modify {// [[*... // ]]*} pattern manually*/

// [[Gobal Code
(function(){
//    //xui.stringify(new Date) => "2017-10-21T12:53:43.522+0800"
//    xui.setDateFormat('gmt');

}());
// ]]Gobal Code


// [[Page Appearance
xui.ini.$PageAppearance = {
//    "theme": "moonify",
//     "background":{
//       "background-color": "#FFFFFF",
//       "background-image": "",
//       "background-repeat": "",
//       "background-position": "",
//       "background-attachment": ""
//    }
};
// ]]Page Appearance

// To set Font Icons CDN
// [[Font Icons CDN
xui.ini.$FontIconsCDN ={
    "fontawesome":{
        "href":"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        "integrity":"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
        "crossorigin":"anonymous",
        "disabled":true
    }
};
// ]]Font Icons CDN

// To set default prop to all xui.UI instances
// [[Default Prop
xui.ini.$DefaultProp={
    "dirtyMark": false,
    "xui.UI.Dialog":{
        "minBtn": false
    }
};
// ]]Default Prop

// [[Global Functions
xui.$cache.functions = {
    "$APICaller:beforeData":{
        "desc":"exception handler",
        "params":[
            {
                "id":"rspData",
                "type":"Hash",
                "desc":""
            }
        ],
        "actions":[
            {
                "desc":"if returns exception",
                "type":"other",
                "target":"msg",
                "args":[
                    "API returns exception",
                    "{args[0].error.message}"
                ],
                "method":"alert",
                "conditions":[
                    {
                        "left":"{args[0].error}",
                        "symbol":"non-empty",
                        "right":""
                    }
                ],
                "timeout":0,
                "onOK":2
            }
        ]
    },
    "$APICaller:onError":{
        "desc":"error handler",
        "params":[
            {
                "id":"rspData",
                "type":"Hash",
                "desc":""
            }
        ],
        "actions":[
            {
                "desc":"if API raises error",
                "type":"other",
                "target":"msg",
                "args":[
                    "API raises error",
                    "{args[0]}"
                ],
                "method":"alert",
                "onOK":2,
                "timeout":0
            }
        ]
    }
};
// ]]Global Functions

// [[Global Data
xui.$cache.data = {
    "$DATE_FORMAT":"gmt"
};
// ]]Global Data


// [[Constant Data
xui.constant = {
};
// ]]Constant Data
