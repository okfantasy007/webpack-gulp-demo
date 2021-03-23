var ALL_CONFIG = {
    'mock': {
        'get_assets_information_config': {
            'method': 'post',
            'url': 'https://crm-zendesk.wondershare.cc/api/v1/embeddable/latest/assets?',
            'key_str': true
        },
        'zendesk_web_sdk_path': 'https://crm-static.wondershare.cc/chatbot/latest/assets/web_sdk.js',
        'zendesk_account_key': 'NXQiW4RKtSmIUxNJJ9NQQfFPB2ne5skk',
        'jquery_js_path': 'https://crm-static.wondershare.cc/chatbot/latest/static/js/jquery-3.3.1.min.js',
        'swiper_js_path': 'https://crm-static.wondershare.cc/chatbot/latest/static/js/swiper-bundle.min.js',
        'swiper_css_path': 'https://crm-static.wondershare.cc/chatbot/latest/static/css/swiper-bundle.css',
        'is_mock': true
    },
    'test': {
        'get_assets_information_config': {
            'method': 'post',
            'url': 'http://crm-zendesk.wondershare.cc/api/v1/embeddable/latest/assets?',
            'key_str': true
        },
        'jquery_js_path': 'https://crm-static.wondershare.cc/chatbot/latest/static/js/jquery-3.3.1.min.js',
        'swiper_js_path': 'https://crm-static.wondershare.cc/chatbot/latest/static/js/swiper-bundle.min.js',
        'swiper_css_path': 'https://crm-static.wondershare.cc/chatbot/latest/static/css/swiper-bundle.css',
        'zendesk_web_sdk_path': 'https://crm-static.wondershare.cc/chatbot/latest/assets/web_sdk.js',
        'zendesk_account_key': 'NXQiW4RKtSmIUxNJJ9NQQfFPB2ne5skk',
        'is_mock': true
    },
    'production': {
        'get_assets_information_config': {
            'method': 'post',
            'url': 'https://crm-zendesk.wondershare.cc/api/v1/embeddable/latest/assets?',
            'key_str': true
        },
        'jquery_js_path': 'https://crm-static.wondershare.cc/chatbot/latest/static/js/jquery-3.3.1.min.js',
        'swiper_js_path': 'https://crm-static.wondershare.cc/chatbot/latest/static/js/swiper-bundle.min.js',
        'swiper_css_path': 'https://crm-static.wondershare.cc/chatbot/latest/static/css/swiper-bundle.css',
        'zendesk_web_sdk_path': 'https://crm-static.wondershare.cc/chatbot/latest/assets/web_sdk.js',
        'zendesk_account_key': 'aUDWsxKk3WGIkX4o4mIzeGVtl8BM565F',
        'is_mock': false
    }
};

var config = ALL_CONFIG.mock;

function isIPhoneWxMobileDevice() { //is iphone mobile weixin?
    // MicroMessenger
    if (window.navigator.userAgent && window.navigator.userAgent.indexOf("iPhone") !== -1 && window.navigator.userAgent.indexOf("Mobile") !== -1 && window.navigator.userAgent.indexOf("MicroMessenger") !== -1) {
        return true;
    } else {
        return false;
    }
}

function isIE() { //ie?
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        return true;
    } else {
        return false;
    }
}

function isEdge() { //edge?
    if (!isIE() && window.navigator.userAgent && window.navigator.userAgent.indexOf("Edge") !== -1) {
        return true;
    } else {
        return false;
    }
}

if (isIE()) {
    String.prototype.startsWith = function (str) {
        if (str == null || str == "" || this.length == 0 || str.length > this.length)
            return false;
        if (this.substr(0, str.length) == str)
            return true;
        else
            return false;
        return true;
    };
    String.prototype.endsWith = function (str) {
        if (str == null || str == "" || this.length == 0 || str.length > this.length)
            return false;
        if (this.substring(this.length - str.length) == str)
            return true;
        else
            return false;
        return true;
    };
    //重写split 用于解决IE7，IE8，IE9的split的兼容性（panda-2016-06-16）
    var split;

    split = split || function (undef) {

        var nativeSplit = String.prototype.split,
            compliantExecNpcg = /()??/.exec("")[1] === undef,
            self;

        self = function (str, separator, limit) {
            if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
                return nativeSplit.call(str, separator, limit);
            }
            var output = [],
                flags = (separator.ignoreCase ? "i" : "") +
                    (separator.multiline ? "m" : "") +
                    (separator.extended ? "x" : "") + // Proposed for ES6
                    (separator.sticky ? "y" : ""), // Firefox 3+
                lastLastIndex = 0,
                separator = new RegExp(separator.source, flags + "g"),
                separator2, match, lastIndex, lastLength;
            str += "";
            if (!compliantExecNpcg) {
                separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
            }
            limit = limit === undef ?
                -1 >>> 0 : // Math.pow(2, 32) - 1
                limit >>> 0; // ToUint32(limit)
            while (match = separator.exec(str)) {
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    output.push(str.slice(lastLastIndex, match.index));
                    if (!compliantExecNpcg && match.length > 1) {
                        match[0].replace(separator2, function () {
                            for (var i = 1; i < arguments.length - 2; i++) {
                                if (arguments[i] === undef) {
                                    match[i] = undef;
                                }
                            }
                        });
                    }
                    if (match.length > 1 && match.index < str.length) {
                        Array.prototype.push.apply(output, match.slice(1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= limit) {
                        break;
                    }
                }
                if (separator.lastIndex === match.index) {
                    separator.lastIndex++;
                }
            }
            if (lastLastIndex === str.length) {
                if (lastLength || !separator.test("")) {
                    output.push("");
                }
            } else {
                output.push(str.slice(lastLastIndex));
            }
            return output.length > limit ? output.slice(0, limit) : output;
        };
        String.prototype.split = function (separator, limit) {
            return self(this, separator, limit);
        };

        return self;

    }();
}

