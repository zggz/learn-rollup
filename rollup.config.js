// rollup.config.js
import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

const rollupConfig = defineConfig([
  {
    input: "src/index.tsx",
    output: [
      {
        exports: "named",
        dir: "dist/cjs",
        format: "cjs",
        
      },
      {
        dir: "dist/esm",
        format: "esm",
        preserveModules: true,
        // intro: 'const ENVIRONMENT = "production";',
        banner: "/* my-library version " + 1 + " */",
        footer: "/* follow me on Twitter! @rich_harris */",
      },
      {
        dir: "dist/es",
        format: "es",
        preserveModules: true,
        // intro: 'const ENVIRONMENT = "production";',
        banner: "/* my-library version " + 1 + " */",
        footer: "/* follow me on Twitter! @rich_harris */",
      },
    ],
    plugins: [
      esbuild({
        sourceMap: true,
        define: {
          __VERSION__: '"x.y.z"',
        },
      }),
      postcss({
        inject: (v) => {
          console.log(v);
          return `;import __styleInject__ from 'inject-head-style';__styleInject__(${v});`;
        },
        extract: false,
        modules: false,
        use: ["sass"],
      }),
    ],
  },
  // {
  //   input: "src/index.tsx",
  //   output: [{ dir: "dist/types", format: "es" }],
  //   plugins: [dts({})],
  // },
]);

export default rollupConfig;
