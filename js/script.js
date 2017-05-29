document.body.style.backgroundColor = "red";
document.body.style.fontFamily = "Sans-serif";
document.getElementById("whatever").innerHTML = "Whatever I Want";
document.getElementById("whatever").style.backgroundColor = "blue";
document.getElementById("nickname").innerHTML = "Billyum";
document.getElementById("favorites").innerHTML = "My kid and my dog";
document.getElementById("hometown").innerHTML = "St. Louis, MO";

var listToChange = document.querySelectorAll("li");

for (var i = 0; i < listToChange.length; i++){
	listToChange[i].className = "listitem";
	listToChange[i].style.color = "red";
	listToChange[i].style.backgroundColor = "black";
}

var picture = document.createElement("img");
picture.setAttribute("src", "https://scontent.xx.fbcdn.net/v/t1.0-9/947080_10200819325980818_1014835407_n.jpg?oh=670dbcc3a58fc19575a755df41ba7bda&oe=5982A690");
picture.setAttribute("width", "300");
picture.setAttribute("height", "300");
document.querySelector("body").append(picture);


