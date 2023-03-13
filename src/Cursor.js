import React from 'react'
import  AnimatedCursor from 'react-animated-cursor'

function Cursor() {
  return (
    <div>
      <AnimatedCursor 
      color="255, 255, 255"
      innerSize={10}
      outerSize={45}
      innerScale={1.3}
      outerScale={1.7}
      outerAlpha={0}
       outerStyle={{ border: '3px solid #fff' }}
      />
    </div>
  )
}

export default Cursor
