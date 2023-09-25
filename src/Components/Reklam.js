import React from 'react'
import Reklams from '../png/reklamor.png'

export default function Reklam() {
  return (
    <div className="container">
      <div className="row reklam">
       <img src={Reklams} alt="Reklam"  />
      </div>
    </div>
  )
}
