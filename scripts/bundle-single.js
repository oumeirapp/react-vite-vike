
import esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['dist/client/assets/entries/entry-client-routing.Dr5BOGeb.js'],
  bundle: true,
  outfile: 'dist/bundle.js',
  format: 'iife', // safer for browsers
  minify: true
})

console.log('✅ Bundle created: dist/bundle.js')
