import React from 'react';

import { Row, Col } from '../../../../src';

export const Buttons = () => (
  <div className='docs-section' id='buttons'>
    <h6 className='docs-header'>Buttons</h6>
    <p>Buttons come in two basic flavors in Skeleton. The standard <code>&lt;button&gt;</code> element is plain, whereas the <code>.button-primary</code> button is vibrant and prominent. Button styles are applied to a number of appropriate form elements, but can also be arbitrarily attached to anchors with a <code>.button</code> className.</p>
    <Row className='around-xs'>
      <Col>
        <a className='btn' href='#'>Anchor button</a>
      </Col>
      <Col>
        <button>Button element</button>
      </Col>
      <Col>
        <input type='submit' value='submit input' />
      </Col>
      <Col>
        <input type='button' value='button input'/>
      </Col>
    </Row>
    <Row className='around-xs'>
      <Col>
        <a className='btn primary' href='#'>Anchor button</a>
      </Col>
      <Col>
        <button className='btn primary'>Button element</button>
      </Col>
      <Col>
        <input className='btn primary' type='submit' value='submit input' />
      </Col>
      <Col>
        <input className='btn primary' type='button' value='button input' />
      </Col>
    </Row>

    <pre className='code-example'>
      <code className='code-example-body prettyprint'>
        &lt;!-- Standard buttons --&gt;{'\n'}
        &lt;a className='button' href='#'&gt;Anchor button&lt;/a&gt;{'\n'}
        &lt;button&gt;Button element&lt;/button&gt;{'\n'}
        &lt;input type='submit' value='submit input'&gt;{'\n'}
        &lt;input type='button' value='button input'&gt;{'\n'}
        {'\n'}
        &lt;!-- Primary buttons --&gt;{'\n'}
        &lt;a className='button button-primary' href='#'&gt;Anchor button&lt;/a&gt;{'\n'}
        &lt;button className='button-primary'&gt;Button element&lt;/button&gt;{'\n'}
        &lt;input className='button-primary' type='submit' value='submit input'&gt;{'\n'}
        &lt;input className='button-primary' type='button' value='button input'&gt;{'\n'}
      </code>
    </pre>

  </div>
);
