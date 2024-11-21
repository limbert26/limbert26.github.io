function perico(event)
{

	event.preventDefault();
	var na=document.getElementById('nombre').value;

	var co=document.getElementById('contra').value;

	if (na=="limbert") 
	{
		if (co=="itec") 
		{
			alert("todo bien");
			window.location.href="prueva.html";
		}
		else
		{
			alert("contraseña incorrecta");
		}
	}
	else
	{
		alert("usuario no registrado");
	}
}