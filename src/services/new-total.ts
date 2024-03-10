type LineItemTotals = {
  unit_price: number
  quantity: number
  subtotal: number
  tax_total: number
  total: number
  original_total: number
  original_tax_total: number
  tax_lines: LineItemTaxLine[]
  discount_total: number

  raw_discount_total: number
}

import {
  LineItem,
  LineItemTaxLine,
  NewTotalsService as MedusaNewTotalsService,
  TaxCalculationContext,
} from "@medusajs/medusa";
export default class NewTotalsService extends MedusaNewTotalsService {
  async getLineItemTotals(items: LineItem | LineItem[], {includeTax, calculationContext, taxRate,}: {
    includeTax?: boolean;
    calculationContext: TaxCalculationContext;
    taxRate?: number | null
  }): Promise<{ [p: string]: LineItemTotals }> {
    const newTotals = await super.getLineItemTotals(items, {includeTax, calculationContext, taxRate});
    if (items[0]) {
      // you can use any data in the metadata
      console.log(items[0].metadata.width, "metadata width");
      // you can use any data in the metadata
      console.log(items[0].metadata.length, "metadata length");
      // you can set total or subtotal or both as you want
      newTotals[items[0].id].subtotal = 9999999;
    }
    return new Promise((resolve) => {
      resolve(newTotals);
    });
  }
}
