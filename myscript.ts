var url:string = location.href;

if (url.indexOf("://ja.wikipedia.org/") != -1) {
    var redirectUrl:string = url.replace("://ja.wikipedia.org/", "://ja.m.wikipedia.org/");
    location.href = redirectUrl;
}
