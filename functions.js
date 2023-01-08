//vars for item adding function
var percentLeft = 8;
var percentTop = 25;
var itemCount = 0;
var idForItem = "";

/*function itemadd(){
	const item = document.getElementById("itemClump").appendChild(document.createElement('div'));
	item.id = 'item' + itemCount;
	idForItem = item.id
	document.getElementById(idForItem).style.backgroundColor = "grey";
	document.getElementById(idForItem).style.width = "15%";
	document.getElementById(idForItem).style.height = "15%";
	document.getElementById(idForItem).style.position = "absolute";
		if (percentLeft !== 100){
			document.getElementById(idForItem).style.left = percentLeft + "%";
			document.getElementById(idForItem).style.top = percentTop + "%";
			percentLeft += 23
		} else {
			percentLeft = 8
			percentTop += 25
			document.getElementById(idForItem).style.left = percentLeft + "%";
			document.getElementById(idForItem).style.top = percentTop + "%";
			percentLeft += 23
		}
	itemCount +=1
}
*/

function itemadd(){
	const itemBox = document.body.appendChild(document.createElement("div"));
	itemBox.className = "itemBox";
	itemBox.id = itemCount;
	const previewImg = itemBox.appendChild(document.createElement("img"));
	previewImg.className = "itemPreview";
	previewImg.id = "itemPreview" + itemCount
	const formInputLabel = itemBox.appendChild(document.createElement("label"));
	formInputLabel.innerHTML  = "Upload Image";
	formInputLabel.className = "formInputLabel"
	const formInput = formInputLabel.appendChild(document.createElement("input"));
	formInput.className = "form-input";
	idForItem = itemBox.id
	formInput.setAttribute("type", "file")
	formInput.setAttribute("accept", "image/*")
	formInput.setAttribute("onchange", `showPreview(event, ${itemCount});`)
		if (percentLeft !== 100){
			document.getElementById(idForItem).style.left = percentLeft + "%";
			document.getElementById(idForItem).style.top = percentTop + "%";
			percentLeft += 23
		} else {
			percentLeft = 8
			percentTop += 25
			document.getElementById(idForItem).style.left = percentLeft + "%";
			document.getElementById(idForItem).style.top = percentTop + "%";
			percentLeft += 23
		}
	itemCount +=1
}

function showPreview(event, itemNum){
	if(event.target.files.length > 0){
	  var idForImg = "previewImg" + itemNum
	  var src = URL.createObjectURL(event.target.files[0]);
	  var preview = document.getElementById(idForImg);
	  preview.src = src;
	  preview.style.display = "block";
	}
}

