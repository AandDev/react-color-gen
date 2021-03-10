import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ index, weight, hexValue }) => {
  const [copied, setCopied] = useState(false);
  let hexColor = `#${hexValue}`;

  const copyColor = () => {
    setCopied(true);
    navigator.clipboard.writeText(hexColor);
  }

  useEffect(() => {
    let timeout = setTimeout(() => {
      setCopied(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [copied])

  return (
    <div className="color-item" style={{backgroundColor: `${hexColor}`, color:`${index > 10 && '#f9f9f9'}`}} onClick={copyColor}>
      {copied && <p>Copied!</p>}
      <p className="color-value">{hexColor}</p>
      <p className="color-percent">{weight}%</p>
    </div>
  );
}

export default SingleColor