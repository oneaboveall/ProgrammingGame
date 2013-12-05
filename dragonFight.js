function dragonFight(){
if (dFCounter < 1){
  ID();
  document.getElementById('storyDiv').innerHTML = "You are in combat with the dragon...good luck!"
  +'<br><input type="button" value=' + player.spl1 + ' onclick="DFS1()"></input>'
  +'<input type="button" value=' + player.spl2 + ' onclick="DFS2()"></input>'
  +'<input type="button" value="TEST AHP" onclick="alert(pFCounter)"></input>'
  +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';}
    else {
    lair();}
}

function DFS1(){
  if (player.atk+d20() >= dragon.atk+d20()){
    document.getElementById('storyDiv').innerHTML = "You are in combat with the dragon. WINNING!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="DFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="DFS2()"></input>'
    +'<input type="button" value=' + player.spl3 + ' onclick="DSF3()"></input>';
    dragon.hp = dragon.hp-player.atk;
    dDead();
    ID();
}
    else{
      document.getElementById('storyDiv').innerHTML = "You are in combat with the dragon. NOT WINNING!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="DFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="DFS2()"></input>'
      +'<input type="button" value=' + player.spl3 + ' onclick="DSF3()"></input>'
      +'<input type="button" value="TEST AHP" onclick="alert(dragon.hp)"></input>'
      +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';
      player.hp = player.hp-dragon.atk;
      dead();
      ID();}
}

function DFS2(){
  if (player.atk+d20() >= dragon.atk+d20()){
    document.getElementById('storyDiv').innerHTML = "You are in combat with the dragon. WINNING!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="DFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="DFS2()"></input>'
    +'<input type="button" value=' + player.spl3 + ' onclick="DSF3()"></input>';
    dragon.hp = dragon.hp - 3*player.atk;
    dDead();
    ID();}
    else{
      document.getElementById('storyDiv').innerHTML = "You are in combat with the dragon. NOT WINNING!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="DFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="DFS2()"></input>'
      +'<input type="button" value=' + player.spl3 + ' onclick="DSF3()"></input>'
      +'<input type="button" value="TEST AHP" onclick="alert(dragon.hp)"></input>'
      +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';
      player.hp = player.hp - 3*dragon.atk;
      dead();
      ID();}
}

function DFS3(){
  if (player.atk+d20() >= dragon.atk+d20()){
    document.getElementById('storyDiv').innerHTML = "You are in combat with the dragon. WINNING!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="DFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="DFS2()"></input>'
    +'<input type="button" value=' + player.spl3 + ' onclick="DSF3()"></input>';
    dragon.hp = dragon.hp - 5*player.atk;
    dDead();
    ID();}
    else{
      document.getElementById('storyDiv').innerHTML = "You are in combat with the dragon. NOT WINNING!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="DFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="DFS2()"></input>'
      +'<input type="button" value=' + player.spl3 + ' onclick="DSF3()"></input>'
      +'<input type="button" value="TEST AHP" onclick="alert(dragon.hp)"></input>'
      +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';
      player.hp = player.hp - 5*dragon.atk;
      dead();
      ID();}
}
function dDead(){
  if (dragon.hp <=0){
    dFCounter++;
    document.getElementById('storyDiv').innerHTML = "You are in combat with the dragon. He's dead jim."
      +'<br><input type="button" value="continue" onclick="lair()"></input>'}
}