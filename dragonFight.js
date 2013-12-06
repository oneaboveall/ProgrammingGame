function dragonFight(){
if (dFCounter < 1){
  ID();
  document.getElementById('storyDiv').innerHTML = "This is it. This is the beast you must defeat to save the hapless, lazy villagers of Clintonia. You are are their only hope. You let loose a defeaning war cry at fly at the mighty black beast. Failure is not an option!"
  +'<br><input type="button" value=' + player.spl1 + ' onclick="DFS1()"></input>'
  +'<input type="button" value=' + player.spl2 + ' onclick="DFS2()"></input>'
  +'<input type="button" value=' + player.spl3 + ' onclick="DFS3()"></input>';}
    else {
    lair();}
}

function DFS1(){
  if (player.atk+d20() >= dragon.atk+d20()){
    document.getElementById('storyDiv').innerHTML = "THIS IS THE JUDGEMENT OF THE RIGHTEOUS! YOU ARE WINNING THIS BATTLE! PUT THIS LIZARD OUT OF ITS MISERY!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="DFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="DFS2()"></input>'
    +'<input type="button" value=' + player.spl3 + ' onclick="DFS3()"></input>';
    dragon.hp = dragon.hp-player.atk;
    dDead();
    ID();
}
    else{
      document.getElementById('storyDiv').innerHTML = "Run-Time error! The dragon engulfs you in black fire. You may not be able to take another hit like that!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="DFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="DFS2()"></input>'
      +'<input type="button" value=' + player.spl3 + ' onclick="DFS3()"></input>';
      player.hp = player.hp-dragon.atk;
      dead();
      ID();}
}

function DFS2(){
  if (player.atk+d20() >= dragon.atk+d20()){
    document.getElementById('storyDiv').innerHTML = "ALL SHALL FEAR THE EMPORERS WRATH! Yours is the fury of the ancients! This beast cannot endure your attacks much longer! Strike him once more, with gusto!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="DFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="DFS2()"></input>'
    +'<input type="button" value=' + player.spl3 + ' onclick="DFS3()"></input>';
    dragon.hp = dragon.hp - 3*player.atk;
    dDead();
    ID();}
    else{
      document.getElementById('storyDiv').innerHTML = "DANGER! The dragon hacks your internets with a mighty swipe of its tail! YOU MUST FINISH HIM QUICK! You are hurt badly and things are looking grim..."
      +'<br><input type="button" value=' + player.spl1 + ' onclick="DFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="DFS2()"></input>'
      +'<input type="button" value=' + player.spl3 + ' onclick="DFS3()"></input>';
      player.hp = player.hp - 3*dragon.atk;
      dead();
      ID();}
}

function DFS3(){
  if (player.atk+d20() >= dragon.atk+d20()){
    document.getElementById('storyDiv').innerHTML = "You use your inhuman courage to strike deep in the chest of the mighty beast. You are winning this battle!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="DFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="DFS2()"></input>'
    +'<input type="button" value=' + player.spl3 + ' onclick="DFS3()"></input>';
    dragon.hp = dragon.hp - 5*player.atk;
    dDead();
    ID();}
    else{
      document.getElementById('storyDiv').innerHTML = "CRITICAL ERROR! The dragon is making you look like a script kiddy with his incredible skills! Dont let your n00bery be your demise!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="DFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="DFS2()"></input>'
      +'<input type="button" value=' + player.spl3 + ' onclick="DFS3()"></input>';
      player.hp = player.hp - 5*dragon.atk;
      dead();
      ID();}
}
function dDead(){
  if (dragon.hp <=0){
    dFCounter++;
    document.getElementById('storyDiv').innerHTML = "You strike the beast once more with all you have got. It doubles over and dies like a large pet iguana that has gone weeks without food. He's dead jim. Its over...    You are the WINRAR!"
      +'<br><input type="button" value="continue" onclick="lair()"></input>'}
}
