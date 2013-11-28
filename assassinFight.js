function assassinFight(){
if (aFCounter < 1){
  ID();
  player.maxhp=player.hp
  document.getElementById('storyDiv').innerHTML = "You are in combat with the Assassin...good luck!"
  +'<br><input type="button" value=' + player.spl1 + ' onclick="AFS1()"></input>'
  +'<input type="button" value=' + player.spl2 + ' onclick="AFS2()"></input>'
  +'<input type="button" value="TEST AHP" onclick="alert(aFCounter)"></input>'
  +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';}
    else {
    assassin();}
}

function AFS1(){
  if (player.atk+d20() >= Assassin.atk+d12()){
    document.getElementById('storyDiv').innerHTML = "You are in combat with the Assassin. WINNING!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="AFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="AFS2()"></input>';
    Assassin.hp = Assassin.hp-player.atk;
    aDead();
    ID();
}
    else{
      document.getElementById('storyDiv').innerHTML = "You are in combat with the Assassin. NOT WINNING!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="AFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="AFS2()"></input>'
      +'<input type="button" value="TEST AHP" onclick="alert(Assassin.hp)"></input>'
      +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';
      player.hp = player.hp-Assassin.atk;
      dead();
      ID();}
}

function AFS2(){
  if (player.atk+d20() >= Assassin.atk+d12()){
    document.getElementById('storyDiv').innerHTML = "You are in combat with the Assassin. WINNING!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="AFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="AFS2()"></input>';
    Assassin.hp = Assassin.hp - 3*player.atk;
    aDead();
    ID();}
    else{
      document.getElementById('storyDiv').innerHTML = "You are in combat with the Assassin. NOT WINNING!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="AFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="AFS2()"></input>'
      +'<input type="button" value="TEST AHP" onclick="alert(Assassin.hp)"></input>'
      +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';
      player.hp = player.hp - 3*Assassin.atk;
      dead();
      ID();}
}

function aspan(){
  if(Assassin.hp <= 0){
    document.getElementById('enemySpan').innerHTML = "";
    } else{
      document.getElementById('idDiv').innerHTML = Assassin.name + ',' + ',' + '   ' + 'Attack Value: ' + Assassin.atk + '   ' 
  + 'Health: ' + Assassin.hp + '<hr>';}
}

function aDead(){
  if (Assassin.hp <=0){
    aFCounter++;
    player.atk=player.atk+3
    player.maxhp=player.maxhp+3
    player.hp=player.maxhp
    document.getElementById('storyDiv').innerHTML = "You are in combat with the Assassin. He's dead jim."
      +'<br><input type="button" value="continue" onclick="assassin()"></input>';}
}