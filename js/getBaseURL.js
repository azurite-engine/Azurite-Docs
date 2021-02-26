var lp = ""; // Link Prefix
function getBaseUrl () {

    var base_url = window.location.origin;
    var host = window.location.host;
    var pathArray = window.location.pathname.split( '/' );
    var final = base_url + window.location.pathname;

    if (base_url.includes("github.io")) {
        lp = "/Azurite-Docs"
        console.log("github pages detected")
    } if (base_url.includes("127.0.0.1")) {
        lp = ""
        console.log("localhost detected")
    } else {
        lp =  final.slice(0, final.indexOf("Azurite-Docs") + 12);
        console.log("Local FS detected")
    }
}
getBaseUrl();