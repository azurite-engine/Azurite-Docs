/** 
 * Contains the links that are inserted into the HTML on load for tutorials website
 */

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

<h3>Advanced</h3>
<nav>
    <ul>
        <li><a href="${lp}/tutorials/custom-renderer.html">A Custom Renderer</a></li>
    </ul>
</nav>

<h3>Contributing</h3>
<nav>
    <ul>
        <!-- Pages -->
        <li><a href="${lp}/tutorials/creating-docs.html">Creating docs</a></li>
    </ul>
</nav>
`;

function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
}


add('.legend-card', legend);





