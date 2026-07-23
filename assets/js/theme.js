// Dark/light theme toggle. The initial theme is set by an inline script in
// <head> (to avoid a flash); this only wires up the toggle button + icon.
(function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var root = document.documentElement;

    function syncIcon() {
        var dark = root.getAttribute('data-bs-theme') === 'dark';
        btn.innerHTML = dark
            ? '<i class="bi bi-sun-fill"></i>'
            : '<i class="bi bi-moon-stars-fill"></i>';
    }

    syncIcon();

    btn.addEventListener('click', function () {
        var next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-bs-theme', next);
        localStorage.setItem('theme', next);
        syncIcon();
    });
})();
