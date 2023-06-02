import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: [
    './index.html',
    './src/**/*.{vue,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
} satisfies Config;
