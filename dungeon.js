function toDungeon (){
  document.getElementById('storyDiv').innerHTML = "When you enter the dungeon, you see two hallways, one heading east and one heading south. Which way do you go?"
  +'<br><input type="button" value="South" onclick="p1()"></input>'
  +'<input type="button" value="East" onclick="p2()"></input>';
}

function p1(){
  document.getElementById('storyDiv').innerHTML = "You travel along the hallway. The floor is mostly dirt with some old stone scattered about. Torches line the walls but provide little light as you move deeper into the dungeon. Do you continue moving south, or head north?"
  +'<br><input type="button" value="North" onclick="toDungeon()"></input>'
  +'<input type="button" value="South" onclick="p3()"></input>'
  +'<input type="button" value="TEST" onclick="alert(p5Collapse)"></input>';
}

function p2(){
  document.getElementById('storyDiv').innerHTML = 'The hallway is dark and moves .'
  +'<br><input type="button" value="West" onclick="toDungeon()"></input>'
  +'<input type="button" value="East" onclick="p4()"></input>';
}

function p3(){
  if (p5Collapse < 1){
    document.getElementById('storyDiv').innerHTML = "spooky cooridor 3"
    +'<br><input type="button" value="North" onclick="p1()"></input>'
    +'<input type="button" value="South" onclick="p5()"></input>';
  } else {
      stopTimeout(p5Ctime);
      document.getElementById('storyDiv').innerHTML = "spooky cooridor 3.  There is rubble in the way, you cannot get to p5."
      +'<br><input type="button" value="North" onclick="p1()"></input>';}
}

function p4(){
  document.getElementById('storyDiv').innerHTML = 'T 4.'
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
        document.getElementById('storyDiv').innerHTML = "Hallway 5. Collapsed. You cannot return to p3."
      +'<br><input type="button" value="South" onclick="p7()"></input>';}
}

function p6(){
  document.getElementById('storyDiv').innerHTML = 'T 6'
  +'<br><input type="button" value="West" onclick="p12()"></input>'
  +'<input type="button" value="South" onclick="p10()"></input>'
  +'<input type="button" value="East" onclick="p8()"></input>';
}

function p7(){
  if (p5Collapse < 1){
        document.getElementById('storyDiv').innerHTML = "T 7."
        +'<br><input type="button" value="North" onclick="p5()"></input>'
        +'<input type="button" value="South" onclick="p11()"></input>'
        +'<input type="button" value="East" onclick="p9()"></input>'
        +'<input type="button" value="Test" onclick="alert(p7Fight)"></input>';
        } else{
        stopTimeout(p5Ctime);
        document.getElementById('storyDiv').innerHTML = "T 7. Debris has fallen, you cannot get to p5."
        +'<input type="button" value="South" onclick="p11()"></input>'
        +'<input type="button" value="East" onclick="p9()"></input>'
        +'<input type="button" value="Test" onclick="alert(p7Fight)"></input>'}
}

function p8(){
  document.getElementById('storyDiv').innerHTML = "Hallway 8"
  + '<br><input type="button" value="West" onclick="p6()"></input>'
  + '<input type="button" value="East" onclick="r5()"></input>';
}

function p9(){
  document.getElementById('storyDiv').innerHTML = "Hallway 9. Battle."
  + '<br><input type="button" value="Enter Assassin\'s Gallery" onclick="assassinFight()"></input>'
  + '<input type="button" value="West" onclick="p7()"></input>'
  +'<input type="button" value="TEST" onclick="alert(Assassin.hp)"></input>';
}

function p10(){
  document.getElementById('storyDiv').innerHTML = "Hallway 10."
  + '<br><input type="button" value="North" onclick="p6()"></input>'
  + '<input type="button" value="South" onclick="p14()"></input>';
}

function p11(){
  if (p11Fight < 1){
    p11F();
    p11Fight++;
     document.getElementById('storyDiv').innerHTML = "You are attacked by an Orc! T 11!"
        + '<br><input type="button" value=' + player.spl1 + ' onclick="p11F()"></input>';}
        else{
          document.getElementById('storyDiv').innerHTML = "Hallway 11. Battle."
          + '<br><input type="button" value="North" onclick="p7()"></input>'
          + '<input type="button" value="South" onclick="p13()"></input>';}
}

