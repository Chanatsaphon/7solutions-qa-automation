import { Locator, expect } from "@playwright/test";
import { BasePage } from "../base-page";
import { log } from "console";

export class SummaryTopUpPage extends BasePage {
  readonly topUpMenuLocator: Locator = this.page.locator('[data-testid="nok-more-nok-cash-icon"]');
  readonly pageTitleLocator: Locator = this.page.locator('[data-testid="page-title"]');
  readonly topUpValueLocator: Locator = this.page.locator('[data-testid="nok-cash-amount-input"]');
  readonly totalAmountLocator: Locator = this.page.locator('[data-testid="total-amount"]');
  readonly topUpConfirmButtonLocator: Locator = this.page.locator('[data-testid="nok-cash-top-up-button"]');
  readonly paymentAmount = this.page.locator('div:has-text("ยอดชำระเงิน")').locator('span').nth(1);
  readonly closeButtonLocator: Locator = this.page.locator('[data-testid="close-button"]');
  readonly acceptButtonLocator: Locator = this.page.locator('[data-testid="option-modal-confirm-button"]');
  readonly acceptAllButton: Locator = this.page.getByRole('button', { name: 'ยอมรับทั้งหมด' });

  async goTopUpPage(){
    await this.closeButtonLocator.click();
    await this.topUpMenuLocator.click();
    await this.acceptButtonLocator.click();
    await this.page.waitForTimeout(50000);
    await this.topUpMenuLocator.click();
    await expect(this.pageTitleLocator).toHaveText('เติมนกแคช');
    await expect(this.topUpConfirmButtonLocator).toBeDisabled();
  }
  async InputTopUpValue(amount: any){
    await this.topUpValueLocator.fill(amount);
    await expect(this.totalAmountLocator).toHaveText(amount);
    await expect(this.topUpConfirmButtonLocator).toBeEnabled();
  }
  async confirmTopup(expectedAmount: any){
    await this.topUpConfirmButtonLocator.click();
    await expect(this.paymentAmount).toHaveText(expectedAmount);
  }
  async fillRandomAmount() {
    const amount = Math.floor(Math.random() * (2_000_000 - 105 + 1)) + 105;
    return amount;
  }
}
