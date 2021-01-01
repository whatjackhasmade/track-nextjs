import * as React from 'react';

import { Link } from 'track';

type NotFoundProps = {};

const NotFound = (props: NotFoundProps) => {
  return (
    <React.Fragment>
      <h1>
        <span aria-label="hushed face emoji" role="img">
          😯
        </span>
        {` `}
        Sorry, we couldn&apos;t find that
      </h1>
      <Link to="/">Return to the homepage</Link>
    </React.Fragment>
  );
};

export default NotFound;
