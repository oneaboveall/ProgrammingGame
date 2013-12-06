function priestFight(){
if (pFCounter < 1){
  ID();
  player.maxhp=player.hp;
  document.getElementById('storyDiv').innerHTML = "You are in combat with the priest...good luck!"
  +'<br><input type="button" value=' + player.spl1 + ' onclick="PFS1()"></input>'
  +'<input type="button" value=' + player.spl2 + ' onclick="PFS2()"></input>';}
    else {
    blkAlter();}
}

function PFS1(){
  if (player.atk+d20() >= Priest.atk+d12()){
    document.getElementById('storyDiv').innerHTML = "You are in combat with the Priest. WINNING!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="PFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="PFS2()"></input>';
    Priest.hp = Priest.hp-player.atk;
    pDead();
    ID();
}
    else{
      document.getElementById('storyDiv').innerHTML = "You are in combat with the Priest. NOT WINNING!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="PFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="PFS2()"></input>';
      player.hp = player.maxhp-Priest.atk;
      dead();
      ID();}
}

function PFS2(){
  if (player.atk+d20() >= Priest.atk+d12()){
    document.getElementById('storyDiv').innerHTML = "You are in combat with the Priest. WINNING!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="PFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="PFS2()"></input>';
    Priest.hp = Priest.hp - 3*player.atk;
    pDead();
    ID();}
    else{
      document.getElementById('storyDiv').innerHTML = "You are in combat with the Priest. NOT WINNING!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="PFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="PFS2()"></input>';
      player.hp = player.hp - 3*Priest.atk;
      dead();
      ID();}
}

function pDead(){
  if (Priest.hp <=0){
    pFCounter++;
    player.maxhp=player.maxhp+3;
    player.atk=player.atk+3;
    player.hp=player.maxhp;
    document.getElementById('storyDiv').innerHTML = "You are in combat with the Priest. He's dead jim."
      +'<br><input type="button" value="continue" onclick="blkalter()"></input>';}
}