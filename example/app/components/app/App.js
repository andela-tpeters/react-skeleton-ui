import React from 'react';

import { Container, Row, Col } from '../../../../src';

import { Typography } from '../elements/Typography';

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
  </Container>
);
