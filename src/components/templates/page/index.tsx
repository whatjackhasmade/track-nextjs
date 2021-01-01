import * as React from 'react';

import { Footer } from 'track';
import { Header } from 'track';

declare type PageProps = {
  children?: any;
};

const Page = (props: PageProps) => {
  const { children } = props;

  return (
    <React.Fragment>
      <div className="wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Page;
