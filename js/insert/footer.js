function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
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
                <li><a href="https://github.com/azurite-engine" target="_blank">Github</a></li>
                <li><a href="https://www.youtube.com/channel/UCQP4qSCj1eHMHisDDR4iPzw" target="_blank">YouTube</a></li>

                
                <li><label class="switch tooltip">                
                    <input type="checkbox" id="dark" onclick="toggleDark()">
                    <span class="slider round"></span>
                    <span class="tooltiptext">Dark Mode</span>
                </li></label>             
            </ul>
        </nav>
    </div>
</footer>
`;

add("body", footer);



function toggleDark () {
    if (document.querySelector("#dark").checked) {
        add("head", `<link id="darkThemeImport" href="${lp}/css/darkTheme.css" rel="stylesheet" type="text/css">`);
        localStorage.setItem("darkreader", "enabled");
    } else {
        document.querySelector('#darkThemeImport').remove();
        localStorage.setItem("darkreader", "disabled");
    }
}

function checkDarkPreferences () {
    getBaseUrl();
    if (localStorage.getItem("darkreader") == "enabled") {
        add("head", `<link id="darkThemeImport" href="${lp}/css/darkTheme.css" rel="stylesheet" type="text/css">`);
        document.querySelector("#dark").checked = true;
        // console.log("User preference dark mode enabled");
    } else {
        // document.querySelector('#darkThemeImport').remove();
        // console.log("User preference dark mode disabled");
    }
}

window.onload = checkDarkPreferences;
