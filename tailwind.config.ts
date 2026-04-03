import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '576px', // Custom breakpoint
      },
    },
  },
  plugins: [],
};

export default config;


// import type { Config } from 'tailwindcss';

// const config: Config = {
//   content: [
//     "./src/**/*.{html,ts}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         'xs': '576px', // Custom breakpoint
//       },
//       colors: {
//         // You can define your custom colors here
//         red: {
//           500: '#ef4444',
//           600: '#dc2626',
//           700: '#b91c1c',
//         }
//       }
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//   ],
// };

// export default config;