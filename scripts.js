function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var rO = JSON.parse(this.responseText);

      document.getElementById("holder").innerHTML = "The player with the most SkyWars victories this month is:";
      document.getElementById("UN").innerHTML = rO[0].username + " (" + rO[0].victories + " victories)";

      console.log(rO);

      var i = 1;
      rO.forEach((username) => {
        var cr = document.createElement('div');
        var p = document.createElement('p');
        var node = document.createTextNode(rO[i].username + " has " + rO[i].victories + " victories, for #" + (i+1) + " on the leaderboard.");

          p.appendChild(node);
          cr.appendChild(p);
          document.body.appendChild(cr);
          i++;
      })
  }
};

  xhttp.open("GET", "https://api.playhive.com/v0/game/monthly/sky", true);
  xhttp.send();
}