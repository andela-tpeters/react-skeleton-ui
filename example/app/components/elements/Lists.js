import React from 'react';

import { Row, Col } from '../../../../src';

export const Lists = () => (
  <div id='lists'>
    <h6 className='docs-header'>Lists</h6>
    <Row>
      <Col>
        <ul>
          <li>Unordered lists have basic styles</li>
          <li>
            They use the circle list style
            <ul>
              <li>Nested lists styled to feel right</li>
              <li>Can nest either type of list into the other</li>
            </ul>
          </li>
          <li>Just more list items mama san</li>
        </ul>
      </Col>
      <Col>
        <ol>
          <li>Ordered lists also have basic styles</li>
          <li>
            They use the decimal list style
            <ul>
              <li>Ordered and unordered can be nested</li>
              <li>Can nest either type of list into the other</li>
            </ul>
          </li>
          <li>Last list item just for the fun</li>
        </ol>
      </Col>
    </Row>

    <pre>
      <code className='code-sample'>
        &lt;ul&gt;{'\n  '}
          &lt;li&gt;Item 1&lt;/li&gt;{'\n  '}
          &lt;li&gt;{'\n    '}
            Item 2{'\n      '}
            &lt;ul&gt;{'\n      '}
              &lt;li&gt;Item 2.1&lt;/li&gt;{'\n        '}
              &lt;li&gt;Item 2.2&lt;/li&gt;{'\n        '}
            &lt;/ul&gt;{'\n      '}
          &lt;/li&gt;{'\n    '}
          &lt;li&gt;Item 3&lt;/li&gt;{'\n  '}
        &lt;/ul&gt;{'\n'}
        {'\n'}
        &lt;!-- Easily substitute any &lt;ul&gt; or an &lt;ol&gt; to get number lists or sublists. Skeleton doesn't support lists nested deeper than 2 levels --&gt;
      </code>
    </pre>
  </div>
);
