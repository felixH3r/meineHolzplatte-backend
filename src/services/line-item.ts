import {
  Product,
  LineItem,
  LineItemService as MedusaLineItemService,
  Selector,
} from '@medusajs/medusa'

export default class LineItemService extends MedusaLineItemService {
  calcPrice(lineItem: LineItem): number {
    if(!lineItem.metadata.width || !lineItem.metadata.length){
      return lineItem.unit_price;
    }
    if(!lineItem.basePrice){
      lineItem.basePrice = lineItem.unit_price;
    }
    const itemWidth = lineItem.metadata.width as number / 1000;
    const itemLength = lineItem.metadata.length as number / 1000;
    const qmeter =  itemWidth * itemLength;
    return Math.round(lineItem.basePrice * qmeter);

  }

  async create<
      T = LineItem | LineItem[],
      TResult = T extends LineItem[] ? LineItem[] : LineItem
  >(data: T): Promise<TResult> {

    if (Array.isArray(data)) {
      for (const lineItem of data) {
        // const modifier = await this.calcPrice(lineItem, lineItem.quantity);
        lineItem.unit_price = this.calcPrice(lineItem); // Assuming you want to add the modifier to the variant price
      }
    } else {
      (data as LineItem).unit_price = this.calcPrice(data as LineItem)
    }
    return super.create(data);
  }


  async update(
      idOrSelector: string | Selector<LineItem>,
      data: Partial<LineItem>
  ): Promise<LineItem[]> {

    const selector = typeof idOrSelector === "string" ? { id: idOrSelector } : idOrSelector;


    let lineItems = await this.list(selector)

    if(lineItems.length === 1) {
      let quantity = lineItems[0].quantity;
      if(data.quantity && data.quantity !== lineItems[0].quantity) {
        quantity = data.quantity;
      }

      //update price modifier, adds to the variant price
      data.unit_price = this.calcPrice(lineItems[0]);

    }

    const newTotals = await super.update(idOrSelector, data);


    return new Promise((resolve) => {
      resolve(newTotals);
    });
  }


}
