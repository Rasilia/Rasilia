if (navigator.appName == 'Netscape')
var language = navigator.language;
else
var language = navigator.browserLanguage;
if (language.indexOf('en') > -1) document.location.href = 'lang/en/';
else if (language.indexOf('zh') > -1) document.location.href = 'lang/zh/';
else
document.location.href = 'lang/en/';