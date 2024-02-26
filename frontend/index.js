let pvm1 = new Date()
var pvm2 = pvm1.toLocaleDateString('fi-FI')
let pvmstring = "<p>© Yritys OY "+pvm2+"</p>"
document.getElementById("footer").innerHTML = pvmstring

// YrityksenOsoite
async function yritysoy() {
	document.getElementById("root").innerHTML = "<h4>Ladataan ...</h4>"
	   let labela = `<table><tr><th>nimi</th><th>osoite</th><th>puh<th>sposti</th></tr>`
    const response = await fetch("http://localhost:3000/oy")
    const yritys = await response.json() // jeason muutetaan javascriptiksi
	// Data käydään läpi silmukassa ja jokaiselle lisätään taulukkorivi
await yritys.map(y => labela += `<tr><td>${y.nimi}</td><td>${y.osoite}</td><td>${y.puh}</td><td>${y.sposti}</td></tr>`)
labela += `</tabel>`
document.getElementById("root").innerHTML = labela
}

// Yritykseninfo
async function yritysinfo() {
	document.getElementById("root").innerHTML = "<h4>Ladataan ...</h4>"
	   let labelb = `<table><tr><th>info</th></tr>`
    const response = await fetch("http://localhost:3000/info")
    const tietoayrityksesta= await response.json() // jeason muutetaan javascriptiksi
	// Data käydään läpi silmukassa ja jokaiselle lisätään taulukkorivi
await tietoayrityksesta.map(i => labelb += `<tr><td>${i.info}</td></tr>`)
labelb += `</tabel>`

document.getElementById("root").innerHTML = labelb
	// let yritys = "<br>Yritys oy<br>Yritys OY on tietotekniikan osaamisen ammattilainen"
	// document.getElementById("root").innerHTML = yritys
}

// Henkilötietojen käsittely
async function getHenkilot() {
    document.getElementById("root").innerHTML = "<h4>Ladataan ...</h4>"
    let tabel = `<table><tr><th>etunimi</th><th>sukunimi</th><th>titteli</th></tr>`
    const response = await fetch("http://localhost:3000/henkilo")
    const henkilosto = await response.json() // jeason muutetaan javascriptiksi
// Data käydään läpi silmukassa ja jokaiselle lisätään taulukkorivi
await henkilosto.map(v => tabel += `<tr><td>${v.etunimi}</td><td>${v.sukunimi}</td>
<td>${v.titteli}</td></tr>`)
tabel += `</tabel>`
document.getElementById("root").innerHTML = tabel
}
