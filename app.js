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

        document.getElementById("myReady").appendChild(ev.target);
          
        // Run percentage
        percentage();

    }
}, false);


// Create new list item using click
document.getElementById("button").addEventListener("click", function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("taskInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        // document.getElementById('taskInput').style.color = "red";

    } else {
        document.getElementById("myUL").appendChild(li);

        percentage();
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

            // percentage();
            percentage();
            
        }
    }
});

// Create new list item using enter key
document.getElementById("taskInput").addEventListener("keyup", function newElement(event) {
    
    if (event.keyCode === 13) {      ////////////////////// prosoxi sto electron
        event.preventDefault();
        var li = document.createElement("li");
        var inputValue = document.getElementById("taskInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            // document.getElementById('taskInput').style.color = "red";

        } else {
            document.getElementById("myUL").appendChild(li);

            percentage();
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

                // percentage();
                percentage();
                
            }
        }
    }
});

function percentage() {
    const progress = document.querySelector('.progress-done');
    let output = document.getElementById('number');
    let lisIn = document.getElementById("myUL").getElementsByTagName("LI");
    let lisReady = document.getElementById("myReady").getElementsByTagName("LI");
    let closed1 = document.getElementById("myReady").getElementsByClassName("closed");
    let closed2 = document.getElementsByClassName("closed");
    let paronomastis = lisIn.length + lisReady.length - closed2.length;
    let arithmitis = lisReady.length - closed1.length;
    var final = parseInt((arithmitis / paronomastis) * 100);

    document.getElementById("tasksRemaining").innerHTML = paronomastis - arithmitis;
    document.getElementById("tasksCompleted").innerHTML = arithmitis;
    document.getElementById("total").innerHTML = arithmitis + (paronomastis - arithmitis) ;

    if (arithmitis == 0 && paronomastis == 0) {
        final = 0;
        output.innerHTML = `${final}%`;  

        progress.setAttribute('data-done', final);
        progress.style.width = progress.getAttribute('data-done') + '%';
        progress.style.opacity = 1;

    } else if (arithmitis < 0) {
        arithmitis = 0;
        var final = parseInt((arithmitis / paronomastis) * 100);

        progress.setAttribute('data-done', final);
        progress.style.width = progress.getAttribute('data-done') + '%';
        progress.style.opacity = 1;

    } else {
        var final = parseInt((arithmitis / paronomastis) * 100);
        output.innerHTML = `${final}%`;
       
        progress.setAttribute('data-done', final);
        progress.style.width = progress.getAttribute('data-done') + '%';
        progress.style.opacity = 1;
    }

}


// Timer

var timer = null;
var duration = null;

var interval = setInterval(function () {
  
    hours = parseInt((timer /3600)%24, 10);
    minutes = parseInt((timer / 60)%60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    displayH.textContent = hours;
    displayS.textContent = seconds;
    displayM.textContent = minutes;

    if (--timer < 0) {
        timer = null;
        clearInterval(interval);
    }
}, 1000);

function startTimer(duration, displayH, displayM , displayS) {

    clearInterval(timer);    
    timer = null;
    
    timer = duration, hours, minutes, seconds;

    

}

function count(e) {
    duration = e * 60 * 60;
    displayH = document.querySelector('#hours');
    displayM = document.querySelector('#minutes');
    displayS = document.querySelector('#seconds');
    startTimer(duration, displayH , displayM, displayS);
};

document.getElementById("CountBtn2").addEventListener("click", function(){ count(2);});
document.getElementById("CountBtn4").addEventListener("click", function(){ count(4);});
document.getElementById("CountBtn8").addEventListener("click", function(){ count(8);});

// document.querySelector('#clock').addEventListener("click", function(){ 
//     clearTimeout(0);
//     clearInterval(timer);    
//     timer = null;
// });


//Clock
var today = new Date();

var myVar=setInterval(function(){myTimer()},1000);

function myTimer() {
    var d = new Date();   
    document.getElementById("date").innerHTML = d.toLocaleTimeString();
}
