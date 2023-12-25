import React from 'react';
import './style.css'

function App() {
  let r = '<b>React<b/>'
  let rn = 'React Native'
  const el = (
    <div>
      Create Web & Mobile Apps <br />
      with <span dangerouslySetInnerHTML={{ __html: r }} /> & {rn}
    </div>
  )
  // css inline
  const divStyle = {
    color: 'red',
    backgroundColor: 'powderblue',
    fontSize: 'larger',
    padding: '10px',
  }

  return (
    <>
      <center>
        <div style={divStyle}>Hello React</div> < br />

        {r} <br />
        {rn} <br />
        <br />

        {el} < br />

        <table border="1">
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>React</td>
            <td>320</td>
          </tr>
          <tr>
            <td>React Native</td>
            <td>340</td>
          </tr>
        </table>

        {/* css external*/}
        <h2>DeveloperThai.com</h2>
        <div className='title'>React & React Native</div>
      </center>
    </>
  );
}

export default App;
