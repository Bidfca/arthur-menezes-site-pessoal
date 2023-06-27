import '../css/footer.css'

import React from 'react';

function Footer() {
  return (
    <div>
      <div className="footerAlign">
        <a href="https://www.linkedin.com/in/arthur-m-correa/">
            <img 
                src="https://github.com/arthur-menezes202/arthur-menezes-site-pessoal/blob/master/src/imgens/icone%20linkedin.png?raw=true" 
                className="imageLinkedin"
                alt="linkedin de Arthur Menezes"
            />
        </a>
        <a href="https://www.instagram.com/zebirote/">
        <img 
                src="https://github.com/arthur-menezes202/arthur-menezes-site-pessoal/blob/master/src/imgens/icone%20isntagram%20branco%20mais%20gro%C3%A7o.png?raw=true" 
                className="imageLinkedin"
                alt="instagram de arte pixelada"
            />
        </a>
      </div>
      <div className="desenvolvedor">
          <p>©2023 por Arthur Menezes Correa.</p>
      </div>
    </div>
  );
}

export default Footer;