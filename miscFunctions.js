function storyDisable(){
  var nam
  nam = player.name.length
  if (nam ===0 ){
    document.getElementById('stobutton').style.display = "none";
    } else {document.getElementById('stobutton').style.display = "block";
    }
}

function d20(){
  return parseFloat(Math.floor(Math.random()*20+1));
}

function ID(){
  document.getElementById('idDiv').innerHTML = 'Name:'  + player.name + ',' + '   ' + 'Class: ' + player.spec + ',' + '   ' + 'Attack Value: ' + player.atk + '<hr>'
}

function RandomOneOf(list){
    return list[RandomInt(0, list.length-1)];
}

function dead(){
  document.getElementById('storyDiv').innerHTML = "You have died."
  +'<br><input type="button" value="Restart your adventure" onclick="location.reload()"></input>';
}

function crushed(){
  document.getElementById('storyDiv').innerHTML = "You have been crushed by falling rocks."
  +'<br><input type="button" value="Restart your adventure" onclick="location.reload()"></input>';
}

function stopTimeout(timer){
  clearTimeout(timer);
}