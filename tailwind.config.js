/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'pc': '1367px',
      },
      maxWidth: {
        'container-wide': '150rem', // Approx 1500px
      },
      colors: {
        'brand-purple': '#8A2BE2', // Medium Purple
        'brand-purple-light': '#9370DB', // MediumPurple
        'brand-purple-dark': '#4B0082', // Indigo
        'brand-blue': '#4169E1', // RoyalBlue
        'brand-pink': '#FF69B4', // HotPink
        'brand-gradient-from': '#8A2BE2',
        'brand-gradient-to': '#4169E1',
        'brand-text-primary': '#222222', // Changed from #000000 to a softer dark gray
        'brand-text-muted': '#999999', // New muted/secondary text color
        'brand-text-date': '#575757', // Added color for blog dates
        // New header gradient colors (Matching the provided image)
        'header-gradient-start': '#2533E8', // rgb(37, 51, 232)
        'header-gradient-middle': '#8936EB', // rgb(137, 54, 235)
        'header-gradient-end': '#DC30A6', // rgb(220, 48, 166)
        // Input field specific colors
        'input-focus-blue': '#5353F1',
        'input-error-pink': '#E14EB8',
        'input-icon-placeholder': '#B5BBBE', // New color for placeholder and icon
        'mobile-menu-bg': '#7254FF', // Custom purple for mobile menu background (updated)
        'brand-text-mobile-footer-links': '#747E8B', // Added for mobile footer links rgb(116, 126, 139)
      },
      fontFamily: {
        sans: ['Helvetica', 'Charter', '"PingFang SC"', '"Microsoft YaHei"', 'Arial', 'sans-serif'],
      },
      keyframes: {
        appIconFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        svgIconPulse: { // Added new keyframes
          '0%, 100%': { transform: 'scale(1)', transformOrigin: 'center' },
          '50%': { transform: 'scale(1.05)', transformOrigin: 'center'  },
        }
      },
      animation: {
        appIconFloat: 'appIconFloat 3.5s ease-in-out infinite',
        svgIconPulse: 'svgIconPulse 2.5s ease-in-out infinite', // Added new animation utility
      }
    },
  },
  plugins: [],
}