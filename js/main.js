bd = document.getElementById("id_body_1");
var bdh = "<br><center><a href=\"games/snake.html\">Змейка</a><br><br><a href=\"games/_x_o_.html\">Крестики Нолики</a></center><script type=\"text/javascript\" src=\"js/main.js\"></script>";
setInterval(function () {
	bd.innerHTML = bdh;
}, 1000);