import '../css/about.css'

import React from 'react';

function About() {
  return (
    <article className="alingItens">
      <div >
        <img 
          src="https://media-exp1.licdn.com/dms/image/D4E35AQHLOg7VsBb5wA/profile-framedphoto-shrink_200_200/0/1634350908304?e=1643997600&v=beta&t=9E7UqZQADMsIkxLprWcYpgsDPnYCBlDK7c2FxQf5VNs" 
          className="imagePerfil"
          alt="foto de Arthur Menezes"
        />
      </div>
      <div>
        <h1>Olá, eu sou Arthur Menezes</h1>
      </div>
      <div>
        <section>
          <p className="descriptionLife">‘Arthur, o menino destruidor’, essa é uma frase que costumava ouvir muito, eu sempre fui uma criança muito curiosa, e gosto de entender como as coisas funcionam, por isso, sempre que encontrava uma maquina ou um computador, procurava por ferramentar(muito bem escondidas) para desmontar e observar o que tinha dentro.</p>
        </section>
        <section className="alingatinsLine">
          <img
            src="https://thumbs.dreamstime.com/z/placa-de-chip-plugged-to-maternal-do-computador-parte-da-s%C3%A9rie-futurista-rob%C3%B3tico-e-da-ti-da-ci%C3%AAncia-de-%C3%ADcones-dos-88977528.jpg"
            className="imageComputer"
            alt="desenho de um computador"
          />
          <p>Depois de alguns anos, sem entender o que era aquele cilindro preto em uma tabua verde, entrei para área de tecnologia, comecei estudando programação web básica, HTML, CSS, JS, elaborando sites bem feios, mas que funcionavam e cumpriam seu proposito, apos algum tempo, resolvi me aprofundar e me tornar um desenvolvedor Full Stack, honestamente, devo dizer que não sei se gosto mais de Front ou de Back end, as duas áreas são incríveis, e atuarei na área por mais alguns anos.</p>
        </section>
        <section className="alingatinsLine">
          <img
            src="https://56e9af4bb89f1d73465cbd39.static-01.com/l/images/c35b44c270077be2a8618b61b65a11246bd74cb4.jpg"
            className="imageComputer"
            alt="pessoas de mão dadas em forma de um circulo"
          />
          <p>Se existe uma palavra que me define, é lealdade, me comprometo ate o fim por uma causa, e não me importo se é difícil ou que parece ser chato, não paro ate cumprir meu objetivo. Aprendi este valor durante alguns anos de trabalho voluntario, sempre existiam varias pessoas dizendo que iriam ajudar, mas no fim, era somente eu e mais 2 ou 3 pessoas, por isso valorizo e muito a lealdade, contar com a ajuda de quem não esta la, é horrível.</p>
        </section>
        <section className="alingatinsLine">
          <img
            src="https://pbs.twimg.com/media/FKsbuzWWYAM9jVA?format=png&name=240x240"
            className="imageComputer"
            alt="pixel art feita por Arthur Menezes"
          />
          <p>Adoro píxel art, apesar de ser um artista iniciante, ainda sim, acho incrível como um simples quadradinho pode mudar tudo. Se ele ficar em uma cor diferente, é uma sombra, ou uma estrela, ou ate mesmo um pássaro, tudo depende de como e onde foi colocado.</p>
        </section>
      </div>
    </article>
  );
}

export default About;
