class Classes {
  constructor(type, health, attack, empower, mana_start, shield) {
    this.type = type;
    this.health = health;
    this.attack = attack;
    this.empower = empower;
    this.mana_start = mana_start;
    this.shield = shield;
  }
  sleep() {
    this.mana_start = this.mana_start + 4;
    return 1;
  }
  
  wait() {
    this.mana_start = this.mana_start + 2;
    return 1;
  }
  
}

class Mage extends Classes{
  cs = 1;
  ce = 1;
  ca = 3;
  mana_Cap = 6;
  constructor(type, health, attack, empower,mana_start,shield) {
    super(type, health, attack, empower,mana_start,shield);
  }
}

  

class Warrior extends Classes{
  cs = 2;
  ce = 1;
  ca = 2;
  mana_Cap = 5;
  constructor(type, health, attack, empower,mana_start,shield) {
    super(type, health, attack, empower,mana_start,shield);
  }
}

class Tank extends Classes{
  cs = 3;
  ce = 1;
  ca = 1;
  mana_Cap = 4;
  constructor(type, health, attack, empower,mana_start,shield) {
    super(type, health, attack, empower,mana_start,shield);
  }
}

function play (type){
  health, attack, empower,mana_start, shield
  if(type == "Mage"){
    const age = new Mage("Mage",15,8,10,6,0);
  }
  else if(type == "Warrior"){
    const warrior = new Warrior("Warrior",20, 4, 6, 5,0);
  }else{
    const tank = new Tank("Tank",30, 2, 4, 4,0);
  }
}

let bot_player = new Warrior("Warrior", 20, 4, 6, 5, 2);
function initialize() {
 //health, attack, empower, mana_start, shield
  // random = Math.floor(Math.random() * 3);
  // if(random == 0){
  //   bot_player = new Mage("Mage",15,6,9,6,0);
  // }else if(random == 1){
  //   bot_player = new Warrior("Warrior",20, 4, 6, 5,0);
  // }else{
  //   bot_player = new Tank("Tank",30, 2, 3, 4,0);
  // }
}

let selection = new Mage("Mage", 15, 6, 9, 6, 0);
function mage() {
  selection = new Mage("Mage",15,6,9,6,0);
  console.log(selection.health);
}
//var selection = new Warrior("Warrior",20, 4, 6, 5, 2);
function warrior() {
  selection = new Warrior("Warrior",20, 4, 6, 5, 2);
}
//var selection =  new Tank("Tank",30, 2, 1, 4, 10);
function tank() {
  selection = new Tank("Tank",30, 2, 3, 4, 10);
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
  var moved = true;
  if (selection.mana_start >= selection.ca){
    selection.mana_start -= selection.ca;
    if (bot_player.shield == 0) {
      bot_player.health -= selection.attack;
      if (bot_player.health <= 0) {
        bot_player.health = 0;
        document.getElementById("healthOutput").innerHTML = bot_player.health;
        document.getElementById("condition").innerHTML = "Congratulations! The Titan Knight has been defeated. YOU WIN.";
      }
    } else {
      totalHP = bot_player.health + bot_player.shield;
      totalHP -= selection.attack;
      if (totalHP <= 0) {
        bot_player.health = 0;
        bot_player.shield = 0;
        document.getElementById("healthOutput").innerHTML = bot_player.health;
        document.getElementById("shieldOutput").innerHTML = bot_player.shield;
        document.getElementById("condition").innerHTML = "Congratulations! The Titan Knight has been defeated. YOU WIN.";
      } else if (totalHP < bot_player.health) {
        bot_player.health = totalHP;
        bot_player.shield = 0;
        document.getElementById("healthOutput").innerHTML = bot_player.health;
        document.getElementById("shieldOutput").innerHTML = bot_player.shield;
      }
      else {
        bot_player.shield -= selection.attack;
        document.getElementById("shieldOutput").innerHTML = bot_player.shield;
      }
    }
    document.getElementById("manaOutput2").innerHTML = selection.mana_start;    
    document.getElementById("healthOutput").innerHTML = bot_player.health;
  } else {
    alert("Not enough mana");
    moved = false;
  }
  if (moved) {
    bot_turn();
  }
}

function shield() {
  var moved = true;
  if (selection.mana_start >= selection.cs) {
    selection.mana_start -= selection.cs;
    selection.shield += 1;
    document.getElementById("manaOutput2").innerHTML = selection.mana_start;
    document.getElementById("shieldOutput2").innerHTML = selection.shield;
  }
  else {
    alert("Not enough mana");
    moved = false;
  }
  if (moved) {
    bot_turn();
  }
}

function empower(){
  var moved = true;
  if (selection.mana_start >= selection.ca + selection.ce) {
    selection.mana_start = selection.mana_start - (selection.ca + selection.ce);
    if (bot_player.shield == 0) {
      bot_player.health = bot_player.health - selection.empower;
      if (bot_player.health <= 0) {
        bot_player.health = 0;
        document.getElementById("healthOutput").innerHTML = bot_player.health;
        document.getElementById("condition").innerHTML = "Congratulations! The Titan Knight has been defeated. YOU WIN.";
      }
    } else {
      totalHP = bot_player.health + bot_player.shield;
      totalHP = totalHP - selection.empower;
      if (totalHP <= 0) {
        bot_player.health = 0;
        document.getElementById("healthOutput").innerHTML = bot_player.health;
        document.getElementById("condition").innerHTML = "Congratulations! The Titan Knight has been defeated. YOU WIN.";
      } else if (totalHP < bot_player.health) {
        bot_player.health = totalHP;
        bot_player.shield = 0;
        document.getElementById("healthOutput").innerHTML = bot_player.health;
        document.getElementById("shieldOutput").innerHTML = bot_player.shield;
      } else {
        bot_player.shield -= selection.attack;
        document.getElementById("shieldOutput").innerHTML = bot_player.shield;
      }
    } 
    document.getElementById("manaOutput2").innerHTML = selection.mana_start;
    document.getElementById("healthOutput").innerHTML = bot_player.health;
  } else {
    alert("Not enough mana");
    moved = false;
  }
  if (moved) {
    bot_turn();
  }
}

