import React from 'react';

export default () => (
  <div id='tables'>
    <h6 className='docs-header'>Tables</h6>
    <p>Be sure to use properly formed table markup with <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code> when building a <code>table</code>.</p>
    <div>
      <table className='full-width'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dave Gamache</td>
            <td>26</td>
            <td>Male</td>
            <td>San Francisco</td>
          </tr>
          <tr>
            <td>Dwayne Johnson</td>
            <td>42</td>
            <td>Male</td>
            <td>Hayward</td>
          </tr>
        </tbody>
      </table>
    </div>

    <pre>
      <code className='code-sample'>
        &lt;table className='full-width'&gt;{'\n  '}
          &lt;thead&gt;{'\n    '}
            &lt;tr&gt;{'\n      '}
              &lt;th&gt;Name&lt;/th&gt;{'\n      '}
              &lt;th&gt;Age&lt;/th&gt;{'\n      '}
              &lt;th&gt;Sex&lt;/th&gt;{'\n      '}
              &lt;th&gt;Location&lt;/th&gt;{'\n    '}
            &lt;/tr&gt;{'\n  '}
          &lt;/thead&gt;{'\n  '}
          &lt;tbody&gt;{'\n    '}
            &lt;tr&gt;{'\n      '}
              &lt;td&gt;Dave Gamache&lt;/td&gt;{'\n      '}
              &lt;td&gt;26&lt;/td&gt;{'\n      '}
              &lt;td&gt;Male&lt;/td&gt;{'\n      '}
              &lt;td&gt;San Francisco&lt;/td&gt;{'\n    '}
            &lt;/tr&gt;{'\n    '}
            &lt;tr&gt;{'\n      '}
              &lt;td&gt;Dwayne Johnson&lt;/td&gt;{'\n      '}
              &lt;td&gt;42&lt;/td&gt;{'\n      '}
              &lt;td&gt;Male&lt;/td&gt;{'\n      '}
              &lt;td&gt;Hayward&lt;/td&gt;{'\n    '}
            &lt;/tr&gt;{'\n  '}
          &lt;/tbody&gt;{'\n'}
        &lt;/table&gt;
      </code>
    </pre>
  </div>
);
