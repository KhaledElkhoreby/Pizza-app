/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  env: {
    MONGODB_URL:
      "mongodb+srv://Khaled:Khaled@cluster0.pubb9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
};
