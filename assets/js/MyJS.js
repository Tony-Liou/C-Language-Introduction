// JavaScript Document

var ChapterName = ["Home", "Array", "Basic IO", "Call by address", "Call by value", "For loop", "Function",
				   "If else 1", "If else 2", "If else 3", "Pointer", "Print Style", "Recursive function", "Structure", "Switch", "While"];
// SVG path 
var path = [ // The relative path
	["images/NDHU_logo.svg"], // Home 
	["SVG/Array/Array_0.svg",
	 "SVG/Array/Array_1.svg",
	 "SVG/Array/Array_2.svg",
	 "SVG/Array/Array_3.svg",
	 "SVG/Array/Array_4.svg",
	 "SVG/Array/Array_5.svg",
	 "SVG/Array/Array_6.svg",
	 "SVG/Array/Array_7.svg",
	 "SVG/Array/Array_8.svg",
	 "SVG/Array/Array_9.svg",
	 "SVG/Array/Array_10.svg",
	 "SVG/Array/Array_11.svg",
	 "SVG/Array/Array_12.svg",
	 "SVG/Array/Array_13.svg",
	 "SVG/Array/Array_14.svg",
	 "SVG/Array/Array_15.svg",
	 "SVG/Array/Array_16.svg",
	 "SVG/Array/Array_17.svg",
	 "SVG/Array/Array_18.svg",
	 "SVG/Array/Array_19.svg",
	 "SVG/Array/Array_20.svg"], // Array 
	["SVG/Basic IO/BasicIO_0.svg",
	 "SVG/Basic IO/BasicIO_1.svg",
	 "SVG/Basic IO/BasicIO_2.svg",
	 "SVG/Basic IO/BasicIO_3.svg",
	 "SVG/Basic IO/BasicIO_4.svg",
	 "SVG/Basic IO/BasicIO_5.svg",
	 "SVG/Basic IO/BasicIO_6.svg"], // Basic I/O 
	["SVG/Call by address/CallByAddress_0.svg",
	 "SVG/Call by address/CallByAddress_1.svg",
	 "SVG/Call by address/CallByAddress_2.svg",
	 "SVG/Call by address/CallByAddress_3.svg",
	 "SVG/Call by address/CallByAddress_4.svg",
	 "SVG/Call by address/CallByAddress_5.svg",
	 "SVG/Call by address/CallByAddress_6.svg",
	 "SVG/Call by address/CallByAddress_7.svg",
	 "SVG/Call by address/CallByAddress_8.svg",
	 "SVG/Call by address/CallByAddress_9.svg",
	 "SVG/Call by address/CallByAddress_10.svg",
	 "SVG/Call by address/CallByAddress_11.svg",
	 "SVG/Call by address/CallByAddress_12.svg",
	 "SVG/Call by address/CallByAddress_13.svg"], // Call by address 
	["SVG/Call by value/CallByValue_0.svg",
	 "SVG/Call by value/CallByValue_1.svg",
	 "SVG/Call by value/CallByValue_2.svg",
	 "SVG/Call by value/CallByValue_3.svg",
	 "SVG/Call by value/CallByValue_4.svg",
	 "SVG/Call by value/CallByValue_5.svg",
	 "SVG/Call by value/CallByValue_6.svg",
	 "SVG/Call by value/CallByValue_7.svg",
	 "SVG/Call by value/CallByValue_8.svg",
	 "SVG/Call by value/CallByValue_9.svg",
	 "SVG/Call by value/CallByValue_10.svg",
	 "SVG/Call by value/CallByValue_11.svg",
	 "SVG/Call by value/CallByValue_12.svg",
	 "SVG/Call by value/CallByValue_13.svg"], // Call by value 
	["SVG/For loop/ForLoop_0.svg",
	 "SVG/For loop/ForLoop_1.svg",
	 "SVG/For loop/ForLoop_2.svg",
	 "SVG/For loop/ForLoop_3.svg",
	 "SVG/For loop/ForLoop_4.svg",
	 "SVG/For loop/ForLoop_5.svg",
	 "SVG/For loop/ForLoop_6.svg",
	 "SVG/For loop/ForLoop_7.svg",
	 "SVG/For loop/ForLoop_8.svg",
	 "SVG/For loop/ForLoop_9.svg",
	 "SVG/For loop/ForLoop_10.svg",
	 "SVG/For loop/ForLoop_11.svg",
	 "SVG/For loop/ForLoop_12.svg",
	 "SVG/For loop/ForLoop_13.svg",
	 "SVG/For loop/ForLoop_14.svg"], // For loop 
	["SVG/Function/Function_0.svg",
	 "SVG/Function/Function_1.svg",
	 "SVG/Function/Function_2.svg",
	 "SVG/Function/Function_3.svg",
	 "SVG/Function/Function_4.svg",
	 "SVG/Function/Function_5.svg",
	 "SVG/Function/Function_6.svg",
	 "SVG/Function/Function_7.svg",
	 "SVG/Function/Function_8.svg",
	 "SVG/Function/Function_9.svg"], // Function 
	["SVG/If else/If else 1/IfElse1_0.svg",
	 "SVG/If else/If else 1/IfElse1_1.svg",
	 "SVG/If else/If else 1/IfElse1_2.svg",
	 "SVG/If else/If else 1/IfElse1_3.svg",
	 "SVG/If else/If else 1/IfElse1_4.svg"], // If else 1 
	["SVG/If else/If else 2/IfElse2_0.svg",
	 "SVG/If else/If else 2/IfElse2_1.svg",
	 "SVG/If else/If else 2/IfElse2_2.svg",
	 "SVG/If else/If else 2/IfElse2_3.svg",
	 "SVG/If else/If else 2/IfElse2_4.svg",
	 "SVG/If else/If else 2/IfElse2_5.svg"], // If else 2 
	["SVG/If else/If else 3/IfElse3_0.svg",
	 "SVG/If else/If else 3/IfElse3_1.svg",
	 "SVG/If else/If else 3/IfElse3_2.svg",
	 "SVG/If else/If else 3/IfElse3_3.svg",
	 "SVG/If else/If else 3/IfElse3_4.svg",
	 "SVG/If else/If else 3/IfElse3_5.svg"], // If else 3 
	["SVG/Pointer/Pointer_0.svg",
	 "SVG/Pointer/Pointer_1.svg",
	 "SVG/Pointer/Pointer_2.svg",
	 "SVG/Pointer/Pointer_3.svg",
	 "SVG/Pointer/Pointer_4.svg",
	 "SVG/Pointer/Pointer_5.svg",
	 "SVG/Pointer/Pointer_6.svg",
	 "SVG/Pointer/Pointer_7.svg",
	 "SVG/Pointer/Pointer_8.svg"], // Pointer 
	["SVG/Print Style/PrintStyle_0.svg",
	 "SVG/Print Style/PrintStyle_1.svg",
	 "SVG/Print Style/PrintStyle_2.svg",
	 "SVG/Print Style/PrintStyle_3.svg",
	 "SVG/Print Style/PrintStyle_4.svg",
	 "SVG/Print Style/PrintStyle_5.svg",
	 "SVG/Print Style/PrintStyle_6.svg",
	 "SVG/Print Style/PrintStyle_7.svg",
	 "SVG/Print Style/PrintStyle_8.svg"], // Print Style 
	["SVG/Recursive function/RecursiveFunction_0.svg",
	 "SVG/Recursive function/RecursiveFunction_1.svg",
	 "SVG/Recursive function/RecursiveFunction_2.svg",
	 "SVG/Recursive function/RecursiveFunction_3.svg",
	 "SVG/Recursive function/RecursiveFunction_4.svg",
	 "SVG/Recursive function/RecursiveFunction_5.svg",
	 "SVG/Recursive function/RecursiveFunction_6.svg",
	 "SVG/Recursive function/RecursiveFunction_7.svg",
	 "SVG/Recursive function/RecursiveFunction_8.svg",
	 "SVG/Recursive function/RecursiveFunction_9.svg",
	 "SVG/Recursive function/RecursiveFunction_10.svg",
	 "SVG/Recursive function/RecursiveFunction_11.svg",
	 "SVG/Recursive function/RecursiveFunction_12.svg",
	 "SVG/Recursive function/RecursiveFunction_13.svg",
	 "SVG/Recursive function/RecursiveFunction_14.svg",
	 "SVG/Recursive function/RecursiveFunction_15.svg",
	 "SVG/Recursive function/RecursiveFunction_16.svg",
	 "SVG/Recursive function/RecursiveFunction_17.svg",
	 "SVG/Recursive function/RecursiveFunction_18.svg"], // Recursive function 
	["SVG/Structure/Structure_0.svg",
	 "SVG/Structure/Structure_1.svg",
	 "SVG/Structure/Structure_2.svg",
	 "SVG/Structure/Structure_3.svg",
	 "SVG/Structure/Structure_4.svg",
	 "SVG/Structure/Structure_5.svg",
	 "SVG/Structure/Structure_6.svg",
	 "SVG/Structure/Structure_7.svg",
	 "SVG/Structure/Structure_8.svg",
	 "SVG/Structure/Structure_9.svg"], // Structure 
	["SVG/Switch/Switch_0.svg",
	 "SVG/Switch/Switch_1.svg",
	 "SVG/Switch/Switch_2.svg",
	 "SVG/Switch/Switch_3.svg",
	 "SVG/Switch/Switch_4.svg",
	 "SVG/Switch/Switch_5.svg",
	 "SVG/Switch/Switch_6.svg"], // Switch 
	["SVG/While/While_0.svg",
	 "SVG/While/While_1.svg",
	 "SVG/While/While_2.svg",
	 "SVG/While/While_3.svg",
	 "SVG/While/While_4.svg",
	 "SVG/While/While_5.svg",
	 "SVG/While/While_6.svg",
	 "SVG/While/While_7.svg",
	 "SVG/While/While_8.svg",
	 "SVG/While/While_9.svg",
	 "SVG/While/While_10.svg",
	 "SVG/While/While_11.svg",
	 "SVG/While/While_12.svg"]  // While 
]; 

