import { useState } from 'react';

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
      <div className="grid">
        <div className="header__contents">
          <Link to="/" className="header__logo">
            TrackTheRecords
          </Link>
          <nav>
            <Link to="/reddit" className="header__item">
              Reddit
            </Link>
            <Link to="/wantlist" className="header__item">
              Wantlist
            </Link>
            <button onClick={handleClick}>
              <span className="hidden">{menuOpen ? `Close` : `Open`} Menu Navigation</span>
            </button>
          </nav>
        </div>
      </div>
    </HeaderComponent>
  );
};

export default Header;
