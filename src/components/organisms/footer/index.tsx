import { Container, Row, Col } from 'react-grid-system';

import FooterComponent from './footer.styles';

const Footer: React.FC = props => {
  return (
    <FooterComponent>
      <Container>
        <Row>
          <Col>
            <div className="footer__contents">
              <a
                className="footer__name"
                href="https://whatjackhasmade.co.uk"
                rel="noreferrer noopener"
                target="_blank"
              >
                Made by Jack Pritchard
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </FooterComponent>
  );
};

export default Footer;
