// rollup.config.js
import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";

const rollupConfig = defineConfig([
  {
    input: "src/index.tsx",
    output: [
      {
        file: "dist/cjs/bundle.cjs.js",
        format: "cjs",
      },

      {
        // file: "d.ejs.js",
        dir:"dist/ejs",
        format: "es",
         preserveModules:true,
        // intro: 'const ENVIRONMENT = "production";',
        banner: "/* my-library version " + 1 + " */",
        footer: "/* follow me on Twitter! @rich_harris */",
        strictDeprecations:true
      },
    ],
    plugins: [
      esbuild({
        sourceMap: true,
        define: {
          __VERSION__: '"x.y.z"',
        },
      }),
    ],
  },
  {
    input: "src/index.tsx",
    output: [{ dir: "dist/types", format: "es" }],
    plugins: [dts({})],
  },
]);

export default rollupConfig;
