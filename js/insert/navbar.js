
function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
}

var lp = ""; // Link Prefix
function getBaseUrl () {
    var base_url = window.location.origin;
    console.log(base_url)
    var host = window.location.host;
    var pathArray = window.location.pathname.split( '/' );
    var final = base_url + host + window.location.pathname;
    if (base_url.includes("github.io")) {
        lp = "/Azurite-Docs"
    } if (base_url.includes("127.0.0.1")) {
        lp = ""
    } else {
        lp =  final.slice(0, final.indexOf("Azurite-Docs") + 12);
    }
}
getBaseUrl();

let navbar = `
<!-- Top navbar navigation thing -->
<div class="navbar">
    <div class="container flexbox">
        <div class="logo">
            <h1><a href="index.html">Azurite <span>Docs</span></a></h1>
        </div>
        <nav>
            <ul>
                <li><a href="${lp}/index.html">Docs</a></li>
                <li><a href="${lp}/tutorials/tutorials.html">Tutorials</a></li>
                <li><a href="https://games-with-gabe-community.github.io/azurite-javadocs/" target="_blank">Javadocs</a></li>
            </ul>
        </nav>
    </div>
</div>
`;

add("body", navbar);