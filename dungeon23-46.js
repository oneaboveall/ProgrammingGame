function p23(){
  document.getElementById('storyDiv').innerHTML = "Hallway 23."
  + '<br><input type="button" value="North" onclick="p21()"></input>'
  + '<input type="button" value="South" onclick="p25()"></input>';
}

function p24(){
  document.getElementById('storyDiv').innerHTML = "Hallway 24."
  + '<br><input type="button" value="West" onclick="p22()"></input>'
  + '<input type="button" value="Enter Room" onclick="r7()"></input>';
}

function p25(){
  if (p25Fight < 1){
    p25F();
    p25Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! Hallway 25."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p25F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "Hallway 25. Battle."
        + '<br><input type="button" value="North" onclick="p23()"></input>'
        + '<input type="button" value="Enter Torture Chamber" onclick="r2()"></input>';}
}

function p26(){
  document.getElementById('storyDiv').innerHTML = "Hallway 26. Collapse."
  + '<br><input type="button" value="North" onclick="p24()"></input>'
  +'<input type="button" value="South" onclick="p28()"></input>';
}

function p27(){
  document.getElementById('storyDiv').innerHTML = "Hallway 27."
  +'<br><input type="button" value="West" onclick="r2()"></input>'
  +'<input type="button" value="East" onclick="p29()"></input>';
}

function p28(){
  document.getElementById('storyDiv').innerHTML = "Hallway 28."
  +'<br><input type="button" value="North" onclick="26()"></input>'
  +'<input type="button" vlaue="South" onclick="30()"></input>'
}

function p29(){
  document.getElementById('storyDiv').innerHTML = "Hallway 29.  Collapse!"
  +'<br><input type="button" value="West" onclick="p27()"></input>'
  +'<input type="button" value="East" onclick="p31()"></input>';
}

function p30(){
  if (p30Fight < 1){
    p30F();
    p30Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! Hallway 30."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p30F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "Hallway 30. Battle!"
        +'<br><input type="button" value="North" onclick="p28()"></input>'
        +'<input type="button" value="South" onclick="p32()"></input>';}
}

function p31(){
  document.getElementById('storyDiv').innerHTML = "Hallway 31. Tunnel has collapsed behind you."
  +'<br><input type="button" value="East" onclick="p33()"></input>';
}

function p32(){
  document.getElementById('storyDiv').innerHTML = "Corner 32"
  +'<br><input type="button" value="West" onclick="p34"></input>'
  +'<input type="button" value="North" onclick="p30()"></input>';
}

function p33(){
  if (p33Fight < 1){
    p33F();
    p33Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! T 33."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p33F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "T 33. Battle."
        +'<br><input type="button" value="West" onclick="p31()"></input>'
        +'<input type="button" value="North" onclick="p61()"></input>'
        +'<input type="button" value="East" onclick="p35()"></input>';}
}

function p34(){
  document.getElementById('storyDiv').innerHTML = "Hallway 34."
  +'<br><input type="button" value="West" onclick="p36()"></input>'
  +'<input type="button" value="East" onclick="p32()"></input>';
}

function p35(){
  document.getElementById('storyDiv').innerHTML = "Hallway 35."
  +'<br><input type="button" value="West" onclick="p33()"></input>'
  +'<input type="button" value="South" onclick="p37()"></input>';
}

function p36(){
  document.getElementById('storyDiv').innerHTML = "Cross 36."
  +'<br><input type="button" value="West" onclick="p42()"></input>'
  +'<input type="button" value="North" onclick="p38()"></input>'
  +'<input type="button" value="East" onclick="p34()"></input>'
  +'<input type="button" value="South" onclick="p40()"></input>';
}

function p37(){
  document.getElementById('storyDiv').innerHTML = "Hallway 37."
  +'<br><input type="button" value="North" onclick="p35()"></input>'
  +'<input type="button" value="East" onclick="p39()"></input>';
}

function p38(){
  document.getElementById('storyDiv').innerHTML = "Hallway 38."
  +'<br><input type="button" value="North" onclick="r4()"></input>'
  +'<input type="button" value="South" onclick="p36"></input>';
}

function p39(){
  document.getElementById('storyDiv').innerHTML = "Hallway 39."
  +'<br><input type="button" value="West" onclick="p37()"></input>'
  +'<input type="button" value="East" onclick="p41()"></input>';
}

function p40(){
  document.getElementById('storyDiv').innerHTML = "Hallway 40."
  +'<br><input type="button" value="North" onclick="p36()"></input>'
  +'<input type="button" value="South" onclick="p44()"></input>';
}

function p41(){
  if (p41Fight < 1){
    p41F();
    p41Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! T 41."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p41F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "T 41. battle"
        +'<br><input type="button" value="West" onclick="p39()"></input>'
        +'<input type="button" value="North" onclick="p58()"></input>'
        +'<input type="button" value="East" onclick="p43()"></input>';}
}

function p42(){
  if (p42Fight < 1){
    p42F();
    p42Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! Hallway 42."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p42F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "Hallway 42. Battle."
        +'<br><input type="button" value="Enter the Barracks" onclick="barracks()"></input>'
        +'<input type="button" value="East" onclick="p36()"></input>';}
}

function p43(){
  if (p43Fight < 1){
    p43F();
    p43Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! Hallway 43."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p43F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "Hallway 43. BAttle."
        +'<br><input type="button" value="West" onclick="p41()"></input>'
        +'<input type="button" value="Enter the Room" onclick="r8()"></input>';}
}

function p44(){
  document.getElementById('storyDiv').innerHTML = "Hallway 44. Collapse."
  +'<br><input type="button" value="North" onclick="p40()"></input>'
  +'<input type="button" value="South" onclick="p46()"></input>';
}

function p45(){
  document.getElementById('storyDiv').innerHTML = "Hallway 45."
  +'<br><input type="button" value="Enter Room" onclick="r8()"></input>'
  +'<input type="button" value="Enter the Lair!!! DUN DUN DUN" onclick="lair()"></input>';
}

function p46(){
  document.getElementById('storyDiv').innerHTML = "Hallway 46."
  +'<br><input type="button" value="North" onclick="p44()"></input>'
  +'<input type="button" value="South" onclick="p48()"></input>';
}