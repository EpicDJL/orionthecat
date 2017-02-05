$(function(){
		$("#login").submit(function(e){
			e.preventDefault();
			$(".login").addClass("init-shake");
			setTimeout(function(){
				$(".login").removeClass("init-shake");
			}, 1000);
		});
		
		$(".pass").on("keypress", function(){
			$(".arrow").css("opacity", "1");
		});
	})

var e = document.getElementById("fullscreen");

e.onclick = function() {

	if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
		RunPrefixMethod(document, "CancelFullScreen");
	}
	else {
		RunPrefixMethod(e, "RequestFullScreen");
	}

}

var pfx = ["webkit", "moz", "ms", "o", ""];
function RunPrefixMethod(obj, method) {
	
	var p = 0, m, t;
	while (p < pfx.length && !obj[m]) {
		m = method;
		if (pfx[p] == "") {
			m = m.substr(0,1).toLowerCase() + m.substr(1);
		}
		m = pfx[p] + m;
		t = typeof obj[m];
		if (t != "undefined") {
			pfx = [pfx[p]];
			return (t == "function" ? obj[m]() : obj[m]);
		}
		p++;
	}

}

*
{
	padding: 0;
	margin: 0;
}

html, body
{
	height: 100%;
	font-family: "Segoe UI", arial, helvetica, freesans, sans-serif;
	color: #333;
	background-color: #fff;
	overflow-y: auto;
	overflow-x: hidden;
}

body
{
	margin: 10px;
}

p
{
	margin: 0 0 1em 0;
}

section
{
	display: block;
	float: right;
	width: 40%;
	padding: 10px;
	margin: 0;
	border: 2px solid #ddd;
	cursor: pointer;
}

section img
{
	width: 100%;
}

section p
{
	font-weight: bold;
	text-align: center;
	margin: 0;
}

section:-webkit-full-screen
{
	float: none;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	border: 0 none;
	background-color: #f00;
}

section:-moz-full-screen
{
	float: none;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	border: 0 none;
}

section:-ms-full-screen
{
	float: none;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	border: 0 none;
}

section:-o-full-screen
{
	float: none;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	border: 0 none;
}

section:full-screen
{
	float: none;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	border: 0 none;
}
