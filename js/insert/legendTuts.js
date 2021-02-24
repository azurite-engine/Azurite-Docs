/** 
 * Contains the links that are inserted into the HTML on load for tutorials website
 */
let legend = `

<h3>Basics</h3>
<nav>
    <ul>
        <!-- Pages -->
        <li><a href="tutorials-main.html">How tutorials look like</a></li>
        <li><a href="set-a-project.html">Setting up a project</a></li>
    </ul>
</nav>

<h3>Azurite elements</h3>
<nav>
    <ul>
        <!-- Pages -->
        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Rick roll</a></li>
    </ul>
</nav>

`;

function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
    console.log("Insert: \n" + html);
}


add('.legend-card', legend);





