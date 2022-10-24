


function show() {
  document.getElementById("answer").style.display = "block"; // recordar usar siempre el block para que me despliegue
  document.getElementById("que").style.color = "black"; // cambiar color text
  document.getElementById("que").style.fontWeight = "bolder"; // cambiar font weigth
  document.getElementById("svg").style.transform = "rotate(-180deg)"
  document.getElementById("svg").style.paddingLeft = "1px"; // con estos ultimos dos hago que el svg se traslade y se acomode al dar clic
};

function showoff() {
  document.getElementById("answer").style.display = "none"; 
  document.getElementById("que").style.color = "hsl(237, 12%, 33%)";
  document.getElementById("que").style.fontWeight = "100";
  document.getElementById("svg").style.transform = ""
  document.getElementById("svg").style.paddingLeft = "";
}; /* esto va con onmouseleave ya que me deja tomar un espacio del div mas ampli antes de borrarse */