function httpRequest(obj, successfun, errFun) {
    var xmlHttp = null;
    //创建 XMLHttpRequest 对象，老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象：xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")
    if (window.XMLHttpRequest) {
        //code for all new browsers
        xmlHttp = new XMLHttpRequest;
    } else if (window.ActiveXObject) {
        //code for IE5 and IE6
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //判断是否支持请求
    if (xmlHttp == null) {
        alert('浏览器不支持xmlHttp');
        return;
    }
    //请求方式， 转换为大写
    var httpMethod = (obj.method || 'Get').toUpperCase();
    //数据类型
    var httpDataType = obj.dataType || 'json';
    //url
    var httpUrl = obj.url || '';
    //异步请求
    var async = true;
    //post请求时参数处理
    if (httpMethod == 'POST') {
        //请求体中的参数 post请求参数格式为：param1=test&param2=test2
        var data = obj.data || {};
        var requestData = '';
        for (var key in data) {
            requestData = requestData + key + '=' + data[key] + '&';
        }
        if (requestData == '') {
            requestData = '';
        } else {
            requestData = requestData.subString(0, requestData.length - 1);
        }
        // console.log(requestData);
    }
    //onreadystatechange 是一个事件句柄。它的值 (state_Change) 是一个函数的名称，当 XMLHttpRequest 对象的状态发生改变时，会触发此函数。状态从 0 (uninitialized) 到 4 (complete) 进行变化。仅在状态为 4 时，我们才执行代码
    xmlHttp.onreadystatechange = function () {
        //complete
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
                //请求成功执行的回调函数
                successfun(xmlHttp.responseText);
            } else {
                //请求失败的回调函数
                errFun();
            }
        }
    }
    //请求接口
    if (httpMethod == 'GET') {
        xmlHttp.open('GET', httpUrl, async);
        xmlHttp.send(null);
    } else if (httpMethod == 'POST') {
        xmlHttp.open('POST', httpUrl, async);
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xmlHttp.send(requestData);
    }
}

function GetQueryString(name, str) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(str) || ['', ''])[1].replace(/\+/g, '%20')) || null;
}

function handleLanguage(language) {
    var res = language;
    if (language.indexOf("-")) {
        var langArr = language.split("-");
        if (langArr && langArr.length === 2 && langArr[0] && /^[A-Za-z]+$/.test(langArr[0]) && langArr[1] && /^[A-Za-z]+$/.test(langArr[1])) {
            res = langArr[0] + "-" + langArr[1].toUpperCase();
        }
    }
    return res;
}

function getCurrentHtmlParamsObj() {
    var result = {
        user_name: "",
        email: "",
        product: "",
        language: "",
        client_auto_pop: ""
    };
    var url = window.location.href;
    var user_name = GetQueryString('user_name', url);
    var email = GetQueryString('email', url);
    var product = GetQueryString('product', url);
    var language = GetQueryString('language', url);
    var client_auto_pop = GetQueryString('client_auto_pop', url);
    if (user_name) {
        result.user_name = user_name;
    }
    if (email) {
        result.email = email;
    }
    if (product) {
        result.product = product;
    }
    if (language) {
        result.language = handleLanguage(language);
    }
    if (client_auto_pop) {
        result.client_auto_pop = client_auto_pop;
    }
    // 从html参数中获取对应字段并组装
    return result;
}

function getClientAutoPop() {
    var url = window.location.href;
    return GetQueryString('client_auto_pop', url);
}

function getCurrentScript() {
    var script = null, scripts;

    // firefox支持currentScript属性
    // 在该过程中，如果script没有async属性，需要加async属性
    if (document.currentScript) {
        script = document.currentScript;
        var async = script.hasAttribute ? script.async : script.getAttribute('async');
        if (async !== true) {
            script.setAttribute('async',true);
        }
    } else {
        // IE浏览器获取当前script兼容
        scripts = document.getElementsByTagName('script');
        if(scripts && scripts.length > 0) {
            for (var si = 0; si < scripts.length; si++) {
                var s = scripts[si];
                var r = s.hasAttribute ? s.src : s.getAttribute('src');
                if (r.indexOf("snippet") > -1 && r.indexOf("?key=") > -1) {
                    var async = s.hasAttribute ? s.src : s.getAttribute('async');
                    if (async !== true) {
                        s.setAttribute('async',true);
                    }
                    script = s;
                    break;
                }
            }
        }
    }
    return script;

}

function getCurrentScriptKey() {
    var result = null;
    var script = getCurrentScript();

    var resultStr = script.hasAttribute ? script.src : script.getAttribute('src');
    if (resultStr && GetQueryString('key', resultStr)) {
        result = 'key=' + GetQueryString('key', resultStr);
    }

    return result;
}

function getMobilePreviewAtrribute() {
    var result = null;
    var script = getCurrentScript();

    result = script.getAttribute('mobile_preview');
    if (result === "true") {
        window.mobile_preview = "true";
    }
    return result;
}

function setWxAutoPopAtrributeToWindow() {
    var result = null;
    var script = getCurrentScript();

    result = script.getAttribute('wx_auto_pop');
    if (result === "true") {
        window.wx_auto_pop = "true";
    }
    return result;
}

