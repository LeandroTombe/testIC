test('actualiza el texto del mensaje cuando el botón es clickeado', () => {
  // Configurar el DOM
  document.body.innerHTML = `
    <button id="actionButton">Click Me</button>
    <p id="message"></p>
  `;
  
  // Agregar el event listener al botón
  document.getElementById('actionButton').addEventListener('click', function() {
    document.getElementById('message').textContent = '¡Botón clickeado!';
  });

  // Simular un clic en el botón
  document.getElementById('actionButton').click();

  // Comprobar el resultado
  expect(document.getElementById('message').textContent).toBe('¡Botón clickeado!');
});
