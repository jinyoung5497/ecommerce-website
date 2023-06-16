import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../slices/store'
import { getProductId } from '../slices/productSlice'
import { useNavigate } from 'react-router-dom'

export default function Recommend() {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products.value)
  const navigate = useNavigate()

  interface Irecommend {
    image: string
    name: string
    _id: string
  }

  const seeProduct = (id: string) => {
    dispatch(getProductId(id))
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center mx-52 my-10'>
        <h2 className='mb-10'>you may also like</h2>
        <div className='flex items-start justify-center gap-32'>
          {products.recommend.map((value: Irecommend, index: number) => {
            const newImage = value.image.slice(1)
            return (
              <div
                key={index}
                className='flex flex-col items-center justify-between gap-5 flex-1 h-[32rem]'
              >
                <img
                  src={`src${newImage}`}
                  alt='product image'
                  className='rounded-xl'
                />
                <h5 className='text-center'>{value.name}</h5>
                <button
                  className='text-white bg-orange hover:bg-orange-light p-4 subtitle px-5'
                  onClick={() => seeProduct(value._id)}
                >
                  see product
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
