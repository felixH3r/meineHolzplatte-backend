const dotenv = require("dotenv");

let ENV_FILE_NAME = "";
switch (process.env.NODE_ENV) {
  case "production":
    ENV_FILE_NAME = ".env.production";
    break;
  case "staging":
    ENV_FILE_NAME = ".env.staging";
    break;
  case "test":
    ENV_FILE_NAME = ".env.test";
    break;
  case "development":
  default:
    ENV_FILE_NAME = ".env";
    break;
}

try {
  dotenv.config({ path: process.cwd() + "/" + ENV_FILE_NAME });
} catch (e) {}

// CORS when consuming Medusa from admin
const ADMIN_CORS =
  process.env.ADMIN_CORS || "http://localhost:7000,http://localhost:7001";

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = process.env.STORE_CORS || "http://localhost:8000";

const DATABASE_URL =
  process.env.DATABASE_URL || "postgres://localhost/medusa-starter-default";

const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  {
    resolve: `@medusajs/file-local`,
    options: {
      upload_dir: "uploads",
    },
  },
  {
    resolve: "@medusajs/admin",
    /** @type {import('@medusajs/admin').PluginOptions} */
    options: {
      autoRebuild: true,
      develop: {
        open: process.env.OPEN_BROWSER !== "false",
      },
    },
  },
  {
    resolve: `medusa-plugin-mailjet`,
    options: {
      public_key: process.env.MAILJET_PUBLIC_KEY, //required
      private_key: process.env.MAILJET_PRIVATE_KEY, //required
      from: 'Meine-Holzplatte no-reply@meineholzplatte.at', //Name[space]email
      template_error_reporting: 'Meine-Holzplatte f.hermanutz@icloud.com', //to use mailjet's template error reporting
      customer_created_template: process.env.MAILJET_TEMPLATE,
      gift_card_created_template: process.env.MAILJET_TEMPLATE,
      order_placed_template: process.env.MAILJET_TEMPLATE,
      order_canceled_template: process.env.MAILJET_TEMPLATE,
      order_shipped_template: process.env.MAILJET_TEMPLATE,
      order_completed_template: process.env.MAILJET_TEMPLATE,
      user_password_reset_template: process.env.MAILJET_TEMPLATE,
      customer_password_reset_template: process.env.MAILJET_TEMPLATE,
      localization: {
        'de-DE': {
          // locale key
          customer_created_template: process.env.MAILJET_TEMPLATE,
          gift_card_created_template: process.env.MAILJET_TEMPLATE,
          order_placed_template: process.env.MAILJET_TEMPLATE,
          order_canceled_template: process.env.MAILJET_TEMPLATE,
          order_shipped_template: process.env.MAILJET_TEMPLATE,
          order_completed_template: process.env.MAILJET_TEMPLATE,
          user_password_reset_template: process.env.MAILJET_TEMPLATE,
          customer_password_reset_template: process.env.MAILJET_TEMPLATE,
        },
      },
    },
  }
];

const modules = {
  eventBus: {
    resolve: "@medusajs/event-bus-redis",
    options: {
      redisUrl: REDIS_URL,
      ttl: 30
    }
  },
  cacheService: {
    resolve: "@medusajs/cache-redis",
    options: {
      redisUrl: REDIS_URL,
      ttl: 30
    }
  },
};

/** @type {import('@medusajs/medusa').ConfigModule["projectConfig"]} */
const projectConfig = {
  jwtSecret: process.env.JWT_SECRET,
  cookieSecret: process.env.COOKIE_SECRET,
  store_cors: STORE_CORS,
  database_url: DATABASE_URL,
  admin_cors: ADMIN_CORS,
  // Uncomment the following lines to enable REDIS
  redis_url: REDIS_URL
};

/** @type {import('@medusajs/medusa').ConfigModule} */
module.exports = {
  projectConfig,
  plugins,
  modules,
};
