var health = 100;
var name = "";
var hits=0;

function rock() {
    health -= 1
    hits += 1
    update()
}          


function lightening() {
     health -= 5 
    hits += 1
        update()  
    }

function lava() {
    health -= 10 
   hits += 1
    update()   
}



function update() {
    document.getElementById("health").innerText=health;
    document.getElementById("name").innerText=name;
    document.getElementById("hits").innerText=hits;
}

update()
