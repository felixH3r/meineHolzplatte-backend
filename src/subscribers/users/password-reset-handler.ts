import {
  UserService,
  type SubscriberConfig,
  type SubscriberArgs, User,
} from "@medusajs/medusa";

export default async function passwordResetHandler({
                                                     data, eventName, container, pluginOptions,
                                                   }: SubscriberArgs<Record<string, any>>) {
  const resend = container.resolve(
      "resendService"
  );
  // const userService: UserService = container.resolve('userService');

  // resend.sendEmail({
  //
  //   from: 'Acme <felix@meine-holzplatte.com>',
  //   to: 'felix.hermanutz@roomle.com',
  //
  // })

  // do something with the product...
}

export const config: SubscriberConfig = {
  event: UserService.Events.PASSWORD_RESET,
  context: {
    subscriberId: "password-reset-handler",
  },
}
