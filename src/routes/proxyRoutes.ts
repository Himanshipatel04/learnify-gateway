import express from "express";
import { services } from "../config/services";
import { createProxyMiddleware } from "http-proxy-middleware";

const router = express.Router();

router.use(
  "/admin",
  createProxyMiddleware({
    target: services.admin,
    changeOrigin: true,
    pathRewrite: { "^/admin": "" },
  })
);

router.use(
  "/user",
  createProxyMiddleware({
    target: services.user,
    changeOrigin: true,
    pathRewrite: { "^/user": "" },
  })
);

export default router;
