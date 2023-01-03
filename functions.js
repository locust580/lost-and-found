//vars for item adding function
var percentleft = 8;
var percenttop = 25;
var itemcount = 0;

/*function buttonpress(button, url) {
	onclick(button, )
}
*/

function itemadd(){
	eval("var item" + itemcount + " = document.createElement('div')");
	eval("item" + itemcount + ".classlist.add = 'item'");
	eval("item" + itemcount + ".id = 'item" + itemcount +"'");
	eval("document.getElementById(item" + itemcount +").style.background-color = grey");
	eval("document.getElementById(item" + itemcount +").style.width = 15%");
	eval("document.getElementById(item" + itemcount +").style.height = 15%");
	eval("document.getElementById(item" + itemcount +").style.position = absolute");
		if (percentleft != 77){
			eval("document.getElementById(item" + itemcount +").style.left = " + percentleft);
			eval("document.getElementById(item" + itemcount +").style.top = " + percenttop);
			percentleft += 23
		} else {
			percentleft = 8
			percenttop += 25
			eval("document.getElementById(item" + itemcount +").style.left = " + percentleft);
			eval("document.getElementById(item" + itemcount +").style.top = " + percenttop);
		}
	itemcount +=1
}


