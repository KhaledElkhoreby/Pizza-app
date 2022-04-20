// module.exports = nextConfig;

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        MONGODB_URL:
          "mongodb+srv://Khaled:RiD1La0lhHNhC6Ex@cluster0.wgai4.mongodb.net/pizza?retryWrites=true&w=majority",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      MONGODB_URL:
        "mongodb+srv://Khaled:RiD1La0lhHNhC6Ex@cluster0.wgai4.mongodb.net/pizza?retryWrites=true&w=majority",
    },
  };
};
