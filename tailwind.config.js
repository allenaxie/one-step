/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      height: {
        "screen-10": "10vh",
        "screen-20": "20vh",
        "screen-30": "30vh",
        "screen-40": "40vh",
        "screen-50": "50vh",
        "screen-60": "60vh",
        "screen-70": "70vh",
        "screen-80": "80vh",
        "screen-90": "90vh",
      },
      width: {
        "screen-10": "10vw",
        "screen-20": "20vw",
        "screen-30": "30vw",
        "screen-40": "40vw",
        "screen-50": "50vw",
        "screen-60": "60vw",
        "screen-70": "70vw",
        "screen-80": "80vw",
        "screen-90": "90vw",
      },
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
