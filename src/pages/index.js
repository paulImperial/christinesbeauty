import React, { Component, Fragment } from 'react';

import Link from 'next/link';
import content from '../../content/treatments.md';

export default class Home extends Component {
  render() {
    const { Treatments } = content;
    return (
      <Fragment>
        <h1>Treatments</h1>
      </Fragment>
    );
  }
}
