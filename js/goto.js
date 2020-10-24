if (navigator.appName == 'Netscape')
var language = navigator.language;
else
var language = navigator.browserLanguage;
if (language.indexOf('en') > -1) document.location.href = 'Languages/en/MP.html';
else if (language.indexOf('zh') > -1) document.location.href = 'Languages/zh/MP.html';
else
document.location.href = 'Languages/en/MP.html';