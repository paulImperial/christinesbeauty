import React, { Fragment } from 'react';
import Container from '../Generic/Container';

const CuratorSocial = () => {
  return (
    <Fragment>
      <Container label={'Facebook'}>
        <div id="curator-feed-facebook-layout">
          <a href="https://curator.io" target="_blank" className="crt-logo crt-tag">
            Powered by Curator.io
          </a>
        </div>
      </Container>
      <Container label={'Instagram'}>
        <div id="curator-feed-instagram-layout">
          <a href="https://curator.io" target="_blank" className="crt-logo crt-tag">
            Powered by Curator.io
          </a>
        </div>
      </Container>
    </Fragment>
  );
};

export default CuratorSocial;
