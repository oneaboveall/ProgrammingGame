function toDungeon (){
  document.getElementById('storyDiv').innerHTML = "When you enter the dungeon, you see two hallways, one heading east and one heading south. Which way do you go?"
  +'<br><input type="button" value="South" onclick="p1()"></input>'
  +'<input type="button" value="East" onclick="p2()"></input>';
}

function p1(){
  document.getElementById('storyDiv').innerHTML = "You travel along the hallway. The floor is mostly dirt with some old stone scattered about. Torches line the walls but provide little light as you move deeper into the dungeon. Do you continue moving south, or head north?"
  +'<br><input type="button" value="North" onclick="toDungeon()"></input>'
  +'<input type="button" value="South" onclick="p3()"></input>';
}

function p2(){
  document.getElementById('storyDiv').innerHTML = 'The hallway continues. Which way do you chooose? .'
  +'<br><input type="button" value="West" onclick="toDungeon()"></input>'
  +'<input type="button" value="East" onclick="p4()"></input>';
}

function p3(){
  if (p5Collapse < 1){
    document.getElementById('storyDiv').innerHTML = "You find yourself in a corridor where the level of spookiness is almost unbearable. Almost. Which way do you choose to go?"
    +'<br><input type="button" value="North" onclick="p1()"></input>'
    +'<input type="button" value="South" onclick="p5()"></input>';
  } else {
      stopTimeout(p5Ctime);
      document.getElementById('storyDiv').innerHTML = "You find yourself in yet another spooky hallway. You are shaken from your reflection on the spookiness by rubble blocking the path to the south."
      +'<br><input type="button" value="North" onclick="p1()"></input>';}
}

function p4(){
  document.getElementById('storyDiv').innerHTML = 'You are at an intersection with three possible options.'
  +'<br><input type="button" value="west" onclick="p2()"></input>'
  +'<input type="button" value="south" onclick="r1()"></input>'
  +'<input type="button" value="East" onclick="p12()"></input>';
}

function p5(){
  if (p5Collapse < 1){
    p5C();
    p5Collapse++;
      document.getElementById('storyDiv').innerHTML = "You are about to be crushed!"
        +'<br><input type="button" value="MOVE!" onclick="p3()"></input>'
        +'<input type="button" value="MOVE!" onclick="p7()"></input>';
    } else{
        stopTimeout(p5Ctime);
        document.getElementById('storyDiv').innerHTML = "The collapse has blocked your path. You cannot return to the northerly passage."
      +'<br><input type="button" value="South" onclick="p7()"></input>';}
}

function p6(){
  document.getElementById('storyDiv').innerHTML = 'You are at another intersection with three branching paths.'
  +'<br><input type="button" value="West" onclick="p12()"></input>'
  +'<input type="button" value="South" onclick="p10()"></input>'
  +'<input type="button" value="East" onclick="p8()"></input>';
}

function p7(){
  if (p5Collapse < 1){
        document.getElementById('storyDiv').innerHTML = "A hallway leads easterly, with ominious blood spatterings on the walls. You cannot tell if they were made by man or beast, but you weigh the options of finding out in either event. Which way do you choose?"
        +'<br><input type="button" value="North" onclick="p5()"></input>'
        +'<input type="button" value="South" onclick="p11()"></input>'
        +'<input type="button" value="East" onclick="p9()"></input>';
        } else{
        stopTimeout(p5Ctime);
        document.getElementById('storyDiv').innerHTML = "You are at another intersection. Debris has fallen, you cannot get to the northerly path."
        +'<input type="button" value="South" onclick="p11()"></input>'
        +'<input type="button" value="East" onclick="p9()"></input>';}
}

function p8(){
  document.getElementById('storyDiv').innerHTML = "Yet another hallway. This dungeon is much bigger than you originally anticipated"
  + '<br><input type="button" value="West" onclick="p6()"></input>'
  + '<input type="button" value="East" onclick="r5()"></input>';
}

function p9(){
  document.getElementById('storyDiv').innerHTML = "The blood spatterings on the wall increase as you head east. Just as your feeling of dread grows into a lump in your throat, you are pleasantly surprised by A RANDOM ENCOUNTER!"
  + '<br><input type="button" value="Enter Assassin\'s Gallery" onclick="assassinFight()"></input>'
  + '<input type="button" value="West" onclick="p7()"></input>';
}

function p10(){
  document.getElementById('storyDiv').innerHTML = "The hallway continues."
  + '<br><input type="button" value="North" onclick="p6()"></input>'
  + '<input type="button" value="South" onclick="p14()"></input>';
}

