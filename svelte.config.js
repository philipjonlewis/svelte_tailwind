import preprocess from "svelte-preprocess";

const config = {
  preprocess: [
    preprocess({
      postcss: true,
      sass: true,
    }),
  ],
};

export default config;
