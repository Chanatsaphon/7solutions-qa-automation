import { test as base } from "@playwright/test";
import { E2EConfiguration } from "../services/configurations/e2e-configuration";
import { SummaryTopUpPage } from "../elements/pages/summary-topup";

interface E2ETestFixtures {
  configuration: E2EConfiguration;

  summaryTopUpPage: SummaryTopUpPage;
}

const test = base.extend<E2ETestFixtures>({
  configuration: async ({}, use) => {
    const configuration = new E2EConfiguration();
    await use(configuration);
  },

  summaryTopUpPage: async ({ page }, use) => {
    const summaryTopUpPage = new SummaryTopUpPage(page);
    await use(summaryTopUpPage);
  },
});

export { test };
