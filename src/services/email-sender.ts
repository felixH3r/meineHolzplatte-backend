import { AbstractNotificationService, OrderService } from "@medusajs/medusa";
import { Resend } from "resend";
import * as process from "process";
import { EntityManager } from "typeorm";
import {createThankYouEmail} from "../utils/thank-you";

export default class EmailSenderService extends AbstractNotificationService {
  static identifier = "email-sender";
  protected orderService_: OrderService;
  protected emailClient_: Resend;

  constructor(container, options) {
    super(container);
    this.orderService_ = container.orderService;
    this.emailClient_ = new Resend("re_a94mnc1J_AWo2zdd1zb2mf5XUogAXUC9x");
  }

  /**
   *
   * @param event = event which called the notification service
   * @param data = data of event - look into event reference: https://docs.medusajs.com/development/events/events-list#order-events
   * @param attachmentGenerator = default = null
   */
  async sendNotification(
    event: string,
    data: any,
    attachmentGenerator: unknown
  ): Promise<{
    to: string;
    status: string;
    data: Record<string, unknown>;
  }> {
    if (event === "order.placed") {
      const order = await this.orderService_.retrieve(data.id);
      this.emailClient_.emails.send({
        from: "Felix Hermanutz <felix@meine-holzplatte.com>",
        to: order.email,
        subject: "Danke für deinen Einkauf!",
        html: createThankYouEmail(order),
      });

      return Promise.resolve({
        to: order.email,
        status: "done",
        data: {
          // any data necessary to send the email
          // for example:
          subject: "You placed a new order!",
          items: order.items,
        },
      }); // make changes to the data);
    }
    return Promise.resolve(undefined);
  }

  resendNotification(
    notification: any,
    config: any,
    attachmentGenerator: unknown
  ): Promise<{
    to: string;
    status: string;
    data: Record<string, unknown>;
  }> {
    // check if the receiver should be changed
    const to: string = config.to || notification.to;

    console.log("Notification resent");
    return Promise.resolve({
      to,
      status: "done",
      data: notification.data, // make changes to the data
    });
  }
}
