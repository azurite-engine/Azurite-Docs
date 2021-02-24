//Inserter for tutorial website

function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
}

let welcomeHeader = `
<!-- Welcome Sign -->
<div class="welcome">
    <h1>Welcome To The Azurite Tutorials</h1>
    <p>Select a topic to see it's explanation.</p>
</div>
`;

add("body", welcomeHeader);
