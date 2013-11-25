function p47(){
  document.getElementById('storyDiv').innerHTML = "T 47."
  +'<br><input type="button" value="West" onclick="p13()"></input>'
  +'<input type="button" value="South" onclick="p49()"></input>'
  +'<input type="button" value="East" onclick="p51()"></input>';
}

function p48(){
  document.getElementById('storyDiv').innerHTML = "T 48."
  +'<br><input type="button" value="North" onclick="p46()"></input>'
  +'<input type="button" value="East" onclick="p50()"></input>'
  +'<input type="button" value="South" onclick="p54()"></input>';
}

function p49(){
  if (p49Fight < 1){
    p49F();
    p49Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! Hallway 49."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p49F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "Hallway 49."
        +'<br><input type="button" value="North" onclick="p47()"></input>'
        +'<input type="button" value="South" onclick="blkalter()"></input';}
}

function p50(){
  if (p50Fight < 1){
    p50F();
    p50Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! Hallway 50."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p50F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "Hallway 50. Magical battle"
        +'<br><input type="button" value="West" onclick="p48()"></input>'
        +'<input type="button" value="East" onclick="sorcerersChamber()"></input>';}
}

function p51(){
  if (p51Fight < 1){
    p51F();
    p51Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! Hallway 51."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p51F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "Hallway 51. Battle."
        +'<br><input type="button" value="West" onclick="p47()"></input>'
        +'<input type="button" value="East" onclick="barracks()"></input>';}
}

function p52(){
  document.getElementById('storyDiv').innerHTML = "Corner 52"
  +'<br><input type="button value="Enter Sorcerer\'s Chamber" onclick="sorcerersChamber()"></input>'
  +'<input type="button" value="Enter golem chamber" onclick="golem()"></input>';
}

function p53(){
  if (p53Fight < 1){
    p53F();
    p53Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! T 53."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p53F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "T 53. Battle."
        +'<br><input type="button" value="West" onclick="p63()"></input>'
        +'<input type="button" value="North" onclick="barracks()"></input>'
        +'<input type="button"  value="South" onclick="p55()"></input>';}
}

function p54(){
  if (p54Fight < 1){
    p54F();
    p54Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! Hallway 54."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p54F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "Hallway 54. Battle."
        +'<br><input type="button" value="North" onclick="p48()"></input>'
        +'<input type="button" value="South" onclick="p56()"></input>';}
}

function p55(){
  document.getElementById('storyDiv').innerHTML = "T 55."
  +'<br><input type="button" value="North" onclick="p53()"></input>'
  +'<input type="button" value="East" onclick="r3()"></input>'
  +'<input type="button" value="South" onclick="p57()"></input>';
}

function p56(){
  document.getElementById('storyDiv').innerHTML = "T 56. Bridge"
  +'<br><input type="button" value="North" onclick="p54()"></input>'
  +'<input type="button" value="East" onclick="p60()"></input>'
  +'<input type="button" value="South" onclick="p58()"></input>';
}

function p57(){
  document.getElementById('storyDiv').innerHTML = "T 57."
  +'<br><input type="button" value="West" onclick="p67()"></input>'
  +'<input type="button" value="North" onclick="p55()"></input>'
  +'<input type="button" value="South" onclick="p59()"></input>';
}

function p58(){
  document.getElementById('storyDiv').innerHTML = "Hallway 58"
  +'<br><input type="button" value="North" onclick="p56()"></input>'
  +'<input type="button" value="South" onclick="p41()"></input>';
}

function p59(){
  document.getElementById('storyDiv').innerHTML = "Hallway 59. Collapse!"
  +'<br><input type="button" value="North" onclick="p57()"></input>'
  +'<input type="button" value="South" onclick="p61()"></input>';
}

function p60(){
  document.getElementById('storyDiv').innerHTML = "hallway 60."
  +'<br><input type="button" value="West" onclick="p56()"></input>'
  +'<input type="button" value="East" onclick="p62()"></input>';
}

function p61(){
  document.getElementById('storyDiv').innerHTML = "T 61."
  +'<br><input type="button" value="Not-so-secret Secret Tunnel" onclick="s3()"></input>'
  +'<input type="button" value="North" onclick=p59()"></input>'
  +'<input type="button" value="South" onclick="p33()"></input>';
}

function p62(){
  if (p62Fight < 1){
    p62F();
    p62Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! Hallway 62."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p62F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "Hallway 62. Battle."
        +'<br><input type="button" value="West" onclick="p60()"></input>'
        +'<input type="butotn" value="East" onclick=p64()"></input>';}
}

function p63(){
  document.getElementById('storyDiv').innerHTML = "Corner 63"
  +'<br><input type="butotn" value="South" onclick="p65()"></input>'
  +'<input type="button" value="East" onclick="p53()"></input>';
}

function p64(){
  document.getElementById('storyDiv').innerHTML = "hallway 64."
  +'<br><input type="butotn" value="West" onclick="p62()"></input>'
  +'<input type="button" value="East" onclick="p66()"></input>';
}

function p65(){
  document.getElementById('storyDiv').innerHTML = "hallway 65."
  +'<br><input type="button" value="North" onclick="p63()"></input>'
  +'<input type="button" value="South" onclick="p67()"></input>';
}

function p66(){
  document.getElementById('storyDiv').innerHTML = "Endcap 66."
  +'<br><input type="button" value="West" onclick="p64()"></input>';
}

function p67(){
  document.getElementById('storyDiv').innerHTML = "Corner 67"
  +'<br><input type="button" value="North" onclick="p65()"></input>'
  +'<input type="button" value="East" onclick="p57()"></input>';
}

function s1(){
  document.getElementById('storyDiv').innerHTML ="Secret1"
  +'<br><input type="button" value="Exit secret Hallway" onclick="p21()"></input>'
  +'<input type="button" value="Go deeper" onclick="s2()"></input>';
}

function s2(){
  document.getElementById('storyDiv').innerHTML = "Secret2"
  +'<br><input type="button" value="Go West...you think" onclick="s1()"></input>'
  +'<input type="button" value="Go East-ish" onclick="s3()"></input>';
}

function s3(){
  document.getElementById('storyDiv').innerHTML = "Secret3."
  +'<br><input type="button" value="Go deeper" onclick="s2()"></input>'
  +'<input type="button" value="Exit secret Hallway" onclick="p61()"></input>';
}