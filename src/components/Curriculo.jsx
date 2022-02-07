import '../css/curriculo.css'

import React from 'react';

function Curriculo() {
  return (
    <article>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div className="boxCurriculo">
              <img
                className="imageBoxCurriculo"
                src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" 
                alt="HTML5"
              />
              <h1>HTML5</h1>
              <p>
                Como fazer sites sem essa linguagem de marcação, seria necessário literalmente criar uma nova.
              </p>
            </div>
          </div>
          <div class="col-sm">
            <div className="boxCurriculo">
                <img
                  className="imageBoxCurriculo"
                  src="https://logospng.org/download/css-3/logo-css-3-256.png" 
                  alt="CSS3"
                />
                <h1>CSS3</h1>
                <p>
                As roupas e a maquiagens de um site, para deixá-lo bonito e bem organizado.
                </p>
              </div>
          </div>
          <div class="col-sm">
          <div className="boxCurriculo">
                <img
                  className="imageBoxCurriculo"
                  src="https://logospng.org/download/javascript/logo-javascript-icon-1024.png" 
                  alt="JavaScript"
                />
                <h1>JavaScript</h1>
                <p>
                  Um site precisar ser muito além de bonito, também deve se mexer e fazer alguns cálculos.
                </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Curriculo;
