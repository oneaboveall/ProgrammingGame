function p47(){
  document.getElementById('storyDiv').innerHTML = "You find yourself at a three-way intersection."
  +'<br><input type="button" value="West" onclick="p13()"></input>'
  +'<input type="button" value="South" onclick="p49()"></input>'
  +'<input type="button" value="East" onclick="p51()"></input>';
}

function p48(){
  document.getElementById('storyDiv').innerHTML = "Another Corridor."
  +'<br><input type="button" value="North" onclick="p46()"></input>'
  +'<input type="button" value="East" onclick="p50()"></input>'
  +'<input type="button" value="South" onclick="p54()"></input>';
}

function p49(){
  if (p49Fight < 1){
    p49F();
    p49Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc!"
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p49F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "You discover a large black alter glowing with a mysterious light. Do you dare enter?"
        +'<br><input type="button" value="North" onclick="p47()"></input>'
        +'<input type="button" value="Enter Black Alter" onclick="blkalter()"></input';}
}

function p50(){
  if (p50Fight < 1){
    p50F();
    p50Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc!"
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p50F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "You are in a hallway"
        +'<br><input type="button" value="West" onclick="p48()"></input>'
        +'<input type="button" value="East" onclick="sorcerersChamber()"></input>';}
}

function p51(){
  if (p51Fight < 1){
    p51F();
    p51Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc!"
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p51F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "You see the cross sword symbol indicating a barracks."
        +'<br><input type="button" value="West" onclick="p47()"></input>'
        +'<input type="button" value="Enter Barracks" onclick="barracks()"></input>';}
}

function p52(){
  document.getElementById('storyDiv').innerHTML = "You see a room seperating two chambers. Both seem to be unique within the dungeon."
  +'<br><input type="button" value="Enter Sorcerer\'s Chamber" onclick="sorcerersChamber()"></input>'
  +'<input type="button" value="Enter golem chamber" onclick="golemRoom()"></input>';
}

function p53(){
  if (p53Fight < 1){
    p53F();
    p53Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc!"
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p53F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "You see the cross-sword symbol indicating a barracks."
        +'<br><input type="button" value="West" onclick="p63()"></input>'
        +'<input type="button" value="Enter Barracks" onclick="barracks()"></input>'
        +'<input type="button"  value="South" onclick="p55()"></input>';}
}

function p54(){
  if (p54Fight < 1){
    p54F();
    p54Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc!"
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p54F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "You dispatch your enemy and press forward."
        +'<br><input type="button" value="North" onclick="p48()"></input>'
        +'<input type="button" value="South" onclick="p56()"></input>';}
}

function p55(){
  document.getElementById('storyDiv').innerHTML = "A three-way intersection."
  +'<br><input type="button" value="North" onclick="p53()"></input>'
  +'<input type="button" value="East" onclick="r3()"></input>'
  +'<input type="button" value="South" onclick="p57()"></input>';
}

function p56(){
  document.getElementById('storyDiv').innerHTML = "a three-way intersection."
  +'<br><input type="button" value="North" onclick="p54()"></input>'
  +'<input type="button" value="East" onclick="p60()"></input>'
  +'<input type="button" value="South" onclick="p58()"></input>';
}

function p57(){
  if (p59Collapse < 1){
    document.getElementById('storyDiv').innerHTML = "A three-way intersection."
    +'<br><input type="button" value="West" onclick="p67()"></input>'
    +'<input type="button" value="North" onclick="p55()"></input>'
    +'<input type="button" value="South" onclick="p59()"></input>';
    } else{
        stopTimeout(p59Ctime);
        document.getElementById('storyDiv').innerHTML = "The bridge has collapsed. You cannot go south."
        +'<br><input type="button" value="West" onclick="p67()"></input>'
        +'<input type="button" value="North" onclick="p55()"></input>';}
}

function p58(){
  document.getElementById('storyDiv').innerHTML = "A non-descript hallway."
  +'<br><input type="button" value="North" onclick="p56()"></input>'
  +'<input type="button" value="South" onclick="p41()"></input>';
}