var maxLengthOfPath = []; // Maximum picture number to a chapter  Dynamically calculate.

/* 
 * Substitue jQuery $ .ready() 
 *
 * from https://github.com/jfriend00/docReady/blob/master/docready.js 
 */
(function(funcName, baseObj) {
    "use strict";
    // The public function name defaults to window.docReady
    // but you can modify the last line of this function to pass in a different object or method name
    // if you want to put them in a different namespace and those will be used instead of 
    // window.docReady(...)
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;
    
    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }
    
    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            ready();
        }
    }
    
    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function(callback, context) {
        if (typeof callback !== "function") {
            throw new TypeError("callback for docReady(fn) must be a function");
        }
        // if ready has already fired, then just schedule the callback
        // to fire asynchronously, but right away
        if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({fn: callback, ctx: context});
        }
        // if document already ready to go, schedule the ready function to run
        // IE only safe when readyState is "complete", others safe when readyState is "interactive"
        if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
                // first choice is DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", ready, false);
                // backup is window load event
                window.addEventListener("load", ready, false);
            } else {
                // must be IE
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    };
})("docReady", window);
/* modify this previous line to pass in your own method name 
 * and object for the method to be attached to
 */


// Object for image 
var Display = {
	chapter: "Home",
	CHindex: 0,     // Chapter index for path[] 
	nowNo: 0,         // current array position 
	max_page: 1,      // = path[CHindex].length() 
	time_delay: 1000, // ms
	timing: 0,        // setInterval & clearInterval for auto play 
	setAll: function (ch, chidx, max, pageNum){
		"use strict";
		this.chapter = ch;
		this.CHindex = chidx;
		this.max_page = max;
		this.nowNo = (pageNum === undefined)? 0 : pageNum;
	}
};

