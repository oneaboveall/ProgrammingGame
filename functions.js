function cleric(){
  var userAnswer = prompt('ARE YOU SURE YOU WANT TO BE A PATHETIC CLERIC ' + namebox.value + '? ' + ' Type in \'yes\' to confirm your class');
    userAnswer = userAnswer.toLowerCase();
    if (userAnswer === "yes"){
      player.spec='cleric';
      player.name=namebox.value;
      player.spl1='Smite';
      player.spl2='Holy_Fire';
      player.spl3='Holy_Wrath';
      player.spl4='Heal';
      player.spl5='Circle_of_Healing';
      player.spl6='Holy_Shield';
      document.getElementById('storyDiv').innerHTML = "You have chosen to be the cleric " + namebox.value;
      storyDisable()
      ID()
      }
      else { alert('Please say \'yes\' inorder to move on');
        return;
      }
}

function warrior(){
  var userAnswer = prompt('ARE YOU SURE YOU WANT TO BE A MUSCLE HEADED JOCK ' + namebox.value + '? ' + ' Type in \'yes\' to confirm your class');
    userAnswer = userAnswer.toLowerCase();
    if (userAnswer === "yes"){
      player.spec='warrior';
      player.name=namebox.value;
      player.spl1='Strike';
      player.spl2='Shield_Bash';
      player.spl3='Heroic_Strike';
      player.spl4='Cleave';
      player.spl5='Explosive_Stab';
      player.spl6='Intercept';
      document.getElementById('storyDiv').innerHTML = "You have chosen to be the warrior " + namebox.value;
      storyDisable()
      ID()
      }
      else { alert('Please say \'yes\' inorder to move on');
        return;
      }
}

function wizard(){
  var userAnswer = prompt('ARE YOU SURE YOU WANT TO BE A DRESS WEARING SISSY ' + namebox.value + '? ' + ' Type in \'yes\' to confirm your class');
    userAnswer = userAnswer.toLowerCase();
    if (userAnswer === "yes"){
      document.getElementById('storyDiv').innerHTML = "You have chosen to be the wizard " + namebox.value;
      player.spec='wizard';
      player.name=namebox.value;
      player.spl1='Arcane_Missile';
      player.spl2='Arcane_Beam';
      player.spl3='Arcane_Blast';
      player.spl4='Arcane_Explosion';
      player.spl5='Obliterate';
      player.spl6='Polymorph';
      storyDisable()
      ID()
      }
      else { alert('Please say \'yes\' inorder to move on');
        return;
      }
}

function rogue(){
  var userAnswer = prompt('ARE YOU SURE YOU WANT TO BE A COWARD THAT LIKES THE DARK ' + namebox.value + '? ' + ' Type in \'yes\' to confirm your class');
    userAnswer = userAnswer.toLowerCase();
    if (userAnswer === "yes"){
      document.getElementById('storyDiv').innerHTML = "You have chosen to be the rogue " + namebox.value;
      player.spec='rogue';
      player.name=namebox.value;
      player.spl1='Stab';
      player.spl2='Sinister_Strike';
      player.spl3='Heart_Stab';
      player.spl4='Fan_of_Daggers';
      player.spl5='Evicerate';
      player.spl6='Sap';
      storyDisable()
      ID()
      }
      else { alert('Please say \'yes\' inorder to move on');
        return;
      }
}

