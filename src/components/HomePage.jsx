import "../css/homePage.css"

import React from 'react';

function HomePage() {
  return (
    <article className="">
      <section className="sectionInfo">
      <hr className="imageHomePage" />
      <p className="developerPresentation"></p>
      <p className="description">
        Olá e bem-vindo ao meu portfólio! Entre e descubra o que torna meus projetos tão especiais. Estou ansioso para compartilhar meu trabalho e minha jornada criativa com você.
      </p>
      </section>
      <section className="">
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
              <p className="fraseBenjaminFranklin">Benjamin Franklin</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default HomePage;
