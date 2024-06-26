// const dropBtn = document.getElementById("dropBtn")
const workTextTitle = document.getElementById("workTextTitle");
const workText = document.getElementById("workText");
const workImage = document.getElementById("workImg")
const methods = [
    { id: "method1", text: "<p>Todos los dias, recolectamos los pedidos de tus ventas realizadas hasta el horario de corte. Recolectamos los pedidos ya preparados, embalados y etiquetados para ser escaneados y contabilizados al momento de la recolección.<br><br>*El horario de corte generalmente es a las 12 del mediodía, nosotros ofrecemos horario de corte a las 12, 13 y 14hs* </p>", imgSrc: "./recoleccion.jpg" },
    { id: "method2", text: "<p>Organizamos todos los pedidos en nuestro centro de almacenamiento, donde generamos diferentes rutas de distribución, para resolver todas las entregas en el día.<br><br>Este paso es fundamental para optimizar al máximo los tiempos de entrega.</p>", imgSrc: "./distribucion.jpg" },
    { id: "method3", text: "<p>Tus paquetes parten a destino en diferentes vehículos, clasificados y ruteados por las diferentes zonas de entrega.<br><br> Esto nos permite brindar un servicio ágil y de calidad a muy bajo costo, aunque tus pedidos se encuentren muy alejados el uno del otro.</p>", imgSrc: "./expedicion.jpg" },
    { id: "method4", text: "<p>Referencias en tiempo real del estado de tus envíos.<br><br> Además, contás con nuestros canal de atención inmediata via WhatsApp.<p>", imgSrc: "./soporte.jpg" }
  ];
  

  methods.forEach(method => {
    const element = document.getElementById(method.id);
  
    element.addEventListener("click", () => {
      let workTitle = element.textContent.substring(3)
      workTextTitle.textContent = workTitle;
      workText.innerHTML = method.text;
      workImage.src = method.imgSrc;
    });
  });
  
  


// Obtener todos los elementos de la lista
const elementosMetodo = document.querySelectorAll('.method');

// Función para manejar el clic en los elementos del método
function manejarClic() {
  // Eliminar la clase 'marcado' de todos los elementos
  elementosMetodo.forEach(elemento => {
    elemento.classList.remove('marcado');
  });

  // Agregar la clase 'marcado' solo al elemento clickeado
  this.classList.add('marcado');
}

// Asignar el evento clic a cada elemento del método
elementosMetodo.forEach(elemento => {
  elemento.addEventListener('click', manejarClic);
});
