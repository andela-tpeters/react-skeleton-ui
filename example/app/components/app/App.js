import React from 'react';

import { Container, Row, Col } from '../../../../src';

import Typography from '../elements/Typography';
import Buttons from '../elements/Buttons';
import Forms from '../elements/Forms';
import Lists from '../elements/Lists';
import Code from '../elements/Code';
import Tables from '../elements/Tables';
import Cards from '../elements/Cards';

export default () => (
  <Container fluid>
    <Row>
      <Col>
        <h1>React + Skeleton + Flexbox Grid</h1>
        <p>This project is a Frankenstein amalgamation of my favorite parts of a few different projects. The intent is to provide a very simple lightweight alternative to some of the heavier, more complex React UI suites available. Styles are built on Bootstrap's reboot, utilize <a href='http://flexboxgrid.com/' target='_blank'>Flexbox Grid's</a> grid, and all of Skeleton's awesome styles. A small number of React components are included for convenience.</p>
      </Col>
    </Row>
    <hr/>
    <Row>
      <Col>
        <Typography/>
      </Col>
    </Row>
    <hr/>
    <Row>
      <Col>
        <Buttons/>
      </Col>
    </Row>
    <hr/>
    <Row>
      <Col>
        <Forms/>
      </Col>
    </Row>
    <hr/>
    <Row>
      <Col>
        <Lists/>
      </Col>
    </Row>
    <hr/>
    <Row>
      <Col>
        <Code/>
      </Col>
    </Row>
    <hr/>
    <Row>
      <Col>
        <Tables/>
      </Col>
    </Row>
    <hr/>
    <Row>
      <Col>
        <Cards/>
      </Col>
    </Row>
  </Container>
);
