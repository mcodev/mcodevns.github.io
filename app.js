// Create close button
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Close on click
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {

    close[i].onclick = function() {

        var div = this.parentElement;
        div.style.display = "none";

    }
}


// Add check class
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        // Send to completed list
        $('#myReady').append($('.checked'));


    }
}, false);


// Create new list item
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("taskInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        // document.getElementById('taskInput').style.color = "red";

    } else {
        document.getElementById("myUL").appendChild(li);

    }
    document.getElementById("taskInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);


    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            div.className = "closed";
            
        }
    }
}


var today = new Date();

var myVar=setInterval(function(){myTimer()},1000);

function myTimer() {
    var d = new Date();   
    document.getElementById("date").innerHTML = d.toLocaleTimeString();
}
