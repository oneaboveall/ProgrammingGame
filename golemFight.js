function golemFight(){
if (pFCounter < 1){
  ID();
  player.maxhp=player.hp
  document.getElementById('storyDiv').innerHTML = "You are engaged by a rock golem! Show this walking piece of unfinished masonry whose boss!"
  +'<br><input type="button" value=' + player.spl1 + ' onclick="GFS1()"></input>'
  +'<input type="button" value=' + player.spl2 + ' onclick="GFS2()"></input>';}
    else {
    golemroom();}
}

function GFS1(){
  if (player.atk+d20() >= golem.atk+d12()){
    document.getElementById('storyDiv').innerHTML = "You hit him in his enourmous, stupid rock head! You are winning!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="GFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="GFS2()"></input>';
    golem.hp = golem.hp-player.atk;
    gDead();
    ID();
}
    else{
      document.getElementById('storyDiv').innerHTML = "You are being bested by a rock! Seriously! Fight harder!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="GFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="GFS2()"></input>';
      player.hp = player.hp-golem.atk;
      dead();
      ID();}
}

function GFS2(){
  if (player.atk+d20() >= golem.atk+d12()){
    document.getElementById('storyDiv').innerHTML = "You are doing well! He is coughing up what looks like gravel of some sort!"
    +'<br><input type="button" value=' + player.spl1 + ' onclick="GFS1()"></input>'
    +'<input type="button" value=' + player.spl2 + ' onclick="GFS2()"></input>';
    golem.hp = golem.hp - 3*player.atk;
    gDead();
    ID();}
    else{
      document.getElementById('storyDiv').innerHTML = "This thing is barely animate! Its pretty much something that you could kick down the road on accident. How are you losing to this thing?!"
      +'<br><input type="button" value=' + player.spl1 + ' onclick="GFS1()"></input>'
      +'<input type="button" value=' + player.spl2 + ' onclick="GFS2()"></input>';
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
    document.getElementById('storyDiv').innerHTML = "You send the rock golem back to wherever he came from. In tiny, little pieces."
      +'<br><input type="button" value="continue" onclick="golemRoom()"></input>';}
}
