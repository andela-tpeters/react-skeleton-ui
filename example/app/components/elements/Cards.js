import React from 'react';
import { Card } from '../../../../src';

export default () => (
  <div id='Cards'>
    <h6 className='docs-header'>Cards</h6>
    <p>Simple card wrappers are available with the bundled <code>&lt;Card/&gt;</code> React component.</p>
    <Card>
      <h4>Sample Card</h4>
      Cards come with padding and box-shadows. Fill them with whatever you would like.
    </Card>

    <pre>
      <code className='code-sample'>
        &lt;Card&gt;{'\n  '}
          &lt;h4&gt;A title&lt;/h4&gt;{'\n  '}
          Some really neat info{'\n'}
        &lt;/Card&gt;
      </code>
    </pre>
  </div>
);
