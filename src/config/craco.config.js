const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

module.exports = {
  devServer: {
    port: 3007,
    disableHostCheck: true,
    proxy: {
      "upskill-api": {
        target: "https://upskill-test.herokuapp.com",
        // target: "http://192.168.1.94:8000",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "upskill-api": "" },
      },
    },
  },

  webpack: {
    alias: {
      "@api": path.resolve("src/api"),
      "@assets": path.resolve("src/assets"),
      "@hooks": path.resolve("src/hooks"),  

      "@public-components": path.resolve(
        "src/components/public"
      ),
      "@admin-components": path.resolve(
        "src/components/admin"
      ),
      "@teacher-components": path.resolve(
        "src/components/teacher"
      ),
      "@student-components": path.resolve(
        "src/components/student"
      ),

      "@public-pages": path.resolve("src/pages/public"),
      "@admin-pages": path.resolve("src/pages/admin"),
      "@teacher-pages": path.resolve("src/pages/teacher"),
      "@student-pages": path.resolve("src/pages/student"),

      "@redux": path.resolve("src/redux"),  
      "@utils": path.resolve("src/utils"),
      "@config": path.resolve("src/config"),
    },
  },

  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#E9012B",
              "@link-color": "#656678",
              "@success-color": "#52c41a",
              "@warning-color": "#faad14",
              "@error-color": "#f5222d",
              "@font-size-base": "14px;",
              "@heading-color": "rgba(0, 0, 0, 0.85)",
              "@text-color": "#000",
              "@text-color-secondary": "#9A9CB7",
              "@disabled-color": "rgba(0, 0, 0, 0.25)",
              "@border-radius-base": "12px;",
              "@border-color-base": "#d9d9d9",
              "@box-shadow-base":
                "0 2px,2px -1px rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.08), 0 2px 10px 2px rgba(0, 0, 0, 0.05)",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
