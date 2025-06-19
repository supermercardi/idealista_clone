import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ textAlign: 'center', marginTop: '40px', padding: '20px 0', borderTop: '1px solid #ccc' }}>
      <img src="https://st3.idealista.com/static/common/img/idealista.svg" alt="Idealista logo" style={{ height: '25px', marginBottom: '10px' }} />
      <p>idealista Copyright © 2000-{currentYear}</p>
    </footer>
  );
};

export default Footer;