function p23(){
  document.getElementById('storyDiv').innerHTML = "The hallway continues. Head North or South?"
  + '<br><input type="button" value="North" onclick="p21()"></input>'
  + '<input type="button" value="South" onclick="p25()"></input>';
}

function p24(){
  if (p24Fight < 1){
    p24F();
    p24Fight++;
      document.getElementById('storyDiv').innerHTML = "How many orcs can possibly attack you in one dungeon? If you kill all of them is it considered genocide?"
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p24F()"></input>';
      } else{
        document.getElementById('storyDiv').innerHTML = "Another orc down. Your getting really good at this."
        + '<br><input type="button" value="West" onclick="p22()"></input>'
        + '<input type="button" value="Enter Room" onclick="r7()"></input>';
        }
}

function p25(){
  if (p25Fight < 1){
    p25F();
    p25Fight++;
      document.getElementById('storyDiv').innerHTML = "If you guessed you would be attacked by another orc, you were correct! SHOW THIS FOOL WHOS BOSS!."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p25F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "WHOS THE BOSS ORK? You taunt your fallen adversary and gloat to yourself, before continuing on with your quest."
        + '<br><input type="button" value="North" onclick="p23()"></input>'
        + '<input type="button" value="Enter Torture Chamber" onclick="r2()"></input>';}
}

function p26(){
if (p26Collapse < 1){
    p26C();
    p26Collapse++;
      document.getElementById('storyDiv').innerHTML = "You are about to be crushed!"
        +'<br><input type="button" value="MOVE!" onclick="p22()"></input>'
        +'<input type="button" value="MOVE!" onclick="p28()"></input>';
    } else{
        stopTimeout(p26Ctime);
        document.getElementById('storyDiv').innerHTML = "The collapse now blocks a pathway. which way do you go?"
        + '<br><input type="button" value="North" onclick="p22()"></input>'
        +'<input type="button" value="South" onclick="p28()"></input>';}
}

function p27(){
  if (p29Collapse < 1){
    document.getElementById('storyDiv').innerHTML = "Another hallway."
    +'<br><input type="button" value="West" onclick="r2()"></input>'
    +'<input type="button" value="East" onclick="p29()"></input>';
    } else{
        stopTimeout(p29Ctime);
        document.getElementById('storyDiv').innerHTML = "You cannot continue east due to the collapse. You must go west."
        +'<input type="button" value="Enter Room" onclick="r2()"></input>';}
}

function p28(){
  if (p26Collapse > 1){
    document.getElementById('storyDiv').innerHTML = "A generic hallway with nothing special about it."
    +'<br><input type="button" value="North" onclick="p26()"></input>'
    +'<input type="button" value="South" onclick="p30()"></input>';
    } else{
        stopTimeout(p26Ctime);
        document.getElementById('storyDiv').innerHTML = "You cannot go north due to the collapse."
        +'<input type="button" value="South" onclick="p30()"></input>';
        }
}

function p29(){
  if (p29Collapse < 1){
    p29C();
    p29Collapse++
    document.getElementById('storyDiv').innerHTML = "You are about to be crushed!"
      +'<br><input type="button" value="MOVE!" onclick="p27()"></input>'
      +'<br><input type="button" value="MOVE!" onclick="p31()"></input>';
    } else{
        stopTimeout(p29Ctime);
        document.getElementById('storyDiv').innerHTML = "A pathway is collapsed. Which way do you go?"
        +'<br><input type="button" value="West" onclick="p27()"></input>'
        +'<input type="button" value="East" onclick="p31()"></input>';}
}

function p30(){
  if (p30Fight < 1){
    p30F();
    p30Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! just when you were getting bored!"
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p30F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "Another hallway, another slain orc."
        +'<br><input type="button" value="North" onclick="p28()"></input>'
        +'<input type="button" value="South" onclick="p32()"></input>';}
}

function p31(){
  if (p29Collapse < 1){
    document.getElementById('storyDiv').innerHTML = "Which way do you choose to go?"
    +'<br><input type="button" value="West" onclick="p29()"></input>'
    +'<input type="button" value="East" onclick="p33()"></input>';
  } else{
      stopTimeout(p29Ctime);
      document.getElementById('storyDiv').innerHTML = "The collapse is blocking you from heading west."
      +'<input type="button" value="East" onclick="p33()"></input>';}
}

function p32(){
  document.getElementById('storyDiv').innerHTML = "A corner space"
  +'<br><input type="button" value="West" onclick="p34()"></input>'
  +'<input type="button" value="North" onclick="p30()"></input>';
}

function p33(){
  if (p33Fight < 1){
    p33F();
    p33Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! LETS DO THIS THANG!"
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p33F()"></input>';
      } else{
        document.getElementById('storyDiv').innerHTML = "YEAH BOYEEE! You smoked that fool! Which way do you move next?"
        +'<br><input type="button" value="West" onclick="p31()"></input>'
        +'<input type="button" value="North" onclick="p61()"></input>'
        +'<input type="button" value="East" onclick="p35()"></input>';}
}

