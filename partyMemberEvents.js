function pm1Find(){
  if (player.spec != 'warrior'){
  document.getElementById('storyDiv').innerHTML = "You have found a warrior companion."
  +'<br><input type="button" value="Accept the warrior\s aid" onclick="toDungeon()"></input>'
  + '<input type="button" value="Chicken out like the other villiagers" onclick="denyQuest()"></input>';
  } else{
    document.getElementById('storyDiv').innerHTML = "You have not found a warrior companion."
    +'<br><input type="button" value="Accept the warrior\s aid" onclick="toDungeon()"></input>'
  + '<input type="button" value="Chicken out like the other villiagers" onclick="denyQuest()"></input>';}
}

function pm2Find(){
  switch (player.spec){
    case player.spec === warrior:
      document.getElementById('storyDiv').innerHTML = "You have found a CLERIC companion.";
    case player.spec === Cleric:
      document.getElementById('storyDiv').innerHTML = "You have found a Rogue companion.";
    case player.spec === wizard:
      document.getElementById('storyDiv').innerHTML = "You have found a Rogue companion.";
    case player.spec === rogue:
      document.getElementById('storyDiv').innerHTML = "You have found a Wizard companion.";
  }
}

function pm3Find(){
  switch (player.spec){
    case player.spec === warrior:
      document.getElementById('storyDiv').innerHTML = "You have found a warrior companion."
    case player.spec === Cleric:
    case player.spec === wizard:
    case player.spec === rogue:}
}