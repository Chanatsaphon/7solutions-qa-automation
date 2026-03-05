import * as AppSetting from "../../tests-e2e/configurations/app-setting.json";

export class E2EConfiguration {
  appSetting: typeof AppSetting;

  constructor() {
    this.appSetting = AppSetting;
  }
}
