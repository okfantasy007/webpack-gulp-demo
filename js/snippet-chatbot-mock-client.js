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
    //??????split ????????????IE7???IE8???IE9???split???????????????panda-2016-06-16???
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
    //?????? XMLHttpRequest ????????????????????? Internet Explorer ???IE5 ??? IE6????????? ActiveX ?????????xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")
    if (window.XMLHttpRequest) {
        //code for all new browsers
        xmlHttp = new XMLHttpRequest;
    } else if (window.ActiveXObject) {
        //code for IE5 and IE6
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //????????????????????????
    if (xmlHttp == null) {
        alert('??????????????????xmlHttp');
        return;
    }
    //??????????????? ???????????????
    var httpMethod = (obj.method || 'Get').toUpperCase();
    //????????????
    var httpDataType = obj.dataType || 'json';
    //url
    var httpUrl = obj.url || '';
    //????????????
    var async = true;
    //post?????????????????????
    if (httpMethod == 'POST') {
        //????????????????????? post????????????????????????param1=test&param2=test2
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
    //onreadystatechange ????????????????????????????????? (state_Change) ?????????????????????????????? XMLHttpRequest ??????????????????????????????????????????????????????????????? 0 (uninitialized) ??? 4 (complete) ?????????????????????????????? 4 ???????????????????????????
    xmlHttp.onreadystatechange = function () {
        //complete
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
                //?????????????????????????????????
                successfun(xmlHttp.responseText);
            } else {
                //???????????????????????????
                errFun();
            }
        }
    }
    //????????????
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
    // ???html????????????????????????????????????
    return result;
}

function getClientAutoPop() {
    var url = window.location.href;
    return GetQueryString('client_auto_pop', url);
}

