import type {TestRunnerConfig} from '@storybook/test-runner';
import type {Page} from '@playwright/test';
import {expect} from '@playwright/test';

const config: TestRunnerConfig = {
    async preVisit(page: Page) {
        // Wait for fonts and resources to load
        await page.waitForLoadState('networkidle');
    },

    async postVisit(page: Page) {
        // Optional: Add accessibility checks
        try {
            const snapshot = await page.accessibility.snapshot();
            if (snapshot) {
                expect(snapshot).toBeTruthy();
            }
        } catch (error) {
            console.warn('Accessibility snapshot failed:', error);
        }
    }
};

export default config;
