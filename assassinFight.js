function assassinFight(){
if (aFCounter < 1){
  ID();
  player.maxhp=player.hp
  document.getElementById('storyDiv').innerHTML = "You enter a large, dark room and hear the quick movement on something in the shadows. An assassin steps from the shadows and draws his blade. You must strike him down!"
  +'<br><input type="button" value=' + player.spl1 + ' onclick="AFS1()"></input>'
  +'<input type="button" value=' + player.spl2 + ' onclick="AFS2()"></input>'
  +'<input type="button" value="TEST AHP" onclick="alert(aFCounter)"></input>'
  +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';}
    else {
    assassin();}
}

function AFS1(){
  if (player.atk+d20() >= Assassin.atk+d12()){
    document.getElementById('storyDiv').innerHTML = "You strike with the wrath of the righteous, the assassin recoils in terror!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="AFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="AFS2()"></input>';
    Assassin.hp = Assassin.hp-player.atk;
    aDead();
    ID();
}
    else{
      document.getElementById('storyDiv').innerHTML = "The Assassin hits you with the force of a thousand suns! You must retaliate before it\'s too late!"
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
    document.getElementById('storyDiv').innerHTML = "You strike him IN THE FACE with the fury of the ancients! A winner soon you are!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="AFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="AFS2()"></input>';
    Assassin.hp = Assassin.hp - 3*player.atk;
    aDead();
    ID();}
    else{
      document.getElementById('storyDiv').innerHTML = "The assassin is besting you! Lo, though the time is dark you must not fear!"
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