function getAssetsData() {
    var res =
        {
            "code": 0,
            "msg": "success",
            "data": {
                "product": {
                    "client_id": "a22b77e3-7e2b-c653-045c-283ce7f02662",
                    "features": {
                        "chat": "57ce3369-01b5-ad4e-1dde-be4d6aeeb7b2"
                    }
                },
                "assets": {
                    "json": [
                        {
                            "src": "/chatbot/v1.10.08/static/json/manifest.json",
                            "param": ""
                        }
                    ],
                    "script": [
                        {
                            "src": "/chatbot/v1.10.08/static/js/main.c403ebdc.chunk.js",
                            "param": ""
                        },
                        {
                            "src": "/chatbot/v1.10.08/static/js/2.3efd6201.chunk.js",
                            "param": ""
                        },
                        {
                            "src": "/chatbot/latest/assets/solid.js",
                            "param": ""
                        }
                    ],
                    "style": [
                        {
                            "src": "/chatbot/v1.10.08/static/css/main.41c065fb.chunk.css",
                            "param": ""
                        },
                        {
                            "src": "/chatbot/v1.10.08/static/css/2.6eedd483.chunk.css",
                            "param": ""
                        }
                    ]
                },
                "information": {
                    "name": "test nomaral0706",
                    "display_name": "Wondershare Customer Service",
                    "type": 2,
                    "language": "en",
                    "skip": "跳一跳，皮一下很开心！http://crm-web.wondershare.comhttp://cr",
                    "product_choose_tip": "请选择产品呀",
                    "default_theme": "",
                    "theme": "#4b4b4b",
                    "mobile_theme": "#4b4b4b",
                    "show_chatbot": 1,
                    "mobile_show_chatbot": 1,
                    "chatbot_icon": "http://img2.imgtn.bdimg.com/it/u=2076373339,2173673275&fm=26&gp=0.jpg",
                    "mobile_chatbot_icon": "http://img2.imgtn.bdimg.com/it/u=2076373339,2173673275&fm=26&gp=0.jpg",
                    "button_text": "Contact",
                    "banner": {
                        "title": "亲亲亲亲，你好",
                        "sub_title": "Wonshare will be happy to see 你"
                    },
                    "notice": {
                        "show_notice": 1,
                        "mobile_show_notice": 0,
                        "title": "你好",
                        "mobile_title": "hello  world",
                        "sub_title": "hi,we are happy to help 你",
                        "mobile_sub_title": "hi~",
                        "link_url": "",
                        "link_type": 0,
                        "mobile_is_show_notice": 1
                    },
                    "launcher": {
                        "text": "",
                        "mobile_text": "",
                        "type": "",
                        "icon": ""
                    },
                    "guide": {
                        "title": "",
                        "sub_title": "",
                        "normal_tips": "",
                        "sub_tips": "",
                        "empty_tips": "",
                        "error_tips": ""
                    },
                    "email": {
                        "email_required": 1,
                        "email_verify": 2,
                        "input_tips": "Leave your 邮箱",
                        "input_placeholder": "Enter your 邮箱",
                        "emty_tip": "邮箱 can not be empty",
                        "format_error_tip": "邮箱 format is not correct"
                    },
                    "chat_interface": {
                        "pre_title": "Wondershare welcome",
                        "title": "",
                        "sub_title": "",
                        "menu_text": "",
                        "menu_icon": "",
                        "message_button_tips": "",
                        "input_empty_tips": "",
                        "input_error_tips": ""
                    },
                    "custom_form": {

                    },
                    "custom_guide": [
                        {
                            "access_context": "Artificial Intelligence",
                            "access_name": "产品一",
                            "access_type": 1,
                            "auth_id": "1127053836663828543",
                            "contact_text": "",
                            "display_name": "产品一",
                            "guide_type": 1,
                            "page_title": "",
                            "sort": 0,
                            "online_service_config": {
                                "im_type": 0,
                                "language": "zh-cn",
                                "send_text": "",
                                "zendesk_form_empty_tip": "",
                                "zendesk_form_format_tip": "",
                                "zendesk_group_id": 0,
                                "offline_show_type": 0,
                                "offline_text": "",
                                "zendesk_support_form_show": 2,
                                "zendesk_support_form_id": 0,
                                "zendesk_prechat_form_show": 2,
                                "zendesk_prechat_form_id": 0,
                                "pre_chat_form_config": null,
                                "offline_form_config": null,
                                "week_text": null,
                                "intercom_id": "",
                                "online_translate_config": {
                                    "chat_message_placeholder": "消息输入框：输入消息",
                                    "chat_network_broke_down": "网络断开提示：网络好像有问题",
                                    "chat_network_try_again": "网络重试按钮：可以点这里试试"
                                },
                                "chatbot_unique_key": "03c824b4-52bf-2b84-35f3-03955a04625f",
                                "access_context": "Artificial Intelligence"
                            },
                            "children": [

                            ]
                        },
                        {
                            "access_context": "Artificial Intelligence",
                            "access_name": "产品二",
                            "access_type": 1,
                            "auth_id": "1127053836672217147",
                            "contact_text": "",
                            "display_name": "产品二",
                            "guide_type": 1,
                            "page_title": "",
                            "sort": 1,
                            "online_service_config": {
                                "im_type": 1,
                                "language": "zh-cn",
                                "send_text": "发送按钮：点这里发送",
                                "zendesk_form_empty_tip": "表单不为空提示：这里不能为空",
                                "zendesk_form_format_tip": "输入有误",
                                "zendesk_group_id": 2147719843,
                                "offline_show_type": 2,
                                "offline_text": "hi阿斯蒂芬",
                                "zendesk_support_form_show": 1,
                                "zendesk_support_form_id": 900000064406,
                                "zendesk_prechat_form_show": 1,
                                "zendesk_prechat_form_id": 900000064406,
                                "pre_chat_form_config": [
                                    {
                                        "name": "Prechat文本配置名字",
                                        "required": 2,
                                        "type": "text"
                                    },
                                    {
                                        "name": "Prechat文本配置邮箱",
                                        "required": 2,
                                        "visible": 2,
                                        "type": "email"
                                    },
                                    {
                                        "name": "Prechat文本配置message",
                                        "required": 2,
                                        "type": "textarea"
                                    }
                                ],
                                "offline_form_config": [
                                    {
                                        "name": "离线表单文本名字",
                                        "required": 2,
                                        "type": "text"
                                    },
                                    {
                                        "name": "离线表单文本邮箱",
                                        "required": 1,
                                        "type": "email"
                                    }
                                ],
                                "week_text": [
                                    "星期7",
                                    "星期1",
                                    "星期2",
                                    "星期3",
                                    "星期4",
                                    "星期5",
                                    "星期6"
                                ],
                                "intercom_id": "",
                                "online_translate_config": {
                                    "chat_message_placeholder": "消息输入框：请输入",
                                    "chat_network_broke_down": "网络断开提示：网络开小差了",
                                    "chat_network_try_again": "网络重试按钮：点这里试试",
                                    "chat_start": "开始聊天啦",
                                    "chat_member_join": "现在已经加入聊天",
                                    "chat_visitor_text": "访客",
                                    "chat_member_leave": "离开聊天",
                                    "chat_position": "正在队列",
                                    "chat_rate_button": "评价这个聊天",
                                    "chat_rate_title": "请评价这个聊天",
                                    "chat_rate_message": "留下你的评论",
                                    "chat_rate_skip_button": "取消",
                                    "chat_rate_send_button": "发送",
                                    "chat_end": "结束",
                                    "chat_rate_submitted": "评论提交",
                                    "chat_rate_good_title": "评价好标题",
                                    "chat_rate_bad_title": "评价差标题",
                                    "chat_rated_good": "非常好",
                                    "chat_rated_bad": "不好",
                                    "chat_online_top_title": "在线上标题",
                                    "chat_offline_top_title": "离线顶端标题",
                                    "chat_away_top_title": "离开顶端标题：离开没有广告",
                                    "chat_form_submit_success": "提交成功",
                                    "chat_form_another_send_button": "重新再提交一次",
                                    "file_upload_not_supported": "文件不支持",
                                    "file_upload_not_allowed": "文件不允许",
                                    "file_upload_conn_error": "连接错误",
                                    "file_upload_invalid_extension": "无效的扩展文件",
                                    "file_upload_exceed_size_limit": "文件超出大小",
                                    "file_upload_internal_error": "内部错误",
                                    "file_upload_unknown_error": "未知错误"
                                },
                                "chatbot_unique_key": "03c824b4-52bf-2b84-35f3-03955a04625f",
                                "access_context": "Artificial Intelligence"
                            },
                            "children": [

                            ]
                        },
                        {
                            "access_context": "Artificial Intelligence",
                            "access_name": "UniConverter",
                            "access_type": 1,
                            "auth_id": null,
                            "contact_text": "Contact阿牛",
                            "display_name": "UniConverter",
                            "guide_type": 2,
                            "page_title": "文本标题呀",
                            "sort": 2,
                            "children": [
                                {
                                    "access_context": "Artificial Intelligence",
                                    "access_name": "zh-CN",
                                    "access_type": 1,
                                    "auth_id": "1127852573757714503",
                                    "contact_text": "",
                                    "display_name": "zh-CN",
                                    "guide_type": 1,
                                    "page_title": "",
                                    "sort": 0,
                                    "children": [

                                    ],
                                    "online_service_config": {
                                        "im_type": 0,
                                        "language": "zh-cn",
                                        "send_text": "",
                                        "zendesk_form_empty_tip": "",
                                        "zendesk_form_format_tip": "",
                                        "zendesk_group_id": 0,
                                        "offline_show_type": 0,
                                        "offline_text": "",
                                        "zendesk_support_form_show": 2,
                                        "zendesk_support_form_id": 0,
                                        "zendesk_prechat_form_show": 2,
                                        "zendesk_prechat_form_id": 0,
                                        "pre_chat_form_config": null,
                                        "offline_form_config": null,
                                        "week_text": null,
                                        "intercom_id": "",
                                        "online_translate_config": {
                                            "chat_message_placeholder": "点击这里输入",
                                            "chat_network_broke_down": "没网了请回吧",
                                            "chat_network_try_again": "交钱再点试试"
                                        },
                                        "chatbot_unique_key": "03c824b4-52bf-2b84-35f3-03955a04625f",
                                        "access_context": "Artificial Intelligence"
                                    }
                                },
                                {
                                    "access_context": "暗号",
                                    "access_name": "en",
                                    "access_type": 1,
                                    "auth_id": "1127852573770297380",
                                    "contact_text": "",
                                    "display_name": "en",
                                    "guide_type": 1,
                                    "page_title": "",
                                    "sort": 1,
                                    "children": [

                                    ],
                                    "online_service_config": {
                                        "im_type": 1,
                                        "language": "zh-cn",
                                        "send_text": "发送",
                                        "zendesk_form_empty_tip": "表单不为空",
                                        "zendesk_form_format_tip": "格式不正确",
                                        "zendesk_group_id": 900002400403,
                                        "offline_show_type": 2,
                                        "offline_text": "",
                                        "zendesk_support_form_show": 1,
                                        "zendesk_support_form_id": 900000064406,
                                        "zendesk_prechat_form_show": 1,
                                        "zendesk_prechat_form_id": 900000064406,
                                        "pre_chat_form_config": [
                                            {
                                                "name": "名字",
                                                "required": 1,
                                                "type": "text"
                                            },
                                            {
                                                "name": "邮件",
                                                "required": 1,
                                                "visible": 2,
                                                "type": "email"
                                            },
                                            {
                                                "name": "信息",
                                                "required": 1,
                                                "visible": 1,
                                                "type": "textarea"
                                            }
                                        ],
                                        "offline_form_config": [
                                            {
                                                "name": "名字",
                                                "required": 1,
                                                "type": "text"
                                            },
                                            {
                                                "name": "邮箱",
                                                "required": 1,
                                                "type": "email"
                                            }
                                        ],
                                        "week_text": [
                                            "周日",
                                            "周一",
                                            "周二",
                                            "周三",
                                            "周四",
                                            "周五",
                                            "周六"
                                        ],
                                        "intercom_id": "",
                                        "online_translate_config": {
                                            "chat_message_placeholder": "请输入消息",
                                            "chat_network_broke_down": "网络出故障了",
                                            "chat_network_try_again": "点击重试",
                                            "chat_start": "开始聊天",
                                            "chat_member_join": "加入会话",
                                            "chat_visitor_text": "用户",
                                            "chat_member_leave": "离开会话",
                                            "chat_position": "排队位置",
                                            "chat_rate_button": "评价会话",
                                            "chat_rate_title": "请评价会话",
                                            "chat_rate_message": "请留言",
                                            "chat_rate_skip_button": "取消",
                                            "chat_rate_send_button": "发送",
                                            "chat_end": "结束",
                                            "chat_rate_submitted": "留言已提交",
                                            "chat_rate_good_title": "好评",
                                            "chat_rate_bad_title": "差评",
                                            "chat_rated_good": "好评",
                                            "chat_rated_bad": "差评",
                                            "chat_online_top_title": "在线",
                                            "chat_offline_top_title": "离线",
                                            "chat_away_top_title": "离开",
                                            "chat_form_submit_success": "表单提交成功",
                                            "chat_form_another_send_button": "再次提交表单",
                                            "file_upload_not_supported": "文件不支持",
                                            "file_upload_not_allowed": "文件不允许",
                                            "file_upload_conn_error": "连接错误",
                                            "file_upload_invalid_extension": "无效的扩展文件",
                                            "file_upload_exceed_size_limit": "超过文件大小",
                                            "file_upload_internal_error": "内部错误",
                                            "file_upload_unknown_error": "未知错误"
                                        },
                                        "chatbot_unique_key": "03c824b4-52bf-2b84-35f3-03955a04625f",
                                        "access_context": "暗号"
                                    }
                                }
                            ]
                        }
                    ],
                    "recommend": {
                        "recommend": [
                            {
                                "title": "Registration code",
                                "url": "http://support.wondershare.com/en/retrieve"
                            },
                            {
                                "title": "Cancel subscription",
                                "url": "http://support.wondershare.com/cancel_subscription.html"
                            },
                            {
                                "title": "invoice",
                                "url": "http://support.wondershare.com/get_invoice.html"
                            }
                        ],
                        "custom_function_card": 0
                    },
                    "position": {
                        "top": "",
                        "right": "",
                        "bottom": "",
                        "left": "",
                        "mobile_top": "",
                        "mobile_right": "",
                        "mobile_bottom": "",
                        "mobile_left": ""
                    },
                    "online_service": {
                        "online": "",
                        "config": [

                        ]
                    },
                    "domain": {
                        "static": "https://crm-static.wondershare.cc",
                        "api": "https://crm-web.wondershare.com"
                    }
                }
            }
        }
    ;
    return JSON.stringify(res);
}

