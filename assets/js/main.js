// Zapamätanie zvoleného jazyka
document.querySelectorAll('a[data-lang]').forEach(function (a) {
    a.addEventListener('click', function () {
        try {
            localStorage.setItem('lang', a.dataset.lang);
        } catch (e) {
        }
    });
});
