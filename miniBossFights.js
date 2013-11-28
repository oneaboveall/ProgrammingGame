function assassinFight(){
  ID();
  aFCounter++;
  document.getElementById('storyDiv').innerHTML = "You are in combat with the Assassin...good luck!"
  +'<br><input type="button" value=' + player.spl1 + ' onclick="AFS1()"></input>'
  +'<input type="button" value=' + player.spl2 + ' onclick="AFS2()"></input>'
  +'<input type="button" value="TEST AHP" onclick="alert(Assassin.hp)"></input>'
  +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';
}

function AFS1(){
  if (player.atk+d20() >= Assassin.atk+d12()){
    document.getElementById('storyDiv').innerHTML = "You are in combat with the Assassin. Winning!"
    +'<input type="button" value="TEST AHP" onclick="alert(Assassin.hp)"></input>'
    +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';
    Assassin.hp = Assassin.hp-player.atk;
    ID();
}
    else{
      document.getElementById('storyDiv').innerHTML = "You are in combat with the Assassin. NOT WINNING!"
      +'<input type="button" value="TEST AHP" onclick="alert(Assassin.hp)"></input>'
      +'<input type="button" value="TEST PHP" onclick="alert(player.hp)"></input>';
      player.hp = player.hp-Assassin.atk;
      ID();}
}

function AFS2(){
  if (player.atk+d20() >= Assassin.atk+d12()){
    return Assassin.hp = Assassin.hp - 3*player.atk;
    ID();}
    else{
      return player.hp = player.hp - 3*Assassin.atk;
      ID();}
}