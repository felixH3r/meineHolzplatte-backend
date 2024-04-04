import {Order} from "@medusajs/medusa";

export const createThankYouEmail = (
    order: Order
): string => {
  return `
        
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html dir="ltr" lang="en">

  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
  </head>
  <body style="background-color:#ffffff;font-family:Arial">
  <div>${order}</div>
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:100%;margin:10px auto;width:600px;border:1px solid #E5E5E5">
      <tbody>
        <tr style="width:100%">
          <td>
            <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#E5E5E5;margin:0" />
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:40px 40px;text-align:center">
              <tbody>
                <tr>
                  <td>
                   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="250" zoomAndPan="magnify" viewBox="0 0 187.5 93.749997" height="125" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/><clipPath id="64ef77d62f"><path d="M 0 4.144531 L 159.609375 4.144531 L 159.609375 89.359375 L 0 89.359375 Z M 0 4.144531 " clip-rule="nonzero"/></clipPath><clipPath id="89a27a377e"><path d="M 11.738281 15.644531 L 187 15.644531 L 187 76.886719 L 11.738281 76.886719 Z M 11.738281 15.644531 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#64ef77d62f)"><path fill="#cdb7a1" d="M 0 4.144531 L 159.445312 4.144531 L 159.445312 89.359375 L 0 89.359375 Z M 0 4.144531 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#89a27a377e)"><path fill="#f1e4d6" d="M 11.738281 15.644531 L 187.089844 15.644531 L 187.089844 76.886719 L 11.738281 76.886719 Z M 11.738281 15.644531 " fill-opacity="1" fill-rule="nonzero"/></g><g fill="#1c1d33" fill-opacity="1"><g transform="translate(18.739653, 49.191214)"><g><path d="M 7.078125 0 L 7.078125 -4.796875 L 4.6875 -0.796875 L 4.265625 -0.796875 L 1.890625 -4.765625 L 1.890625 0 L 0.984375 0 L 0.984375 -6.578125 L 1.75 -6.578125 L 4.5 -1.953125 L 7.203125 -6.578125 L 7.96875 -6.578125 L 7.984375 0 Z M 7.078125 0 "/></g></g></g><g fill="#1c1d33" fill-opacity="1"><g transform="translate(31.896132, 49.191214)"><g><path d="M 5.75 -0.8125 L 5.75 0 L 0.984375 0 L 0.984375 -6.578125 L 5.625 -6.578125 L 5.625 -5.75 L 1.921875 -5.75 L 1.921875 -3.734375 L 5.21875 -3.734375 L 5.21875 -2.9375 L 1.921875 -2.9375 L 1.921875 -0.8125 Z M 5.75 -0.8125 "/></g></g></g><g fill="#1c1d33" fill-opacity="1"><g transform="translate(42.376369, 49.191214)"><g><path d="M 0.984375 -6.578125 L 1.921875 -6.578125 L 1.921875 0 L 0.984375 0 Z M 0.984375 -6.578125 "/></g></g></g><g fill="#1c1d33" fill-opacity="1"><g transform="translate(49.476084, 49.191214)"><g><path d="M 6.640625 -6.578125 L 6.640625 0 L 5.875 0 L 1.921875 -4.90625 L 1.921875 0 L 0.984375 0 L 0.984375 -6.578125 L 1.75 -6.578125 L 5.703125 -1.671875 L 5.703125 -6.578125 Z M 6.640625 -6.578125 "/></g></g></g><g fill="#1c1d33" fill-opacity="1"><g transform="translate(61.289742, 49.191214)"><g><path d="M 5.75 -0.8125 L 5.75 0 L 0.984375 0 L 0.984375 -6.578125 L 5.625 -6.578125 L 5.625 -5.75 L 1.921875 -5.75 L 1.921875 -3.734375 L 5.21875 -3.734375 L 5.21875 -2.9375 L 1.921875 -2.9375 L 1.921875 -0.8125 Z M 5.75 -0.8125 "/></g></g></g><g fill="#1c1d33" fill-opacity="1"><g transform="translate(71.769978, 49.191214)"><g/></g></g><g fill="#1c1d33" fill-opacity="1"><g transform="translate(78.484687, 49.191214)"><g><path d="M 6.640625 -6.578125 L 6.640625 0 L 5.703125 0 L 5.703125 -2.9375 L 1.921875 -2.9375 L 1.921875 0 L 0.984375 0 L 0.984375 -6.578125 L 1.921875 -6.578125 L 1.921875 -3.75 L 5.703125 -3.75 L 5.703125 -6.578125 Z M 6.640625 -6.578125 "/></g></g></g><g fill="#1c1d33" fill-opacity="1"><g transform="translate(90.298346, 49.191214)"><g><path d="M 3.953125 0.078125 C 3.285156 0.078125 2.6875 -0.0664062 2.15625 -0.359375 C 1.625 -0.648438 1.207031 -1.050781 0.90625 -1.5625 C 0.601562 -2.082031 0.453125 -2.65625 0.453125 -3.28125 C 0.453125 -3.914062 0.601562 -4.488281 0.90625 -5 C 1.207031 -5.519531 1.625 -5.925781 2.15625 -6.21875 C 2.6875 -6.507812 3.285156 -6.65625 3.953125 -6.65625 C 4.609375 -6.65625 5.203125 -6.507812 5.734375 -6.21875 C 6.265625 -5.925781 6.679688 -5.523438 6.984375 -5.015625 C 7.285156 -4.503906 7.4375 -3.925781 7.4375 -3.28125 C 7.4375 -2.644531 7.285156 -2.070312 6.984375 -1.5625 C 6.679688 -1.050781 6.265625 -0.648438 5.734375 -0.359375 C 5.203125 -0.0664062 4.609375 0.078125 3.953125 0.078125 Z M 3.953125 -0.765625 C 4.429688 -0.765625 4.863281 -0.875 5.25 -1.09375 C 5.632812 -1.3125 5.9375 -1.613281 6.15625 -2 C 6.382812 -2.382812 6.5 -2.8125 6.5 -3.28125 C 6.5 -3.757812 6.382812 -4.191406 6.15625 -4.578125 C 5.9375 -4.960938 5.632812 -5.265625 5.25 -5.484375 C 4.863281 -5.703125 4.429688 -5.8125 3.953125 -5.8125 C 3.472656 -5.8125 3.035156 -5.703125 2.640625 -5.484375 C 2.253906 -5.265625 1.945312 -4.960938 1.71875 -4.578125 C 1.5 -4.191406 1.390625 -3.757812 1.390625 -3.28125 C 1.390625 -2.8125 1.5 -2.382812 1.71875 -2 C 1.945312 -1.613281 2.253906 -1.3125 2.640625 -1.09375 C 3.035156 -0.875 3.472656 -0.765625 3.953125 -0.765625 Z M 3.953125 -0.765625 "/></g></g></g><g fill="#1c1d33" fill-opacity="1"><g transform="translate(102.374936, 49.191214)"><g><path d="M 0.984375 -6.578125 L 1.921875 -6.578125 L 1.921875 -0.8125 L 5.484375 -0.8125 L 5.484375 0 L 0.984375 0 Z M 0.984375 -6.578125 "/></g></g></g><g fill="#1c1d33" fill-opacity="1"><g transform="translate(112.141505, 49.191214)"><g><path d="M 5.890625 -0.8125 L 5.890625 0 L 0.40625 0 L 0.40625 -0.640625 L 4.53125 -5.75 L 0.46875 -5.75 L 0.46875 -6.578125 L 5.78125 -6.578125 L 5.78125 -5.9375 L 1.65625 -0.8125 Z M 5.890625 -0.8125 "/></g></g></g><g fill="#1c1d33" fill-opacity="1"><g transform="translate(122.499671, 49.191214)"><g><path d="M 3.546875 -6.578125 C 4.398438 -6.578125 5.070312 -6.375 5.5625 -5.96875 C 6.050781 -5.5625 6.296875 -5 6.296875 -4.28125 C 6.296875 -3.570312 6.050781 -3.007812 5.5625 -2.59375 C 5.070312 -2.1875 4.398438 -1.984375 3.546875 -1.984375 L 1.921875 -1.984375 L 1.921875 0 L 0.984375 0 L 0.984375 -6.578125 Z M 3.515625 -2.8125 C 4.109375 -2.8125 4.5625 -2.9375 4.875 -3.1875 C 5.195312 -3.4375 5.359375 -3.800781 5.359375 -4.28125 C 5.359375 -4.757812 5.195312 -5.125 4.875 -5.375 C 4.5625 -5.625 4.109375 -5.75 3.515625 -5.75 L 1.921875 -5.75 L 1.921875 -2.8125 Z M 3.515625 -2.8125 "/></g></g></g><g fill="#1c1d33" fill-opacity="1"><g transform="translate(133.468203, 49.191214)"><g><path d="M 0.984375 -6.578125 L 1.921875 -6.578125 L 1.921875 -0.8125 L 5.484375 -0.8125 L 5.484375 0 L 0.984375 0 Z M 0.984375 -6.578125 "/></g></g></g><g fill="#1c1d33" fill-opacity="1"><g transform="translate(143.234772, 49.191214)"><g><path d="M 5.171875 -1.640625 L 1.6875 -1.640625 L 0.953125 0 L -0.015625 0 L 2.96875 -6.578125 L 3.890625 -6.578125 L 6.890625 0 L 5.890625 0 Z M 4.84375 -2.390625 L 3.421875 -5.609375 L 2.015625 -2.390625 Z M 4.84375 -2.390625 "/></g></g></g><g fill="#1c1d33" fill-opacity="1"><g transform="translate(154.297208, 49.191214)"><g><path d="M 2.296875 -5.75 L 0.03125 -5.75 L 0.03125 -6.578125 L 5.46875 -6.578125 L 5.46875 -5.75 L 3.21875 -5.75 L 3.21875 0 L 2.296875 0 Z M 2.296875 -5.75 "/></g></g></g><g fill="#1c1d33" fill-opacity="1"><g transform="translate(163.998044, 49.191214)"><g><path d="M 2.296875 -5.75 L 0.03125 -5.75 L 0.03125 -6.578125 L 5.46875 -6.578125 L 5.46875 -5.75 L 3.21875 -5.75 L 3.21875 0 L 2.296875 0 Z M 2.296875 -5.75 "/></g></g></g><g fill="#1c1d33" fill-opacity="1"><g transform="translate(173.69888, 49.191214)"><g><path d="M 5.75 -0.8125 L 5.75 0 L 0.984375 0 L 0.984375 -6.578125 L 5.625 -6.578125 L 5.625 -5.75 L 1.921875 -5.75 L 1.921875 -3.734375 L 5.21875 -3.734375 L 5.21875 -2.9375 L 1.921875 -2.9375 L 1.921875 -0.8125 Z M 5.75 -0.8125 "/></g></g></g></svg>
                   
                   <!-- Heading --> 
                    <h1 style="font-size:32px;line-height:1.3;font-weight:700;text-align:left;letter-spacing:-1px">Vielen Dank Name!</h1>

                    <!-- Subheading -->
                    <p style="font-size:14px;line-height:2;margin:0;color:#747474;font-weight:500;text-align:left">Wir haben deine Bestellung erhalten und sie befindet sich schon bald am Weg zu dir.</p>
                    <p style="font-size:14px;line-height:2;margin:0;color:#747474;font-weight:500;margin-top:24px;text-align:left">Hier findest du die Übersicht dazu. Sobald deine Bestellung auf dem Weg ist, erhälst du von uns eine Versandbestätigung per E-Mail, die auch als Bestätigung des Vertragsabschlusses gilt.</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#E5E5E5;margin:0" />
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding-left:40px;padding-right:40px;padding-top:22px;padding-bottom:22px">
              <tbody>
                <tr>
                  <td>
                    <!-- Versandadresse -->
                    <p style="font-size:15px;line-height:2;margin:0;font-weight:bold">Versand an: Name</p>
                    <p style="font-size:14px;line-height:2;margin:0;color:#747474;font-weight:500">Straße Hausnummer Stadt</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#E5E5E5;margin:0" />
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding-left:40px;padding-right:40px;padding-top:40px;padding-bottom:40px">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td data-id="__react-email-column"><img alt="Brazil 2022/23 Stadium Away Women&#x27;s Nike Dri-FIT Soccer Jersey" src="https://react-email-demo-jsqyb0z9w-resend.vercel.app/static/nike-product.png" style="display:block;outline:none;border:none;text-decoration:none;float:left" width="100px" /></td>
                          <td data-id="__react-email-column" style="vertical-align:center;padding-left:50px">
                            <p style="font-size:14px;line-height:2;margin:0;font-weight:500">Brazil 2022/23 Stadium Away Women&#x27;s Nike Dri-FIT Soccer Jersey</p>
                            <p style="font-size:14px;line-height:2;margin:0;color:#747474;font-weight:500">Size L (12–14)</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#E5E5E5;margin:0" />
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding-left:40px;padding-right:40px;padding-top:22px;padding-bottom:22px">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="display:inline-flex;>
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td data-id="__react-email-column" style="width:170px">
                            <p style="font-size:14px;line-height:2;margin:0;font-weight:bold">Order Number</p>
                            <p style="font-size:14px;line-height:1.4;margin:12px 0 0 0;font-weight:500;color:#6F6F6F">C0106373851</p>
                          </td>
                          <td data-id="__react-email-column">
                            <p style="font-size:14px;line-height:2;margin:0;font-weight:bold">Order Date</p>
                            <p style="font-size:14px;line-height:1.4;margin:12px 0 0 0;font-weight:500;color:#6F6F6F">Sep 22, 2022</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  
                  </td>
                </tr>
              </tbody>
            </table>
      
            
            <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#E5E5E5;margin:0;margin-top:12px" />
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding-top:22px;padding-bottom:22px">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="width:166px;margin:auto">
                    </table>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <p style="font-size:13px;line-height:24px;margin:0;color:#AFAFAF;text-align:center;padding-bottom:30px">Bei Fragen stehen wir sehr gerne zur Verfügung!</p>
                        </tr>
                      </tbody>
                    </table>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <p style="font-size:13px;line-height:24px;margin:0;color:#AFAFAF;text-align:center">© 2024 Felix Hermanutz, All Rights Reserved.</p>
                        </tr>
                      </tbody>
                    </table>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <p style="font-size:13px;line-height:24px;margin:0;color:#AFAFAF;text-align:center">Felix Hermanutz - Dr. Greilstraße 11, St. Georgen im Attergau</p>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>

</html>
    `;
};
