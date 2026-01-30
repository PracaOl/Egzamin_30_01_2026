class LinkedList {
	constructor() {
		this.first = null
	}
	AddFirst(data) {
		this.first = {
		data: data,
		next: this.first
		}
	}
	RemoveFirst() {
		let oldNode = this.first
		if(oldNode == null)
			return undefined
		this.first = oldNode.next
		return oldNode.data
	}
	AddLast(data) {
		//todo
		
		let lastNode = {
		data: data,
		next: null
		}

		if (this.first == null) {
			this.first = lastNode
			return this.first.data
		}

		let lookout = this.first
		
		while (lookout.next != null) {
			lookout = lookout.next
		}
		
		lookout.next = lastNode
		return lookout.next.data
	}
}