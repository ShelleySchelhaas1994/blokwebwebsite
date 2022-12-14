# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details >
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Shelley Schelhaas

  #### Je startniveau:
  Ik zou zeggen blauw, maar ga graag voor rood 

  #### Je focus:
  Surface plane
 
</details>





## Je website

<details>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.vedder-vedder.com/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Vedder & Vedder homepage:
  <img src="readme-images/veddervedderpaginaeen.png" width="375px" alt="Dit is de homepage van Vedder & Vedder">

  #### Screenshot(s) van de tweede pagina (small screen):
  Vedder & Vedder artikelpagina:
  <img src="readme-images/veddervedderpaginatwee.png" width="375px" alt="Op deze pagina worden items weergegeven">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  #### Screenreader
  * Bij het kiezen van een product is het niet mogelijk om met de screenreader optie een anders soort materiaal, lengte etc. te kiezen via het drowpdown menu. 
  * Er is geen hover state voor het menu, je gaat direct naar de product pagina.
  * De linkjes vind ik duidelijk aangezien je hier de naam van het product en de vanaf prijs hoort. 
  
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
  - De code moet herschreven worden waardoor het menu openklapt en je hierdoor heen kan door omhoog en omlaag
  - Dit kan volgens Sanne opgelost worden via JavaScript

  #### Muis en Toetsenbord 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Motoriek (shocks, elastiekjes)
  * De website is redelijk goed te bedienen tijdens de shocks en met de elastiekjes om. Dit aangezien de buttons/knoppen vrij groot zijn en je hier dus goed om kan klikken. 


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  * Door de wazige bril is het lastig om de tekst te lezen op de website aangezien dit erg dun is. De koppen zijn inprincipe wel goed leesbaar. 

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 2e werkgroep</summary>

  ### Pagina 1: 
  <img src="readme-images/breakdown-homepagina.png" width="375px" alt="breakdown van de hele pagina">

  ### Pagina 2: 
   <img src="readme-images/breakdown-pagina-twee.png" width="375px" alt="breakdown van de hele pagina">
</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

  ### Stand van zaken
De verwachting ging beter dan gedacht bij mijn eerste voortgang. Vanaf het begin ben ik gestart met mijn HTML en ben nu begonnen met mijn CSS. Ik merk dat ik soms moeite heb met de verschillende selectoren en het omdraaien van volgordes van de HTML in CSS. 


  ### Agenda voor meeting
  samen met je groepje opstellen
  - Elaine: Hamburger Menu | Position Fixed 
  - Shelley: Verplaatsen Container CSS | Hamburger Menu 
  - Lisanne: Nog werken aan HTML
  - Karenza: Geen vragen

  ### Verslag van meeting
  - Goede voortgang, verder gaan met het hamburgermenu maken en Javascript inzetten. 
  - H1 maar eenmalig gebruiken 
  - Gebruik maken van Aria Labels. 

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
  De week ging over het algemeen goed! Het is gelukt om een carousel te maken met flex en grid. Het enige wat ik nog lastig vind is het juist positioneren van het grid. 


  ### Agenda voor meeting
  samen met je groepje opstellen

  - Elaine: Button verplaatsen | Javascript textcontent met carousel
  - Shelley: Display Grid en posities van de children correct neerzetten
  - Lisanne: HTML nog net zo ver
  - Karenza: Geen vragen


  ### Verslag van meeting
  Tevreden met de voortgang. Het gaat de goede kant op, uitleg gekregen over het grid en het beter positioneren hiervan. 

  - CSS opruimen en custom properties toepassen 
  - Grid kloppend laten maken in de "Best Seller" section

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Het testen ging over het algemeen goed. Ik heb de links interactiever gemaakt dan op de originele website zodat de gebruiker door heeft dat het klikbaar is en hier een response voor krijgt. 
  
  De originele website heeft geen darkmode en ik wil hier nog mee aan de slag. 

  #### Screenreader
  1. Ik moet nog een alt text toevoegen aan de navigatie, nu krijgt de gebruiker met screenreader hier geen informatie over waar hij/zij zich bevindt. 
  
  ALT TEXT:
  <img src="readme-images/alttext.png" width="375px" alt="alt text">

  2. Ik ben tevereden over de rest van de screenreader, ik kan zien dat mijn HTML goed is opgebouwd en de structuur visueel goed is aangepast met CSS (flex/grid). 

  1. Punt 1 kan eenvoudig worden toegevoegd door de Alt text in te vullen. 

  #### Muis en Toetsenbord 
  1. Het menu tabt weg omdat deze buiten de pagina staat  wanneer er niet op geklikt wordt. Deze tabs zie je dus niet in het beelscherm tenzij het menu geopend is. 

  2. De afbeeldingen en h3s zijn niet tabbaar in de section van: "Best  Sellers". 

  1. Punt 1 is op te lossen met Javascript. Ik ga nog even onderzoeken of dit mij lukt, maar als dit niet lukt was dit ook geen probleem. 

  2. Punt 2 is op te lossen door linkjes te maken van de h3's en 


  #### Motoriek (shocks, elastiekjes)
  1. <b>Shocks:</b> Het viel op dat het scrollen prima ging, ook door het carousel.  Wellicht is het een optie om toch nog extra knoppen toe te voegen  zodat je hier ook doorheen kan klikken i.p.v. slepen of vegen met het trackpad. Verder zijn de: shop nu button en de footer erg klein en moeilijk klikbaar. De text van de links is groot genoeg maar hier kan misschien nog wat padding-top toegevoegd worden zodat het veld groter wordt waarop geklikt kan worden en dit visueel niet zichtbaar is. 
  
  SHOP NU:
  <img src="readme-images/shopnubutton.png" width="250px" alt="shop nu button">

  LINKS:
  <img src="readme-images/groottelink.png" width="250px" alt="de klikbare link">

  2. <b>Ballon:</b> Het viel op dat de tekst van "over ons" nu aan de lange kant is. Misschien is het een goede optie om hier eerder een lees meer optie van te maken. Mensen haken natuurlijk sowieso snel af wanneer ze veel tekst moeten lezen. Voor de screenreader zou je hier een class en span aan toe kunnen voegen waarbij dit visueel verdwijnt maar de informatie nog wel beschikbaar is zonder verder te klikken. 


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  1. <b>Blur:</b> De blur zorgt ervoor dat erg veel onleesbaar wordt. De headers zijn leesbaar maar de rest van de tekst valt weg, de header voor Kindercollectie is wel heel erg onduidelijk. De Footer is sowieso te klein voor  mensen met deze beperking. Het is mogelijk dit op te lossen door een extra modus toe te voegen zoals de darkmodus maar dan dikkere en grotere tekst te gebruiken, maar ik zou deze mensen in principe de screenreader aanbevelen. 

  2. <b>Contrast:</b> De kleuren van de huisstijl zijn over het algemeen goed qua contrast, het is voor mij belangrijk dat ik goed ga kijken naar het contrast voor de dark mode aangezien de website dit nog niet heeft en ik dit zelf moet gaan inschatten. Dit kan ik doen met behulp van de inspector.  
