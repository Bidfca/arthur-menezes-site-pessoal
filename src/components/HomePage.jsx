import "./homePage.css"

import React from 'react';

function HomePage() {
  return (
    <article className="articleHomePage">
      <hr className="lineHorizontalHomePage" />
      <hr className="imageHomePage" />
      <p className="developerPresentation">Apresentanmos o Arthur Menezes Corrêa</p>
      <p className="description">
        Bem-vindo ao meu portefólio. Convido você a explorar o meu site para entender as minhas especialidades, 
        técnicas e experiência profissional. Abaixo você encontrará uma mistura de trabalhos profissionais e de 
        alguns projetos que fazem parte da minha paixão pessoal. Divirta-se navegando e entre em contato se tiver 
        alguma pergunta.
      </p>
    </article>
  );
}

export default HomePage;
