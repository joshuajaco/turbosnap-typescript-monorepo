export const parameters = {
  someParameter: "foo",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
    },
  },
};
