import type { StorybookConfig } from "@storybook/react-webpack5";

export default {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  framework: "@storybook/react-webpack5",
  webpackFinal(config) {
    config.module?.rules?.push({
      test: /\.tsx?$/,
      use: {
        loader: "babel-loader",
        options: {
          sourceType: "unambiguous",
          presets: [
            "@babel/preset-env",
            "@babel/preset-typescript",
            ["@babel/preset-react", { runtime: "automatic" }],
          ],
        },
      },
    });
    return config;
  },
} satisfies StorybookConfig;
