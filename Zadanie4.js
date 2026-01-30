class Stos {
	constructor() {
		this.first = null
	}

	Połóż(data) {
		this.first = {
			data: data,
			next: this.first
		}
	}

	Zdejmij() {
		if (this.first == null) {
			return undefined
		}

		let removedData = this.first.data
		this.first = this.first.next

		return removedData
	}

	Zobacz() {
		if (this.first == null) {
			return undefined
		}
		return this.first.data
	}
}

let Otwarte = {
	"Przecinkowe" : "„",
	"Szeryfowe" : "»",
	"Okrągłe" : "("
}
let Zamknięte = {
	"Przecinkowe" : "”",
	"Szeryfowe" : "«",
	"Okrągłe" : ")"
}



function SprawdźNawiasy(napis) {
	let stos = new Stos()
	
	for (let i = 0; i < napis.length; i++) {
		for (let key in Otwarte) {
			if (napis[i] == Otwarte[key]) {
				stos.Połóż(napis[i])
			}
			
			if (Zamknięte[key] == napis[i]) {
				let last = stos.Zdejmij()
				if (last != Otwarte[key] && last != undefined) {
					return "Bloki są błędnie ułożone lub niepoprawnie zamknięte. Pierwszy otwarty blok to: " + last + "."
				} else if (last == undefined) {
					return "Bloki są błędnie ułożone lub niepoprawnie zamknięte. Nie zamknięty blok to: " + Zamknięte[key] + "."
				}
			}
		}
	}
	if (stos.Zobacz() != null) {
		return "Występuje niedomknięty blok: " + stos.Zobacz() + "."
	}
	return "Bloki są poprawnie domknięte."
}
