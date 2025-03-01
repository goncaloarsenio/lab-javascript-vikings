// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
        attack(){
            return this.strength;
        }
        receiveDamage(damage){
        this.health = this.health - damage
        }
    }


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
    super(health, strength);
    this.name = name
    }
    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health >0) {
            return `${this.name} has received ${damage} points of damage`;}
        else {
            return `${this.name} has died in act of combat`;
        }
}


battleCry() {
    return "Odin Owns You All!"
}
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
     super(health, strength)  
    }
   
    receiveDamage(damage){
        this.health = this.health - damage
    if(this.health > 0) return `A Saxon has received ${damage} points of damage`
    else return `A Saxon has died in combat`
    }
    

}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking){
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
     let randomViking = Math.floor(Math.random() *this.vikingArmy.length)
     let randomSaxon = Math.floor(Math.random() *this.saxonArmy.length)
     let fight = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
 

     if(this.saxonArmy[randomSaxon].health <=0) {
        this.saxonArmy.splice(randomSaxon)
     }
     return fight;
    }

    saxonAttack() {
        let randomViking = Math.floor(Math.random() *this.vikingArmy.length)
        let randomSaxon = Math.floor(Math.random() *this.saxonArmy.length)
        let fight = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
        if(this.vikingArmy[randomViking].health <=0) this.vikingArmy.splice(randomViking)
        return fight;
    } 
        showStatus(){
            if(!this.saxonArmy.length) return "Vikings have won the war of the century!"
            else if (!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day..."
            else return "Vikings and Saxons are still in the thick of battle."
        }
}
