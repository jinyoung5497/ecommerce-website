import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../slices/store'
import { cart, cartDisplay } from '../slices/productSlice'

export default function Cart() {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products.value)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (products.cartDisplay) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [products.cartDisplay])

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      dispatch(cartDisplay())
    }
  }

  return (
    <>
      <div
        className={`${
          products.cartDisplay ? 'block' : 'hidden'
        } bg-[#00000046] w-full h-full fixed top-0 z-50`}
      >
        <div
          className='flex flex-col w-96 justify-center items-start p-10 bg-white rounded-3xl absolute top-28 right-40'
          ref={modalRef}
        >
          <div>
            <h6>cart({products.cart.length})</h6>
            <button>Remove all</button>
          </div>
          {products.cart.map((value, index) => {
            return (
              <div key={index}>
                <img src='' alt='' />
                <div>{value.id}</div>
                <div>{value.counter}</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
