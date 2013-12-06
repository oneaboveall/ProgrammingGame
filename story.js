function storyStart(){
   document.getElementById('storyDiv').innerHTML = "<p><em>Your story begins as you enter the small hamlet of Clintonia.  "
    + "Clintonia is known as a peaceful villa where the casual laziness of the villiages permeates "
    + "the land surrounding and creates a relaxing atmosphere for both man and animal.  "
    + "As you approach, there is an unusual commotion in Clintonia, "
    + "as the villiages are rarely swayed form their complacency to anything resembling action.</em></p>"
    + "<p><em>As you move closer to the villiage square, you see a large group of townspeople surrounding a well-dressed man, "
    + "the only well-dressed man in the village evidently, berating him about \"stopping the menace\" and \"killing the beast\".</p>"
    + "<p>Being a man of action, you silence the commotion of the commmoners crowded before you "
    + "by yelling directly at the well-dressed man in the center of the commotion:</em>"
    + "<br><p>YOU THERE! THE SHORT, PAUNCHY MAN DRESSED IN YOUR SECOND-HAND FINERY!  "
    + "WHY IS THERE SUCH COMMOTION AFOOT?"
    + "<p><em>The crowd is silenced by your bellowing voice, then his paunchiness responds in shock,</em></p> "
    + "<p>I am the Earl of Clintonia! Who are you stranger?</p>"
    + player.name + ':  ' + "My name is " + player.name + ", the unvelievably powerfull " + player.spec 
    + " Fool! And I demand to know what warrents such a gathering!"
    + "<p><em>An awed hush passes through the crowd, and a wrinkly, old woman with a British accent approaches you in amazment:</em></p>"
    + "<p>BLIMEY GOV\'NA! You mean you haven\'t heard of the dragon, which lives in the dungeon and plagues the unusually lazy people of Clintoria?!</p>"
    + "<p>I have not, old woman. You tell her</p>"
    + "Well, won\t you help us slay him, being as you\'re the great, and powerful " + player.spec + " " + player.name + " and all?"
    + "<em>The old woman responds, rather condescendingly.</em>"
    + '<br><button value="Help the people" onclick="acceptQuest()">Accept Quest</button><button value="Do not help the people" onclick="denyQuest()">Deny Quest</button>'
   document.getElementById('startDiv').style.display= "none";
}

function acceptQuest(){
  document.getElementById('storyDiv').innerHTML= player.name + ":" + "HAVE NO FEAR INCREDIBLY OLD, CONDESCENDING WOMAN! I WILL EMBARK IMMEDIATELY TO SLAY THIS BEAST FOR THE GREATER GOOD!" + "<br><em>The crowd cheers in excitement!</em>"
  + "<br><em>Looking around, you see that many people have come out of their homes in support of you. Most of them look flabby and unable to engage in combat in any meaningful way. Will you take this peasantry with you to slay the beast, or strike them all down in a glorious bit of maniacal rage?</em><br>"
  + '<input type="button" value="Head off with the people to slay the dragon" onclick="headout()"></input>'
  + '<input type="button" value="Kill the villiagers!" onclick="killVilliage()"></input>';
  
}

function denyQuest(){
  document.getElementById('storyDiv').innerHTML = "You leave in shame and go home to live out your life in peace and die a meaningless death. No amount of soap could ever wash the stench of failure from your body."
  + '<br><input type="button" value="Restart your adventure...as if you ever started it" onclick="location.reload()"></input>';
}

function killVilliage(){
  var deathRoll
    deathRoll = d20()
  if (deathRoll < 15){
    document.getElementById('storyDiv').innerHTML = "You were not the hero they needed you to be! You obviously were not strong enough to defeat the dragon if the villiagers dispatched you! Your carcass now serves as a smelly pinata for the villagers you attempted to slaughter!"
    + '<br><input type="button" value="Restart Adventure" onclick="location.reload()"></input>';
    } else{
      document.getElementById('storyDiv').innerHTML = "You have murdered the vast majority of the villiagers! Those not yet murderized accept that they cannot defeat you. What will you do now?"
      + '<br><input type="button" value="Head out" onclick="headout()"></input>';
}
}

function headout(){
  var combat
    combat = d20();
    if (parseFloat(sFight) > 1){
      pm1Find();
      document.getElementById('stryDiv').innerHTML = "Avoided Combat!"
        + 'You come across the warrior, or the not warrior depending on code.'
        + '<br><input type="button" value="Accept the Warrior\'s aid" onclick="toDungeon()"></input>'
        + '<input type="button" value="Chicken out like the other villiagers" onclick="denyQuest()"></input>';
    }
    else if (combat <21){
      document.getElementById('storyDiv').innerHTML = "You are attacked by an unimpressive looking Orc! You must be getting close!"
        + '<br><input type="button" value=' + player.spl1 + ' onclick="fightRd()"></input>';
        sFight++;
      } else {
        pm1Find();
        document.getElementById('storyDiv').innerHTML = "Avoided Combat!"
        + 'You come across the warrior, or the not warrior depending on code.'
        + '<br><input type="button" value="Accept the Warrior\'s aid" onclick="toDungeon()"></input>'
        + '<input type="button" value="Chicken out like the other villiagers" onclick="denyQuest()"></input>';
        }
}
