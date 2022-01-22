module.exports = {
  reactStrictMode: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  images: {
    domains: ['images.unsplash.com', 'tailwindui.com'],
    // formats: ['image/avif', 'image/webp'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}