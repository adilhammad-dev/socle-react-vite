import type { TestRunnerConfig } from '@storybook/test-runner';

const config: TestRunnerConfig = {
  async preRender(page) {
    // Wait for any fonts to load
    await page.waitForLoadState('networkidle');
  },
  async postRender(page) {
    // Add any accessibility checks
    const snapshot = await page.accessibility.snapshot();
    expect(snapshot).toBeTruthy();
  }
};

export default config;