function getStaticFiles(res) {
    var cssList = res.css;
    var cssArr = [];
    if (cssList && cssList.length > 0) {
        for (var c = 0; c < cssList.length; c++) {
            if (cssList[c].endsWith(".css")) {
                var cObj = {
                    param: "value"
                };
                cObj.src = "http://local.zendesk/build/static/css/" + cssList[c];
                cssArr.push(cObj);
            }
        }
    }
    var jsList = res.js;
    var jsArr = [{
        "src": "https://images.wondershare.com/supportcenter18/test_assets/dist/web_widget/latest/assets/solid.js",
        "param": ""
    }];
    if (jsList && jsList.length > 0) {
        for (var c = 0; c < jsList.length; c++) {
            if (jsList[c].endsWith(".js")) {
                var jObj = {
                    param: "value"
                };
                jObj.src = "http://local.zendesk/build/static/js/" + jsList[c];
                jsArr.push(jObj);
            }
        }
    }
    var files = {
        style: cssArr,
        script: jsArr,
        json: [
            {
                "src": "https://images.wondershare.com/supportcenter18/test_assets/dist/web_widget/latest/static/json/manifest.json",
                "param": "value"
            }
        ]
    };
    console.log('getStaticFiles files', files);
    return files;
}

// https://msg.wondershare.cc/chatbot/build
var folderPrefix = "https://msg.wondershare.cc/chatbot-ga/build";
// var folderPrefix = "http://local.zendesk/build";
var effectAssets = {
    "style": [
        {
            "src": folderPrefix + "/static/css/main_e0b53293_chunk.css",
            "param": ""
        },
        {
            "src": folderPrefix + "/static/css/style_772779a8_chunk.css",
            "param": ""
        },
        {
            "src": folderPrefix + "/static/css/vendor_96a05d1a_chunk.css",
            "param": ""
        }
    ],
    "script": [
        {
            "src": "https://images.wondershare.com/supportcenter18/test_assets/dist/web_widget/latest/assets/solid.js",
            "param": ""
        },
        {
            "src": folderPrefix + "/static/js/main_25959b03_chunk.js",
            "param": "value"
        },
        {
            "src": folderPrefix + "/static/js/style_2750afb8_chunk.js"
        },
        {
            "src": folderPrefix + "/static/js/vendor_8e0d41c7_chunk.js"
        }
    ],
    "json": [
        {
            "src": "https://images.wondershare.com/supportcenter18/test_assets/dist/web_widget/latest/static/json/manifest.json",
            "param": "value"
        }
    ]
};

