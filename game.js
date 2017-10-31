var health = 100;
var name = "";
var hits = 0;

var Target = function (name, health, hits) {
    this.name = name;
    this.health = health;
    this.hits = hits;
    this.items = [];
}
var plane = new Target("Dad-Tara", 100, 0)

plane.items.push(dodge, shield)

var Items = function (name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}
var dodge = new Items('dodge', 1, 1)
var shield = new Items('shield', 5, 1)

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
function dodgeRock(){
    health += 5
    hits += 1
    update()
}
function shieldPlane(){
    health += 10
    hits -= 1
    update()
}

function jump(){
    health += 5
    hits -= 1
    update()
}

function update() {
    document.getElementById("health").innerText = health;
    document.getElementById("hits").innerText = hits;
        
}

update()
