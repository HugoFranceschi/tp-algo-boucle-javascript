function multiplyArray(arr, multiplier) {
	const nouveauTableau = [];

	for (let i = 0; i < arr.length; i++) {
		nouveauTableau.push(multiplier * arr[i]);
	}

	return nouveauTableau;
}

// Exemples de test :
console.log(multiplyArray([1, 2, 3], 2)); // Résultat attendu : [2, 4, 6]
console.log(multiplyArray([4, 0, -3], 3)); // Résultat attendu : [12, 0, -9]
