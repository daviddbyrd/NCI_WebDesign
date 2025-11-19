const message = document.getElementById("message");

for (let i = 99; i > 1; --i) {
  message.innerHTML +=
    i + " bottles of beer on the wall, " + i + " bottles of beer." + "</br>";
  message.innerHTML +=
    "Take one down and pass it around, " +
    (i - 1) +
    " bottles of beer on the wall." +
    "</br></br>";
}

message.innerHTML += "1 bottle of beer on the wall, 1 bottle of beer. </br>";
message.innerHTML +=
  "Take one down and pass it around, no more bottles of beer on the wall.</br></br>";

message.innerHTML +=
  "No more bottles of beer on the wall, no more bottles of beer.</br>";
message.innerHTML +=
  "Go to the store and buy some more, 99 bottles of beer on the wall.</br></br>";
