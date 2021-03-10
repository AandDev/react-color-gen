import React, { useState } from 'react'
import SingleColor from './components/SingleColor'
import logo from './components/logo-1.svg'

import Values from 'values.js'

function App() {

  const [colorList, setColorList] = useState(new Values('#0084FF').all(10));
  const [colorValue, setColorValue] = useState('#0084FF');

  const hadleSubmit = (e) => {
    e.preventDefault();

    const colors = new Values(colorValue).all(10);
    setColorList(colors);
  }

  const randomColor = () => {
    let newHex = '#'+Math.floor(Math.random()*16777215).toString(16);
    if (newHex.length === 7) {
      setColorValue(newHex)
      const colors = new Values(newHex).all(10);
      setColorList(colors);
    } else {
      setColorValue('#0084ff');
      setColorList(new Values('#0084ff').all(10));
    }
  }

  return (
    <main className="container">
      <div className="title" style={{backgroundColor: `${colorValue}`}}>
        <img src={logo} alt="logo" className="logo"/>
        <h1>Color Generator</h1>
      </div>
      <form className="color-form" onSubmit={hadleSubmit}>
        <input type="text" className="color-input" name="color" id="color" placeholder="#0084FF" onChange={(e) => setColorValue(e.target.value)} value={colorValue}/>
        <button type="submit" className="btn color-btn">Create</button>
        <button type="button" className="btn random-btn" onClick={randomColor}><i class="fas fa-random"></i></button>
      </form>
      <div className="color-container">
      {
        colorList.map((color, index) => {
          return (
            <SingleColor key={index} index={index} {...color} hexValue={color.hex} />
          );
        })
      }
      </div>
    </main>
  );
}

export default App
