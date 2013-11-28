function commanderFight(){
if (cFCounter < 1){
  ID();
  player.maxhp=player.hp;
  document.getElementById('storyDiv').innerHTML = "You are in combat with the commander...good luck!"
  +'<br><input type="button" value=' + player.spl1 + ' onclick="CFS1()"></input>'
  +'<input type="button" value=' + player.spl2 + ' onclick="CFS2()"></input>'
  +'<input type="button" value="TEST AHP" onclick="alert(cFCounter)"></input>'
  +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';}
    else {
    barracks();}
}

function CFS1(){
  if (player.atk+d20()+50>= commander.atk+d12()){
    document.getElementById('storyDiv').innerHTML = "You are in combat with the commander. WINNING!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="CFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="CFS2()"></input>'
    +'<input type="button" value="TEST AHP" onclick="alert(commander.hp)"></input>'
    +'<input type="button" value="TEST AHP" onclick="alert(commander.atk)"></input>';
    commander.hp = commander.hp-player.atk;
    fDead();
    ID();
}
    else{
      document.getElementById('storyDiv').innerHTML = "You are in combat with the commander. NOT WINNING!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="CFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="CFS2()"></input>'
      +'<input type="button" value="TEST AHP" onclick="alert(commander.hp)"></input>'
      +'<input type="button" value="TEST PHP" onclick="alert(commander.atk)"></input>';
      player.hp = player.hp-commander.atk;
      dead();
      ID();}
}

function CFS2(){
  if (player.atk+d20()+50 >= commander.atk+d12()){
    document.getElementById('storyDiv').innerHTML = "You are in combat with the commander. WINNING!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="CFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="CFS2()"></input>'
    +'<input type="button" value="TEST AHP" onclick="alert(commander.hp)"></input>'
      +'<input type="button" value="TEST PHP" onclick="alert(commander.atk)"></input>';
    commander.hp = commander.hp - 3*player.atk;
    fDead();
    ID();}
    else{
      document.getElementById('storyDiv').innerHTML = "You are in combat with the commander. NOT WINNING!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="CFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="CFS2()"></input>'
      +'<input type="button" value="TEST AHP" onclick="alert(commander.hp)"></input>'
      +'<input type="button" value="TEST PHP" onclick="alert(commander.atk)"></input>';
      player.hp = player.hp - 3*commander.atk;
      dead();
      ID();}
}

function fDead(){
  if (commander.hp <=0){
    cFCounter++;
    player.maxhp=player.maxhp+3;
    player.atk=player.atk+3;
    player.hp=player.maxhp;
    document.getElementById('storyDiv').innerHTML = "You are in combat with the commander. He's dead jim."
      +'<br><input type="button" value="continue" onclick="barracks()"></input>';}
}