function r1(){
  document.getElementById('storyDiv').innerHTML = 'R1. An empty room.'
  + '<br><p>Lets get out of here. now.</p><input type="button" value="Return to the hallway" onclick="p4()"></input>';
}

function r2(){
  document.getElementById('storyDiv').innerHTML = 'R2. Meet Class #2 and add to party.'
  + '<br><p></p>'
  + '<br><input type="button" value="North" onclick="p25()"></input>'
  + '<input type="button" value="East" onclick="p27()"></input>';
}

function r3(){
  document.getElementById('storyDiv').innerHTML = 'R3. An empty room.'
  + '<br><p>Lets get out of here. NOW!</p>'
  +'<br><input type="button" value="Return to the hallway" onclick="p55()"></input>';
}

function r4(){
  document.getElementById('storyDiv').innerHTML = 'R4. An empty room.'
  + '<br><p>Lets get out of here. now.</p><input type="button" value="Return to the hallway" onclick="p38()"></input>';
}

function r5(){
  document.getElementById('storyDiv').innerHTML = 'R5. Battle? Maybe'
  + '<br><p>Lets get out of here. now.</p><input type="button" value="West" onclick="p8()"></input>'
  + '<input type="button" value="East" onclick="p20()"></input>';
}

function r6(){
  document.getElementById('storyDiv').innerHTML = 'R6. Meet Class #3 and add to party.'
  + '<br><p>Lets get out of here. now.</p>'
  + '<input type="button" value="West" onclick="p20()"></input>'
  + '<input type="button" value="South" onclick="p22()"></input>';
}

function r7(){
  document.getElementById('storyDiv').innerHTML = 'R7. An empty room.'
  + '<br><p>Lets get out of here. now.</p><input type="button" value="Return to the hallway" onclick="p24()"></input>';
}

function r8(){
  document.getElementById('storyDiv').innerHTML = "R8. Antechamber of Dragon"
  + '<br><input type="button" value="West" onclick="p43()"></input>'
  + '<input type="button" value="East" onclick="p45()"></input>';
}

function golemRoom(){
  if (golem.hp >0){
    golemFight();
    gFCounter++;
  } else{document.getElementById('storyDiv').innerHTML = 'Fight with Golem. maybe.'
      + '<br><p>Lets get out of here. now.</p><input type="button" value="Go back into the cooridor" onclick="p52()"></input>';}
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
  } else{document.getElementById('storyDiv').innerHTML = "An Assassins' body"
      + '<br><input type="button" value="Lets get out of here!" onclick="p9()"></input>';}
}

function barracks(){
  if (commander.hp > 0){
    commanderFight();
    cFCounter++;
  } else{document.getElementById('storyDiv').innerHTML = "OMG A BARRACKS"
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
  } else{document.getElementById('storyDiv').innerHTML = "Like, wizardry and stuff"
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