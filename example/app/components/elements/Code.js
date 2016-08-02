import React from 'react';

export const Code = () => (
  <div className='docs-section' id='code'>
    <h6 className='docs-header'>Code</h6>
    <p>Code styling is kept basic – just wrap anything in a <code>&lt;code&gt;</code> and it will appear like <code>this</code>. For blocks of code, wrap a <code>&lt;code&gt;</code> with a <code>&lt;pre&gt;</code>.</p>
    <div>
      <pre>
        <code>
          .some-className &#123;{'\n  '}
            background-color: red;{'\n'}
          &#125;
        </code>
      </pre>
    </div>

    <pre>
      <code className='code-sample'>
        &lt;code&gt;{'\n  '}
          &lt;pre&gt;{'\n    '}
            .some-className &#123;{'\n      '}
              background-color: red;{'\n    '}
            &#125;{'\n  '}
          &lt;/code&gt;{'\n'}
        &lt;/pre&gt;
      </code>
    </pre>
  </div>
);
