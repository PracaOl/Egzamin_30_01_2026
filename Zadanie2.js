class BST {
	constructor() {
		this.root = null
	}
	add(key) {
		//todo

		let newNode = {
			left: null,
			key: key,
			right: null
		}

		if (this.root == null) {
			this.root = newNode
			return key
		}		

		let check = this.root
		let previous = null

		while (check != null) {
			previous = check
			if (check.key == key) {
				return false
			} else if (key < check.key) {
				check = check.left
			} else {
				check = check.right
			}
		}

		if (key < previous.key) {
			previous.left = newNode
		} else {
			previous.right = newNode
		}
		
		return key
		
		//zwracać false, gdy klucz wcześniej występował
	}
	contains(key) {
		let node = this.root
		while(node != null)
			if(key == node.key)
				return true
			else if(key < node.key)
				node = node.left
			else
				node = node.right
		return false
	}
}
