// variabili
let varName, varSurname, varColor, varPassword;
const varNumber = 21;

// richiesta nome
varName = prompt ("Inserisci il tuo nome")

// richiesta cognome
varSurname = prompt ("Inserisci il tuo cognome")

// richiesta colore 
varColor = prompt ("Inserisci il tuo colore preferito")

// genera password
varPassword =
`
 ${varName}${varSurname}${varColor}${varNumber}
`

// riferimento password
document.getElementById("password").innerHTML = varPassword