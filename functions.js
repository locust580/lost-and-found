//vars for item adding function
var percentLeft = 8;
var percentTop = 50;
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
	idForItem = itemBox.id
	const figure = itemBox.appendChild(document.createElement("figure"));
	figure.className = "figure"
	const previewImg = figure.appendChild(document.createElement("img"));
	previewImg.className = "itemPreview";
	previewImg.id = "previewImg" + itemCount
	const caption = figure.appendChild(document.createElement("figcaption"))
	caption.id = "caption" + itemCount
	const formInputLabel = itemBox.appendChild(document.createElement("label"));
	formInputLabel.innerHTML  = "Upload Image";
	formInputLabel.className = "formInputLabel";
	const formInput = formInputLabel.appendChild(document.createElement("input"));
	formInput.className = "form-input";
	formInput.setAttribute("type", "file");
	formInput.setAttribute("accept", "image/*");
	formInput.setAttribute("onchange", `showPreview(event, ${itemCount});`);
	const labelInputLabel = itemBox.appendChild(document.createElement("label"));
	labelInputLabel.className = "labelInputLabel";
	labelInputLabel.innerHTML = "Select Item: "
	const labelInput = labelInputLabel.appendChild(document.createElement("select"))
	labelInput.className = "label-input"
	labelInput.setAttribute("onchange", `editLabel(event, ${itemCount})`);
	labelInput.id = "label" + itemCount
	const empty = labelInput.appendChild(document.createElement("option"))
	empty.innerHTML = ""
	const jacket = labelInput.appendChild(document.createElement("option"))
	jacket.innerHTML = "Jacket"
	const pants = labelInput.appendChild(document.createElement("option"))
	pants.innerHTML = "Pants"
	const jewelery = labelInput.appendChild(document.createElement("option"))
	jewelery.innerHTML = "Jewelery"
	const shoes = labelInput.appendChild(document.createElement("option"))
	shoes.innerHTML = "Shoes"
	const hat = labelInput.appendChild(document.createElement("option"))
	hat.innerHTML = "Hat"
	const other = labelInput.appendChild(document.createElement("option"))
	other.innerHTML = "Other"
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
	}
};

function editLabel(event, itemNum) {
	const figCapId = "caption" + itemNum;
	const labelId = "label" + itemNum;
	const label = document.getElementById(labelId).value;
	document.getElementById(figCapId).innerHTML = label;
};

function checkPassword(){
	if(document.getElementById('password').value == 'wala'){
		location.href = "itemadd.html";
	} else {
		return false;
	}
	return false
}

/*
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 200;
canvas.height = 150;

ctx.drawImage(document.getElementById(idForImg), 0, 0, canvas.width, canvas.height);
const dataURI = canvas.toDataURL();
preview.src = dataURI

*/