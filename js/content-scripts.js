/**
 * Created by yaozhen on 2014/12/8.
 */
chrome.extension.onRequest.addListener(function(message, sender, sendResponse) {
    console.log("ok");
    sendResponse('Create QRC OK.');
    //if(message == 'createQRC'){
    //    var url = encodeURI(location.href);
    //    var qrcImgUrl = "http://qr.liantu.com/api.php?text=" + url;
    //    var qrcImg = '<img style="width: 200px; height: 200px; position: fixed; top: 0; left: 0" src="' + qrcImgUrl + '" alt=""/>';
    //    $("html").append(qrcImg);
    //    sendResponse('Create QRC OK.');
    //}
    //else{
    //    sendResponse('Create QRC fail.');
    //}
});

http://stackoverflow.com/questions/14452777/is-that-possible-calling-content-script-method-by-context-menu-item-in-chrome-ex