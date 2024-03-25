import {Order} from "@medusajs/medusa";

export const createThankYouEmail = (
    order: Order
): string => {
  return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Invoice</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
  .container {
    max-width: 600px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .header {
    background-color: #007bff;
    color: #fff;
    text-align: center;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .invoice-details {
    margin-top: 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #f2f2f2;
    text-align: left;
  }
  .total {
    margin-top: 20px;
    text-align: right;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Danke, ${order.customer}!</h1>
    </div>
    <div class="invoice-details">
      <p><strong>Invoice Number:</strong> ${order.id}</p>
      <p><strong>Date:</strong> March 25, 2024</p>
      <p><strong>Due Date:</strong> April 10, 2024</p>
    </div>
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Web Design Service</td>
          <td>1</td>
          <td>$500.00</td>
          <td>$500.00</td>
        </tr>
        <!-- Add more rows for additional items if needed -->
      </tbody>
    </table>
    <div class="total">
      <p><strong>Total:</strong> ${order.total}</p>
    </div>
  </div>
</body>
</html>
    `;
};
