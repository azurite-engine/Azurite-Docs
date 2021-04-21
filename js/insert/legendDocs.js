  
/** 
 * Contains the links that are inserted into the HTML on load for documentation website
 */

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

let legend = `
<h3>Getting Started</h3>
<nav>
    <ul>
        <!-- Pages -->
        <li><a href="${lp}/index.html">Introduction</a></li>
        <li><a href="${lp}/docs/contributing.html">Contributing</a></li>
        <li><a href="${lp}/docs/contributors.html">Contributors</a></li>
        <li><a href="${lp}/docs/azurite-style.html">Code Style Guidelines</a></li>
    </ul>
</nav>
<h3>Working In Azurite</h3>
<nav>
    <ul>
        <!-- Pages -->
        <li><a href="${lp}/docs/how-engine-works.html">How the engine works</a></li>
        <li><a href="${lp}/docs/structure.html">Structure of Azurite</a></li>
    </ul>
</nav>
<h3>Components</h3>
<nav>
    <ul>
        <!-- Pages -->
        <li><a href="${lp}/docs/SpriteRenderer.html">How the engine works</a></li>
    </ul>
</nav>

<h3>Generated</h3>
<nav>
    <ul>
        <!-- Pages -->
        <li><a href="${lp}/docs/SpriteRenderer.html">SpriteRenderer</a></li>
        <li><a href="${lp}/docs/AABB.html">AABB</a></li>
        <li><a href="${lp}/docs/Events.html">Events</a></li>
        <li><a href="${lp}/docs/SpriteRenderer.html">SpriteRenderer</a></li>
    </ul>
</nav>
`;

function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
}


add('.legend-card', legend);