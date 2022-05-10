import esbuild from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

esbuild.build({
  entryPoints: ['src/index.ts'],
  outdir: 'lib',
  bundle: true,
  minifyWhitespace: true,
  minifySyntax: true,
  minifyIdentifiers: false,
  platform: 'browser',
  sourcemap: true,
  target: ['node16', 'esnext'],
  splitting: true,
  format: 'esm',
  plugins: [nodeExternalsPlugin()],
});
