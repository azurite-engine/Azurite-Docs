/** 
 * Contains the links that are inserted into the HTML on load for tutorials website
 */
let legend = `

<h3>Basics</h3>
<nav>
    <ul>
        <!-- Pages -->
        <li><a href="tutorials-main.html">Introduction</a></li>
        <li><a href="set-a-project.html">Setting up a project</a></li>
    </ul>
</nav>

<h3>Azurite elements</h3>
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





