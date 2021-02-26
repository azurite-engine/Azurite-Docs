
function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
}

let navbar = `
<!-- Top navbar navigation thing -->
<div class="navbar">
    <div class="container flexbox">
        <div class="logo">
            <h1><a href="index.html">Azurite <span>Docs</span></a></h1>
        </div>
        <nav>
            <ul>
                <li><a href="/index.html">Docs</a></li>
                <li><a href="/tutorials/tutorials.html">Tutorials</a></li>
                <li><a href="https://games-with-gabe-community.github.io/azurite-javadocs/" target="_blank">Javadocs</a></li>
            </ul>
        </nav>
    </div>
</div>
`;

add("body", navbar);