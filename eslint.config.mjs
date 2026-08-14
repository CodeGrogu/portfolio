import nextConfig from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';

const eslintConfig = [
  ...nextConfig,
  ...nextTs,
  prettier,
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'dist/**', 'node_modules/**', 'next-env.d.ts'],
  },
];

export default eslintConfig;
