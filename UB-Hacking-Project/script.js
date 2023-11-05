// import { classes } from './classes.js';
// import { Tank } from './classes.js';
// import { Warrior } from './classes.js';
// import { mage } from './classes.js';
// var bot_player;
// function initialize() {
//   health = document.getElementById("healthOutput");
//   mana = document.getElementById("manaOutput");
//   bot_player = bot();
//   random = Math.floor(Math.random() * 3);
//   if(random == 0){
//     bot_player = new Mage("Mage",15,8,0,6,0);
//   }else if(random == 1){
//     bot_player = new Warrior("Warrior",20, 4, 0, 5,0);
//   }else{
//     bot_player = new Tank("Tank",30, 2, 0, 4,0);
//   }
// }
// var selection = new Mage("Mage",15,8,0,6,0);
// function mage() {
//   console.log(selection.health);
//   selection = new Mage("Mage",15,8,0,6,0);
// }

// function warrior() {
//   selection = new Warrior("Warrior",20, 4, 0, 5, 0);
// }

// function tank() {
//    selection = new Tank("Tank",30, 2, 0, 4, 0);
// }
// function attack() {
//   health -= 1;
//   health.innerHTML = health;
//   if(selection.mana_start >= selection.ca){
//     selection.mana_start -= selection.ca;
//     bot_player.health = bot_player.health - selection.attack;
//   }
  
// }
// function shield() {
//   if(selection.mana_start>= selection.cs){
//     selection.mana_start -= selection.cs;
//     selection.shield();
//   }

