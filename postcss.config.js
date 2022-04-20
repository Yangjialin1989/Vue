// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 75,//设计稿尺寸，设备宽度，工作中按照750px，

      propList: ['*'],
    },
  },
};
