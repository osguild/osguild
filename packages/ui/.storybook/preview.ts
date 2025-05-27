import type { Preview } from "@storybook/react";
import "happo-plugin-storybook/register";
import happoDecorator from "happo-plugin-storybook/decorator";

export const decorators = [happoDecorator];

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