var originStyles = {
    position: 'fixed',
    bottom: '0px',
    right: '0px',
    'z-index': 1,
    width: '359px',
    height: '0px',
    overflow: 'hidden',
    display: 'block',
    'background-color': 'transparent',
    border: 'none'
};

var originMobileStyles = {
    position: 'fixed',
    bottom: '0px',
    right: '0px',
    'z-index': 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'block',
    'background-color': 'transparent',
    border: 'none'
};

function isEffectiveArray(data) {
    return data && Array.isArray(data) && data.length > 0;
}

// 加载intercom静态资源
function loadIntercom(APP_ID) {
    //Set your APP_ID
    var appId = "123456";// 兜底APP_ID
    if (!!APP_ID) {
        appId = APP_ID;
    }
    window.intercomSettings = {
        app_id: appId
    };
    (function () {
        var w = window;
        var ic = w.Intercom;
        if (typeof ic === "function") {
            ic('reattach_activator');
            ic('update', w.intercomSettings);
        } else {
            var d = document;
            var i = function () {
                i.c(arguments);
            };
            i.q = [];
            i.c = function (args) {
                i.q.push(args);
            };
            w.Intercom = i;
            var l = function () {
                var s = d.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://widget.intercom.io/widget/' + appId;
                var x = d.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
            };
            if (document.readyState === 'complete') {
                l();
            } else if (w.attachEvent) {
                w.attachEvent('onload', l);
            } else {
                w.addEventListener('load', l, false);
            }
        }
    })();
}

// 检测是否是移动端
function checkIsMobile() {
    var isMobile = false;
    var client_auto_pop = getClientAutoPop();
    // 客户端唤起chatbot，也要在弹窗全屏展示
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || getMobilePreviewAtrribute() === "true" || client_auto_pop === "true") {
        isMobile = true;
    }
    return isMobile;
}

function insertMobileStyleElement(head0) {
    var style = document.createElement('style');
    var styleStr = '\n.WSAres-chatbot {\n' +
        '            width: 100% !important;\n' +
        '            height: 100% !important;\n' +
        '        }\n' +
        '        .ws-webWidget-layout {\n' +
        '            width: 100% !important;\n' +
        '        }\n' +
        '\n' +
        '        .WSAres-chatbot .ws-embed-webWidget .ws-webWidget-layout .ws-webWidget-main {\n' +
        '            height: calc(100vh - 106px) !important;\n' +
        '        }\n' +
        '\n' +
        '        .basic-entry {\n' +
        '            height: 100% !important;\n' +
        '            width: 100% !important;\n' +
        '        }\n' +
        '        .product-entry {\n' +
        '            height: 100% !important;\n' +
        '            width: 100% !important;\n' +
        '        }\n' +
        '        .form-entry {\n' +
        '            height: 100% !important;\n' +
        '            width: 100% !important;\n' +
        '        }\n' +
        '\n' +
        '        .form-entry .basic-step .contact-form .skip {\n' +
        '            left: calc(100% - 27px) !important;\n' +
        '        }\n' +
        '\n' +
        '        .form-entry .product-step {\n' +
        '            width: 100% !important;\n' +
        '        }\n' +
        '\n' +
        '        .basic-entry .float .contact-form .contact-button {\n' +
        '            position: fixed !important;\n' +
        '            bottom: 40px !important;\n' +
        '            width: calc(100% - 48px) !important;\n' +
        '        }\n' +
        '\n' +
        '        .widget-container.normal {\n' +
        '            width: 100% !important;\n' +
        '            height: 100% !important;\n' +
        '        }\n' +
        '        .product-entry .float .contact-button {\n' +
        '            width: calc(100% - 48px) !important;\n' +
        '        }\n' +
        '        .pfah-wrapper {\n' +
        '            height: 100% !important;\n' +
        '        }\n' +
        '        .chat-rating-panel {\n' +
        '            height: calc(100% - 110px) !important;\n' +
        '        }';

    var client_auto_pop = getClientAutoPop();
    if (client_auto_pop === "true") {// 解决客户端拉起chatbot进入会话界面时，底部输入区不置底的问题
        styleStr += '\n.WSAres-chatbot .ws-embed-webWidget .ws-webWidget-layout .ws-webWidget-main .ws-webWidget-bot-content{\n' +
            '            height: calc(100vh - 106px) !important;\n' +
            '        }\n'
        ;
        if (isIE() || isEdge() || isIPhoneWxMobileDevice()) {
            styleStr += '\n.widget-container.normal{\n' +
                '            border: none !important;\n' +
                '        }\n'
            ;
            styleStr += '\n.WSAres-chatbot .ws-embed-webWidget .ws-webWidget-layout .ws-webWidget-footer{\n' +
                '            border-right: none !important;\n' +
                '            border-bottom: none !important;\n' +
                '        }\n'
            ;
        }
    }
    style.innerHTML = styleStr;
    head0.appendChild(style);
}

