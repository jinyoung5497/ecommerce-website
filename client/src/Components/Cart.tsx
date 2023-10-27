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
  emptyCart,
  vat,
  grandTotal,
} from '../slices/productSlice'
import { NavLink } from 'react-router-dom'

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
      console.log(counter)
    } else {
      initRefresh.current = true
    }
  }, [toggle, index])

  const checkout = () => {
    console.log('checkout')
    dispatch(cartDisplay())
    dispatch(vat())
    dispatch(grandTotal())
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <div
        className={`${
          products.cartDisplay ? 'block' : 'hidden'
        } bg-[#00000046] w-full h-full fixed top-0 z-50`}
      >
        <div
          className='flex flex-col w-[28rem] justify-center items-start p-10 bg-white rounded-3xl absolute top-28 right-40'
          ref={modalRef}
        >
          <div className='flex w-full items-center justify-between mb-3'>
            <h6>cart({products.cart.length})</h6>
            <button
              className='text-zinc-500 underline hover:text-orange'
              onClick={() => dispatch(emptyCart())}
            >
              Remove all
            </button>
          </div>
          {products.cart.map((value, index) => {
            return (
              <div
                key={index}
                className='flex items-center justify-between h-24 w-full'
              >
                <img
                  src={value.image}
                  alt='product image'
                  className='h-16 rounded-xl'
                />
                <div className='flex flex-col items-start justify-start w-full ml-3'>
                  <div className='font-bold'>{value.name}</div>
                  <div className='font-bold text-zinc-400'>
                    $ {value.price.toLocaleString()}
                  </div>
                </div>
                <div className=''>
                  <div className='text-white bg-zinc-100 subtitle flex items-center justify-center'>
                    <button
                      className='p-1 px-4 text-zinc-400 hover:text-orange'
                      onClick={() => add(index)}
                    >
                      +
                    </button>
                    <div className='cursor-pointer text-black'>
                      {products.cart[index].counter}
                    </div>
                    <button
                      className='p-1 px-4 text-zinc-400 hover:text-orange'
                      onClick={() => sub(index)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
          <div className='flex w-full items-center justify-between mt-5'>
            <p className='text-zinc-500 text-lg'>TOTAL</p>
            <h6>${products.total.toLocaleString()}</h6>
          </div>
          <NavLink
            to={'/checkout'}
            className='text-white bg-orange hover:bg-orange-light p-3 subtitle px-5 w-full mt-5 text-center'
            onClick={checkout}
          >
            checkout
          </NavLink>
        </div>
      </div>
    </>
  )
}
