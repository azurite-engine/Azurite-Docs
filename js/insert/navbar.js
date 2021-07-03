
function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
}

// var lp = ""; // Link Prefix
// function getBaseUrl () {

//     var base_url = window.location.origin;
//     console.log("base URL: " + base_url)
//     var host = window.location.host;
//     console.log("Host: " + host)
//     var pathArray = window.location.pathname.split( '/' );
//     var final = base_url + window.location.pathname;
//     console.log("final: " + final)

//     if (base_url.includes("github.io")) {
//         lp = "/Azurite-Docs"
//         console.log("github pages detected")
//     } if (base_url.includes("127.0.0.1")) {
//         lp = ""
//         console.log("localhost detected")
//     } else {
//         lp =  final.slice(0, final.indexOf("Azurite-Docs") + 12);
//         console.log("Local FS detected")
//     }
// }
// getBaseUrl();

let navbar = `
<!-- Top navbar navigation thing -->
<div class="navbar">
    <div class="container flexbox">
        <div class="logo">
            <h1><a href="${lp}/index.html">Azurite <span>Docs</span></a></h1>
        </div>
        <nav>
            <ul>
                <li><a href="${lp}/index.html">Docs</a></li>
                <li><a href="${lp}/tutorials/tutorials.html">Tutorials</a></li>
                <li><a href="https://azurite-engine.github.io/azurite-javadocs/" target="_blank">Javadocs</a></li>
            </ul>
        </nav>
    </div>
</div>
`;

add("body", navbar);
