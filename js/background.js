/**
 * Created by yaozhen on 2014/12/9.
 */
function baidu(info, tab){
    var text = encodeURIComponent(info.selectionText);
    var url = "http://www.baidu.com/s?tn=se_chromelist&wd=" + text;
    window.open(url);
}
function create_qrc(){
    chrome.extension.sendRequest("gkghoadjnoembhnkpjkomhgngdnllngg", "createQRC", function(response) {
        console.log(response);
    });
}
//chrome.contextMenus.create({"title": "创建Todo","contexts":["selection"],"onclick":baidu});
chrome.contextMenus.create({"title": "网页二维码", "onclick": create_qrc});
create_qrc();