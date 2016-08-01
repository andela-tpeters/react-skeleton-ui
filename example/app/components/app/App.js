import React from 'react';

import { Container, Row, Col } from '../../../../src';

import { Typography } from '../elements/Typography';
import { Buttons } from '../elements/Buttons';
import { Forms } from '../elements/Forms';
import { Lists } from '../elements/Lists';
import { Code } from '../elements/Code';
import { Tables } from '../elements/Tables';

export default () => (
  <Container fluid>
    <Row>
      <Col xs={12}>
        <h1>Skeleton</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <Typography />
      </Col>
    </Row>
    <Row>
      <Col>
        <Buttons />
      </Col>
    </Row>
    <Row>
      <Col>
        <Forms />
      </Col>
    </Row>
    <Row>
      <Col>
        <Lists />
      </Col>
    </Row>
    <Row>
      <Col>
        <Code />
      </Col>
    </Row>
    <Row>
      <Col>
        <Tables />
      </Col>
    </Row>
  </Container>
);
