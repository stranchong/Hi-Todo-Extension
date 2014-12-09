/**
 * Created by yaozhen on 2014/12/9.
 */
function baidu(info, tab){
    var text = encodeURIComponent(info.selectionText);
    var url = "http://www.baidu.com/s?tn=se_chromelist&wd=" + text;
    window.open(url);
}
chrome.contextMenus.create({"title": "创建Todo","contexts":["selection"],"onclick":baidu});