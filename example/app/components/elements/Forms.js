import React from 'react';

import { Row, Col } from '../../../../src';

export const Forms = () => (
  <div className="docs-section" id="forms">
    <h6 className="docs-header">Forms</h6>
    <p>Forms are a huge pain, but hopefully these styles make it a bit easier. All inputs, select, and buttons are normalized for a common height cross-browser so inputs can be stacked or placed alongside each other.</p>
    <div>
      <form>
        <Row>
          <Col>
            <label htmlFor="exampleEmailInput">Your email</label>
            <input className="full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput" />
          </Col>
          <Col>
            <label htmlFor="exampleRecipientInput">Reason for contacting</label>
            <select className="full-width" id="exampleRecipientInput">
              <option value="Option 1">Questions</option>
              <option value="Option 2">Admiration</option>
              <option value="Option 3">Can I get your number?</option>
            </select>
          </Col>
        </Row>
        <label htmlFor="exampleMessage">Message</label>
        <textarea className="full-width" placeholder="Oh hi Mark…" id="exampleMessage"></textarea>
        <label className="pull-right">
          <input type="checkbox" />
          <span className="label-body">Send a copy to yourself</span>
        </label>
        <input className="btn primary" type="submit" value="Submit" />
      </form>
    </div>

    <pre className="code-example">
      <code className="code-example-body prettyprint">
        &lt;!-- The above form looks like this --&gt;{'\n'}
        &lt;form&gt;{'\n  '}
          &lt;div className="row"&gt;{'\n    '}
            &lt;div className="six columns"&gt;{'\n      '}
              &lt;label htmlFor="exampleEmailInput"&gt;Your email&lt;/label&gt;{'\n      '}
              &lt;input className="full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput"&gt;{'\n    '}
            &lt;/div&gt;{'\n    '}
            &lt;div className="six columns"&gt;{'\n      '}
              &lt;label htmlFor="exampleRecipientInput"&gt;Reason for contacting&lt;/label&gt;{'\n      '}
              &lt;select className="full-width" id="exampleRecipientInput"&gt;{'\n        '}
                &lt;option value="Option 1"&gt;Questions&lt;/option&gt;{'\n        '}
                &lt;option value="Option 2"&gt;Admiration&lt;/option&gt;{'\n        '}
                &lt;option value="Option 3"&gt;Can I get your number?&lt;/option&gt;{'\n      '}
              &lt;/select&gt;{'\n    '}
            &lt;/div&gt;{'\n  '}
          &lt;/div&gt;{'\n  '}
          &lt;label htmlFor="exampleMessage"&gt;Message&lt;/label&gt;{'\n  '}
          &lt;textarea className="full-width" placeholder="Hi Dave …" id="exampleMessage"&gt;&lt;/textarea&gt;{'\n  '}
          &lt;label className="example-send-yourself-copy"&gt;{'\n    '}
            &lt;input type="checkbox"&gt;{'\n    '}
            &lt;span className="label-body"&gt;Send a copy to yourself&lt;/span&gt;{'\n  '}
          &lt;/label&gt;{'\n  '}
          &lt;input className="button-primary" type="submit" value="Submit"&gt;{'\n'}
        &lt;/form&gt;{'\n'}
        {'\n'}
        &lt;!-- Always wrap checkbox and radio inputs in a label and use a &lt;span className="label-body"&gt; inside of it --&gt;{'\n'}
        {'\n'}
        &lt;!-- Note: The class .u-full-width is just a utility className shorthand for width: 100% --&gt;{'\n'}
      </code>
    </pre>
  </div>
  );
