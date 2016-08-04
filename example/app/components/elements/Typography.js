import React from 'react';
import { Row, Col } from '../../../../src';

export default () => (
  <div id='typography'>
    <h6 className='docs-header'>Typography</h6>
    <p>Type is all set with the <code>rems</code>, so font-sizes and spacial relationships can be responsively sized based on a single <code>&lt;html&gt;</code> font-size property. Out of the box, Skeleton never changes the <code>&lt;html&gt;</code> font-size, but it's there in case you need it for your project. All measurements are still base 10 though so, an <code>&lt;h1&gt;</code> with <code>5.0rem</code>font-size just means <code>50px</code>.</p>
    <p>Additional typogrpahy includes the use of the &lt;small&gt; element, <small>it can be used for creating fine print.</small></p>
    <blockquote>
      <p>The blockquote element can be used to create a blockquote</p>
      <cite><small>- Used in conjunction with <code>&lt;cite&gt;</code> and <code>&lt;small&gt;</code> elements to create citations.</small></cite>
    </blockquote>
    <Row>
      <Col>
        <p><strong>The typography base</strong> is <a href='http://www.google.com/fonts/specimen/Raleway'>Raleway</a> served by Google, set at 15rem (15px) over a 1.6 line height (24px). Other type basics like <a href='#'>anchors</a>, <strong>strong</strong>, <em>emphasis</em>, and <u>underline</u> are all obviously included.</p>
        <p><strong>Headings</strong> create a family of distinct sizes each with specific <code>letter-spacing</code>, <code>line-height</code>, and <code>margins</code>.</p>
      </Col>
      <Col>
        <h1>Heading <small><code>&lt;h1&gt;</code> 50rem</small></h1>
        <h2>Heading <small><code>&lt;h2&gt;</code> 42rem</small></h2>
        <h3>Heading <small><code>&lt;h3&gt;</code> 36rem</small></h3>
        <h4>Heading <small><code>&lt;h4&gt;</code> 30rem</small></h4>
        <h5>Heading <small><code>&lt;h5&gt;</code> 24rem</small></h5>
        <h6>Heading <small><code>&lt;h6&gt;</code> 15rem</small></h6>
      </Col>
    </Row>

    <pre>
      <code>
        &lt;!-- Standard Headings --&gt;{'\n'}
        &lt;h1&gt;Heading&lt;/h1&gt;{'\n'}
        &lt;h2&gt;Heading&lt;/h2&gt;{'\n'}
        &lt;h3&gt;Heading&lt;/h3&gt;{'\n'}
        &lt;h4&gt;Heading&lt;/h4&gt;{'\n'}
        &lt;h5&gt;Heading&lt;/h5&gt;{'\n'}
        &lt;h6&gt;Heading&lt;/h6&gt;{'\n'}
        {'\n'}
        &lt;!-- Base type size --&gt;{'\n'}
        &lt;p&gt;The base type is 15px over 1.6 line height (24px)&lt;/p&gt;{'\n'}
        {'\n'}
        &lt;!-- Other styled text tags --&gt;{'\n'}
        &lt;strong&gt;Bolded&lt;/strong&gt;{'\n'}
        &lt;em&gt;Italicized&lt;/em&gt;{'\n'}
        &lt;a&gt;Colored&lt;/a&gt;{'\n'}
        &lt;u&gt;Underlined&lt;/u&gt;{'\n'}
      </code>
    </pre>
  </div>
);
