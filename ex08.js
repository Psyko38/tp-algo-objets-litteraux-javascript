function afficherProprietes(obj) {
	let obje = Object.keys(obj);
	console.log(obje);
	let returna = "";
	for (let i = 0; i < obje.length; i++) {
		returna += `${obje[i]}: ${obj[obje[i]]}`;
		if (i !== obje.length - 1) {
			returna += ", ";
		}
	}
	return returna;
}

console.log(afficherProprietes({ nom: "Alice", age: 30, ville: "Paris" })); // 'nom: Alice, age: 30, ville: Paris'
