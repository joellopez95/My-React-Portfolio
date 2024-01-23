// Components/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p className="mb-0">Your Copyright Text &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
