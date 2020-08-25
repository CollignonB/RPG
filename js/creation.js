class warior {
    constructor(name) {
        this._name = name;
        this._hp = 30;
        this._attackValue = 10;
        this._defenceValue = 20;
    }

    set name(name) {
        if(typeof(name) === "string"){
            this._name = name; 
        }
    }
    get name () {
        return this._name;
    }

    set hp (hp) {
        if (hp >= 0 && hp <= 50) {
            this._hp = hp
        }
    }
    get hp() {
        return this._hp;
    }

    set attackValue(attackValue) {
        if (attackValue > 0 && attackValue <= 15) {
            this._attackValue = attackValue;
        }
    }
    get attackValue() {
        return this._attackValue;
    }

    set defenceValue(defenceValue) {
        if (defenceValue > 0 && defenceValue <= 15) {
            this._defenceValue = defenceValue;
        }
    }
    get defenceValue() {
        return this._defenceValue;
    }
    attack (target) {
        console.log("Moi " + this.name + " je vais t'occir vile " + target.name);
        target.hp = target.hp - this.attackValue;
        console.log("HP de "+ target.name +" après l'attaque : " + target.hp);
    }
}

class wizard {
    constructor(name) {
        this._name = name;
        this._hp = 30;
        this._mp = 30;
        this._attackValue = 5;
        this._defenceValue = 15;
    }

    set name(name) {
        if(typeof(name) === "string"){
            this._name = name; 
        }
    }
    get name () {
        return this._name;
    }

    set hp (hp) {
        if (hp >= 0 && hp <= 50) {
            this._hp = hp
        }
    }
    get hp() {
        return this._hp;
    }

    set mp(mp) {
        this._mp = mp;
    }

    get mp() {
        return this._mp;
    }
    set attackValue(attackValue) {
        if (attackValue > 0 && attackValue <= 15) {
            this._attackValue = attackValue;
        }
    }
    get attackValue() {
        return this._attackValue;
    }

    set defenceValue(defenceValue) {
        if (defenceValue > 0 && defenceValue <= 15) {
            this._defenceValue = defenceValue;
        }
    }
    get defenceValue() {
        return this._defenceValue;
    }
    attack (target) {
        console.log("Moi " + this.name + " je vais t'occir vile " + target.name);
        target.hp = target.hp - this.attackValue;
        console.log("HP de "+ target.name +" après l'attaque : " + target.hp);
    }
}

class rogue {
    constructor(name) {
        this._name = name;
        this._hp = 25;
        this._attackValue = 15;
        this._defenceValue = 15;
    }

    set name(name) {
        if(typeof(name) === "string"){
            this._name = name; 
        }
    }
    get name () {
        return this._name;
    }

    set hp (hp) {
        if (hp >= 0 && hp <= 50) {
            this._hp = hp
        }
    }
    get hp() {
        return this._hp;
    }

    set attackValue(attackValue) {
        if (attackValue > 0 && attackValue <= 15) {
            this._attackValue = attackValue;
        }
    }
    get attackValue() {
        return this._attackValue;
    }

    set defenceValue(defenceValue) {
        if (defenceValue > 0 && defenceValue <= 15) {
            this._defenceValue = defenceValue;
        }
    }
    get defenceValue() {
        return this._defenceValue;
    }
    attack (target) {
        console.log("Moi " + this.name + " je vais t'occir vile " + target.name);
        target.hp = target.hp - this.attackValue;
        console.log("HP de "+ target.name +" après l'attaque : " + target.hp);
    }
}

class ranger {
    constructor(name) {
        this._name = name;
        this._hp = 20;
        this._attackValue = 20;
        this._defenceValue = 10;
    }

    set name(name) {
        if(typeof(name) === "string"){
            this._name = name; 
        }
    }
    get name () {
        return this._name;
    }

    set hp (hp) {
        if (hp >= 0 && hp <= 50) {
            this._hp = hp
        }
    }
    get hp() {
        return this._hp;
    }

    set attackValue(attackValue) {
        if (attackValue > 0 && attackValue <= 15) {
            this._attackValue = attackValue;
        }
    }
    get attackValue() {
        return this._attackValue;
    }

    set defenceValue(defenceValue) {
        if (defenceValue > 0 && defenceValue <= 15) {
            this._defenceValue = defenceValue;
        }
    }
    get defenceValue() {
        return this._defenceValue;
    }
    attack (target) {
        console.log("Moi " + this.name + " je vais t'occir vile " + target.name);
        target.hp = target.hp - this.attackValue;
        console.log("HP de "+ target.name +" après l'attaque : " + target.hp);
    }
}

const IMGCLASS = {
    "Guerrier" : "img/warrior.jpg",
    "Mage" : "img/wizard.jpg",
    "Voleur" : "img/voleur.jpg",
    "Ranger" : "img/ranger.png",
    "Paysan" : "img/paysan.png"
}

let characterTable = [];

let img = document.getElementById("characterFace");
let icon = document.getElementById("characterIcon");
let charaName = document.getElementById("characterFirstname");
let classe = document.getElementById("characterClass");
let createBtn = document.getElementById("createBtn");
let showBtn = document.getElementById("showBtn");
let main = document.getElementsByTagName("main")[0];

classe.addEventListener("click", function() {
    // permet d'afficher l'image corespondante au choix de classe par l'utilasteur, 
    // les chemins sont strockés dans la class IMGCLASS 
    // utilisation de la method Object.keys pour utiliser les clefs et les comparer avec le choix fait par l'utilisateur 
    icon.src = Object.keys(IMGCLASS).includes(this.value) ? IMGCLASS[this.value] : IMGCLASS.Paysan;
})

createBtn.addEventListener("click", function() {
    if (classe.value === "Guerrier") {
        let newWar = new warior(charaName.value);
        characterTable.push(newWar);
    }else if (classe.value === "Mage"){
        let newMage = new wizard(charaName.value);
        characterTable.push(newMage);
    }else if (classe.value === "Voleur"){
        let newRogue = new rogue(charaName.value);
        characterTable.push(newRogue);
    }else if (classe.value === "Ranger"){
        let newRanger = new ranger(charaName.value);
        characterTable.push(newRanger);
    }
    console.log(characterTable);
})

function showCarac() {
    let createdcharaters = document.createElement("div");
    createdcharaters.style.backgroundColor = "crimson";
    createdcharaters.style.width = "150px";
    createdcharaters.style.height = "150px";
    main.appendChild(createdcharaters);
}