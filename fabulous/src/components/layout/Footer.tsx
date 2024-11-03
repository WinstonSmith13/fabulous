import '../../assets/styles/Footer.css';  

const Footer = () => {
  return (
    <footer className="footer">
      <div className='left_footer'>
      <p>About</p>
      <p>How it works</p>
      <p>Linkedin</p>
      </div>
      <div className='right_footer'>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/terms">Cookies</a>
      </div>
    </footer>
  );
};

export default Footer;