function insertWebStyleElement(data) {
    var style = window.parent.document.createElement('style');
    if (data.information.position && data.information.position.left !== "") {
        var left = data.information.position.left;
        var intercomStyle = '.intercom-messenger-frame {left: ' + left + 'px !important; right: auto !important}';
        style.innerHTML = intercomStyle;
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}

function insertMeta() {
    var oMeta = document.createElement('meta');
    oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0';
    oMeta.name = 'viewport';
    document.getElementsByTagName('head')[0].appendChild(oMeta);
    // <meta http-equiv="X-UA-Compatible" content="IE=edge">
    if (isIE()) {
        var ieMeta = document.createElement('meta');
        ieMeta.httpEquiv = 'X-UA-Compatible';
        ieMeta.content = 'IE=edge';
        document.getElementsByTagName('head')[0].appendChild(ieMeta);
    }
}

// 支持部分配置项支持pc和移动端分开配置，如果是移动端，需要进一步处理移动端配置数据，覆盖pc原配置数据
function handleMobileInformation(data) {
    var information = data.information;
    if (information.mobile_theme !== undefined && information.mobile_theme !== null && information.mobile_theme !== "") {
        information.theme = information.mobile_theme;
    }
    if (information.mobile_chatbot_icon !== undefined && information.mobile_chatbot_icon !== null && information.mobile_chatbot_icon !== "") {
        information.chatbot_icon = information.mobile_chatbot_icon;
    }
    if (information.notice) {
        if (information.notice.mobile_show_notice !== undefined && information.mobile_show_notice !== null && information.mobile_show_notice !== "") {
            information.notice.show_notice = information.notice.mobile_show_notice;
        }
        if (information.notice.mobile_title !== undefined && information.mobile_title !== null && information.mobile_title !== "") {
            information.notice.title = information.notice.mobile_title;
        }
        if (information.notice.mobile_sub_title !== undefined && information.mobile_sub_title !== null && information.mobile_sub_title !== "") {
            information.notice.sub_title = information.notice.mobile_sub_title;
        }
    }
    data.information = information;
}

function handlePosition(data) {
    var position = data.information.position;
    for (var pKey in position) {
        if (pKey === 'left' || pKey === 'mobile_left') {
            if (position[pKey] === "0" || position[pKey] === 0) {
                position[pKey] = "";
            }
        } else {
            if (position[pKey] === "") {
                position[pKey] = "0";
            }
        }
    }
    data.information.position = position;
}

function handleClientData(data) {
    if (isIE() || isEdge() || isIPhoneWxMobileDevice()) {
        var client_auto_pop = getClientAutoPop();
        if (client_auto_pop === "true" && data && data.information) {// 兼容客户端内嵌浏览器内核为IE全屏展示的场景
            if (data.information.theme) {
                data.information.mobile_theme = data.information.theme;
            }
            if (data.information.show_chatbot) {
                data.information.mobile_show_chatbot = data.information.show_chatbot;
            }
        }
    }
}

var findZendeskJsCount = sessionStorage.getItem('findZendeskJsCount') || 0;

function insertZendeskWebSdk(key) {
    var script = document.createElement('script');
    script.src = config.zendesk_web_sdk_path;
    script.type = 'text/javascript';
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(script);
    script.onload = function () {
        console.info('getCurrentScriptKey key===>', key);
        var iframe = document.createElement('iframe');
        iframe.scrolling = 'no';
        iframe.id = 'wondershare_chatbot_iframe';
        if (!checkIsMobile()) {// 两套iframe初始化样式配置
            iframe.style = generateIframeStyle(originStyles);
            if (isIE()) {
                iframe.setAttribute('style', generateIframeStyle(originStyles));
            }
        } else {
            iframe.style = generateIframeStyle(originMobileStyles);
        }

        var html0 = document.createElement('html');
        var head0 = document.createElement('head');
        var body0 = document.createElement('body');

        // 显示一个iframe 基座，动态获取资产信息
        var div = document.createElement('div');
        div.id = 'WSAres-CHATBOT-ROOT';

        body0.appendChild(div);

        getStaticAssetsByKey(key, head0, body0, html0, iframe);
    };
    script.onerror = function () {
        console.error('load zendesk web sdk js fail');
    };
}

function initGA() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    // ga('create', 'UA-127218872-1', 'auto');
    ga('create', 'UA-125584796-1', 'auto');
    ga('send', 'pageview');
}

function commonListenFunc(data) {
    if (ga && data && data.type === "_chatbot_send_ga_params_" && data.data) {
        var data = data.data;
        ga('send', {
            hitType: 'event',
            eventCategory: data.eventCategory,
            eventAction: data.eventAction,
            eventLabel: data.eventLabel
        });
    }
}

function listenGAReport() {
    if (window.attachEvent) {
        window.attachEvent('message', function (event) {
            // console.log("listenGAReport e", event);
            commonListenFunc(event.data);
        });
    } else {
        window.addEventListener("message", function(event) {
            // console.log("listenGAReport e", event);
            commonListenFunc(event.data);
        }, false);
    }
}

