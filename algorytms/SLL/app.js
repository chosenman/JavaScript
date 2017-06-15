function SLL(){
	this.head = null;
}
function Node(val){
	this.val = val;
	this.next = null;
}
var list = new SLL();
list.head = new Node(0);
list.head.next = new Node(1);
list.head.next.next = new Node(2);

function displayList(list){
	var output = '';
	var current = list.head;
	while (current){
		output += current.val + ", ";
		current = current.next;
	}
	return output;
}


function removeBack(list) {
	var current = list.head;
	while (current.next){
		if(current.next.next == null) {
			current.next = null
			break;
		}
		current = current.next
	}
	return list;
	// console.log(current.next)
}

function addBack(list, nodeVal){
	if (typeof(nodeVal) == "object" ) { return "i want string or number!!!" }
	if(!list.head) { list.head = new Node(nodeVal) }

	var current = list.head;
	while (current.next){
		current = current.next
	}
	current.next = new Node(nodeVal)
	return list;
}

function addToFront(list, nodeVal){
	if (typeof(nodeVal) == "object" ) {
		return "i want string or number!!!"
	}
	if(!list.head) { list.head = new Node(nodeVal)}

	var frontNode = new Node(nodeVal);
	frontNode.next = list.head;
	list.head = frontNode
	return list;
}


// console.log(displayList(list));
// console.log(removeBack(list));		// REMOVE BACK
// console.log(displayList(list))
// console.log(addBack(list,3))		// ADD BACK
// console.log(displayList(list))

// console.log(addBack(list,{}))		// Trying add not string and not number
// console.log(displayList(list))

// console.log(addToFront(list,-5))	// ADD TO FRONT
// console.log(addToFront(list,-4))
// console.log(addToFront(list,-3))
// console.log(displayList(list))




function getNodeBeforeLast(arg){
	var runner = parameter.head;
	while(runner.next.next !=null){
		runner = runner.next
	}
	return runner
}