// }
// function empower(){
//     if (selection.mana_start >= selection.ce){
//       selection.mana_start -= selection.ce;
//       selection.empower += selection.attack+1;
//     }
// }
/* class Classes {
  constructor(type, health, attack, empower, mana_start, shield) {
    this.type = type;
    this.health = health;
    this.attack = attack;
    this.empower = empower;
    this.mana_start = mana_start;
    this.shield = shield;
  }
  sleep() {
    this.mana_start =this.mana_start + 3;
    return 2;
  }

  wait() {
    this.mana_start = this.mana_start + 1;
    return 1;
  }

}

class Mage extends Classes{
  cs = 1;
  ce = 1;
  ca = 2;
  mana_Cap = 6;
  sleep = 3;
  constructor(type, health, attack, empower,mana_start,shield) {
    super(type, health, attack, empower,mana_start,shield);
  }

  Shield(){
    this.shield += 3;
  }

}



class Warrior extends Classes{
  cs = 1;
  ce = 1;
  ca = 2;
  mana_Cap = 5;
  constructor(type, health, attack, empower,mana_start,shield) {
    super(type, health, attack, empower,mana_start,shield);
  }

  Shield(){
    this.shield +=2;
  }

}

class Tank extends Classes{
  cs = 1;
  ce = 1;
  ca = 1;
  mana_Cap = 4;
  constructor(type, health, attack, empower,mana_start,shield) {
    super(type, health, attack, empower,mana_start,shield);
  }
  Shield(){
    this.shield +=3;
  }
}
// function bot(){
//   random = Math.floor(Math.random() * 3);
//   if(random == 0){
//     return new Mage("Mage",15,8,0,6,0);
//   }else if(random == 1){
//     return new Warrior("Warrior",20, 4, 0, 5,0);
//   }else{
//     return new Tank("Tank",30, 2, 0, 4,0);
//   }
// }

function play (type){
  health, attack, empower,mana_start, shield
  if(type == "Mage"){
    const age = new Mage("Mage",15,8,0,6,0);
  }
  else if(type == "Warrior"){
    const warrior = new Warrior("Warrior",20, 4, 0, 5,0);
  }else{
    const tank = new Tank("Tank",30, 2, 0, 4,0);
  }
}

var bot_player = new Warrior("Warrior", 20, 4, 0, 5, 0);
function initialize() {
 //health, attack, empower, mana_start, shield
  random = Math.floor(Math.random() * 3);
  if(random == 0){
    bot_player = new Mage("Mage",15,8,0,6,0);
  }else if(random == 1){
    bot_player = new Warrior("Warrior",20, 4, 0, 5,0);
  }else{
    bot_player = new Tank("Tank",30, 2, 0, 4,0);
  }
}

let selection = new Mage(15, 8, 0, 6, 6, 0);
function mage() {
  selection = new Mage("Mage",15,8,0,6,0);
  console.log(selection.health);
}
//var selection = new Warrior("Warrior",20, 4, 0, 5, 0);
function warrior() {
  selection = new Warrior("Warrior",20, 4, 0, 5, 0);
}
//var selection =  new Tank("Tank",30, 2, 0, 4, 0);
function tank() {
  selection = new Tank("Tank",30, 2, 0, 4, 0);
}
// console.log(i)
//   if (i == 1) {
//     let selection = new Mage("Mage",15,8,0,6,0);
//   } else if (i == 2) {
//     let selection = new Warrior("Warrior",20, 4, 0, 5, 0);
//   } else if (i == 3) {
//     let selection = new Tank("Tank",30, 2, 0, 4, 0);
//   }

function attack() {
  if(selection.mana_start >= selection.ca){
    selection.mana_start -= selection.ca;
    console.log(selection.ca);
    if (bot_player.shield == 0) {
      bot_player.health -= selection.attack;
      if (bot_player.health <= 0) {
        bot_player.health = 0;
        document.getElementById("healthOutput").innerHTML = bot_player.health;
        document.getElementById("condition").innerHTML = "Congratulations! The Titan Knight has been defeated. YOU WIN."
      }
    } else {
      totalHP = bot_player.health + bot_player.shield;
      totalHP -= selection.attack;
      if (totalHP <= 0) {
        bot_player.health = 0;
        document.getElementById("condition").innerHTML = "Congratulations! The Titan Knight has been defeated. YOU WIN."
      }
      if (totalHP < bot_player.health) {
        bot_player.health = totalHP;
        bot_player.shield = 0;
        document.getElementById("shieldOutput").innerHTML = bot_player.shield;
      }
      else {
        bot_player.shield -= selection.attack;
        document.getElementById("shieldOutput").innerHTML = bot_player.shield;
      }
    }
    document.getElementById("manaOutput2").innerHTML = selection.mana_start;    document.getElementById("healthOutput").innerHTML = bot_player.health;
  }
  else{
    alert("Not enough mana");
  }
  // random = Math.floor(Math.random() * 3);
  // if (random == 0 && bot_player.mana_start >= 2) {
  //   bot_attack();
  // } else if (random == 1) {
  //   bot_shield();
  // } else if (random == 2) {
  //   bot_empower();
  // } else {
  //   if (random == 0) {
  //     bot_player.sleep();
  //   } else {
  //     bot_player.wait();
  //   }
  // }
  bot_turn()
}
function shield() {
  if (selection.mana_start >= selection.cs) {
    selection.mana_start -= selection.cs;
    selection.Shield();
    document.getElementById("manaOutput2").innerHTML = selection.mana_start;
  }
  else {
    alert("Not enough mana");
  }
}
function empower(){
  if (selection.mana_start >= selection.ce){
    selection.mana_start -= selection.ce;
    selection.empower += selection.attack+1;
  }
  bot_turn()

}

function bot_attack() {
  if (bot_player.health > 0) {
    if (selection.shield == 0) {
      selection.health -= bot_player.attack;
    } else {
      totalHP = selection.health + selection.shield;
      totalHP -= bot_player.attack;
      if (totalHP < selection.health) {
        selection.health = totalHP;
      }
    }
    document.getElementById("healthOutput").innerHTML = selection.health;
  }
}

function bot_shield() {
  if (selection.health > 0) {
    selection.shield += 3;
    document.getElementById("shieldOutput").innerHTML = selection.shield;
  }
}

function bot_empower() {
  if (selection.health > 0) {
    selection.empower += 1;
// document.getElementById("empowerOutput").innerHTML = selection.empower;
  }
}
function bot_randomizer(){
  random = Math.floor(Math.random() * 3);
  if (random == 0 && bot_player.mana_start >= 2) {
    bot_attack();
    return random;
  } else if (random == 1) {
    bot_shield();
    return random;
  } else if (random == 2) {
    bot_empower();
    return random;
  } else {
    if (random == 0) {
      bot_player.sleep();
    } else {
      bot_player.wait();
    }
  }
}
function bot_turn(){
  var attack = bot_randomizer();
  if(attack == 0){
    document.getElementById("healthOutput").innerHTML = selection.health;
  }
} */


