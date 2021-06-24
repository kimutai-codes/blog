const Footer = () => {
  return (
    <footer>
      <p>
        &#169;2021 <a href="/">KIMUTAI</a>
      </p>
      <style jsx>{`
        footer {
          position: fixed;
          bottom: 0px;
          left: 0px;
          right: 0px;
          width: inherit;
          text-align: center;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