function getCurrentScript() {
    var script = null, scripts;

    // firefox??????currentScript??????
    // ????????????????????????script??????async??????????????????async??????
    if (document.currentScript) {
        script = document.currentScript;
        var async = script.hasAttribute ? script.async : script.getAttribute('async');
        if (async !== true) {
            script.setAttribute('async',true);
        }
    } else {
        // IE?????????????????????script??????
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
        {"code":0,"msg":"success","data":{"product":{"client_id":"44780905-539d-9198-c55e-ca7e96d838eb","features":{"chat":"7cd45b73-4d4e-0b1e-5d91-5673abaa9269"}},"assets":{"json":[{"src":"\/chatbot\/v1.21.00\/static\/json\/manifest.json","param":""}],"script":[{"src":"\/chatbot\/v1.21.00\/static\/js\/main.9cac37e5.chunk.js","param":""},{"src":"\/chatbot\/v1.21.00\/static\/js\/vendor.8e0d41c7.chunk.js","param":""},{"src":"\/chatbot\/v1.21.00\/static\/js\/style.2750afb8.chunk.js","param":""},{"src":"\/chatbot\/latest\/assets\/solid.js","param":""}],"style":[{"src":"\/chatbot\/v1.21.00\/static\/css\/main.673bc797.chunk.css","param":""},{"src":"\/chatbot\/v1.21.00\/static\/css\/vendor.96a05d1a.chunk.css","param":""},{"src":"\/chatbot\/v1.21.00\/static\/css\/style.4c180555.chunk.css","param":""}]},"information":{"name":"fengrr\u8868\u5355\u5206\u6d41\u578b","display_name":"fengrr\u8868\u5355\u5206\u6d41\u578b\u6d4b\u8bd53","type":3,"language":"zh-cn","skip":"\u8df3\u8fc7","product_choose_tip":"\u672a\u9009\u62e9\u4ea7\u54c1\uff0c\u8bf7\u9009\u62e9","default_theme":"","theme":"#000000","mobile_theme":"","show_chatbot":1,"mobile_show_chatbot":1,"chatbot_icon":"https:\/\/ss2.bdstatic.com\/70cFvnSh_Q1YnxGkpoWK1HF6hhy\/it\/u=3468385119,2108843313&fm=15&gp=0.jpg","mobile_chatbot_icon":"","button_text":"\u8054\u7cfb\u6211\u4eec","banner":{"title":"Hi There","sub_title":"\u6b22\u8fce\u4f7f\u7528\u6211\u4eec\u4ea7\u54c1"},"notice":{"show_notice":1,"mobile_show_notice":0,"title":"\u6b22\u8fce\u4f7f\u7528\u673a\u5668\u4eba","mobile_title":"","sub_title":"\u5e2e\u52a9","mobile_sub_title":"","link_url":"","link_type":0,"mobile_is_show_notice":1},"launcher":{"text":"","mobile_text":"","type":"","icon":""},"guide":{"title":"","sub_title":"","normal_tips":"","sub_tips":"","empty_tips":"","error_tips":""},"email":{"email_required":0,"email_verify":2,"input_tips":"","input_placeholder":"","emty_tip":"","format_error_tip":""},"chat_interface":{"pre_title":"\u8868\u5355\u5206\u6d41\u578b","title":"","sub_title":"","menu_text":"","menu_icon":"","message_button_tips":"","input_empty_tips":"","input_error_tips":""},"custom_form":[{"title":"\u6211\u60f3\u8981\u54a8\u8be2","type":3,"association":"","submit_next":0,"next_config":"","banner_title":"\u4f60\u597d\uff0c\u6b22\u8fce\u8bbf\u95ee","banner_sub_title":"\u8bf7\u95ee\u6709\u54ea\u4e9b\u7591\u95ee\uff0c\u8bf7\u9009\u62e9\u4ee5\u4e0b\u9009\u9879"},{"title":"\u5206\u4ea7\u54c1\u578b","type":2,"association":"","submit_next":0,"next_config":"","banner_title":"\u4f60\u597d\uff0c\u6b22\u8fce\u8bbf\u95ee","banner_sub_title":"\u8bf7\u95ee\u6709\u54ea\u4e9b\u7591\u95ee\uff0c\u8bf7\u9009\u62e9\u4ee5\u4e0b\u9009\u9879"}],"custom_guide":[{"access_context":"Artificial Intelligence","access_name":"A-zendesk","access_type":1,"auth_id":"1127846446768762912","contact_text":"","display_name":"A-zendesk","guide_type":1,"page_title":"","sort":0,"online_service_config":{"im_type":1,"language":"zh-cn","send_text":"\u53d1\u9001","zendesk_form_empty_tip":"\u8868\u5355\u4e0d\u80fd\u4e3a\u7a7a","zendesk_form_format_tip":"\u683c\u5f0f\u4e0d\u6b63\u786e","zendesk_group_id":2147719843,"offline_show_type":2,"offline_text":"\u5ba2\u670d\u65f6\u95f4\u662f\u5de5\u4f5c\u65e5\u65e99\u70b9\u534a\u523018\u70b9\uff0c\u5ba2\u670d\u4e0d\u5728\u7ebf\u8bf7\u7559\u8a00\u3002","zendesk_support_form_show":1,"zendesk_support_form_id":360000848172,"zendesk_prechat_form_show":2,"zendesk_prechat_form_id":0,"pre_chat_form_config":null,"offline_form_config":[{"name":"\u59d3\u540d","required":1,"type":"text"},{"name":"\u90ae\u7bb1","required":1,"type":"email"}],"week_text":["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"],"intercom_id":"","online_translate_config":{"chat_message_placeholder":"\u8f93\u5165\u6d88\u606f","chat_network_broke_down":"\u7f51\u7edc\u65ad\u5f00\uff0c\u8bf7\u91cd\u8bd5","chat_network_try_again":"\u91cd\u8bd5","chat_start":"\u5bf9\u8bdd\u5f00\u59cb","chat_member_join":"\u52a0\u5165\u5bf9\u8bdd","chat_visitor_text":"\u7528\u6237","chat_member_leave":"\u79bb\u5f00\u5bf9\u8bdd","chat_position":"\u6b63\u5728\u6392\u961f","chat_rate_button":"\u8bc4\u4ef7","chat_rate_title":"\u8bf7\u8bc4\u4ef7\u6b64\u804a\u5929\u5185\u5bb9\uff0c\u8c22\u8c22","chat_rate_message":"\u9ebb\u70e6\u7ed9\u6211\u4e2a\u597d\u8bc4\u54e6\uff0c\u8c22\u8c22","chat_rate_skip_button":"\u53d6\u6d88","chat_rate_send_button":"\u53d1\u9001","chat_end":"\u7ed3\u675f","chat_rate_submitted":"\u63d0\u4ea4\u8bc4\u4ef7","chat_rate_good_title":"\u4e07\u5174\u4ebf\u56fe-\u597d\u8bc4\u6807\u9898","chat_rate_bad_title":"\u4e07\u5174\u4ebf\u56fe-\u5dee\u8bc4\u6807\u9898","chat_rated_good":"\u597d\u8bc4","chat_rated_bad":"\u5dee\u8bc4","chat_online_top_title":"\u4e07\u5174\u4ebf\u56fe-\u5728\u7ebf","chat_offline_top_title":"\u4e07\u5174\u4ebf\u56fe-\u79bb\u7ebf","chat_away_top_title":"\u4e07\u5174\u4ebf\u56fe-\u79bb\u5f00","chat_form_submit_success":"\u63d0\u4ea4\u6210\u529f","chat_form_another_send_button":"\u518d\u6b21\u53d1\u9001","file_upload_not_supported":"\u4e0d\u652f\u6301\u8be5\u7c7b\u578b\u6587\u4ef6","file_upload_not_allowed":"\u540e\u53f0\u4e0d\u5141\u8bb8\u8be5\u7c7b\u578b\u6587\u4ef6","file_upload_conn_error":"\u4e0a\u4f20\u6587\u4ef6\u65f6\uff0c\u7f51\u7edc\u8fde\u63a5\u5931\u8d25\u8bf7\u91cd\u8bd5","file_upload_invalid_extension":"\u8be5\u6269\u5c55\u6587\u4ef6\u4e0d\u652f\u6301","file_upload_exceed_size_limit":"\u6587\u4ef6\u5927\u5c0f\u8d85\u51fa\u9650\u5236","file_upload_internal_error":"zendesk\u5185\u90e8\u9519\u8bef","file_upload_unknown_error":"\u672a\u77e5\u9519\u8bef"},"chatbot_unique_key":"bf41c78a-62b3-ce2c-971b-b6dc832b985f","access_context":"Artificial Intelligence"},"children":[]},{"access_context":"Artificial Intelligence","access_name":"B","access_type":1,"auth_id":null,"contact_text":"contact B","display_name":"B","guide_type":2,"page_title":"\u4f60\u597d\uff0cB","sort":1,"children":[{"access_context":"Artificial Intelligence","access_name":"B1-intercom","access_type":1,"auth_id":"1127846446772957230","contact_text":"","display_name":"B1-intercom","guide_type":1,"page_title":"","sort":0,"children":[],"online_service_config":{"im_type":2,"language":"zh-cn","send_text":"","zendesk_form_empty_tip":"","zendesk_form_format_tip":"","zendesk_group_id":0,"offline_show_type":0,"offline_text":"","zendesk_support_form_show":2,"zendesk_support_form_id":0,"zendesk_prechat_form_show":2,"zendesk_prechat_form_id":0,"pre_chat_form_config":null,"offline_form_config":null,"week_text":null,"intercom_id":"oiihleky","online_translate_config":{"chat_message_placeholder":"\u8f93\u5165\u6d88\u606f","chat_network_broke_down":"\u7f51\u7edc\u65ad\u5f00\uff0c\u8bf7\u91cd\u8bd5","chat_network_try_again":"\u91cd\u8bd5"},"chatbot_unique_key":"bf41c78a-62b3-ce2c-971b-b6dc832b985f","access_context":"Artificial Intelligence"}},{"access_context":"Artificial Intelligence","access_name":"B2-\u4e0d\u63a5\u5165","access_type":1,"auth_id":"1127846446781345887","contact_text":"","display_name":"B2-\u4e0d\u63a5\u5165","guide_type":1,"page_title":"","sort":1,"children":[],"online_service_config":{"im_type":0,"language":"zh-cn","send_text":"Send","zendesk_form_empty_tip":"cannot be empty","zendesk_form_format_tip":"the format is incorrect","zendesk_group_id":0,"offline_show_type":0,"offline_text":"","zendesk_support_form_show":1,"zendesk_support_form_id":360000848172,"zendesk_prechat_form_show":2,"zendesk_prechat_form_id":0,"pre_chat_form_config":null,"offline_form_config":[{"name":"\u59d3\u540d","required":1,"type":"text"},{"name":"\u90ae\u7bb1","required":1,"type":"email"}],"week_text":null,"intercom_id":"","online_translate_config":{"chat_message_placeholder":"\u8f93\u5165\u6d88\u606f","chat_network_broke_down":"\u7f51\u7edc\u65ad\u5f00\uff0c\u8bf7\u91cd\u8bd5","chat_network_try_again":"\u91cd\u8bd5","chat_form_submit_success":"\u63d0\u4ea4\u6210\u529f","chat_form_another_send_button":"\u518d\u6b21\u53d1\u9001"},"chatbot_unique_key":"bf41c78a-62b3-ce2c-971b-b6dc832b985f","access_context":"Artificial Intelligence"}}]}],"recommend":{"recommend":[{"title":"Registration code","url":"http:\/\/support.wondershare.com\/en\/retrieve"},{"title":"Cancel subscription","url":"http:\/\/support.wondershare.com\/cancel_subscription.html"},{"title":"invoice","url":"http:\/\/support.wondershare.com\/get_invoice.html"}],"custom_function_card":0},"position":{"top":"30","right":"10","bottom":"10","left":"","mobile_top":"20","mobile_right":"20","mobile_bottom":"20","mobile_left":"20"},"online_service":{"online":"","config":{}},"domain":{"static":"http:\/\/crm-static.wondershare.cc","api":"http:\/\/crm-web.wondershare.com"}}}}
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
var folderPrefix = "http://local.zendesk/build";
var effectAssets = {
    "style": [
        {
            "src": folderPrefix + "/static/css/main.e0b53293.chunk.css",
            "param": ""
        },
        {
            "src": folderPrefix + "/static/css/style.772779a8.chunk.css",
            "param": ""
        },
        {
            "src": folderPrefix + "/static/css/vendor.96a05d1a.chunk.css",
            "param": ""
        }
    ],
    "script": [
        {
            "src": "https://images.wondershare.com/supportcenter18/test_assets/dist/web_widget/latest/assets/solid.js",
            "param": ""
        },
        {
            "src": folderPrefix + "/static/js/main.c4c647fd.chunk.js",
            "param": "value"
        },
        {
            "src": folderPrefix + "/static/js/style.2750afb8.chunk.js"
        },
        {
            "src": folderPrefix + "/static/js/vendor.8e0d41c7.chunk.js"
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

// ??????intercom????????????
function loadIntercom(APP_ID) {
    //Set your APP_ID
    var appId = "123456";// ??????APP_ID
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

// ????????????????????????
function checkIsMobile() {
    var isMobile = false;
    var client_auto_pop = getClientAutoPop();
    // ???????????????chatbot??????????????????????????????
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
    if (client_auto_pop === "true") {// ?????????????????????chatbot?????????????????????????????????????????????????????????
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

// ???????????????????????????pc???????????????????????????????????????????????????????????????????????????????????????????????????pc???????????????
function handleMobileInformation(data) {
    var information = data.information;
    if (information.mobile_theme !== undefined) {
        information.theme = information.mobile_theme;
    }
    if (information.mobile_chatbot_icon !== undefined) {
        information.chatbot_icon = information.mobile_chatbot_icon;
    }
    if (information.notice) {
        if (information.notice.mobile_show_notice !== undefined) {
            information.notice.show_notice = information.notice.mobile_show_notice;
        }
        if (information.notice.mobile_title !== undefined) {
            information.notice.title = information.notice.mobile_title;
        }
        if (information.notice.mobile_sub_title !== undefined) {
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
        if (client_auto_pop === "true" && data && data.information) {// ???????????????????????????????????????IE?????????????????????
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
        if (!checkIsMobile()) {// ??????iframe?????????????????????
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

        // ????????????iframe ?????????????????????????????????
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
        url: url// ?????????url??????
    }, function (res) {
        // console.log(res);
        // ??????html????????????meta?????????????????????
        insertMeta();
        if (checkIsMobile()) {
            console.log("this is mobile");
            // ???????????????????????????????????????style??????
            insertMobileStyleElement(head0);
        } else {
            console.log("this is pc web");
        }
        try {
            var parseRes = JSON.parse(res);
            if (parseRes.code === 0) {
                var data = config.is_mock ? JSON.parse(getAssetsData()).data:parseRes.data;// ??????is_mock?????????????????????????????????????????????????????????
                // ???????????????????????????pc????????????????????????
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
                // ???????????????????????????pc????????????????????????
                handlePosition(data);
                console.log("after handlePosition data", data);
                if (!checkIsMobile()) {
                    insertWebStyleElement(data);
                }
                data.chatbot_unique_key = keyStr.split("=")[1];// chatbot_unique_key????????????????????????key
                data.client_chatbot_info = getCurrentHtmlParamsObj();// ??????????????????html?????????????????????????????????window???????????????????????????react-iframe-chatbot
                window.EXP_CHATBOT_PARAMS = data;
                window.ZENDESK_ACCOUNT_KEY = config.zendesk_account_key;
                try {
                    findZendeskJsCount++;
                    sessionStorage.setItem('findZendeskJsCount', findZendeskJsCount);
                    console.log('zChat', zChat);
                    window.EXP_CHATBOT_ZCHAT = zChat;
                    sessionStorage.setItem('findZendeskJsCount', 0);// ???????????????zChat???????????????findZendeskJsCount????????????
                } catch (err) {
                    // ???????????????????????????css???js?????????????????????zChat???????????????????????????????????????
                    console.error('=====================================>zChat error');
                    if (findZendeskJsCount < 50) {
                        getStaticAssetsByKey(keyStr, head0, body0, html0, iframe);
                        return;
                    } else {
                        // ??????????????????50???????????????zChat????????????????????????????????????
                        console.error('=====================================>zChat web sdk js not found (50 times)');
                        // ??????????????????50???????????????zChat???????????????????????????findZendeskJsCount????????????
                        sessionStorage.setItem('findZendeskJsCount', 0);
                    }
                }

                var staticUrl = "";
                if (data && data.information && data.information.domain && data.information.domain.static) {
                    staticUrl = data.information.domain.static;
                }
                // var assets = data.assets;// ????????????
                var assets = effectAssets;// ????????????
                // var assets = config.is_mock ? getStaticFiles(parseRes.assets):data.assets;// ??????is_mock?????????????????????????????????????????????????????????
                // ??????IE?????????????????????IE????????????????????????
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
                    // swiper.css?????????chatbot?????????????????????????????????chatbot??????????????????????????????????????????chatbot?????????????????????????????????????????????????????????????????????
                    dynamicLoading.css(config.swiper_css_path, head0, staticUrl);
                    var links = assets.style;
                    for (var i = 0; i < links.length; i++) {
                        dynamicLoading.css(links[i].src, head0, staticUrl);
                    }
                }
                if (assets.script && assets.script.length > 0) {
                    // jquery.js???swiper.js?????????chatbot????????????js?????????????????????chatbot??????????????????????????????????????????chatbot?????????????????????????????????????????????????????????????????????
                    dynamicLoading.js(config.jquery_js_path, body0, staticUrl);
                    dynamicLoading.js(config.swiper_js_path, body0, staticUrl);
                    var scripts = assets.script;
                    for (var i = 0; i < scripts.length; i++) {
                        if (scripts[i].src && scripts[i].src.indexOf("runtime-main") === -1 && scripts[i].src.indexOf("precache-manifest") === -1) {
                            dynamicLoading.js(scripts[i].src, body0, staticUrl);
                        }
                    }
                    if (data && data.information && data.information.type && data.information.type === 3) {
                        // ??????type???????????????????????????????????????pardot-form.js
                        // pardot form??????????????????iframe?????????jquery.js???pardot-form.js???jquery.js?????????js??????????????????
                        dynamicLoading.js("https://pdf.wondershare.com/pfah/pardot-form.js", body0, staticUrl);
                    }
                }
                html0.appendChild(head0);
                html0.appendChild(body0);
                // ??????iphone???????????????????????????chatbot?????????????????????????????????????????????????????????srcdoc?????????
                if (!isIPhoneWxMobileDevice()) {
                    iframe.srcdoc = html0.innerHTML;// src???html?????????
                }
                // about:blank
                iframe.src = 'about:blank';
                if (!checkIsMobile()) {// ??????????????????????????????pc????????????????????????????????????????????????
                    handleIframeStyle(iframe, data);
                } else {
                    handleMobileIframeStyleIfHasLeftPosition(iframe, data);
                }
                // ?????????html????????????append???iframe?????????
                // iframe.appendChild(html0);
                // ??????IE????????????Edge??????????????????????????????????????????chatbot??????????????????doc write?????????
                if (isIE() || isEdge() || isIPhoneWxMobileDevice()) {
                    var client_auto_pop = getClientAutoPop();
                    if (client_auto_pop === "true") {// ???????????????????????????????????????IE?????????????????????
                        iframe.style.border = 'none';// ??????IE????????????????????????????????????????????????????????????????????????????????????IE???????????????zendesk????????????????????????????????????????????????
                        iframe.style.display = 'block';// ??????IE???????????????????????????zendesk?????????????????????????????????????????????iframe??????????????????????????????
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
        // console.info('????????????css', path);
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
        // console.info('????????????manifest', path);
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var link = document.createElement('link');
        link.href = getEffectivePath(path, staticUrl);
        link.rel = 'manifest';
        target.appendChild(link);
    },
    js: function (path, target, staticUrl) {
        // console.info('????????????js', path);
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var script = document.createElement('script');
        script.src = getEffectivePath(path, staticUrl);
        script.type = 'text/javascript';
        target.appendChild(script);
    }
};

// ????????????????????????js???????????????chatbot iframe
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

// ??????intercom???????????????css?????????????????????????????????icon?????????intercom???api??????
/*var body = document.getElementsByTagName('body')[0];
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = ".intercom-launcher-frame{display: none !important;}.intercom-lightweight-app{display: none !important;}";
body.appendChild(style);*/