// Shorthand  Because I am lazy~~ 
function getID(str) // only get "one" object 
{
	"use strict";return document.getElementById(str);
}
function getClass(str) // A lot of objects will get 
{
	"use strict";return document.getElementsByClassName(str);
}
function getTag(str) // A lot of objects will get 
{
	"use strict";return document.getElementsByTagName(str);
}
// Shorthand end

(function (){ // Initialize
	"use strict";
/* Binding everything */
	getClass("openmenu")[0].addEventListener("click", SBtog);
	getClass("closemenu")[0].addEventListener("click", SBtog);
	
	var i;
	
	function Menu(){menuCheck(this);}
	function Drop(){dropD(this);}
	var chp = document.querySelectorAll("#menu button");
	for(i = 0; i < chp.length; ++i) {
		if(i !== 7) { // Avoid "If else" chapter 
			chp[i].addEventListener("click", Menu);
		} 
		else {
			chp[7].addEventListener("click", Drop);
		}
	}
	
	function Page(){playCheck(this);}
	var btn = document.querySelectorAll("#select button");
	for(i = 0; i < btn.length; ++i) {
		btn[i].addEventListener("click", Page);
	}
	
/* Picture */
	getID("Picture").src = "images/NDHU_logo.svg";
	
/* Calculate max length */
	for(i = 0; i < ChapterName.length; ++i) {
		maxLengthOfPath.push(path[i].length);
	}
	
	changeChp(); // Initialize the page 
})();
/* Initialize end */


