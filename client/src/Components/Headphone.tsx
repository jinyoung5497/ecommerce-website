import React from 'react'
import { Category, BestGear } from '.'

export default function Headphone() {
  return (
    <>
      <div>
        <div>
          <h1>headphones</h1>
        </div>
        <div className='grid grid-cols-2 grid-rows-3'>
          <img src='' alt='' />
          <div></div>
          <div></div>
          <img src='' alt='' />
          <img src='' alt='' />
          <div></div>
        </div>
      </div>
      <Category />
      <BestGear />
    </>
  )
}
