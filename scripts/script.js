function sum(a, b)
{
	var sum = parseInt(a) + parseInt(b);
	document.getElementById("result").innerHTML = a.concat(" + "+b+" = "+sum);
}

function sub(a, b)
{
	var sub = parseInt(a) - parseInt(b);
	document.getElementById("result").innerHTML = a.concat(" - "+b+" = "+sub);
}

function mul(a, b)
{
	var mul = parseInt(a) * parseInt(b);
	document.getElementById("result").innerHTML = a.concat(" x "+b+" = "+mul);
}

function div(a, b)
{
	var div = parseInt(a) / parseInt(b);
	document.getElementById("result").innerHTML = a.concat(" / "+b+" = "+div);
}