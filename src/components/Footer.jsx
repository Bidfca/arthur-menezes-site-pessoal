import '../css/footer.css'

import React from 'react';

function Footer() {
  return (
    <div>
      <div className="footerAlign">
        <a href="https://www.linkedin.com/in/arthur-m-correa/">
            <img 
                src="https://images.vexels.com/media/users/3/131245/isolated/preview/9351735cd3a456e88ad876588ab9e503-logotipo-do-linkedin.png" 
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