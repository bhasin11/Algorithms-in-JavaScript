

function stack(){
	this.size = 0;
	this.data = [];
}

stack.prototype.push = function(newData){
	this.data[this.size++] = newData;
}

stack.prototype.pop = function(){
	if(!this.isEmpty()){
		this.size--;
		var deletedData = this.data[this.size];
		delete this.data[this.size];
		return deletedData;
	}
}

stack.prototype.peek = function(){
	if(!this.isEmpty())
		return this.data[this.size-1];
}

stack.prototype.isEmpty = function(){
	return this.size == 0;
}
