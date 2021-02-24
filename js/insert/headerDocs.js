//Inserter for documentation website

function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
    console.log("Insert: \n" + html);
}

let welcomeHeader = `
<!-- Welcome Sign -->
<div class="welcome">
    <h1>Welcome To The Azurite Documentation</h1>
    <p>Select a page to see it's documentation.</p>
</div>
`;

add("body", welcomeHeader);
