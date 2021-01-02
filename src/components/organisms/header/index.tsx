import { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import { Link } from 'track';

import HeaderComponent from './header.styles';

const Header: React.FC = props => {
  const [menuOpen, toggleMenu] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) e.preventDefault();
    toggleMenu(!menuOpen);
  };

  return (
    <HeaderComponent>
      <Container>
        <Row>
          <Col>
            <div className="header__contents">
              <Link to="/" className="header__logo">
                TrackTheRecords
              </Link>
              <nav>
                <Link to="/posts" className="header__item">
                  Reddit Posts
                </Link>
                <Link to="/wishlist" className="header__item">
                  Wishlist
                </Link>
                <button onClick={handleClick}>
                  <span className="hidden">{menuOpen ? `Close` : `Open`} Menu Navigation</span>
                </button>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>
    </HeaderComponent>
  );
};

export default Header;
