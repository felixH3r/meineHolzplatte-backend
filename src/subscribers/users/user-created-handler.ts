import {
  UserService,
  type SubscriberConfig,
  type SubscriberArgs,
  User,
} from "@medusajs/medusa";
import {Resend} from "resend";

export default async function passwordResetHandler({
  data,
  eventName,
  container,
  pluginOptions,
}: SubscriberArgs<Record<string, any>>) {
  // const resend = container.resolve("resendService");

  // console.log(resend.templatePath, "resend template path");
  //   const userService: UserService = container.resolve('userService');
  const resend = new Resend('re_a94mnc1J_AWo2zdd1zb2mf5XUogAXUC9x')
  await resend.emails.send({
    from: "Felix Hermanutz <felix@meine-holzplatte.com>",
    to: "felix.hermanutz@roomle.com",
    subject: 'hopefully it works!',
    html: '<strong>Yes!! it works!!</strong>'
  });
}

export const config: SubscriberConfig = {
  event: UserService.Events.CREATED,
  context: {
    subscriberId: "user-created-handle",
  },
};
