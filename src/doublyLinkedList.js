
function Node(value){
	this.value = value;
	this.next = null;
	this.previous = null;
}

function DoublyLinkedList(){
	this.head = null;
}

DoublyLinkedList.prototype.insertFirst = function(newValue){
	var newNode = new Node(newValue);

	if(this.head != null){
		newNode.next = this.head;
		this.head.previous = newNode;
	}
	this.head = newNode;

	return this.head;
};

DoublyLinkedList.prototype.insertLast = function(newValue){
	var newNode = new Node(newValue);
	var currentNode = this.head;

	if(currentNode == null){
		this.head = newNode;
		return this.head;
	}
	while(currentNode.next != null)	
		currentNode = currentNode.next;
	
	currentNode.next = newNode;
	newNode.previous = currentNode;
	return this.head;
};

DoublyLinkedList.prototype.insertAt = function(newValue, index){
	var newNode = new Node(newValue), 
		currentNode = this.head, 
		previousNode = null,
		count = 1;
	
	while(count < index && currentNode != null){
		count++;
		previousNode = currentNode;
		currentNode = currentNode.next;
	}

	if(count != index)	throw new Error("Length of list smaller than position.");
	else{
		newNode.next = currentNode;
		if(previousNode == null){
			this.head.previous = newNode;
			this.head = newNode;
		}
		else{
			previousNode.next = newNode;
			newNode.previous = previousNode;
			currentNode.previous = newNode;
		}
	}
	return this.head;
};

DoublyLinkedList.prototype.removeFirst = function(){
	var currentNode = this.head;
	if(currentNode == null) return;

	this.head = this.head.next;
	this.head.previous = null;
	console.log('this.head '+this.head.value);
	console.log('this.head.next '+this.head.next.value);
	return this.head;
};

DoublyLinkedList.prototype.removeLast = function(){
	var currentNode = this.head, previousNode = null;
	if(currentNode == null) return null;

	while(currentNode.next != null){
		previousNode = currentNode;
		currentNode = currentNode.next;
	}
	if(previousNode == null) this.head = null;
	else{
		currentNode.previous = null;
		previousNode.next = null;
	}
	return this.head;
};

DoublyLinkedList.prototype.removeAt = function(index){
	var currentNode = this.head, 
		previousNode = null,
		count = 1;

	while(count < index && currentNode.next != null){
		count++;
		previousNode = currentNode;
		currentNode = currentNode.next;
	}

	if(count != index)	throw new Error("Length of list smaller than position.");
	else{
		if(previousNode == null){
			this.head = this.head.next;
			this.head.previous = null;
		}
		else{
			previousNode.next = currentNode.next;
			if(currentNode.next == null){
				currentNode.previous = null;
			}
			else{
				currentNode.next.previous = previousNode;
			}

			currentNode.next = null;
			currentNode.previous = null;
		}	
	}
	return this.head;
};

DoublyLinkedList.prototype.displayAll = function(){
	var currentNode = this.head;
	while(currentNode!=null){
		console.log('Node is '+currentNode.value);
		currentNode = currentNode.next;
	}
};

DoublyLinkedList.prototype.displayAllReverse = function(){
	var currentNode = this.head;
	while(currentNode.next!=null){
		currentNode = currentNode.next;
	}
	while(currentNode!=null){
		console.log('Node is '+currentNode.value);
		currentNode = currentNode.previous;
	}

};

DoublyLinkedList.prototype.contains = function(key){
	var currentNode = this.head;
	while(currentNode != null){
		if(currentNode.value == key) return true;
		currentNode = currentNode.next;
	}
	return false;
};

DoublyLinkedList.prototype.indexOf = function(key){
	var currentNode = this.head, index = 1;
	while(currentNode != null){
		if(currentNode.value == key) return index;
		currentNode = currentNode.next;
		index++;
	}
	return -1;
};

DoublyLinkedList.prototype.clear = function(){
	this.head = null;
};

DoublyLinkedList.prototype.get = function(index){
	var currentNode = this.head, 
		count = 1;

	while(count < index && currentNode.next != null){
		count++;
		currentNode = currentNode.next;
	}
	if(count != index)	throw new Error("Length of list smaller than position.");
	
	return currentNode.value;
};

DoublyLinkedList.prototype.set = function(newValue, index){
	var currentNode = this.head, 
		count = 1;

	while(count < index && currentNode.next != null){
		count++;
		currentNode = currentNode.next;
	}
	if(count != index)	throw new Error("Length of list smaller than position.");
	currentNode.value = newValue;
	return currentNode.value;
};

DoublyLinkedList.prototype.size = function(){
	var currentNode = this.head, 
		count = 0;

	while(currentNode != null){
		count++;
		currentNode = currentNode.next;
	}
	
	return count;
};
