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
  name: string
  image: string
  price: number
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
    counter: number
    total: number
    emoney: boolean
    cash: boolean
    vat: number
    grandTotal: number
    orderDisplay: boolean
    nameBiller: string
    email: string
    emailValidation: boolean
    phone: number
    address: string
    zip: number
    city: string
    country: string
    emoneyNumber: number
    pin: number
    validationCheck: boolean
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
    counter: 1,
    total: 0,
    emoney: true,
    cash: false,
    vat: 0,
    grandTotal: 0,
    orderDisplay: false,
    nameBiller: '',
    email: '',
    emailValidation: false,
    phone: 0,
    address: '',
    zip: 0,
    city: '',
    country: '',
    emoneyNumber: 0,
    pin: 0,
    validationCheck: false,
  },
}

interface indexCounter {
  index: number
  counter: number
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
    cartCounter: (state, action: PayloadAction<indexCounter>) => {
      const { index, counter } = action.payload
      state.value.cart[index].counter = counter
    },
    cartDisplay: (state) => {
      state.value.cartDisplay = !state.value.cartDisplay
    },
    addCounter: (state) => {
      ++state.value.counter
    },
    subCounter: (state) => {
      state.value.counter > 1 && --state.value.counter
    },
    resetCounter: (state) => {
      state.value.counter = 1
    },
    total: (state) => {
      state.value.total = 0
      state.value.cart.forEach((value) => {
        state.value.total += Number(value.price * value.counter)
        console.log(state.value.total)
      })
    },
    totalAdd: (state, action: PayloadAction<indexCounter>) => {
      const { index, counter } = action.payload
      state.value.total += Number(state.value.cart[index].price)
    },
    totalSub: (state, action: PayloadAction<indexCounter>) => {
      const { index, counter } = action.payload
      state.value.total -= Number(state.value.cart[index].price)
    },
    emptyCart: (state) => {
      state.value.cart = []
      state.value.total = 0
    },
    checkbox: (state) => {
      state.value.emoney = !state.value.emoney
      state.value.cash = !state.value.cash
    },
    vat: (state) => {
      state.value.vat = Math.round(state.value.total * 0.2)
    },
    grandTotal: (state) => {
      state.value.grandTotal = state.value.total + 50
    },
    orderDisplay: (state) => {
      state.value.orderDisplay = !state.value.orderDisplay
    },
    nameBiller: (state, action: PayloadAction<string>) => {
      state.value.nameBiller = action.payload
    },
    email: (state, action: PayloadAction<string>) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      state.value.emailValidation = emailRegex.test(action.payload)
      state.value.email = action.payload
      console.log(state.value.email)
      console.log(state.value.emailValidation)
    },
    phone: (state, action: PayloadAction<number>) => {
      state.value.phone = action.payload
    },
    address: (state, action: PayloadAction<string>) => {
      state.value.address = action.payload
    },
    zip: (state, action: PayloadAction<number>) => {
      state.value.zip = action.payload
    },
    city: (state, action: PayloadAction<string>) => {
      state.value.city = action.payload
    },
    country: (state, action: PayloadAction<string>) => {
      state.value.country = action.payload
    },
    emoneyNumber: (state, action: PayloadAction<number>) => {
      state.value.emoneyNumber = action.payload
    },
    pin: (state, action: PayloadAction<number>) => {
      state.value.pin = action.payload
    },
    validationCheck: (state) => {
      state.value.validationCheck = true
    },
    validationToFalse: (state) => {
      state.value.validationCheck = false
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
  addCounter,
  subCounter,
  resetCounter,
  cartCounter,
  totalAdd,
  totalSub,
  total,
  emptyCart,
  checkbox,
  vat,
  grandTotal,
  orderDisplay,
  nameBiller,
  email,
  phone,
  address,
  zip,
  city,
  country,
  emoneyNumber,
  pin,
  validationCheck,
  validationToFalse,
} = productSlice.actions
export default productSlice.reducer
