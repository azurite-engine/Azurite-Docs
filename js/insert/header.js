//Inserter for documentation website

function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
}

var welcomeHeader = "";
function setHeader (header, subheader) {
    
    welcomeHeader = `
    <!-- Welcome Sign -->
    <div class="welcome">
        <h1>` + header + `</h1>
        <p>` + subheader + `</p>
    </div>
    `;

    add("body", welcomeHeader);
}


