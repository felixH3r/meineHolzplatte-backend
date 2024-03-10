import { Column, Entity } from "typeorm"
import {
  LineItem as MedusaLineItem,
} from "@medusajs/medusa"

@Entity()
export class LineItem extends MedusaLineItem {
  @Column()
  basePrice: number
}
