/*FIT e-mail

Pokud se přihlásíte jako student například na Fakultu Informačních Technologí ČVUT, bude vám informačním systémem automaticky přidělen e-mail, který se vytvoří z vašeho jména a příjmení. 
Z vašeho příjmení se vezme pět prvních znaků a z vašeho křestního jména první tři. Výsledek se převede na malá písmena a připojí se doména fit.cvut.cz. Pro jméno Jana Procházková tak 
vznikne adresa prochjan@fit.cvut.cz.

Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno a pak příjmení, obojí bez diakritiky. Pomocí metody trim zajistěte, že ve jméně ani příjmení nebudou na 
začátku ani na konci žádné bílé znaky. Pomocí metody slice vyřízněte ze jména i příjmení příslušné části. Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.*/


//1. Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno a pak příjmení (obojí bez diakritiky). Pomocí metody trim zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky.

document.body.innerHTML += `<h1>FIT e-mail</h1>`;

const jmeno = prompt ("Zadejte vaše jméno (bez diakritiky)").toLowerCase().trim()

const prijmeni = prompt ("Zadejte vaše příjmení (bez diakritiky)").toLowerCase().trim()

//2. Pomocí metody slice vyřízněte ze jména i příjmení příslušné části.

const userName = prijmeni.slice(0,5) + jmeno.slice(0,3)

const atIndex ="@"

const domain = "fit.cvut.cz"

//3. Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.

const email = `
<email>
<p>Byl vám vygenerován tento e-mail: ${userName}${atIndex}${domain}</p>
</email>
`;

document.body.innerHTML += email


