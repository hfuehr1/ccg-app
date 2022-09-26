import React from 'react'
import './index.less';

function handleClick() {
    alert('Hallo')
}
function index() {
  return (
    <button onClick={handleClick} className='StartButton'>Start</button>
  )
}

export default index