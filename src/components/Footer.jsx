import '../css/footer.css'

import React from 'react';

function Footer() {
  return (
    <div>
      <div className="footerAlign">
        <a href="https://www.linkedin.com/in/arthur-m-correa/">
            <img 
                src="https://pbs.twimg.com/media/FKxA_I7XoAYD01S?format=png&name=small" 
                className="imageLinkedin"
                alt="linkedin de Arthur Menezes"
            />
        </a>
        <a href="https://www.instagram.com/zebirote/">
        <img 
                src="https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-fundo-transparente8.png?resize=696%2C696&ssl=1" 
                className="imageLinkedin"
                alt="instagram de arte pixelada"
            />
        </a>
      </div>
      <div className="desenvolvedor">
          <p>©2022 por Arthur Menezes Correa.</p>
      </div>
    </div>
  );
}

export default Footer;