if (navigator.appName == 'Netscape')
var language = navigator.language;
else
var language = navigator.browserLanguage;
if (language.indexOf('zh') >-1) document.location.href = 'zh_cn.html';
else
document.location.href = 'zh_cn.html'