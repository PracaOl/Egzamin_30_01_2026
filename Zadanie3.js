function WskażPowtórkę(liczby) {

	if (liczby.length < 3) {
		return []
	}

	let sums = []

	for (let i = 0; i <= liczby.length - 3; i++) {
		let sum = liczby[i] + liczby[i+1] + liczby[i+2]
		
		for (let j = 0; j < i; j++) {
			if (sums[j] == sum) {
				return [j, i]
			}
		}
		sums[i] = sum
	}
	
	return []
	//return [indeks1, indeks2]
	//przy braku powtórki zwrócić pustą tablicę.
}