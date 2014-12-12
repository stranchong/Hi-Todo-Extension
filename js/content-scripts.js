/**
 * Created by yaozhen on 2014/12/8.
 */
chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    if(message == 'createQRC'){
        var url = encodeURI(location.href);
        var qrcImgUrl = "http://qr.liantu.com/api.php?text=" + url;
        var xIconImgURL = chrome.extension.getURL("img/x-icon.png");
        var qrcImg = '<div id="script-qrc-div"><span id="script-qrc-xicon"><img src="' + xIconImgURL + '"/></span><img id="script-qrc-img" src="' + qrcImgUrl + '"/></div>';
        $("html body").append(qrcImg);
        sendResponse('Create QRC OK.');
    }
    else if(message == 'getPageImg'){
        var imgUrl = "http://st0.im.baidu.com/popup/resources/common/images/loading.gif";   // 默认图片
        // 找到页面中的所有图片，并遍历
        var allImg = $("body").find("img");
        for(var i in allImg){
            // 找出一个比较大的图
            if(allImg[i].clientWidth >= 100 && allImg[i].clientHeight >= 20){
                imgUrl = allImg[i].src;
                break;
            }
        }
        sendResponse(imgUrl);
    }
    else if(message == 'getPageDes'){
        var description = '';   // 默认描述
        // 找到页面中的所有p标签，并遍历
        var p = $("body").find("p");
        var pc = 0; // 计数器
        for(var i in p){
            // 过滤文字比较少的段落
            var text = $(p[i]).text();
            if(text.length > 10){
                description += text + "\n";
                pc++;
            }
            if(pc >= 3){
                break;
            }
        }
        sendResponse(description);
    }
    else if(message.method == 'todo_with_content'){
        sendResponse("创建好了Todo");
    }
});

$(document).on("click", "#script-qrc-xicon", function(){
    $("#script-qrc-div")
        .fadeOut()
        .remove();
});