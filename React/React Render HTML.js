//write in index.js to see the result.
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<p>Hello</p>, document.getElementById('root'));
//use小括號 包 JSX expression
const myelement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );
  
  ReactDOM.render(myelement, document.getElementById('root'));