function p12(){
  if (p12Fight < 1){
    p12F();
    p12Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! Hallway 12."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p12F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "Hallway 12."
        + '<br><input type="button" value="West" onclick="p4()"></input>'
        + '<input type="button" value="East" onclick="p6()"></input>';}
}

function p13(){
  document.getElementById('storyDiv').innerHTML = "T 13."
  + '<br><input type="button" value="North" onclick="p11()"></input>'
  + '<input type="button" value="South" onclick="p15()"></input>'
  + '<input type="button" value="East" onclick="p47()"></input>';
}

function p14(){
  if (p14Fight < 1){
    p14F();
    p14Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! Hallway 14."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p14F()"></input>';
      } else{
        document.getElementById('storyDiv').innerHTML = "Hallway 14. Battle."
        + '<br><input type="button" value="North" onclick="p10()"></input>'
        + '<input type="button" value="Enter the Armory" onclick="armory()"></input>';}
}

function p15(){
  document.getElementById('storyDiv').innerHTML = "Hallway 15."
  + '<br><input type="button" value="North" onclick="p13()"></input>'
  + '<input type="button" value="South" onclick="p17()"></input>';
}

function p16(){
  if (p16Fight < 1){
    p16F();
    p16Fight++;
    document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! Hallway 16."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p16F()"></input>';
      } else{
        document.getElementById('storyDiv').innerHTML = "Hallway 16. Battle."
        + '<br><input type="button" value="Enter the Armory" onclick="armory()"></input>'
        + '<input type="button" value="South" onclick="p18()"></input>';}
}

function p17(){
 if (p17Fight < 1){
    p17F();
    p17Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! Hallway 17."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p17F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "T 17. Magical Battle."
        + '<br><input type="button" value="Enter the Black Alter" onclick="blkalter()"></input>'
        + '<input type="button" value="North" onclick="p15()"></input>'
        + '<input type="button" value="South" onclick="p19()"></input>';}
}

function p18(){
  document.getElementById('storyDiv').innerHTML = "Hallway 18."
  + '<br><input type="button" value="Enter Barracks" onclick="barracks()"></input>'
  + '<input type="button" value="North" onclick="p16()"></input>';
}

function p19(){
  document.getElementById('storyDiv').innerHTML = "Hallway 19."
  + '<br><input type="button" value="North" onclick="p17()"></input>'
  + '<input type="button" value="South" onclick="p21()"></input>';
}

function p20(){
  if (p20Fight < 1){
    p20F();
    p20Fight++;
      document.getElementById('storyDiv').innerHTML = "You are attacked by an orc! Hallway 20."
      + '<br><input type="button" value=' + player.spl1 + ' onclick="p20F()"></input>';
      }else{
        document.getElementById('storyDiv').innerHTML = "Hallway 20."
        + '<br><input type="button" value="West" onclick="r5()"></input>'
        + '<input type="button" value="East" onclick="r6()"></input>';}
}

function p21(){
  document.getElementById('storyDiv').innerHTML = "T 21."
  + '<br><input type="button" value="North" onclick="p19()"></input>'
  + '<input type="button" value="Not-so-secrect secret tunnel" onclick="s1()"></input>'
  + '<input type="button" value="South" onclick="p23()"></input>';
}

function p22(){
  if (p26Collapse < 1){
    document.getElementById('storyDiv').innerHTML = "T 22."
    +'<br><input type="button" value="North" onclick="r6()"></input>'
    +'<input type="button" value="South" onclick="p26()"></input>'
    +'<input type="button" value="East" onclick="p24()"></input>';
    } else{
        stopTimeout(p26Ctime);
        document.getElementById('storyDiv').innerHTML = "T 22. Debris. p26 inacessible."
        +'<br><input type="button" value="North" onclick="r6()"></input>'
        +'<input type="button" value="East" onclick="p24()"></input>';}
}
