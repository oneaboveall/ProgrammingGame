function commanderFight(){
if (cFCounter < 1){
  ID();
  player.maxhp=player.hp;
  document.getElementById('storyDiv').innerHTML = "When you enter the room you encounter an enourmous ork clothed in ebony armor and sitting on a throne of human skulls! He is drinking marrow from a bone and reeks cheap alcohol! When he notices you, he lifts a gigantic cleaver and charges you. You must destroy this scum! "
  +'<br><input type="button" value=' + player.spl1 + ' onclick="CFS1()"></input>'
  +'<input type="button" value=' + player.spl2 + ' onclick="CFS2()"></input>'
  +'<input type="button" value="TEST AHP" onclick="alert(cFCounter)"></input>'
  +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';}
    else {
    barracks();}
}

function CFS1(){
  if (player.atk+d20()+50>= commander.atk+d12()){
    document.getElementById('storyDiv').innerHTML = "You use your " + player.spl1 + " ability and land it on his hideous ork face! Blood flows freely from the beasts maw!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="CFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="CFS2()"></input>'
    +'<input type="button" value="TEST AHP" onclick="alert(commander.hp)"></input>'
    +'<input type="button" value="TEST AHP" onclick="alert(commander.atk)"></input>';
    commander.hp = commander.hp-player.atk;
    fDead();
    ID();
}
    else{
      document.getElementById('storyDiv').innerHTML = "The ork commander slashes you across the torso with his cleaver! You are in tremendous pain and quickly think of how unsanitary that thing probably is!"
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
    document.getElementById('storyDiv').innerHTML = "Your mighty " + player.spl2 + " skill stuns the beast! He begins cyring like a tiny girl! Pathetic! You are winning!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="CFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="CFS2()"></input>'
    +'<input type="button" value="TEST AHP" onclick="alert(commander.hp)"></input>'
      +'<input type="button" value="TEST PHP" onclick="alert(commander.atk)"></input>';
    commander.hp = commander.hp - 3*player.atk;
    fDead();
    ID();}
    else{
      document.getElementById('storyDiv').innerHTML = "Ze Ork Commandant retaliates with a vicious boot strike to your face! Your pride hurts more than your face, and your face hurts!"
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
    document.getElementById('storyDiv').innerHTML = "You strike the beast with the fury of a million orphans! This furious strike evicerates the beast, leaving his bowels scattered acrosss the floor like smelly confetti. A WINNER IS YOU!"
      +'<br><input type="button" value="continue" onclick="barracks()"></input>';}
}
