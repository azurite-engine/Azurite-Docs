/** 
 * Contains the links that are inserted into the HTML on load for tutorials website
 */

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

let legend = `
<h3>Basics</h3>
<nav>
    <ul>
        <!-- Pages -->
        <li><a href="${lp}/tutorials/tutorials.html">Introduction</a></li>
        <li><a href="${lp}/tutorials/set-a-project.html">Set up a project</a></li>
    </ul>
</nav>

<!-- <h3>Azurite elements</h3> -->
<nav>
    <ul>
        <!-- Pages -->
        
    </ul>
</nav>
`;

function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
}


add('.legend-card', legend);