function getStaticAssetsByKey(keyStr, head0, body0, html0, iframe) {
    var url = config.get_assets_information_config.url + (config.get_assets_information_config.key_str ? keyStr:"");
    httpRequest({
        method: config.get_assets_information_config.method,
        url: url// 请求的url地址
    }, function (res) {
        // console.log(res);
        // 外围html插入全屏meta头，适配移动端
        insertMeta();
        if (checkIsMobile()) {
            console.log("this is mobile");
            // 如果是移动端，需要插入适配style标签
            insertMobileStyleElement(head0);
        } else {
            console.log("this is pc web");
        }
        try {
            var parseRes = JSON.parse(res);
            if (parseRes.code === 0) {
                var data = config.is_mock ? JSON.parse(getAssetsData()).data:parseRes.data;// 通过is_mock字段区分本地模拟环境还是测试、生产环境
                // 支持部分配置项支持pc和移动端分开配置
                if (!checkIsMobile()) {
                    if (!(data && data.information && data.information.show_chatbot === 1)) {
                        console.log("this is pc web, hide chatbot");
                        return;
                    }
                } else {
                    handleClientData(data);
                    if (!(data && data.information && data.information.mobile_show_chatbot === 1)) {
                        console.log("this is mobile, hide chatbot");
                        return;
                    }
                    handleMobileInformation(data);
                    console.log("after handleMobileInformation data", data);
                }
                // 支持部分配置项支持pc和移动端分开配置
                handlePosition(data);
                console.log("after handlePosition data", data);
                if (!checkIsMobile()) {
                    insertWebStyleElement(data);
                }
                data.chatbot_unique_key = keyStr.split("=")[1];// chatbot_unique_key是获取基座资源的key
                data.client_chatbot_info = getCurrentHtmlParamsObj();// 将客户端展示html模板链接携带的参数注入window全局变量中，传递至react-iframe-chatbot
                window.EXP_CHATBOT_PARAMS = data;
                window.ZENDESK_ACCOUNT_KEY = config.zendesk_account_key;
                try {
                    findZendeskJsCount++;
                    sessionStorage.setItem('findZendeskJsCount', findZendeskJsCount);
                    console.log('zChat', zChat);
                    window.EXP_CHATBOT_ZCHAT = zChat;
                    sessionStorage.setItem('findZendeskJsCount', 0);// 成功加载到zChat远程资源，findZendeskJsCount缓存置零
                } catch (err) {
                    // 如果在加载远程资源css、js资源之前，发现zChat远程资源没加载进来，则重试
                    console.error('=====================================>zChat error');
                    if (findZendeskJsCount < 50) {
                        getStaticAssetsByKey(keyStr, head0, body0, html0, iframe);
                        return;
                    } else {
                        // 重试次数超过50次，还没有zChat远程资源加载进来，则放弃
                        console.error('=====================================>zChat web sdk js not found (50 times)');
                        // 重试次数超过50次，还没有zChat远程资源加载进来，findZendeskJsCount缓存置零
                        sessionStorage.setItem('findZendeskJsCount', 0);
                    }
                }

                var staticUrl = "";
                if (data && data.information && data.information.domain && data.information.domain.static) {
                    staticUrl = data.information.domain.static;
                }
                // var assets = data.assets;// 生产环境
                var assets = effectAssets;// 本地测试
                // var assets = config.is_mock ? getStaticFiles(parseRes.assets):data.assets;// 通过is_mock字段区分本地模拟环境还是测试、生产环境
                // 兼容IE浏览器，起码在IE浏览器中可以展示
                if (isIE()) {
                    dynamicLoading.js("https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.includes", head0, staticUrl);
                }
                /*if (assets.json && assets.json.length > 0) {
                    var manifests = assets.json;
                    for (var i = 0; i < manifests.length; i++) {
                        dynamicLoading.manifest(manifests[i].src, head0, staticUrl);
                    }
                }*/
                if (assets.style && assets.style.length > 0) {
                    // swiper.css需要在chatbot业务逻辑之前引入，因为chatbot业务逻辑会使用到（为什么不在chatbot业务逻辑代码中引入？因为考虑到加载速度的问题）
                    dynamicLoading.css(config.swiper_css_path, head0, staticUrl);
                    var links = assets.style;
                    for (var i = 0; i < links.length; i++) {
                        dynamicLoading.css(links[i].src, head0, staticUrl);
                    }
                }
                if (assets.script && assets.script.length > 0) {
                    // jquery.js、swiper.js需要在chatbot业务逻辑js之前引入，因为chatbot业务逻辑会使用到（为什么不在chatbot业务逻辑代码中引入？因为考虑到加载速度的问题）
                    dynamicLoading.js(config.jquery_js_path, body0, staticUrl);
                    dynamicLoading.js(config.swiper_js_path, body0, staticUrl);
                    var scripts = assets.script;
                    for (var i = 0; i < scripts.length; i++) {
                        if (scripts[i].src && scripts[i].src.indexOf("runtime-main") === -1 && scripts[i].src.indexOf("precache-manifest") === -1) {
                            dynamicLoading.js(scripts[i].src, body0, staticUrl);
                        }
                    }
                    if (data && data.information && data.information.type && data.information.type === 3) {
                        // 只有type为表单分流型时，才需要加载pardot-form.js
                        // pardot form提交，需要在iframe下引入jquery.js和pardot-form.js，jquery.js已在主js加载之前引入
                        dynamicLoading.js("https://pdf.wondershare.com/pfah/pardot-form.js", body0, staticUrl);
                    }
                }
                html0.appendChild(head0);
                html0.appendChild(body0);
                // 解决iphone微信内嵌页无法唤起chatbot的问题，只有是非微信内嵌页环境，才采用srcdoc的方式
                if (!isIPhoneWxMobileDevice()) {
                    iframe.srcdoc = html0.innerHTML;// src是html字符串
                }
                // about:blank
                iframe.src = 'about:blank';
                if (!checkIsMobile()) {// 如果不是移动端，即为pc端，则需要根据配置进行定位初始化
                    handleIframeStyle(iframe, data);
                } else {
                    handleMobileIframeStyleIfHasLeftPosition(iframe, data);
                }
                // 不能将html元素直接append到iframe元素中
                // iframe.appendChild(html0);
                // 解决IE、低版本Edge或苹果手机微信内嵌页无法唤起chatbot的问题，采用doc write的方式
                if (isIE() || isEdge() || isIPhoneWxMobileDevice()) {
                    var client_auto_pop = getClientAutoPop();
                    if (client_auto_pop === "true") {// 兼容客户端内嵌浏览器内核为IE全屏展示的场景
                        iframe.style.border = 'none';// 解决IE浏览器初始渲染有浅灰色边框的问题，同时可以一定程度上解决IE浏览器进入zendesk在线客服之后，页面小幅错位的问题
                        iframe.style.display = 'block';// 解决IE浏览器环境下，进入zendesk组件或在底部输入区输入信息时，iframe整体会向上偏移的问题
                        var div = document.createElement('div');
                        div.setAttribute('name', '_wondershare_chatbot_iframe_');
                        div.setAttribute('style', 'width: 100%; height: 100vh;');
                        div.appendChild(iframe);
                        var body = document.getElementsByTagName('body')[0];
                        body.appendChild(div);
                    } else {
                        var body = document.getElementsByTagName('body')[0];
                        body.appendChild(iframe);
                    }
                    var doc = iframe.contentWindow.document;
                    var content = html0.innerHTML;
                    doc.open('text/html', 'replace');
                    doc.write(content);
                    doc.close();
                } else {
                    var div = document.createElement('div');
                    div.setAttribute('name', '_wondershare_chatbot_iframe_');
                    div.appendChild(iframe);
                    var body = document.getElementsByTagName('body')[0];
                    body.appendChild(div);
                }
            } else {
                // {"code":420103,"msg":"Unexpected error","data":{"detail":"core service delect intent error."}}
                if (parseRes.data && parseRes.data.detail) {
                    console.error('code error');
                    console.error(parseRes.data.detail);
                }
            }
        } catch (e) {
            console.error(e);
            console.error("maybe res is not a valid json string");
        }
    }, function () {
        console.error('request failure');
    });
}

