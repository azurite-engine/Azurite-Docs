function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
    console.log("Insert: \n" + html);
}

let navbar = `
<!-- Top navbar navigation thing -->
<div class="navbar">
    <div class="container flexbox">
        <div class="logo">
            <h1>Azurite <span>Docs</span></h1>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Docs</a></li>
                <li><a href="tutorials-main.html">Tutorials</a></li>
                <li><a href="https://games-with-gabe-community.github.io/azurite-javadocs/" target="_blank">Javadocs</a></li>
            </ul>
        </nav>
    </div>
</div>
`;

add("body", navbar);

let welcomeHeader = `
<!-- Welcome Sign -->
<div class="welcome">
    <h1>Welcome To The Azurite Documentation</h1>
    <p>Select a page to see it's documentation.</p>
</div>
`;

add("body", welcomeHeader);
