var health = 100;
var name = "";
var hits=0;

var Items = function (name, modifier, description){
    this.name = "name";
    this.modifier = modifier;
    this.description = description;
}
var dodge = new Items('dodge', 1, 1)
var shield = new Items('shield', 5, 1)
var rock = new Items('rock', 5 , 1)
var lightening = new Items('lightening', 10, 1)
var thunderclap = new Items('thunderclap',15, 1)

console.log(Items)

var Target = function(name, health, hits){
    this.name = "name";
    this.health = health;
    this.hits = hits;
    this.items = [];
}
var Snoopy= new Target('Snoopy', 100, 0)
var TheRedBaron= new Target('The Red Baron', 100, 0)

TheRedBaron.items.push("rock", "thunderclap")

Snoopy.items.push("dodge", "shield")

console.log(Snoopy.items)

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
