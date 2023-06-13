import mongoose, { Schema, Document } from 'mongoose'

interface Include {
  quantity: number
  item: string
}

interface GalleryImage {
  mobile: string
  tablet: string
  desktop: string
}

interface OtherProduct {
  slug: string
  name: string
  image: GalleryImage
}

interface Product extends Document {
  id: number
  slug: string
  name: string
  image: GalleryImage
  category: string
  categoryImage: GalleryImage
  new: boolean
  price: number
  description: string
  features: string
  includes: Include[]
  gallery: {
    first: GalleryImage
    second: GalleryImage
    third: GalleryImage
  }
  others: OtherProduct[]
}

const mainSchema: Schema<Product> = new Schema<Product>({
  id: { type: Number, required: true },
  slug: { type: String, required: true },
  name: { type: String, required: true },
  image: {
    mobile: { type: String, required: true },
    tablet: { type: String, required: true },
    desktop: { type: String, required: true },
  },
  category: { type: String, required: true },
  categoryImage: {
    mobile: { type: String, required: true },
    tablet: { type: String, required: true },
    desktop: { type: String, required: true },
  },
  new: { type: Boolean, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  features: { type: String, required: true },
  includes: [
    {
      quantity: { type: Number, required: true },
      item: { type: String, required: true },
    },
  ],
  gallery: {
    first: {
      mobile: { type: String, required: true },
      tablet: { type: String, required: true },
      desktop: { type: String, required: true },
    },
    second: {
      mobile: { type: String, required: true },
      tablet: { type: String, required: true },
      desktop: { type: String, required: true },
    },
    third: {
      mobile: { type: String, required: true },
      tablet: { type: String, required: true },
      desktop: { type: String, required: true },
    },
  },
  others: [
    {
      slug: { type: String, required: true },
      name: { type: String, required: true },
      image: {
        mobile: { type: String, required: true },
        tablet: { type: String, required: true },
        desktop: { type: String, required: true },
      },
    },
  ],
})

const ProductModel = mongoose.model<Product>('product', mainSchema)

export default ProductModel
