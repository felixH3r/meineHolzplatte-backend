import { AwilixContainer } from 'awilix'
import {Logger} from "@medusajs/medusa";

/**
 *
 * @param container The container in which the registrations are made
 * @param config The options of the plugin or the entire config object
 */
import { promises } from "fs";

export default async function () {
  // console log the version of @medusajs/medusa in the project
  console.log(
      `Medusa version resolved: ${
          require("@medusajs/medusa/package.json").version
      }`
  );
  console.log(
      `Medusa version resolved: ${
          require("@medusajs/medusa/package.json").version
      }`
  );
  console.log(
      `Medusa version resolved: ${
          require("@medusajs/medusa/package.json").version
      }`
  );
  console.log(
      `Medusa version resolved: ${
          require("@medusajs/medusa/package.json").version
      }`
  );

  // read the package.json file
  const packageJson = await promises.readFile("./package.json", "utf-8");

  // parse the package.json file

  const packageObject = JSON.parse(packageJson);

  // log the version of @medusajs/medusa in packageObject

  console.log(
      `Medusa version in package.json: ${packageObject.dependencies["@medusajs/medusa"]}`
  );
  console.log(
      `Medusa version in package.json: ${packageObject.dependencies["@medusajs/medusa"]}`
  );
  console.log(
      `Medusa version in package.json: ${packageObject.dependencies["@medusajs/medusa"]}`
  );

  // Readdir /src/api/admin/onboardng and list all files
  const files = await promises.readdir("./src/api/admin/onboarding");

  // Log the files
  console.log("Files in /src/api/admin/onboarding: ", files);
  console.log("Files in /src/api/admin/onboarding: ", files);
  console.log("Files in /src/api/admin/onboarding: ", files);
}