function wait() {
  selection.wait();
  if (selection.mana_start > selection.mana_Cap) {
    selection.mana_start = selection.mana_Cap;;
  }
  document.getElementById("manaOutput2").innerHTML = selection.mana_start;
  bot_turn();
}

function sleep() {
  selection.sleep();
  if (selection.mana_start > selection.mana_Cap) {
    selection.mana_start = selection.mana_Cap;
  }
  document.getElementById("manaOutput2").innerHTML = selection.mana_start;
  bot_turn();
}

function bot_attack() {
  document.getElementById("condition").innerHTML = "Titan Knight used Attack!";
  bot_player.mana_start -= bot_player.ca;
  if (selection.shield == 0) {
    selection.health -= bot_player.attack;
    if (selection.health <= 0) {
      selection.health = 0;
      document.getElementById("healthOutput2").innerHTML = selection.health;
      document.getElementById("condition").innerHTML = "You have been slain! YOU LOSE.";
    }
  } else {
    totalHP = selection.health + selection.shield;
    totalHP -= bot_player.attack;
    if (totalHP <= 0) {
      selection.health = 0;
      selection.shield = 0;
      document.getElementById("healthOutput2").innerHTML = selection.health;
      document.getElementById("shieldOutput2").innerHTML = selection.shield;
      document.getElementById("condition").innerHTML = "You have been slain! YOU LOSE.";
    } else if (totalHP < selection.health) {
      selection.health = totalHP;
      selection.shield = 0;
      document.getElementById("healthOutput2").innerHTML = selection.health;
      document.getElementById("shieldOutput2").innerHTML = selection.shield;
    }
    else {
      selection.shield -= bot_player.attack;
      document.getElementById("shieldOutput2").innerHTML = selection.shield;
    }
  }
  document.getElementById("manaOutput").innerHTML = bot_player.mana_start;    
  document.getElementById("healthOutput2").innerHTML = selection.health;
}

function bot_shield() {
  document.getElementById("condition").innerHTML = "Titan Knight used Shield!";
  bot_player.mana_start -= bot_player.cs;
  bot_player.shield += 1;
  document.getElementById("manaOutput").innerHTML = bot_player.mana_start;
  document.getElementById("shieldOutput").innerHTML = bot_player.shield;
}

function bot_empower() {
  document.getElementById("condition").innerHTML = "Titan Knight used Empower!";
  bot_player.mana_start = bot_player.mana_start - (bot_player.ca + bot_player.ce);
  if (selection.shield == 0) {
    selection.health = selection.health - bot_player.empower;
    if (selection.health <= 0) {
      selection.health = 0;
      document.getElementById("healthOutput2").innerHTML = selection.health;
      document.getElementById("condition").innerHTML = "You have been slain! YOU LOSE.";
    }
  } else {
    totalHP = selection.health + selection.shield;
    totalHP = totalHP - bot_player.empower;
    if (totalHP <= 0) {
      selection.health = 0;
      document.getElementById("healthOutput2").innerHTML = selection.health;
      document.getElementById("condition").innerHTML = "You have been slain! YOU LOSE.";
    } else if (totalHP < selection.health) {
      selection.health = totalHP;
      selection.shield = 0;
      document.getElementById("healthOutput2").innerHTML = selection.health;
      document.getElementById("shieldOutput2").innerHTML = selection.shield;
    } else {
      selection.shield -= bot_player.attack;
      document.getElementById("shieldOutput2").innerHTML = selection.shield;
    }
  } 
  document.getElementById("manaOutput").innerHTML = bot_player.mana_start;
  document.getElementById("healthOutput2").innerHTML = selection.health;
}

function bot_wait() {
  document.getElementById("condition").innerHTML = "Titan Knight is waiting out this turn.";
  bot_player.wait();
  document.getElementById("manaOutput").innerHTML = bot_player.mana_start;
}

function bot_sleep() {
  document.getElementById("condition").innerHTML = "Titan Knight is sleeping this turn.";
  bot_player.sleep();
  document.getElementById("manaOutput").innerHTML = bot_player.mana_start;
}

function bot_turn() {
  random = Math.floor(Math.random() * 3);
  if (random == 0 && bot_player.mana_start >= bot_player.ca) {
    bot_attack();
  } else if (random == 1 && bot_player.mana_start >= bot_player.cs) {
    bot_shield();
  } else if (random == 2 && bot_player.mana_start >= bot_player.ca + bot_player.ce) {
    bot_empower();
  } else {
    if (random == 0) {
      bot_player.sleep();
    } else {
      bot_player.wait();
    }
  }
}
// function bot_turn(){
//   var attack = bot_randomizer();
//   if(attack == 0){
//     document.getElementById("healthOutput2").innerHTML = selection.health;
//   }
// }