</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  Pagina 1 is zo goed als af qua styling, ik moet alleen nog aan de bak met surface plane en/of responsive. Ik ben begonnen met de tweede pagina, maar hier loop ik even vast met het carouselletje, ik ben meerdere youtube video's aan het kijken maar kom er niet uit dit op te lossen zonder een class en/of div te gebruiken wanneer ik javascript in zou willen zetten.  

  ### Agenda voor meeting
  samen met je groepje opstellen

  - Elaine: Hoe link je een a href naar een section zonder class/id voor skip content
  - Shelley: Mag ik voor de carousel van mijn productpagina (column carousel) gebruik maken van  div & class? Ik heb tutorials online gekeken en kom er niet uit aangezien ze dit overal toevoegen (https://www.youtube.com/watch?v=9HcxHDS2w1s&ab_channel=WebDevSimplified). 
  - Karenza: Graag extra verduidelijking CSS grid & flexbox + fonts. 
  - Lisanne: - gestopt - 


  ### Verslag van meeting

  - Voortgang ging goed. Akkoord voor carousel met div/class van Sanne. 
  - Grid en flex nogmaals doorgelopen voor Karenza.  

</details>





## Eindgesprek (week 5)

<details open>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/uitkomst-pagina-een.png" width="375px" alt="uitomst pagina een">
  
  <img src="readme-images/uitkomst-pagina-twee.png" width="375px" alt="uitomst pagina twee">

  ### Dit ging goed/Heb ik geleerd: 
  Ik had niet verwacht dat ik het zo leuk zou vinden en hier een hele dag aan kon zitten. De tijd 
  vliegt letterlijk voorbij wanneer je aan het coderen bent. Over het algemeen viel het me dus ook erg mee. 

  Punten die goed gingen:
  
  - Het toevoegen van before & after.  
  <img src="readme-images/toevoegen-before-after.png" width="375px" alt="before en after">

  - Grid, Flexbox en position heb ik redelijk onder de knie.
  <img src="readme-images/positioneren-grid-flex.png" width="375px" alt="positioneren, grid en flex">

  - De styling aanpassen van het origineel 
  <img src="readme-images/eigen-styling.png" width="375px" alt="styling aanpassen">

  - Dark mode - maar let vooral niet op de kleur ik had helaas geen tijd meer om dit perfect te maken, maar weet wel hoe het werkt. 
  <img src="readme-images/dark-vs-light.png" width="375px" alt="dark vs light mode">

  ### Dit was lastig/Is niet gelukt:
  - Ik vond het lastig om Javascript toe te passen. Het carousel op de product pagina is gelukt, maar de loop werkt alleen met next en niet met prev.
  <img src="readme-images/js-loop-werkt-niet.png" width="375px" alt="bummer">

  Verder is eigenlijk alles uiteindelijk wel gelukt wat ik heb geprobeerd. 


</details>





## Bronnenlijst

<details>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. Sanne van 't Hoofd - Front End Development leraar - Hulp bij hamburger menu, grid en de link met underline
  2. Kyle Cook - Youtuber - Gebruikt voor Javascript Carousel https://www.youtube.com/watch?v=9HcxHDS2w1s&ab_channel=WebDevSimplified
  3. CSS-tricks - A Complete Guide to Flexbox - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  4. CSS-tricks - A Complete Guide to Grid - https://css-tricks.com/snippets/css/complete-guide-grid/ 

</details>