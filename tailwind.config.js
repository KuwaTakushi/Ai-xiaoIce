import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundSize: {
        'full': '100%', // 将背景图片大小设置为100%以填充整个容器
        'large': '120%', // 自定义更大的背景图片大小
        'huge': '150%', // 进一步放大背景图片
      },

      skew: {

        '-8': '-8deg',

        '-14': '-14deg',
        '-16': '-16deg',
        '14': '14deg',
        '16': '16deg',
        '-18': '-18deg',
        '-18': '-18deg',
        '18': '18deg',
        '18': '18deg',
        '20': '20deg',


        '8': '8deg',
      },



      backgroundPosition: {
        '-5.2': '-5.2rem 50%', // 设置自定义的 bg-position-x 值为 -5.2rem
        '-10': '-10rem 50%',
        'right-5.2': 'center 5.2rem'
      },

      width: {
        '100': '26rem',
        '110': '30rem',
        '115': '34rem',
        '125': '38rem',
        '130': '45rem',
        '135': '48rem'
      },

      height: {
        '100': '26rem',
        '110': '30rem',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
