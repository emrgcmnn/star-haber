import React from 'react'

import Star from '../png/star.png'

export default function Header() {
  return (
    <div className="h-100 container">

        <div className="Header row">
            
            <div className='col-sm'>
                <div>
                    <h1>İSTANBUL</h1>
                    <h2>26°C / 16°C</h2>
                    <p>Parçalı bulutlu, güneşli</p>
                </div>
            </div>
            
            <div className='col-sm'>
                <div>
                    <img src={Star}></img>
                </div>
                <p>21 Eylül 2023 Perşembe / 7 RebiülEvvel 1445</p>
            </div>
            
            <div className='col-sm'>
                <button>Gece Modu</button>
                <div >
                    <h1>İSTANBUL</h1>
                    <h2>00:45:23</h2>
                </div>
                <div>
                    <p>İkindi kalan süre</p>
                </div>
            </div>

        </div>

    </div>
  )
}
