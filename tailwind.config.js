/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      spacing: {
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
      },
      fontFamily: {
        zcoolXiaoWei: ["ZCOOL_XiaoWei"],
      },
      transitionDelay: {
        1000: "1000ms",
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
        5000: "5000ms",
      },
      transitionDuration: {
        1000: "1000ms",
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
        5000: "5000ms",
      },
    },
  },
  plugins: [],
};