function SBtog() // Sidebar toggle 
{
	"use strict";
	var intro = getID("CHSummary"), main = getTag("main")[0];
	
	if(getTag("body")[0].classList.toggle("is-menu-visible")) {
		intro.addEventListener("click", SBtog);
		main.addEventListener("click", SBtog);
	}
	else {
		intro.removeEventListener("click", SBtog);
		main.removeEventListener("click", SBtog);
	}
}

function dropD(btn)
{
	"use strict";
	getClass("dropdown")[0].classList.toggle("show");
	getClass("fa-chevron-circle-down")[0].classList.toggle("fa-flip-vertical");
	if(btn.style.backgroundColor === "red") {
		btn.style.backgroundColor = "inherit";
	}
	else {
		btn.style.backgroundColor = "red";
	}
}

function menuCheck(btn) // When click one of the sidebar buttons 
{
	"use strict";
	var str = btn.innerHTML;
	var idx = ChapterName.indexOf(str);

	if(idx < 0) {
		alert("WHAT THE?");
		return;
	}

	Display.setAll(str, idx, maxLengthOfPath[idx]);
	changeChp();
}

function changeChp()
{
	"use strict";
	getTag("h2")[0].innerHTML = Display.chapter; // Change the emphasis of chapter name 
	getID("curPage").max = Display.max_page; // Change the imput limitation 
	getID("pageLen").innerHTML = Display.max_page.toString(); // Change the "/Max Page" 
	
	var i, intro = getTag("p")[0], // Change the introduction of the chapter 
		selct = document.querySelectorAll("#select button, input");
	
	if(selct[2].innerHTML === "Pause") { // Clear the timer 
		timer(false, selct[2]);
	}
	
	/* Disable buttons */
	if(Display.chapter !== "Home") {
		for(i = 0; i < selct.length; ++i){selct[i].disabled = false;}
		intro.innerHTML = "What is "+Display.chapter+"?<br />Just see it.";
	}
	else {
		for(i = 0; i < selct.length; ++i){selct[i].disabled = true;}
		intro.innerHTML = "Using <span class=\"fa fa-chrome\" aria-hidden=\"true\"></span>Chrome to get a better website environment.";
	}
	changePage(path[Display.CHindex]);
}

function changePage(arr)
{
	"use strict";
	if(Display.nowNo < 0) {
		Display.nowNo = 0;
	}
	else if(Display.nowNo >= Display.max_page) {
		Display.nowNo = Display.max_page - 1;
	}
	else {
		getID("Picture").src = arr[Display.nowNo];
		getID("curPage").value = (Display.nowNo + 1).toString();
	}
}

function playCheck(btn) // Footer buttons check 
{
	"use strict";
	switch(btn.title)
	{
		case "Next":
			Display.nowNo++;
			break;
		case "Previous":
			Display.nowNo--;
			break;
		case "Play":
			timer(true, btn);
			return;
		case "Pause":
			timer(false, btn);
			return;
		case "Last":
			Display.nowNo = Display.max_page - 1;
			break;
		case "First":
			Display.nowNo = 0;
			break;
		case "Goto":
			var tmp = Number(getID("curPage").value);
			if(typeof tmp === "string") {
				tmp = parseInt(getID("curPage").value, 10);
			}
			
			if(tmp > 0 && tmp <= Display.max_page) {
				Display.nowNo = tmp - 1;
			}
			else {
				alert("0 < Page Number <=" + Display.max_page);
				return;
			}
			break;
		default:
			alert("What the?");
			return;
	}
	changePage(path[Display.CHindex]);
}

function timer(flag, btn) // For auto play 
{
	"use strict";
	
	var tar;
	if(flag) {
		tar = "Play";
	}
	else {
		tar = "Pause";
	}
	
	var icon = document.querySelectorAll('button[title="' + tar + '"] span')[0]; /* Select the span 
which is child of button include title="Play" or "Pause" */
	icon.classList.toggle("fa-play");
	icon.classList.toggle("fa-pause");
	
	if(flag === true) {
		btn.title = "Pause";
		Display.timing = setInterval(function(){
			Display.nowNo++;
			changePage(path[Display.CHindex]);
		}, Display.time_delay);
	}
	else {
		btn.title = "Play";
		clearInterval(Display.timing);
	}
}
