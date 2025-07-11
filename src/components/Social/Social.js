import React, { Fragment, useEffect } from 'react';
import Container from '../Generic/Container';

const CuratorSocial = () => {
  // const hydrateFacebookFeed = () => {
  //   const widget = new Curator.Widgets.Carousel({
  //     container: '#curator-feed-facebook-layout',
  //     feedId: '8da633df-06eb-40e2-96c3-7359d5a417f8',
  //     carousel: {
  //       autoPlay: true, // carousel will auto rotate
  //       autoLoad: true, // carusel will auto load new when it reaches the end of the current page of posts
  //       minWidth: 300, // the minimum width of the post, used when calculating responsive post width
  //       infinite: true, // if the last post is reached should it rotate back to the start
  //     },
  //   });
  // };

  const hydrateInstagramFeed = () => {
    const widget = new Curator.Widgets.Carousel({
      container: '#curator-feed-instagram-layout',
      feedId: '4c764d27-8968-4d8c-8066-2ca09fc65874',
      carousel: {
        autoPlay: true, // carousel will auto rotate
        autoLoad: true, // carusel will auto load new when it reaches the end of the current page of posts
        minWidth: 350, // the minimum width of the post, used when calculating responsive post width
        infinite: true, // if the last post is reached should it rotate back to the start
      },
    });
  };

  useEffect(() => {
    hydrateInstagramFeed();
  }, []);

  return (
    <Fragment>
      <Container>
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
