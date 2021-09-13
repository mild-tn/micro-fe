module.exports = {
  mode: 'jit',
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}'],
  // darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        primary: {
          500: '#FF4813',
          60: '#FA4616',
          70: '#D12E03',
          50: '#FF6840',
          20: '#FFCBBE',
          10: '#FFECE8',
        },
        error: {
          10: '#DF1C1C',
          20: '#FFBBBB',
        },
        warning: {
          50: '#FFC72C',
          20: '#FFEDBA',
        },
        success: {
          60: '#7DD420',
          20: '#DFFFBE',
        },
        purple: {
          60: '#5D46B8',
          20: '#DCD3FF',
        },
        gray: {
          80: '#646262',
          70: '#787878',
          60: '#8C8C8C',
          50: '#A1A1A1',
          30: '#CACACA',
          20: '#DEDEDE',
          10: '#F2F2F2',
        },
        blackgray: {
          10: '#FBFBFB',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
