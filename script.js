// Función para mostrar las recomendaciones según el tipo de cabello
function showHairInfo() {
  // Obtener el valor del tipo de cabello seleccionado
  var hairType = document.getElementById("hairTypeSelect").value;
  var hairRecommendation = document.getElementById("hairRecommendation");
  var hairInfo = document.getElementById("hairInfo");

  // Limpiar las recomendaciones anteriores
  hairRecommendation.textContent = '';

  // Mostrar recomendaciones según el tipo de cabello
  switch (hairType) {
      case 'seco':
          hairRecommendation.textContent = "Para el cabello seco, recomendamos un tratamiento intensivo con aceites naturales como el aceite de argán y la vitamina E, que proporcionan hidratación profunda y restauran el brillo.";
          break;
      case 'graso':
          hairRecommendation.textContent = "Para el cabello graso, un tratamiento ligero con plantas como la ortiga y la manzanilla ayuda a equilibrar la producción de sebo, sin dejar residuos grasos.";
          break;
      case 'normal':
          hairRecommendation.textContent = "Para el cabello normal, un tratamiento equilibrado con aceites como el de ricino y la biotina proporcionará nutrición sin apelmazar el cabello.";
          break;
      case 'rizado':
          hairRecommendation.textContent = "Para el cabello rizado, se recomienda usar aceites como el de argán y la keratina, que ayudan a mantener los rizos definidos y sin frizz.";
          break;
      case 'lacio':
          hairRecommendation.textContent = "Para el cabello lacio, el aceite de silicona y la keratina son ideales para darle volumen y brillo, sin dejarlo pesado.";
          break;
      default:
          hairRecommendation.textContent = "Por favor, selecciona un tipo de cabello para recibir recomendaciones.";
          break;
  }

  // Mostrar el bloque de recomendaciones
  hairInfo.style.display = 'block';
}
