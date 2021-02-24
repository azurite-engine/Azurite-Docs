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
    <br>
    <h3>Dark Theme</h3>
    <label class="switch">
    <input type="checkbox" id="dark" onclick="toggleDark()">
    <span class="slider round"></span>
    </label>

`;

function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
    console.log("Insert: \n" + html);
}


add('.legend-card', legend);


function toggleDark () {
    if (document.querySelector("#dark").checked) {
        add("head", '<link id="darkThemeImport" href="darkTheme.css" rel="stylesheet" type="text/css">');
    } else {
        document.querySelector('#darkThemeImport').remove();
    }
}


let footer = `
<!-- Footer -->
<footer class="footer">
    <div class="container grid">
        <div class="logo">
            <h1>Azurite <span>Engine</span></h1>
            <p>Copyright &copy; 2021 MIT License</p>
        </div>
        <nav>
            <ul class="flexbox">
                <li><a href="https://discord.gg/dhyV3BXkRZ" target="_blank">Discord</a></li>
                <li><a href="https://github.com/Games-With-Gabe-Community" target="_blank">Github</a></li>
                <li><a href="https://www.youtube.com/channel/UCQP4qSCj1eHMHisDDR4iPzw" target="_blank">YouTube</a></li>
                
            </ul>
        </nav>
    </div>
</footer>
`;

add("body", footer);


