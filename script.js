const data = {
    "Geodetic Converters": [
        { "name": "Cartesian to Geodetic (ECEF → Lat/Long)", "url": "tools/c2g.html" },
        { "name": "Geodetic to Cartesian (Lat/Long → ECEF)", "url": "tools/g2c.html" }
    ],
    "Engineering Hub": [
        { "name": "Professional Surveying Tools", "url": "tools/welcome.html" },
        { "name": "Engineering Documentation", "url": "notes/getting-started.html" }
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
