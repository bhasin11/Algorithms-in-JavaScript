
function queue(){
	this.size = 0;
	this.data = [];
}

queue.prototype.offer = function(newData){
	this.data[this.size++] = newData;
}

queue.prototype.poll = function(){
	if(!queue.prototype.isEmpty()){
		this.size--;
		var deletedData = this.data[0];
		this.data.shift();
		return deletedData;
	}
}

queue.prototype.peek = function(){
	if(!queue.prototype.isEmpty())
		return this.data[this.size-1];
}

queue.prototype.isEmpty = function(){
	return this.size == 0;
}

