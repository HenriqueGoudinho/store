import Plyr from  '../plyr' ;

const Plyr = require("plyr");

const player = new Plyr("#player");

player.on("play", emitPlayerEvent);

function emitPlayerEvent(event) {
  document.getElementById("teststring").innerHTML = !event.detail.plyr
    ? "The plyr object DOES NOT exist!"
    : "The plyr object exists!";
  console.log(event);
}