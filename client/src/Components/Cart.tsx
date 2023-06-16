import React, { useRef, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../slices/store'
import {
  addCounter,
  cart,
  cartDisplay,
  subCounter,
  cartCounter,
  totalAdd,
  totalSub,
} from '../slices/productSlice'

export default function Cart() {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products.value)
  const modalRef = useRef<HTMLDivElement>(null)
  const [toggle, setToggle] = useState(false)
  const [counter, setCounter] = useState(1)
  const [index, setIndex] = useState(0)
  const initRefresh = useRef(false)

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

  const add = (index: number) => {
    setCounter(products.cart[index].counter + 1)
    setIndex(index)
    setToggle((prev) => !prev)
    dispatch(
      totalAdd({ index: index, counter: products.cart[index].counter + 1 })
    )
  }

  const sub = (index: number) => {
    setCounter(products.cart[index].counter - 1)
    setIndex(index)
    setToggle((prev) => !prev)
    dispatch(
      totalSub({ index: index, counter: products.cart[index].counter - 1 })
    )
  }

  useEffect(() => {
    if (initRefresh.current) {
      dispatch(cartCounter({ index: index, counter: counter }))
      // dispatch(totalAdd({ index: index, counter: counter }))
      // dispatch(totalSub({ index: index, counter: counter }))
      console.log(counter)
    } else {
      initRefresh.current = true
    }
  }, [toggle, index])

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
              <div key={index} className='flex items-center justify-between'>
                <img
                  src={value.image}
                  alt='product image'
                  className='h-20 rounded-xl'
                />
                <div>
                  <div>{value.name}</div>
                  <div>${value.price}</div>
                </div>
                <div>
                  <div className='text-white bg-zinc-300 hover:bg-zinc-200  subtitle flex items-center justify-center'>
                    <button
                      className='p-4 px-6 text-zinc-400'
                      onClick={() => add(index)}
                    >
                      +
                    </button>
                    <div className='cursor-pointer text-black'>
                      {products.cart[index].counter}
                    </div>
                    <button
                      className='p-4 px-6 text-zinc-400'
                      onClick={() => sub(index)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
          <div>
            <p>TOTAL</p>
            <h6>${products.total}</h6>
          </div>
          <button className='text-white bg-orange hover:bg-orange-light p-4 subtitle px-5'>
            checkout
          </button>
        </div>
      </div>
    </>
  )
}
