const data = {
    "Conversion Tools": [
        { "name": "Cartesian → Geodetic", "url": "tools/c2g.html" },
        { "name": "Geodetic → Cartesian", "url": "tools/g2c.html" }
    ],
    "Library & Resources": [
        { "name": "Surveying Manual (PDF)", "url": "assets/docs/Surveying_Manual.pdf" },
        { "name": "Hydraulics Essentials (PDF)", "url": "assets/docs/Hydraulics_Essentials.pdf" },
        { "name": "Reference Image", "url": "assets/images/reference-img.jpg" }
    ],
    "System": [
        { "name": "System Welcome", "url": "tools/welcome.html" },
        { "name": "Getting Started", "url": "notes/getting-started.html" }
    ]
};

function init() {
    const menu = document.getElementById('nav-menu');
    menu.innerHTML = ''; 

    for (const category in data) {
        const section = document.createElement('div');
        const title = document.createElement('h3');
        title.textContent = category;
        section.appendChild(title);

        data[category].forEach(item => {
            const link = document.createElement('a');
            link.className = 'nav-link';
            link.href = '#';
            link.textContent = item.name;
            link.dataset.url = item.url;
            link.onclick = (e) => {
                e.preventDefault();
                document.getElementById('tool-view').src = item.url;
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('is-active'));
                link.classList.add('is-active');
            };
            section.appendChild(link);
        });
        menu.appendChild(section);
    }
    const defaultUrl = data["System"][0].url;
    document.getElementById('tool-view').src = defaultUrl;
    document.querySelectorAll('.nav-link').forEach(l => {
        if (l.dataset.url === defaultUrl) l.classList.add('is-active');
    });
}

init();

// Sidebar toggle functionality
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});
