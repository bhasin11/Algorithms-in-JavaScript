
function circularQueue(size){
	this.length = size;
	this.data = [];
	this.tail = 0;
	this.head = 0;
}

circularQueue.prototype.offer = function(newData){
	if(this.tail == this.length)	this.tail = 0;
 	if(this.data[this.tail] != undefined || this.length == 0){
 		console.log('Queue Full');
		return;
	}
	this.data[this.tail] = newData;
	this.tail++;
	console.log('Added Successfully');
}

circularQueue.prototype.poll = function(){
	if(this.isEmpty()){
		console.log('Queue Empty');
		return;
	}
	var deletedData = this.data[this.head];
	this.data[this.head++] = undefined;
	return deletedData;
}

circularQueue.prototype.peek = function(){
	if(this.isEmpty()){
		console.log('Queue Empty');
		return;
	}
	return this.data[this.head];
}

circularQueue.prototype.isEmpty = function(){
	if(this.head == this.length)	this.head = 0;
	if(this.data[this.head] == undefined || this.length == 0)
		return true;
	
	return false;
}



