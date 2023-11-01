import React, { useEffect, useState } from 'react'
import { Category, BestGear, Recommend } from '.'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../slices/store'
import { useNavigate } from 'react-router-dom'
import {
  newProduct,
  name,
  description,
  price,
  image,
  features,
  includes,
  gallery1,
  gallery2,
  gallery3,
  id,
  recommend,
  cart,
  addCounter,
  subCounter,
  resetCounter,
  total,
} from '../slices/productSlice'
import { render } from 'react-dom'

export default function SeeProduct() {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products.value)
  const navigate = useNavigate()

  interface IrecommendImage {
    image: {
      desktop: string
    }
  }
  interface IrecommendName {
    name: string
  }
  interface IrecommendId {
    _id: string
  }

  const url = 'http://localhost:4000'
  const renderUrl = 'https://ecommerce-server-p2w2.onrender.com'

  useEffect(() => {
    axios
      .get(`${renderUrl}/api/product/${products.getProductId}`)
      .then((res) => {
        const newSrc = res.data.image.desktop.slice(1)
        dispatch(newProduct(res.data.new))
        dispatch(name(res.data.name))
        dispatch(description(res.data.description))
        const newPrice = res.data.price
        dispatch(price(newPrice))
        dispatch(image(`${newSrc}`))
        dispatch(features(res.data.features))
        dispatch(includes(res.data.includes))
        const gal1 = res.data.gallery.first.desktop
        dispatch(gallery1(`${gal1}`))
        const gal2 = res.data.gallery.second.desktop
        dispatch(gallery2(`${gal2}`))
        const gal3 = res.data.gallery.third.desktop
        dispatch(gallery3(`${gal3}`))
        dispatch(id(res.data.id))
        console.log(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
    axios
      .get(`${renderUrl}/api/product`)
      .then((res) => {
        const newImage = res.data.map(
          (value: IrecommendImage) => value.image.desktop
        )
        newImage.splice(products.id, 1)
        newImage.splice(3)
        // newImage.sort(() => 0.5 - Math.random()).slice(0, 3)
        const newName = res.data.map((value: IrecommendName) => value.name)
        newName.splice(products.id, 1)
        newName.splice(3)
        const newId = res.data.map((value: IrecommendId) => value._id)
        newId.splice(products.id, 1)
        newId.splice(3)
        const result = newImage.map((value: string, index: number) => {
          return { image: value, name: newName[index], _id: newId[index] }
        })
        dispatch(recommend(result))
      })
      .catch((error) => {
        console.error(error)
      })
    window.scrollTo({ top: 0 })
    dispatch(resetCounter())
  }, [products.getProductId])

  const addToCart = () => {
    dispatch(
      cart({
        counter: products.counter,
        name: products.name,
        image: products.image,
        price: products.price,
      })
    )
  }

  useEffect(() => {
    dispatch(total())
    console.log(products.cart)
  }, [products.cart])

  const goBack = () => {
    navigate(-1)
  }

  return (
    <>
      <div>
        <button
          className='text-zinc-500 mt-20 ml-28 550px:ml-10 550px:mt-10'
          onClick={goBack}
        >
          Go back
        </button>
        <div className='flex items-center justify-center gap-32 m-20 1050px:gap-20 1050px:m-10 850px:m-5 850px:gap-10 650px:flex-col'>
          <img
            src={products.image}
            alt='product image'
            className='flex-1 w-1/2 650px:w-3/4 rounded-xl overflow-hidden'
          />
          <div className='flex-1 w-1/2 650px:w-full flex flex-col gap-y-4'>
            {products.newProduct && <p className='overlines'>new product</p>}
            <div>
              <h2 className='w-72 1050px:text-3xl'>{products.name}</h2>
            </div>
            <p className='text-zinc-500 text-lg leading-8 1050px:text-md'>
              {products.description}
            </p>
            <h5 className='my-10 1050px:my-5'>{`$ ${products.price.toLocaleString()}`}</h5>
            <div className='flex items-center justify-start'>
              <div className='text-white bg-zinc-100  subtitle  mr-5 flex items-center justify-center'>
                <button
                  className='p-4 px-6 text-zinc-400 hover:text-orange'
                  onClick={() => dispatch(addCounter())}
                >
                  +
                </button>
                <div className='cursor-pointer text-black'>
                  {products.counter}
                </div>
                <button
                  className='p-4 px-6 text-zinc-400 hover:text-orange'
                  onClick={() => dispatch(subCounter())}
                >
                  -
                </button>
              </div>
              <button
                className='text-white bg-orange hover:bg-orange-light p-4 subtitle px-5'
                onClick={addToCart}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className='flex gap-x-40 750px:px-20 px-40 my-40 400px:my-20 1150px:flex-col 1150px:gap-y-10 550px:px-10 400px:px-5'>
          <div className='flex-[4] flex flex-col gap-y-6'>
            <h2>features</h2>
            <p className='text-zinc-500 leading-8 text-[17px]'>
              {products.features}
            </p>
          </div>
          <div className='flex-[2] flex flex-col gap-y-5'>
            <h2>in the box</h2>
            {products.includes.map((value, index) => {
              return (
                <div key={index} className='flex'>
                  <div className='text-orange text-md font-bold mr-4'>
                    {value.quantity}X
                  </div>
                  <div className='text-zinc-500 text-lg '>{value.item}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='flex items-center justify-center m-40 400px:m-10 gap-7 1050px:mx-20 850px:mx-10 750px:flex-col'>
          <div className='flex flex-col w-2/5  h-[26rem] items-center justify-center gap-4 750px:w-full 750px:h-full'>
            <img
              src={products.gallery1}
              alt='gallery1'
              className='w-full rounded-xl'
            />
            <img
              src={products.gallery2}
              alt='gallery2'
              className='w-full rounded-xl'
            />
          </div>
          <img
            src={products.gallery3}
            alt='gallery3'
            className=' rounded-xl w-3/5 h-[26rem] 750px:w-full 750px:h-full'
          />
        </div>
      </div>
      <Recommend />
      <Category />
      <BestGear />
    </>
  )
}
