function r1(){
  document.getElementById('storyDiv').innerHTML = 'An empty room upon cursory inspection. A more detailed inspection shows that someone has been vaporized.  Some tattered clothing and some holy symbols indicate that a priest or priestess used to carry these belongings.'
  + '<br><input type="button" value="Return to the hallway" onclick="p4()"></input>';
}

function r2(){
  pm2Find();
  document.getElementById('storyDiv').innerHTML = 'There appears to be a corspe hanging on a rack.  From their tattred clothing and the rusted and dull daggers, they appear to have been a rogue. Not a good one at that.'
  + '<br><input type="button" value="North" onclick="p25()"></input>'
  + '<input type="button" value="East" onclick="p27()"></input>';
}

function r3(){
  document.getElementById('storyDiv').innerHTML = 'An empty room save for a few pieces of what used to be a map.  The only piece that you can identify appears to be of this room. There also appear to be parts of what used to be a compass.'
  +'<br><input type="button" value="Return to the hallway" onclick="p55()"></input>';
}

function r4(){
  document.getElementById('storyDiv').innerHTML = 'There appear to be a sword and shield along with some armor that has a giant, gaping hole where the heart should be located and the rest covered in blood. Only a few bones are to be found, and there looks as though this could be a galley with all of the food supplies around the room. Your cooking skill is too low to bake a cake.'
  + '<br><input type="button" value="Return to the hallway" onclick="p38()"></input>';
}

function r5(){
  document.getElementById('storyDiv').innerHTML = 'A room that looks like it could house orcs, or pottery to smash. Better keep moving.'
  + '<br><input type="button" value="West" onclick="p8()"></input>'
  + '<input type="button" value="East" onclick="p20()"></input>';
}

function r6(){
  document.getElementById('storyDiv').innerHTML = 'There appear to be some remains of a fallen adventurer in this room. From their weapon and clothing, they appear to have been a wizard of sorts.'
  + '<br><input type="button" value="West" onclick="p20()"></input>'
  + '<input type="button" value="South" onclick="p22()"></input>';
}

function r7(){
  document.getElementById('storyDiv').innerHTML = 'A room where there is only a table with a screwdriver that appears to be shaking, but there is no sound coming from it.  Further inspection shows a lable that says, supersonic death screwdriver.'
  + '<br><input type="button" value="Return to the hallway" onclick="p24()"></input>';
}

function r8(){
  document.getElementById('storyDiv').innerHTML = "The antechamber of Dragon, lots of bones, both orcish and human as well as a few others remain."
  + '<br><input type="button" value="West" onclick="p43()"></input>'
  + '<input type="button" value="East" onclick="p45()"></input>';
}

function golemRoom(){
  if (golem.hp >0){
    golemFight();
    gFCounter++;
  } else{document.getElementById('storyDiv').innerHTML = 'The majority of the golem rubbel no longer moves, but there is a small rock with what appear to be arms coming off of the side that is still moving. Perhaps he can be your \'geo-bro\' or something like that.'
      + '<br><input type="button" value="Go back into the cooridor" onclick="p52()"></input>';}
}

function armory(){
  document.getElementById('storyDiv').innerHTML = "This is the Armory! Many arms and armors are here!"
  + '<br><input type="button" value="North" onclick="p14()"></input>'
  + '<input type="button" value="South" onclick="p16()"></input>';
  player.atk = player.atk+3;
  player.hp = player.hp+3;
  enterArmory++;
  if (enterArmory >1){
    player.atk = player.atk-3;
    player.hp = player.hp-3;}
  ID();
}

function assassin(){
  if (Assassin.hp > 0){    
    assassinFight();
    aFCounter++;
  } else{document.getElementById('storyDiv').innerHTML = "The Assassins' body! I guess he wasn't that much trouble."
      + '<br><input type="button" value="Lets get out of here!" onclick="p9()"></input>';}
}

function barracks(){
  if (commander.hp > 0){
    commanderFight();
    cFCounter++;
  } else{document.getElementById('storyDiv').innerHTML = "The stench of blood, guts and cheap booze permiate the room."
      + '<br><input type="button" value="West" onclick="p51()"></input>'
      + '<input type="button" value="North" onclick="p18()"></input>'
      + '<input type="button" value="South" onclick="p53()"></input>'
      + '<input type="button" value="East" onclick="p42()"></input>';}
}

function blkalter(){
  if (Priest.hp >0){
    priestFight();
    pFCounter++;
  } else{document.getElementById('storyDiv').innerHTML = "Bodies...so many...bodies!"
      + '<br><input type="button" value="West" onclick="p17()"></input>'
      + '<input type="button" value="North" onclick="p49()"></input>';}
}

function sorcerersChamber(){
  if (Sorcerer.hp>0){
    sorcererFight();
    sFCounter++;
  } else{document.getElementById('storyDiv').innerHTML = "Wizardry and other sorcerer items are stored in this room. You find a wand with \'Nambes 2k\' written on it.  It\'s just a stick...It must not do anything."
      + '<br><input type="button" value="West" onclick="p50()"></input>'
      + '<input type="button" value="South" onclick="p52()"></input>';}
}

function lair(){
  if (dragon.hp>0){
    dragonFight();
    dFCounter++;
  } else{document.getElementById('storyDiv').innerHTML = "DRAGON! IN A DUNGEON!"
      + '<br><input type="button" value="You did it!" onclick="location.reload()"></input>';}
}