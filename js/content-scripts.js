/**
 * Created by yaozhen on 2014/12/8.
 */
chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    if(message == 'createQRC'){
        var url = encodeURI(location.href);
        var qrcImgUrl = "http://qr.liantu.com/api.php?text=" + url;
        var qrcImg = '<img id="script_qrc" src="' + qrcImgUrl + '" alt=""/>';
        $("html").append(qrcImg);
        sendResponse('Create QRC OK.');
    }
    else{
        sendResponse('Create QRC fail.');
    }
});