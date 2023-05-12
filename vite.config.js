import { fileURLToPath, URL } from "node:url";
const { createProxyMiddleware } = require("http-proxy-middleware");

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // https://eddf-109-107-243-170.ngrok-free.app

  server: {
    // middleware: {
    //   "/api": createProxyMiddleware({
    //     target: "https://7d62-109-107-243-170.ngrok-free.app",
    //     changeOrigin: true,
    //     secure: false,
    //   }),
    // },
    // proxy: {
    //   "/api": {
    //     target: "https://eddf-109-107-243-170.ngrok-free.app/",
    //     changeOrigin: true,
    //     secure: false,
    //     ws: true,
    //     configure: (proxy, _options) => {
    //       proxy.on("error", (err, _req, _res) => {
    //         console.log("proxy error", err);
    //       });
    //       proxy.on("proxyReq", (proxyReq, req, _res) => {
    //         console.log("Sending Request to the Target:", req.method, req.url);
    //       });
    //       proxy.on("proxyRes", (proxyRes, req, _res) => {
    //         console.log(
    //           "Received Response from the Target:",
    //           proxyRes.statusCode,
    //           req.url
    //         );
    //       });
    //     },
    //   },
    // },
    // proxy: {
    //   "/api": {
    //     target: "https://eddf-109-107-243-170.ngrok-free.app",
    //     changeOrigin: true,
    //     secure: false,
    //     // ws: true,
    //   },
    // },
  },
  // server: {
  //   "/api": {
  //     target: "https://7ca4-109-107-243-170.ngrok-free.app",
  //     changeOrigin: true,
  //     // rewrite: (path) => path.replace(/^\/api/, ""),
  //   },
  // },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
