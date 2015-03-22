var url = location.href;
if (url.indexOf("://ja.wikipedia.org/") != -1) {
    var redirectUrl = url.replace("://ja.wikipedia.org/", "://ja.m.wikipedia.org/");
    location.href = redirectUrl;
}
//# sourceMappingURL=myscript.js.map