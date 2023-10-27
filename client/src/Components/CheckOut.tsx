import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../slices/store'
import { useNavigate } from 'react-router-dom'
import {
  checkbox,
  orderDisplay,
  validationCheck,
  validationToFalse,
  nameBiller,
  email,
  phone,
  address,
  zip,
  city,
  country,
  emoneyNumber,
  pin,
} from '../slices/productSlice'

export default function CheckOut() {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products.value)
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const orderComplete = () => {
    dispatch(validationCheck())
    if (
      products.nameBiller &&
      products.email &&
      products.phone &&
      products.address &&
      products.zip &&
      products.city &&
      products.country &&
      products.emoneyNumber &&
      products.pin
    ) {
      dispatch(orderDisplay())
      dispatch(nameBiller(''))
      dispatch(email(''))
      dispatch(phone(0))
      dispatch(address(''))
      dispatch(zip(0))
      dispatch(city(''))
      dispatch(country(''))
      dispatch(emoneyNumber(0))
      dispatch(pin(0))
      dispatch(validationToFalse())
    }
  }

  return (
    <>
      <div className='bg-gray'>
        <button className='text-zinc-500 mt-20 ml-28' onClick={goBack}>
          Go back
        </button>
        <div className='flex w-full items-start justify-center p-20'>
          {/* checkout */}
          <div className='flex-4 flex flex-col items-start justify-center w-3/5 bg-white p-10 m-5 rounded-xl gap-y-4'>
            <h2>checkout</h2>
            <p className='subtitle'>billing details</p>
            <div className='w-full gap-4 gap-y-4 flex flex-wrap items-center justify-start'>
              <div className='w-[48%]'>
                <div className='flex justify-between'>
                  <p
                    className={`${
                      !products.nameBiller &&
                      products.validationCheck &&
                      'text-red-600'
                    } font-bold mb-1`}
                  >
                    Name
                  </p>

                  {!products.nameBiller && products.validationCheck && (
                    <p
                      className={`${
                        !products.nameBiller &&
                        products.validationCheck &&
                        'text-red-600'
                      }  mb-1`}
                    >
                      Wrong format
                    </p>
                  )}
                </div>
                <input
                  type='text'
                  className={`${
                    !products.nameBiller && products.validationCheck
                      ? 'border-red-600 border-2'
                      : 'border-[1px] border-zinc-300'
                  } p-4 w-full rounded-lg`}
                  placeholder='Alexei Ward'
                  onChange={(event) => dispatch(nameBiller(event.target.value))}
                />
              </div>
              <div className='w-[48%]'>
                <div className='flex justify-between'>
                  <p
                    className={`${
                      products.validationCheck &&
                      !products.emailValidation &&
                      'text-red-600'
                    } font-bold mb-1`}
                  >
                    Email Address
                  </p>

                  {products.validationCheck && !products.emailValidation && (
                    <p
                      className={`${
                        products.validationCheck &&
                        !products.emailValidation &&
                        'text-red-600'
                      }  mb-1`}
                    >
                      Wrong format
                    </p>
                  )}
                </div>
                <input
                  type='text'
                  className={`${
                    products.validationCheck && !products.emailValidation
                      ? 'border-red-600 border-2'
                      : 'border-[1px] border-zinc-300'
                  } p-4 w-full rounded-lg`}
                  placeholder='alexei@email.com'
                  onChange={(event) => dispatch(email(event.target.value))}
                />
              </div>
              <div className='w-[48%]'>
                <div className='flex justify-between'>
                  <p
                    className={`${
                      !products.phone &&
                      products.validationCheck &&
                      'text-red-600'
                    } font-bold mb-1`}
                  >
                    Phone Number
                  </p>

                  {!products.phone && products.validationCheck && (
                    <p
                      className={`${
                        !products.phone &&
                        products.validationCheck &&
                        'text-red-600'
                      }  mb-1`}
                    >
                      Wrong format
                    </p>
                  )}
                </div>
                <input
                  type='text'
                  className={`${
                    !products.phone && products.validationCheck
                      ? 'border-red-600 border-2'
                      : 'border-[1px] border-zinc-300'
                  } p-4 w-full  rounded-lg`}
                  placeholder='0459 555 136'
                  onChange={(event) =>
                    dispatch(phone(Number(event.target.value)))
                  }
                />
              </div>
            </div>
            <p className='subtitle mt-10'>shipping info</p>
            <div className='w-full gap-4 gap-y-4 flex flex-wrap items-center justify-start'>
              <div className='w-full'>
                <div className='flex justify-between'>
                  <p
                    className={`${
                      !products.address &&
                      products.validationCheck &&
                      'text-red-600'
                    } font-bold mb-1`}
                  >
                    Address
                  </p>

                  {!products.address && products.validationCheck && (
                    <p
                      className={`${
                        !products.address &&
                        products.validationCheck &&
                        'text-red-600'
                      }  mb-1`}
                    >
                      Wrong format
                    </p>
                  )}
                </div>
                <input
                  type='text'
                  className={`${
                    !products.address && products.validationCheck
                      ? 'border-red-600 border-2'
                      : 'border-[1px] border-zinc-300'
                  } p-4 w-full  rounded-lg`}
                  placeholder='1137 Williams Avenue'
                  onChange={(event) => dispatch(address(event.target.value))}
                />
              </div>
              <div className='w-[48%]'>
                <div className='flex justify-between'>
                  <p
                    className={`${
                      !products.zip &&
                      products.validationCheck &&
                      'text-red-600'
                    } font-bold mb-1`}
                  >
                    ZIP Code
                  </p>

                  {!products.zip && products.validationCheck && (
                    <p
                      className={`${
                        !products.zip &&
                        products.validationCheck &&
                        'text-red-600'
                      }  mb-1`}
                    >
                      Wrong format
                    </p>
                  )}
                </div>
                <input
                  type='text'
                  className={`${
                    !products.zip && products.validationCheck
                      ? 'border-red-600 border-2'
                      : 'border-[1px] border-zinc-300'
                  } p-4 w-full  rounded-lg`}
                  placeholder='4000'
                  onChange={(event) =>
                    dispatch(zip(Number(event.target.value)))
                  }
                />
              </div>
              <div className='w-[48%]'>
                <div className='flex justify-between'>
                  <p
                    className={`${
                      !products.city &&
                      products.validationCheck &&
                      'text-red-600'
                    } font-bold mb-1`}
                  >
                    City
                  </p>

                  {!products.city && products.validationCheck && (
                    <p
                      className={`${
                        !products.city &&
                        products.validationCheck &&
                        'text-red-600'
                      }  mb-1`}
                    >
                      Wrong format
                    </p>
                  )}
                </div>
                <input
                  type='text'
                  className={`${
                    !products.city && products.validationCheck
                      ? 'border-red-600 border-2'
                      : 'border-[1px] border-zinc-300'
                  } p-4 w-full  rounded-lg`}
                  placeholder='New York'
                  onChange={(event) => dispatch(city(event.target.value))}
                />
              </div>
              <div className='w-[48%]'>
                <div className='flex justify-between'>
                  <p
                    className={`${
                      !products.country &&
                      products.validationCheck &&
                      'text-red-600'
                    } font-bold mb-1`}
                  >
                    Country
                  </p>

                  {!products.country && products.validationCheck && (
                    <p
                      className={`${
                        !products.country &&
                        products.validationCheck &&
                        'text-red-600'
                      }  mb-1`}
                    >
                      Wrong format
                    </p>
                  )}
                </div>
                <input
                  type='text'
                  className={`${
                    !products.country && products.validationCheck
                      ? 'border-red-600 border-2'
                      : 'border-[1px] border-zinc-300'
                  } p-4 w-full  rounded-lg`}
                  placeholder='United States'
                  onChange={(event) => dispatch(country(event.target.value))}
                />
              </div>
            </div>
            <p className='subtitle mt-10'>payment details</p>
            <div className='w-full gap-4 gap-y-4 flex flex-wrap items-center justify-start'>
              <div className='w-full flex'>
                <p className='font-bold mb-1 flex-1'>Payment Method</p>
                <div className='flex flex-col flex-1 gap-y-3'>
                  <label className='p-4 w-full border-[1px] border-zinc-300 rounded-lg font-bold checked:border-orange outline-none'>
                    <input
                      type='radio'
                      checked={products.emoney}
                      className='mr-4 checked:bg-orange'
                      onChange={() => dispatch(checkbox())}
                    />
                    e-Money
                  </label>
                  <label className='p-4 w-full border-[1px] border-zinc-300 rounded-lg font-bold checked:border-orange outline-none'>
                    <input
                      type='radio'
                      className='mr-4'
                      checked={products.cash}
                      onChange={() => dispatch(checkbox())}
                    />
                    Cash on Delivery
                  </label>
                </div>
              </div>
              <div className='w-[48%]'>
                <div className='flex justify-between'>
                  <p
                    className={`${
                      !products.emoneyNumber &&
                      products.validationCheck &&
                      'text-red-600'
                    } font-bold mb-1`}
                  >
                    e-Money Number
                  </p>

                  {!products.emoneyNumber && products.validationCheck && (
                    <p
                      className={`${
                        !products.emoneyNumber &&
                        products.validationCheck &&
                        'text-red-600'
                      }  mb-1`}
                    >
                      Wrong format
                    </p>
                  )}
                </div>
                <input
                  type='text'
                  className={`${
                    !products.emoneyNumber && products.validationCheck
                      ? 'border-red-600 border-2'
                      : 'border-[1px] border-zinc-300'
                  } p-4 w-full  rounded-lg`}
                  placeholder='238521993'
                  onChange={(event) =>
                    dispatch(emoneyNumber(Number(event.target.value)))
                  }
                />
              </div>
              <div className='w-[48%]'>
                <div className='flex justify-between'>
                  <p
                    className={`${
                      !products.pin &&
                      products.validationCheck &&
                      'text-red-600'
                    } font-bold mb-1`}
                  >
                    e-Money PIN
                  </p>

                  {!products.pin && products.validationCheck && (
                    <p
                      className={`${
                        !products.pin &&
                        products.validationCheck &&
                        'text-red-600'
                      }  mb-1`}
                    >
                      Wrong format
                    </p>
                  )}
                </div>
                <input
                  type='text'
                  className={`${
                    !products.pin && products.validationCheck
                      ? 'border-red-600 border-2'
                      : 'border-[1px] border-zinc-300'
                  } p-4 w-full  rounded-lg`}
                  placeholder='6891'
                  onChange={(event) =>
                    dispatch(pin(Number(event.target.value)))
                  }
                />
              </div>
            </div>
          </div>
          {/* summary */}
          <div className='flex-1 flex flex-col items-start justify-center w-2/5 bg-white p-10 m-5 rounded-xl'>
            <h5 className='mb-10'>summary</h5>
            {products.cart.map((value, index) => {
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
            })}
            <div className='w-full flex items-center justify-between mt-10'>
              <p className='text-zinc-500'>TOTAL</p>
              <h6>${products.total.toLocaleString()}</h6>
            </div>
            <div className='w-full flex items-center justify-between mt-3'>
              <p className='text-zinc-500'>SHIPPING</p>
              <h6>$ 50</h6>
            </div>
            <div className='w-full flex items-center justify-between mt-3'>
              <p className='text-zinc-500'>VAT (INCLUDED)</p>
              <h6>${products.vat.toLocaleString()}</h6>
            </div>
            <div className='w-full flex items-center justify-between mt-10'>
              <p className='text-zinc-500 font-bold'>GRAND TOTAL</p>
              <h6 className='text-orange'>
                ${products.grandTotal.toLocaleString()}
              </h6>
            </div>
            <button
              className='text-white bg-orange hover:bg-orange-light p-3 subtitle px-5 w-full mt-8 text-center'
              onClick={orderComplete}
            >
              continue & pay
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
