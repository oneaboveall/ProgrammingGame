function sorcererFight(){
if (cFCounter < 1){
  ID();
  player.maxhp=player.hp;
  document.getElementById('storyDiv').innerHTML = "You are in combat with the Sorcerer...good luck!"
  +'<br><input type="button" value=' + player.spl1 + ' onclick="SFS1()"></input>'
  +'<input type="button" value=' + player.spl2 + ' onclick="SFS2()"></input>'
  +'<input type="button" value="TEST AHP" onclick="alert(cFCounter)"></input>'
  +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';}
    else {
    sorcerersChamber();}
}

function SFS1(){
  if (player.atk+d20() >= Sorcerer.atk+d12()){
    document.getElementById('storyDiv').innerHTML = "You are in combat with the Sorcerer. WINNING!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="SFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="SFS2()"></input>';
    Sorcerer.hp = Sorcerer.hp-player.atk;
    sDead();
    ID();
}
    else{
      document.getElementById('storyDiv').innerHTML = "You are in combat with the Sorcerer. NOT WINNING!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="SFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="SFS2()"></input>'
      +'<input type="button" value="TEST AHP" onclick="alert(Sorcerer.hp)"></input>'
      +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';
      player.hp = player.hp-Sorcerer.atk;
      dead();
      ID();}
}

function SFS2(){
  if (player.atk+d20() >= Sorcerer.atk+d12()){
    document.getElementById('storyDiv').innerHTML = "You are in combat with the Sorcerer. WINNING!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="SFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="SFS2()"></input>';
    Sorcerer.hp = Sorcerer.hp - 3*player.atk;
    sDead();
    ID();}
    else{
      document.getElementById('storyDiv').innerHTML = "You are in combat with the Sorcerer. NOT WINNING!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="SFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="SFS2()"></input>'
      +'<input type="button" value="TEST AHP" onclick="alert(Sorcerer.hp)"></input>'
      +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';
      player.hp = player.hp - 3*Sorcerer.atk;
      dead();
      ID();}
}

function sDead(){
  if (Sorcerer.hp <=0){
    sFCounter++;
    player.maxhp=player.maxhp+3;
    player.atk=player.atk+3;
    player.hp=player.maxhp;
    document.getElementById('storyDiv').innerHTML = "You are in combat with the Sorcerer. He's dead jim."
      +'<br><input type="button" value="continue" onclick="sorcerersChamber()"></input>';}
}