function p34(){
  document.getElementById('storyDiv').innerHTML = "Another hallway."
  +'<br><input type="button" value="West" onclick="p36()"></input>'
  +'<input type="button" value="East" onclick="p32()"></input>';
}

function p35(){
  document.getElementById('storyDiv').innerHTML = "Another hallway."
  +'<br><input type="button" value="West" onclick="p33()"></input>'
  +'<input type="button" value="South" onclick="p37()"></input>';
}

function p36(){
  document.getElementById('storyDiv').innerHTML = "A four-way intersection."
  +'<br><input type="button" value="West" onclick="p42()"></input>'
  +'<input type="button" value="North" onclick="p38()"></input>'
  +'<input type="button" value="East" onclick="p34()"></input>'
  +'<input type="button" value="South" onclick="p40()"></input>';
}

function p37(){
  document.getElementById('storyDiv').innerHTML = "Another hallway."
  +'<br><input type="button" value="North" onclick="p35()"></input>'
  +'<input type="button" value="East" onclick="p39()"></input>';
}

function p38(){
  document.getElementById('storyDiv').innerHTML = "Another hallway."
  +'<br><input type="button" value="North" onclick="r4()"></input>'
  +'<input type="button" value="South" onclick="p36()"></input>';
}

function p39(){
  document.getElementById('storyDiv').innerHTML = "Another hallway."
  +'<br><input type="button" value="West" onclick="p37()"></input>'
  +'<input type="button" value="East" onclick="p41()"></input>';
}

function p40(){
  if (p44Collapse < 1){
    document.getElementById('storyDiv').innerHTML = "Another hallway."
    +'<br><input type="button" value="North" onclick="p36()"></input>'
    +'<input type="button" value="South" onclick="p44()"></input>';
    } else{
      stopTimeout(p44Ctime);
      document.getElementById('storyDiv').innerHTML = "The southern route is blocked by the collapse, you must choose another route."
      +'<input type="button" value="North" onclick="p36()"></input>';}
}

function p41(){
  if (p41Fight < 1){
    p41F();
    p41Fight++;
      document.getElementById('storyDiv').innerHTML = "What is green with envy and loves to attack you in dungeons? An orc with nothing better to do. MURDER HIM TO DEATH!"
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p41F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "You did a fine job murdering that ork to death. You try not to hurt yourself by patting your own back as you press forward."
        +'<br><input type="button" value="West" onclick="p39()"></input>'
        +'<input type="button" value="North" onclick="p58()"></input>'
        +'<input type="button" value="East" onclick="p43()"></input>';}
}

function p42(){
  if (p42Fight < 1){
    p42F();
    p42Fight++;
      document.getElementById('storyDiv').innerHTML = "An ork jumps out from the darkness and attacks you. Make him pay for it!"
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p42F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "You step over the orcs corpse on your way to the next intersection. A clearly marked barracks room is one of your options."
        +'<br><input type="button" value="Enter the Barracks" onclick="barracks()"></input>'
        +'<input type="button" value="East" onclick="p36()"></input>';}
}

function p43(){
  if (p43Fight < 1){
    p43F();
    p43Fight++;
      document.getElementById('storyDiv').innerHTML = "ORK ATTACK!."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p43F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "You almost pitty him for how easy it was to dispatch him Your next move?."
        +'<br><input type="button" value="West" onclick="p41()"></input>'
        +'<input type="button" value="Enter the Room" onclick="r8()"></input>';}
}

function p44(){
  if (p44Collapse < 1){
    p44C();
    p44Collapse++;
    document.getElementById('storyDiv').innerHTML = "You are about to be crushed!"
      +'<br><input type="button" value="MOVE!" onclick="p40()"></input>'
      +'<input type="button" value="MOVE!" onclick="p46()"></input>';
  } else{
      document.getElementById('storyDiv').innerHTML = "Another hallway."
      +'<br><input type="button" value="North" onclick="p40()"></input>'
      +'<input type="button" value="South" onclick="p46()"></input>';}
}

function p45(){
  document.getElementById('storyDiv').innerHTML = "Another hallway."
  +'<br><input type="button" value="Enter Room" onclick="r8()"></input>'
  +'<input type="button" value="Enter the Lair!!! DUN DUN DUN" onclick="lair()"></input>';
}

function p46(){
  if (p44Collapse < 1){
    document.getElementById('storyDiv').innerHTML = "Another hallway."
    +'<br><input type="button" value="North" onclick="p44()"></input>'
    +'<input type="button" value="South" onclick="p48()"></input>';
  } else{
      stopTimeout(p44Ctime);
      document.getElementById('storyDiv').innerHTML = "Collapsed rock and debris blocks the route north."
      +'<input type="button" value="South" onclick="p48()"></input>';}
}
