import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const BUILD_MODE = process.env.BUILD_MODE;

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

if (BUILD_MODE === "standalone") {
  nextConfig.output = "standalone";
}

export default withNextIntl(nextConfig);
