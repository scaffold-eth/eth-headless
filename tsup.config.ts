import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: [
    './src/index.ts',
    './src/dapps.ts',
    './src/erc.ts',
    './src/context/index.ts',
    './src/functions/index.ts',
    './src/helpers/index.ts',
    './src/models/index.ts',
    './src/helpers/__global.ts',
  ],
  splitting: true,
  sourcemap: true,
  clean: true,
  outDir: 'lib',
  bundle: true,
  minifyWhitespace: true,
  minifySyntax: false,
  minifyIdentifiers: false,
  legacyOutput: true,
  platform: 'browser',
  target: ['node16', 'esnext'],
  format: ['cjs', 'esm'],
  inject: ['esbuild.shim.js'],
  skipNodeModulesBundle: true,
  tsconfig: 'tsconfig.build.json',
});
