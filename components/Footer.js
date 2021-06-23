const Footer = () => {
  return (
    <footer>
      <p>
        &#169;2021 <a href="/">KIMUTAI</a>
      </p>
      <style jsx>
        {`
          footer {
            position: relative;
            /* left: 0; */
            bottom: 0;
            width: 100%;
            text-align: center;
            /* border-top: 1px solid #ddd; */
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
