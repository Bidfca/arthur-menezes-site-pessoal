import '../css/curriculo.css'

import React from 'react';

function Curriculo() {
  return (
    <article>
      <h1 className="tituloCurriculo">Front-end</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div className="boxCurriculo">
              <img
                className="imageBoxCurriculoColunaDe3"
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
                  className="imageBoxCurriculoColunaDe3"
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
                  className="imageBoxCurriculoColunaDe3"
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
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div className="boxCurriculo">
                <img
                  className="imageBoxCurriculoColunaDe3"
                  src="https://raphaelbrodrigues.github.io/images/git.png" 
                  alt="github"
                />
                <h1>github</h1>
                <p>
                  É muito importante manter o código versionado, e poder continuar de onde um colega parou, torna tudo mais fácil.
                </p>
            </div>
          </div>
          <div class="col-sm">
            <div className="boxCurriculo">
                  <img
                    className="imageBoxCurriculoColunaDe3"
                    src="https://logospng.org/download/react/logo-react-512.png" 
                    alt="React"
                  />
                  <h1>React.js</h1>
                  <p>
                  A tecnologia para front-end mais utilizada do mercado, com React é possível criar aplicações grandes, pequenas ou ate mesmo a maior do mundo, o limite já ultrapassou o céu.
                  </p>
              </div>
          </div>
          <div class="col-sm">
            <div className="boxCurriculo">
                  <img
                    className="imageCurriculoRedux"
                    src="https://store.ellementar.com.br/wp-content/uploads/2019/06/redux.png" 
                    alt="Redux"
                  />
                  <h1>Redux</h1>
                  <p>
                    É fácil criar 100 componentes, mas como eles vão “conversar” entre si? 
                  </p>
              </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
          <div className="boxCurriculo">
                <img
                  className="imageBoxCurriculoColunaDe2"
                  src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png" 
                  alt="Jest"
                />
                <h1>Jest</h1>
                <p>
                  Um código ruim é um código sem testes. Testar é muito importante, erros sempre acontecem e encontrá-los pode ser caro e demorado.
                </p>
            </div>
          </div>
          <div class="col-sm">
          <div className="boxCurriculo">
                <img
                  className="imageCurriculoBootstrap"
                  src="https://getbootstrap.com.br/docs/4.1/assets/img/bootstrap-stack.png" 
                  alt="Bootstrap"
                />
                <h1>Bootstrap</h1>
                <p>
                  Por que inventar a roda de novo? Oras, ela já existe, vamos apenas reutilizar e fazer melhor.
                </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="tituloCurriculo">Back-end</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div className="boxCurriculo">
                <img
                  className="imageBoxCurriculoColunaDe3"
                  src="https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png" 
                  alt="Node.js"
                />
                <h1>Node.js</h1>
                <p>
                  Javascrip é uma linguagem tão boa, que foi possível criar uma das melhores ferramentas para o Back-end.
                </p>
            </div>
          </div>
          <div class="col-sm">
            <div className="boxCurriculo">
                <img
                  className="imageBoxCurriculoColunaDe3"
                  src="https://img.icons8.com/color/480/mongodb.png" 
                  alt="Mongodb"
                />
                <h1>mongodb</h1>
                <p>
                  Um banco não relacional, que resolve boa parte dos problemas e é muito simples de usar.
                </p>
            </div>
          </div>
          <div class="col-sm">
            <div className="boxCurriculo">
                <img
                  className="imageBoxCurriculoColunaDe3"
                  src="https://logospng.org/download/mysql/mysql-768.png"
                  alt="MYSQL"
                />
                <h1>MYSQL</h1>
                <p>
                  Banco de dados relacional, afinal de contas com tabelas fica mais facil de gerenciar.
                </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
          <div className="boxCurriculo">
                <img
                  className="imageBoxCurriculoColunaDe1"
                  src="https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png" 
                  alt="Sequelize"
                />
                <h1>Sequelize</h1>
                <p>
                  A junção entre, MySQL e Node.js.
                </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Curriculo;
