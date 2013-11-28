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

}

function pm3Find(){

}