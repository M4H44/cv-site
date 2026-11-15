# Personal Web CV / Portfolio

Personal website serving as an online CV and project portfolio. It gives recruiters and hiring managers a quick
overview of my projects, skills, education, and certificates.

**Live:** https://martinhutka.is-a.dev/

## Features

- Three language versions: Slovak (root), Czech (`cz/`), English (`en/`)
- Project overview with a screenshot gallery of the main application
- Skills, education, and certificates sections, downloadable CV in PDF
- Responsive layout (desktop, tablet, mobile)
- Accessibility and SEO basics: semantic HTML, heading order, `hreflang`, canonical URLs, Open Graph, sitemap

## Technologies

- HTML5, CSS3, a few lines of vanilla JavaScript (remembering the chosen language)
- Bootstrap 5.3 (CDN)
- Icons as inline SVG sprites (Bootstrap Icons, Devicon) instead of icon fonts
- GitHub Pages with a custom domain

## Structure

```
index.html, projects.html, skills.html,
certificates.html, education.html, contact.html   Slovak pages
cz/                                               Czech pages
en/                                               English pages
assets/css/style.css                              shared styles
assets/img/, assets/docs/                         images, CV and certificates
robots.txt, sitemap.xml
```

It is a static site without a build step: every page is plain HTML and can be opened directly.

## Quality

Checked with Lighthouse (PageSpeed Insights, November 2026): Accessibility, Best Practices, and SEO score 100
on both mobile and desktop.

## Author

**Martin Huťka** – Junior Web / Backend Developer
GitHub: https://github.com/M4H44

---

# Osobné webové CV / Portfólio

Osobná webová stránka, ktorá slúži ako online životopis a portfólio projektov. Personalistom a náborovým manažérom
dáva rýchly prehľad o mojich projektoch, zručnostiach, vzdelaní a certifikátoch.

**Živá verzia:** https://martinhutka.is-a.dev/

## Funkcionalita

- Tri jazykové verzie: slovenská (koreň), česká (`cz/`), anglická (`en/`)
- Prehľad projektov s galériou snímok z hlavnej aplikácie
- Sekcie zručnosti, vzdelanie a certifikáty, životopis na stiahnutie v PDF
- Responzívne rozloženie (desktop, tablet, mobil)
- Základy prístupnosti a SEO: sémantické HTML, poradie nadpisov, `hreflang`, kanonické adresy, Open Graph, sitemap

## Použité technológie

- HTML5, CSS3, pár riadkov čistého JavaScriptu (zapamätanie zvoleného jazyka)
- Bootstrap 5.3 (CDN)
- Ikony ako inline SVG sprity (Bootstrap Icons, Devicon) namiesto ikonových fontov
- GitHub Pages s vlastnou doménou

## Štruktúra

```
index.html, projects.html, skills.html,
certificates.html, education.html, contact.html   slovenské stránky
cz/                                               české stránky
en/                                               anglické stránky
assets/css/style.css                              spoločné štýly
assets/img/, assets/docs/                         obrázky, životopis a certifikáty
robots.txt, sitemap.xml
```

Ide o statický web bez build kroku: každá stránka je obyčajné HTML a dá sa otvoriť priamo.

## Kvalita

Overené nástrojom Lighthouse (PageSpeed Insights, november 2026): Dostupnosť, Osvedčené postupy a SEO majú skóre 100
na mobile aj desktope.

## Autor

**Martin Huťka** – Junior Web / Backend Developer
GitHub: https://github.com/M4H44
