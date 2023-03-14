import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
  },
  video: false,
  screenshotOnRunFailure: false,
});