function p59(){
  if (p59Collapse < 1){
    p59C();
    p59Collapse++;
    document.getElementById('storyDiv').innerHTML = "You are about to be crushed!"
    +'<br><input type="button" value="MOVE!" onclick="p57()"></input>'
    +'<br><input type="button" value="MOVE!" onclick="p61()"></input>'
  } else {document.getElementById('storyDiv').innerHTML = "Hallway 59. Collapse!"
      +'<br><input type="button" value="North" onclick="p57()"></input>'
      +'<input type="button" value="South" onclick="p61()"></input>';}
}

function p60(){
  document.getElementById('storyDiv').innerHTML = "a non-descript hallway."
  +'<br><input type="button" value="West" onclick="p56()"></input>'
  +'<input type="button" value="East" onclick="p62()"></input>';
}

function p61(){
  if (p59Collapse < 1){
    document.getElementById('storyDiv').innerHTML = "You notice a tunnel that was once probably a secret, but no longer is."
    +'<br><input type="button" value="Not-so-secret Secret Tunnel" onclick="s3()"></input>'
    +'<input type="button" value="North" onclick="p59()"></input>'
    +'<input type="button" value="South" onclick="p33()"></input>';
    } else{
      stopTimeout(p59Ctime);
      document.getElementById('storyDiv').innerHTML = "The bridge is blocking the road to the north. Head south, or use the tunnel?"
      +'<br><input type="button" value="Not-so-secret Secret Tunnel" onclick="s3()"></input>'
      +'<input type="button" value="South" onclick="p33()"></input>';}
}

function p62(){
  if (p62Fight < 1){
    p62F();
    p62Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc!"
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p62F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "Which way do you go next?"
        +'<br><input type="button" value="West" onclick="p60()"></input>'
        +'<input type="button" value="East" onclick="p64()"></input>';}
}

function p63(){
  document.getElementById('storyDiv').innerHTML = "Head South or East?"
  +'<br><input type="button" value="South" onclick="p65()"></input>'
  +'<input type="button" value="East" onclick="p53()"></input>';
}

function p64(){
  document.getElementById('storyDiv').innerHTML = "A non-descript hallway."
  +'<br><input type="button" value="West" onclick="p62()"></input>'
  +'<input type="button" value="East" onclick="p66()"></input>';
}

function p65(){
  document.getElementById('storyDiv').innerHTML = "A non-descript hallway."
  +'<br><input type="button" value="North" onclick="p63()"></input>'
  +'<input type="button" value="South" onclick="p67()"></input>';
}

function p66(){
  document.getElementById('storyDiv').innerHTML = "A dead end. The tunnel stops abrubtly, this is not the way you should be going."
  +'<br><input type="button" value="West" onclick="p64()"></input>';
}

function p67(){
  document.getElementById('storyDiv').innerHTML = "A non-descript hallway."
  +'<br><input type="button" value="North" onclick="p65()"></input>'
  +'<input type="button" value="East" onclick="p57()"></input>';
}

function s1(){
  document.getElementById('storyDiv').innerHTML ="You have found a secret tunnel! You are not sure which direction is which, but your fumbling has revealed it goes deeper into the dungeon. Which way do you go?"
  +'<br><input type="button" value="Exit secret Hallway" onclick="p21()"></input>'
  +'<input type="button" value="Go deeper" onclick="s2()"></input>';
}

function s2(){
  document.getElementById('storyDiv').innerHTML = "You are completely disoriented. Maybe this hallway was a legitimate secret after all. You have think you know which direction you are traveling in, but you are not certain."
  +'<br><input type="button" value="Go West...you think" onclick="s1()"></input>'
  +'<input type="button" value="Go East-ish" onclick="s3()"></input>';
}

function s3(){
  document.getElementById('storyDiv').innerHTML = "Huzzah! You have found the exit... probably. Do you take the supposed exit or continue deeper into this, the most secret of tunnels?."
  +'<br><input type="button" value="Go deeper" onclick="s2()"></input>'
  +'<input type="button" value="Exit secret Hallway" onclick="p61()"></input>';
}
