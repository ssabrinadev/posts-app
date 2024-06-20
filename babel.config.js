module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel'
    ],
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '@': './src',
          '@/pages': './src/pages',
          '@/app': './src/app',
          '@/shared': './src/shared',
          '@/widgets': './src/widgets',
          '@/features': './src/features',
          '@/entities': './src/entities'
        }
      }]
    ]
  };
};