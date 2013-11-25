function p17F(){
  document.getElementById('storyDiv').innerHTML = "You are locked in combat with an Unholy Priest!"
    if (player.atk+d20() >= orc.atk){
    document.getElementById('storyDiv').innerHTML = "You have killed the Unholy Priest!"
    +'<br><input type="button" value="Continue Adventure" onclick="p17()"></input>';
    player.atk++;
    p17Fight++;
    ID();
    } else{
    dead();
    }
}

function p49F(){
  document.getElementById('storyDiv').innerHTML = "You are locked in combat with an Unholy Priest!"
    if (player.atk+d20() >= orc.atk){
    document.getElementById('storyDiv').innerHTML = "You have killed the Unholy Priest!"
    +'<br><input type="button" value="Continue Adventure" onclick="p49()"></input>';
    player.atk++;
    p49Fight++;
    ID();
    } else{
    dead();
    }
}

function p50F(){
  document.getElementById('storyDiv').innerHTML = "You are locked in combat with an Sorcerer\'s Apprentace!"
    if (player.atk+d20() >= orc.atk){
    document.getElementById('storyDiv').innerHTML = "You have killed a sorcerer\'s apprentace!"
    +'<br><input type="button" value="Continue Adventure" onclick="p50()"></input>';
    player.atk++;
    p50Fight++;
    ID();
    } else{
    dead();
    }
}