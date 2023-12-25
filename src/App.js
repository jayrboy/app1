import React from 'react';

function App() {
  let r = '<b>React<b/>'
  let rn = 'React Native'
  const el = (
    <div>
      Create Web & Mobile Apps <br />
      with <span dangerouslySetInnerHTML={{ __html: r }} /> & {rn}
    </div>
  )

  const t = <table border="1">
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

  const divStyle = {
    color: 'red',
    backgroundColor: 'powderblue',
    fontSize: 'larger',
    padding: '10px',
  }

  return (
    <>
      <div style={divStyle}>Hello React</div> < br />
      {el} < br />
      {t}
    </>
  );
}

export default App;
