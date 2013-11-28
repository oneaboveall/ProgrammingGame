function golemFight(){
if (pFCounter < 1){
  ID();
  player.maxhp=player.hp
  document.getElementById('storyDiv').innerHTML = "You are in combat with the golem...good luck!"
  +'<br><input type="button" value=' + player.spl1 + ' onclick="GFS1()"></input>'
  +'<input type="button" value=' + player.spl2 + ' onclick="GFS2()"></input>'
  +'<input type="button" value="TEST AHP" onclick="alert(pFCounter)"></input>'
  +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';}
    else {
    blkAlter();}
}

function GFS1(){
  if (player.atk+d20() >= golem.atk+d12()){
    document.getElementById('storyDiv').innerHTML = "You are in combat with the golem. WINNING!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="GFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="GFS2()"></input>';
    golem.hp = golem.hp-player.atk;
    gDead();
    ID();
}
    else{
      document.getElementById('storyDiv').innerHTML = "You are in combat with the golem. NOT WINNING!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="GFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="GFS2()"></input>'
      +'<input type="button" value="TEST AHP" onclick="alert(golem.hp)"></input>'
      +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';
      player.hp = player.hp-golem.atk;
      dead();
      ID();}
}

function GFS2(){
  if (player.atk+d20() >= golem.atk+d12()){
    document.getElementById('storyDiv').innerHTML = "You are in combat with the golem. WINNING!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="GFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="GFS2()"></input>';
    golem.hp = golem.hp - 3*player.atk;
    gDead();
    ID();}
    else{
      document.getElementById('storyDiv').innerHTML = "You are in combat with the golem. NOT WINNING!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="GFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="GFS2()"></input>'
      +'<input type="button" value="TEST AHP" onclick="alert(golem.hp)"></input>'
      +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';
      player.hp = player.hp - 3*golem.atk;
      dead();
      ID();}
}

function gDead(){
  if (golem.hp <=0){
    gFCounter++;
    player.maxhp=player.maxhp+3;
    player.atk=player.atk+3;
    player.hp=player.maxhp;
    document.getElementById('storyDiv').innerHTML = "You are in combat with the golem. He's dead jim."
      +'<br><input type="button" value="continue" onclick="golemRoom()"></input>';}
}