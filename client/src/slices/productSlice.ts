import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Iincludes {
  item: string
  quantity: number
}

interface Irecommend {
  image: string
  name: string
  _id: string
}

interface Icart {
  counter: number
  id: string
}

interface productState {
  value: {
    getProductId: string
    newProduct: boolean
    name: string
    description: string
    price: number
    image: string
    features: string
    includes: Iincludes[]
    gallery1: string
    gallery2: string
    gallery3: string
    id: number
    recommendImage: string[]
    recommendName: string[]
    recommend: Irecommend[]
    cart: Icart[]
    cartDisplay: boolean
  }
}

const initialState: productState = {
  value: {
    getProductId: '',
    newProduct: false,
    name: '',
    description: '',
    price: 0,
    image: '',
    features: '',
    includes: [],
    gallery1: '',
    gallery2: '',
    gallery3: '',
    id: 0,
    recommendImage: [],
    recommendName: [],
    recommend: [],
    cart: [],
    cartDisplay: false,
  },
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductId: (state, action: PayloadAction<string>) => {
      state.value.getProductId = action.payload
    },
    newProduct: (state, action: PayloadAction<boolean>) => {
      state.value.newProduct = action.payload
    },
    name: (state, action: PayloadAction<string>) => {
      state.value.name = action.payload
    },
    description: (state, action: PayloadAction<string>) => {
      state.value.description = action.payload
    },
    price: (state, action: PayloadAction<number>) => {
      state.value.price = action.payload
    },
    image: (state, action: PayloadAction<string>) => {
      state.value.image = action.payload
    },
    features: (state, action: PayloadAction<string>) => {
      state.value.features = action.payload
    },
    includes: (state, action: PayloadAction<Iincludes[]>) => {
      state.value.includes = action.payload
    },
    gallery1: (state, action: PayloadAction<string>) => {
      state.value.gallery1 = action.payload
    },
    gallery2: (state, action: PayloadAction<string>) => {
      state.value.gallery2 = action.payload
    },
    gallery3: (state, action: PayloadAction<string>) => {
      state.value.gallery3 = action.payload
    },
    id: (state, action: PayloadAction<number>) => {
      state.value.id = action.payload
    },
    recommendImage: (state, action: PayloadAction<string[]>) => {
      state.value.recommendImage = action.payload
    },
    recommendName: (state, action: PayloadAction<string[]>) => {
      state.value.recommendName = action.payload
    },
    recommend: (state, action: PayloadAction<Irecommend[]>) => {
      state.value.recommend = action.payload
    },
    cart: (state, action: PayloadAction<Icart>) => {
      state.value.cart.push(action.payload)
    },
    cartDisplay: (state) => {
      state.value.cartDisplay = !state.value.cartDisplay
    },
  },
})

export const {
  getProductId,
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
  recommendImage,
  recommendName,
  recommend,
  cart,
  cartDisplay,
} = productSlice.actions
export default productSlice.reducer
