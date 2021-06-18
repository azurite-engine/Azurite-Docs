let apiURL = "https://api.github.com/repos/Games-With-Gabe-Community/Azurite/contributors?q=contributions&order=desc"

async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}

function hideloader() {
    // document.getElementById('loading').style.display = 'none';
}

// Manually added list
let ml = [
    "carsonBurke"
]

// Credits
let c = {
    LWJGL : "Used to interface with openGL and GLFW"
};


function loadContributors () {
    getapi(apiURL);
}

async function show (data2) {
    var list = ``;
    // list += `<h3>Thanks to</h3>\n`;

    const response = await fetch(`https://api.github.com/orgs/Games-With-Gabe-Community/members`);
    var data = await response.json();

    list += `<h4>Managers</h4>`
    for (const i in data) {
        // list += `<li>${data[i].login}</li>\n`;
        list += 
        `
        <a target="_blank" classs="contribUser" href="${data[i].html_url}"><div>
            <img height="40px" src="${data[i].avatar_url}"></img>
            <span>${data[i].login}</span>
        </div></a>
        `
    }    

    list += `<br><h4>Contributors</h4>`
    var block = false
    for (const i in data2) {
        for (const j in data) {
            if (data[j].login == data2[i].login) {
                block = true
            }
        }
        if (!block) {
            list += 
            `
            <a target="_blank" classs="contribUser" href="${data2[i].html_url}"><div>
                <img height="40px" src="${data2[i].avatar_url}"></img>
                <span>${data2[i].login}</span>
            </div></a>
            `
        }
        block = false
    }    

    for (const i in ml) {
        const response = await fetch(`https://api.github.com/users/${ml[i]}`);
        var data = await response.json();
        list += 
        `
        <a target="_blank" classs="contribUser" href="${data.html_url}"><div>
            <img height="40px" src="${data.avatar_url}"></img>
            <span>${data.login}</span>
        </div></a>
        `
    }

    list += `<br><h3>Credits</h3><ul>\n`;
    for (const i in c) {
        list += `<li>${i} - ${c[i]}.</li>\n`;
    }
    list += `</ul>\n\n`;

    list += `<br>
    <p>If you are interested in contributing, please check out the <a href="https://github.com/Games-With-Gabe-Community/Azurite/blob/main/CONTRIBUTING.md">contributing guidelines</a></p>`;

    document.querySelector("#con").innerHTML += list;
}