function getEffectivePath(path, staticUrl) {
    var res = path;
    if (!(path.startsWith("http://") || path.startsWith("https://") || path.startsWith("ftp://"))) {
        res = staticUrl + path;
    }
    return res;
}

function generateIframeStyle(styles) {
    var res = '';
    for (var key in styles) {
        res += (key + ":" + styles[key] + ";");
    }
    return res;
}

function handleIframeStyle(iframe, data) {
    if (data && data.information && data.information.position) {
        var position = data.information.position;
        if (position && position.hasOwnProperty('left')) {
            var leftValue = position.left;
            if (leftValue !== "" && leftValue !== null && leftValue !== undefined) {
                leftValue = leftValue.trim();
                if (leftValue.indexOf("px") !== -1) {
                    originStyles.left = leftValue;
                } else {
                    originStyles.left = leftValue + "px";
                }
                delete originStyles.right;
                if (position.hasOwnProperty('bottom')) {
                    var bottomValue = position.bottom;
                    if (bottomValue !== "" && bottomValue !== null && bottomValue !== undefined) {
                        bottomValue = bottomValue.trim();
                        if (bottomValue.indexOf("px") !== -1) {
                            originStyles.bottom = bottomValue;
                        } else {
                            originStyles.bottom = bottomValue + "px";
                        }
                    }
                }
                iframe.style = generateIframeStyle(originStyles);
                if (isIE()) {
                    iframe.setAttribute('style', generateIframeStyle(originStyles));
                }
                return;
            }
        }
        for (var key in position) {
            if ((key === "bottom" || key === "right") && position[key] !== "" && position[key] !== undefined && position[key] !== null) {
                var keyValue = position[key].trim();
                if (keyValue.indexOf("px") !== -1) {
                    originStyles[key] = keyValue;
                } else {
                    originStyles[key] = keyValue + "px";
                }
            }
        }
        iframe.style = generateIframeStyle(originStyles);
        if (isIE()) {
            iframe.setAttribute('style', generateIframeStyle(originStyles));
        }
    }
}

function handleMobileIframeStyleIfHasLeftPosition(iframe, data) {
    var position = data.information.position;
    if (position) {
        if (position.hasOwnProperty('mobile_left')) {
            var leftValue = position.mobile_left;
            if (leftValue !== "" && leftValue !== null && leftValue !== undefined) {
                if (leftValue.indexOf("px") !== -1) {
                    leftValue = Number(leftValue.split("px")[0]);
                } else {
                    leftValue = Number(leftValue);
                }
                originMobileStyles.right = 'auto';
                originMobileStyles.left = leftValue + 'px';
            }
        }
        if (position.hasOwnProperty('mobile_bottom')) {
            var bottomValue = position.mobile_bottom;
            if (bottomValue !== "" && bottomValue !== null && bottomValue !== undefined) {
                if (bottomValue.indexOf("px") !== -1) {
                    bottomValue = Number(bottomValue.split("px")[0]);
                } else {
                    bottomValue = Number(bottomValue);
                }
                originMobileStyles.bottom = bottomValue + 'px';
            }
        }
    }
    iframe.style = generateIframeStyle(originMobileStyles);
}

var dynamicLoading = {
    css: function (path, target, staticUrl) {
        // console.info('动态加载css', path);
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var link = document.createElement('link');
        link.href = getEffectivePath(path, staticUrl);
        link.rel = 'stylesheet';
        link.type = 'text/css';
        target.appendChild(link);
    },
    manifest: function (path, target, staticUrl) {
        // console.info('动态加载manifest', path);
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var link = document.createElement('link');
        link.href = getEffectivePath(path, staticUrl);
        link.rel = 'manifest';
        target.appendChild(link);
    },
    js: function (path, target, staticUrl) {
        // console.info('动态加载js', path);
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var script = document.createElement('script');
        script.src = getEffectivePath(path, staticUrl);
        script.type = 'text/javascript';
        target.appendChild(script);
    }
};

// 防止重复引用基座js，生成多个chatbot iframe
if (document.getElementById('wondershare_chatbot_iframe') || window._has_chatbot_iframe_inited_) {
    console.info('chatbot iframe has been inited');
} else {
    console.info('iframe init');
    window._has_chatbot_iframe_inited_ = true;
    setWxAutoPopAtrributeToWindow();
    var key = getCurrentScriptKey();
    if (window.attachEvent) {
        window.attachEvent('onload', function () {
            initGA();
            listenGAReport();
            insertZendeskWebSdk(key);
        });
    } else {
        window.addEventListener('load', function () {
            initGA();
            listenGAReport();
            insertZendeskWebSdk(key);
        }, false);
    }
}

// 集成intercom时，不能用css的方式隐藏其默认的气泡icon，要用intercom的api隐藏
/*var body = document.getElementsByTagName('body')[0];
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = ".intercom-launcher-frame{display: none !important;}.intercom-lightweight-app{display: none !important;}";
body.appendChild(style);*/