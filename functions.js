//vars for item adding function
var percentLeft = 8;
var percentTop = 25;
var itemCount = 0;
var idForItem = "";

function itemadd(){
	const item = document.getElementById("itemClump").appendChild(document.createElement('div'));
	item.id = 'item' + itemcount;
	idForItem = item.id
	document.getElementById(idForItem).style.backgroundColor = "grey";
	document.getElementById(idForItem).style.width = "15%";
	document.getElementById(idForItem).style.height = "15%";
	document.getElementById(idForItem).style.position = "absolute";
		if (percentleft !== 77){
			document.getElementById(idForItem).style.left = percentLeft + "%";
			document.getElementById(idForItem).style.top = percentTop + "%";
			percentleft += 23
		} else {
			percentleft = 8
			percenttop += 25
			document.getElementById(idForItem).style.left = percentLeft + "%";
			document.getElementById(idForItem).style.top = percentTop + "%";
			percentLeft += 23
		}
	itemcount +=1
}


