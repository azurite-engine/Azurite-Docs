/** 
 * Contains the links that are inserted into the HTML on load for tutorials website
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

<h3>Advanced Tutorials</h3>
<nav>
    <ul>
        <li><a href="${lp}/tutorials/custom-renderer.html">A Custom Renderer</a></li>
    </ul>
</nav>
`;

function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
}


add('.legend-card', legend);





