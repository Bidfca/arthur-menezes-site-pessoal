import "../css/homePage.css"

import React from 'react';

function HomePage() {
  return (
    <article className="">
      <section className="sectionInfo">
      <hr className="imageHomePage" />
      <p className="developerPresentation">Apresentamos o Arthur Menezes Corrêa</p>
      <p className="description">
        Bem-vindo ao meu portefólio. Convido você a explorar o meu site para entender as minhas especialidades, 
        técnicas e experiência profissional. Abaixo você encontrará uma mistura de trabalhos profissionais e de 
        alguns projetos que fazem parte da minha paixão pessoal. Divirta-se navegando e entre em contato se tiver 
        alguma pergunta.
      </p>
      </section>
      <section className="sectionBackgroundWhit">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img 
                src="https://www.refletirpararefletir.com.br/wp-content/uploads/2015/09/benja.jpg" 
                className="imgBenjaminFranklin"
                alt="benjamin franklin"
              />
            </div>
            <div class="col-sm">
              <p className="fraseBenjaminFranklin">Viver é enfrentar um problema atrás do outro. O modo como você o encara é que faz a diferença.</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default HomePage;
