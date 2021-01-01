import FooterComponent from './footer.styles';

const Footer: React.FC = props => {
  return (
    <FooterComponent>
      <div className="grid">
        <div className="footer__contents">
          <a className="footer__name" href="https://whatjackhasmade.co.uk" rel="noreferrer noopener" target="_blank">
            Made by Jack Pritchard
          </a>
        </div>
      </div>
    </FooterComponent>
  );
};

export default Footer;
