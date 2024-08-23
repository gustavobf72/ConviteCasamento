const discordNick = "Iordbrack#6142";

document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('switch');
  const backgroundImage = document.querySelector('.background-image');

  // Define a imagem claro como background padrão
   backgroundImage.style.backgroundImage = "url('./img/Imagem-Escuro.png')";
  localStorage.setItem('@Gustavo/Theme', 'dark');


  // Verifica o tema armazenado no localStorage ou usa o tema padrão 'light'
  const currentTheme = localStorage.getItem('@Gustavo/Theme') || 'light';
  
  // Adiciona a classe do tema atual ao elemento raiz
  document.documentElement.classList.add(currentTheme);

  // Define o estado do checkbox de acordo com o tema atual
  toggleSwitch.checked = (currentTheme === 'dark');

  // Evento para alternar o tema
  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('@Gustavo/Theme', 'dark');
      backgroundImage.style.backgroundImage = "url('./img/Imagem-Escuro.png')";
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('@Gustavo/Theme', 'light');
      backgroundImage.style.backgroundImage = "url('./img/Imagem-Escuro.png')";
    }
  });
});
