import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../slices/store'
import { useNavigate } from 'react-router-dom'
import { checkbox, emptyCart, orderDisplay } from '../slices/productSlice'
import { NavLink } from 'react-router-dom'
import check from '../assets/checkout/icon-order-confirmation.svg'

export default function OrderComplete() {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products.value)
  const navigate = useNavigate()
  const modalRef = useRef<HTMLDivElement>(null)
  const [viewItem, setViewItem] = useState(false)

  useEffect(() => {
    if (products.orderDisplay) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [products.orderDisplay])

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      dispatch(orderDisplay())
    }
  }

  const viewItems = () => {
    setViewItem((prev) => !prev)
  }

  const backToHome = () => {
    dispatch(orderDisplay())
    // clear cart
    dispatch(emptyCart())
    window.scrollTo({ top: 0 })
    setViewItem(false)
  }

  return (
    <>
      <div
        className={`${
          products.orderDisplay ? 'block' : 'hidden'
        } bg-[#00000046] w-full h-full fixed top-0 z-50 flex justify-center items-center`}
      >
        <div
          className='flex flex-col w-[35rem] justify-center items-center p-10 bg-white rounded-3xl'
          ref={modalRef}
        >
          <div className='flex flex-col w-full items-start justify-between mb-3 gap-y-5'>
            <img src={check} alt='check' />
            <div>
              <h2>Thank you</h2>
              <h2>for your order</h2>
            </div>
            <p className='text-zinc-500'>
              You will receive an email confirmation shortly.
            </p>
          </div>
          <div className='bg-black rounded-xl overflow-hidden flex w-full h-full items-center justify-center my-5'>
            <div className='bg-gray flex-1 flex flex-col items-center justify-center p-5'>
              {!viewItem && products.cart.length > 0 ? (
                <div className='flex items-center justify-between w-full '>
                  <img
                    src={products.cart[0].image}
                    alt='product image'
                    className='h-16 rounded-xl '
                  />
                  <div className='flex flex-col items-start justify-start w-full ml-5'>
                    <div className='font-bold'>{products.cart[0].name}</div>
                    <div className='font-bold text-zinc-400'>
                      $ {products.cart[0].price.toLocaleString()}
                    </div>
                  </div>
                  <p className='font-bold text-zinc-400 justify-self-end'>
                    X{products.cart[0].counter}
                  </p>
                </div>
              ) : (
                products.cart.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className='flex items-center justify-between w-full'
                    >
                      <img
                        src={value.image}
                        alt='product image'
                        className='h-16 rounded-xl'
                      />
                      <div className='flex flex-col items-start justify-start w-full ml-5'>
                        <div className='font-bold'>{value.name}</div>
                        <div className='font-bold text-zinc-400'>
                          $ {value.price.toLocaleString()}
                        </div>
                      </div>
                      <p className='font-bold text-zinc-400 justify-self-end'>
                        X{value.counter}
                      </p>
                    </div>
                  )
                })
              )}

              {/* view items */}
              {products.cart.length !== 1 && (
                <div className='w-full flex flex-col'>
                  <div className='border-b-[1px] border-zinc-300 w-full mt-3'></div>
                  {viewItem ? (
                    <button
                      className='font-bold text-zinc-500 mt-4'
                      onClick={viewItems}
                    >
                      View less
                    </button>
                  ) : (
                    products.cart.length > 1 && (
                      <button
                        className='font-bold text-zinc-500 mt-4'
                        onClick={viewItems}
                      >
                        and {products.cart.length - 1} other items
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
            <div className=' bg-black flex flex-col p-5 h-full'>
              <p className='text-zinc-500 font-bold'>GRAND TOTAL</p>
              <h6 className='text-white'>$ {products.grandTotal}</h6>
            </div>
          </div>
          <NavLink
            className='text-white bg-orange hover:bg-orange-light p-3 subtitle px-5 w-full text-center'
            to={'/'}
            onClick={backToHome}
          >
            Back to home
          </NavLink>
        </div>
      </div>
    </>
  )
}
