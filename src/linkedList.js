
function Node(value){
	this.value = value;
	this.next = null;
}

function LinkedList(){
	this.head = null;
}

LinkedList.prototype.insertFirst = function(newValue){
	var newNode = new Node(newValue);

	if(this.head != null)	newNode.next = this.head;
	this.head = newNode;
	
	return this.head;
};

LinkedList.prototype.insertLast = function(newValue){
	var newNode = new Node(newValue);
	var currentNode = this.head;
	if(currentNode == null)	this.head = newNode;

	while(currentNode.next != null)	
		currentNode = currentNode.next;
	
	currentNode.next = newNode;
	return this.head;
};

LinkedList.prototype.insertAt = function(newValue, index){
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
		if(previousNode == null)	this.head = newNode;
		else	previousNode.next = newNode;
	}
	return this.head;
};

LinkedList.prototype.removeFirst = function(){
	var currentNode = this.head;
	if(currentNode == null) return;

	this.head = this.head.next;
	return this.head;
};

LinkedList.prototype.removeLast = function(){
	var currentNode = this.head, previousNode = null;
	if(currentNode == null) return null;

	while(currentNode.next != null){
		previousNode = currentNode;
		currentNode = currentNode.next;
	}
	if(previousNode == null) this.head = null;
	else previousNode.next = null;

	return this.head;
};

LinkedList.prototype.removeAt = function(index){
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
		if(previousNode == null)	this.head = this.head.next;
		else	previousNode.next = previousNode.next.next;	
	}
	return this.head;
};

LinkedList.prototype.displayAll = function(){
	var currentNode = this.head;
	while(currentNode!=null){
		console.log('Node is '+currentNode.value);
		currentNode = currentNode.next;
	}
};

LinkedList.prototype.contains = function(key){
	var currentNode = this.head;
	while(currentNode != null){
		if(currentNode.value == key) return true;
		currentNode = currentNode.next;
	}
	return false;
};

LinkedList.prototype.indexOf = function(key){
	var currentNode = this.head, index = 1;
	while(currentNode != null){
		if(currentNode.value == key) return index;
		currentNode = currentNode.next;
		index++;
	}
	return -1;
};

LinkedList.prototype.clear = function(){
	this.head = null;
};

LinkedList.prototype.get = function(index){
	var currentNode = this.head, 
		count = 1;

	while(count < index && currentNode.next != null){
		count++;
		currentNode = currentNode.next;
	}
	if(count != index)	throw new Error("Length of list smaller than position.");
	
	return currentNode.value;
};

LinkedList.prototype.set = function(newValue, index){
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

LinkedList.prototype.size = function(){
	var currentNode = this.head, 
		count = 0;

	while(currentNode != null){
		count++;
		currentNode = currentNode.next;
	}
	
	return count;
};