function p11(){
  if (p11Fight < 1){
    p11F();
    p11Fight++;
     document.getElementById('storyDiv').innerHTML = "You are attacked by an Orc while moving through the corridor! LETS GET IT ON."
        + '<br><input type="button" value=' + player.spl1 + ' onclick="p11F()"></input>';}
        else{
          document.getElementById('storyDiv').innerHTML = "You defeated the ork and now must press forward. Which way do you choose?"
          + '<br><input type="button" value="North" onclick="p7()"></input>'
          + '<input type="button" value="South" onclick="p13()"></input>';}
}

function p12(){
  if (p12Fight < 1){
    p12F();
    p12Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by another generic orc in the hallway! Let slip your anger!"
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p12F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "You are in a non-descript hallway."
        + '<br><input type="button" value="West" onclick="p4()"></input>'
        + '<input type="button" value="East" onclick="p6()"></input>';}
}

function p13(){
  document.getElementById('storyDiv').innerHTML = "Another three-way intersection."
  + '<br><input type="button" value="North" onclick="p11()"></input>'
  + '<input type="button" value="South" onclick="p15()"></input>'
  + '<input type="button" value="East" onclick="p47()"></input>';
}

function p14(){
  if (p14Fight < 1){
    p14F();
    p14Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc!"
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p14F()"></input>';
      } else{
        document.getElementById('storyDiv').innerHTML = "That random encounter sure was random! You see a pair of cross swords over a shield indicating that there is a armory within the dungeon. Which was do you go?"
        + '<br><input type="button" value="North" onclick="p10()"></input>'
        + '<input type="button" value="Enter the Armory" onclick="armory()"></input>';}
}

function p15(){
  document.getElementById('storyDiv').innerHTML = "An amazingly uninspired hallway."
  + '<br><input type="button" value="North" onclick="p13()"></input>'
  + '<input type="button" value="South" onclick="p17()"></input>';
}

function p16(){
  if (p16Fight < 1){
    p16F();
    p16Fight++;
    document.getElementById('storyDiv').innerHTML = "Knock knock. Who is there? A RANDOM ORC BATTLE!"
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p16F()"></input>';
      } else{
        document.getElementById('storyDiv').innerHTML = "You see a pair of cross swords in front of a doorway clearly indicating that the room is an armory. Do you enter it, or head south?"
        + '<br><input type="button" value="Enter the Armory" onclick="armory()"></input>'
        + '<input type="button" value="South" onclick="p18()"></input>';}
}

function p17(){
 if (p17Fight < 1){
    p17F();
    p17Fight++;
      document.getElementById('storyDiv').innerHTML = "You zone out for a minute and think about delicious snow cones, when you are BRUTALLY RANDOMLY ENCOUNTERED BY A VICIOUS BLOOD SUCKING CREATURE!"
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p17F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "After your duel, you notice an ominous obsidian alter that glows with a foreign power you are not familiar with. Do you dare approach it? "
        + '<br><input type="button" value="Enter the Black Alter" onclick="blkalter()"></input>'
        + '<input type="button" value="North" onclick="p15()"></input>'
        + '<input type="button" value="South" onclick="p19()"></input>';}
}

function p18(){
  document.getElementById('storyDiv').innerHTML = "A room which looks as though it could serve as barracks lies before you."
  + '<br><input type="button" value="Enter Barracks" onclick="barracks()"></input>'
  + '<input type="button" value="North" onclick="p16()"></input>';
}

function p19(){
  document.getElementById('storyDiv').innerHTML = "You are in an entirely unremarkable hallway."
  + '<br><input type="button" value="North" onclick="p17()"></input>'
  + '<input type="button" value="South" onclick="p21()"></input>';
}

function p20(){
  if (p20Fight < 1){
    p20F();
    p20Fight++;
      document.getElementById('storyDiv').innerHTML = "What begins with O and ends with a C or K and loves to attack you? The ORK that just attacked you!"
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p20F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "After the battle you find yourself in a hallway lacking notable features."
        + '<br><input type="button" value="West" onclick="r5()"></input>'
        + '<input type="button" value="East" onclick="r6()"></input>';}
}

function p21(){
  document.getElementById('storyDiv').innerHTML = "An average hallway"
  + '<br><input type="button" value="North" onclick="p19()"></input>'
  + '<input type="button" value="Not-so-secrect secret tunnel" onclick="s1()"></input>'
  + '<input type="button" value="South" onclick="p23()"></input>';
}

function p22(){
  if (p26Collapse < 1){
    document.getElementById('storyDiv').innerHTML = "Another T intesection."
    +'<br><input type="button" value="North" onclick="r6()"></input>'
    +'<input type="button" value="South" onclick="p26()"></input>'
    +'<input type="button" value="East" onclick="p24()"></input>';
    } else{
        stopTimeout(p26Ctime);
        document.getElementById('storyDiv').innerHTML = "Debris seperates you from moving anywhere but north or east."
        +'<br><input type="button" value="North" onclick="r6()"></input>'
        +'<input type="button" value="East" onclick="p24()"></input>';}
}
