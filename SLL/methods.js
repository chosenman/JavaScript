function oSLL(){
	this.head = null;
	this.Node = function (val) {
		this.val = val;
		this.next = null;
	}
	this.display = function(){
		var output = '';
		var current = this.head;
		while (current){
			output += current.val + ", ";
			current = current.next;
		}
		console.log(output);
		return this;
	}
	this.afrnt = function (arg) {
		var neNode = new this.Node(arg);
		neNode.next = this.head;
		this.head = neNode;
		return this;
	}
	this.addBack = function(nodeVal){
		if (typeof(nodeVal) == "object" ) { return "i want string or number!!!" }
		if(!this.head) { this.head = new this.Node(nodeVal) return this }

		var current = this.head;
		while (current.next){
			current = current.next
		}
		current.next = new this.Node(nodeVal)
		return this;
	}
}


var mySSL = new oSLL();

mySSL.afrnt(1).afrnt(2).addBack('ima bak').display();





