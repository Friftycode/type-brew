# Notater om HTML, CSS og JavaScript

### **Kobling av CSS-fil**

For å koble sammen index.html og stilarket brukes koden `<link href="style.css" rel="stylesheet" />`. Dette skiller
struktur og utseende på en ryddig måte.

### **Bruk av rem**

Enheten rem er et godt valg fordi den skalerer i forhold til rot-fontstørrelsen. Dermed tilpasses nettsiden bedre dersom
brukeren endrer standard fontinnstillinger i nettleseren.

### **Font**

`font-family: system-ui, sans-serif;`
Jeg har valgt system-ui og sans-serif fordi de gir et rent og lettlest uttrykk. System-ui tilpasser seg brukerens
operativsystem, mens sans-serif sikrer lesbarhet hvis systemfonten ikke finnes.

`font-size`
Font size ser bra ut i alle instillinger for font størrelser (very small, small, medium, large, very large).

### **Active i navigasjonsmeny**

I navigasjonsmenyer brukes `class="active"` for å markere hvilken side som er aktiv. Dette viser hvordan HTML og CSS i
seg selv er statiske, og hvorfor JavaScript er nødvendig for dynamiske løsninger.

### **Variabler i CSS**

Ved å bruke variabler i CSS, for eksempel `--color-orange: #ca4a00; color: var(--color-orange);`, sikrer man konsistent
bruk av farger. Når en farge brukes flere ganger er variabler nyttige, men brukes den kun én gang er behovet mindre.

### **Lenker**

Lenker vises nederst til venstre i nettleseren på grunn av `href`. Dette er standard atferd og meningen er at det skal
være slik.

### **Hvorfor JavaScript tidlig**

JavaScript introduseres tidlig fordi HTML og CSS setter opp struktur og stil, men ikke gir dynamikk. JS gjør innhold og
funksjonalitet mer levende og interaktiv.

### **Testing**

- [x] Lint kjører uten feil `npx stylelint "css/**/*.css"`
- [x] ENdret mye CSS for å fjerne `user agent stylesheet` slik at nettleseren ikke legger til egne regler.

### **Ressurser**

- [Meny](https://www.w3schools.com/howto/howto_js_topnav.asp)
- [Bilder](https://www.w3schools.com/html/html_images.asp)
- [Tekst over bilde](https://www.w3schools.com/howto/howto_css_image_text.asp)
- [SVG Repo](https://www.svgrepo.com/)
- [SVG personvern](https://www.svgrepo.com/page/privacy-policy)
- [CSS tips about aspect-ratio, object-fit](https://wesbos.com/)
- [Design inspirasjon](https://brittanychiang.com/)
