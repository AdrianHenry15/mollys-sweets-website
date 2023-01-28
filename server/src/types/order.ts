import { Document } from "mongoose"

export interface IOrder extends Document {
  name: string
  description: string
  status: boolean
}
