
// Engine Contributors
let ec = [
    "Asher",
    "Gabe",
    "VoxelRifts"
];

// Documentation contributors
let dc = {
    Tree : "Light theme, site design, documentation author",
    Asher : "Dark theme, JS, documentation author",
    Carson : "CSS animations, layout tweaks"
};

// Credits
let c = {
    LWJGL : "Used to interface with openGL and GLFW"
};

// License
let l = `
Copyright (c) 2021 GWG Community<br><br>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:<br><br>

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.<br><br>

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

function loadContributors () {
    var list = ``;
    list += `<h3>Engine</h3><ul>\n`;
    for (const i in ec) {
        list += `<li>${ec[i]}</li>\n`;
    }
    list += `</ul>\n\n`;

    list += `<br><h3>Documentation</h3><ul>\n`;
    for (const i in dc) {
        list += `<li>${i} - ${dc[i]}.</li>\n`;
    }
    list += `</ul>\n\n`;

    list += `<br><h3>Credits</h3><ul>\n`;
    for (const i in c) {
        list += `<li>${i} - ${c[i]}.</li>\n`;
    }
    list += `</ul>\n\n`;

    list += `<br><h3>MIT License</h3>${l}<br><br>`;

    document.querySelector("#con").innerHTML += list;
}
