/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "640px", // Small screens
      md: "768px", // Medium screens
      lg: "1024px", // Large screens
      xl: "1280px", // Extra large screens
      "2xl": "1536px", // Double extra large screens
      // Add your custom breakpoints here
      maxScreenSize: "1528px", // Example of a custom breakpoint
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        ArticulateRegular: "var(--Articulate-regular)",
        ArticulateRegularOblique: "var(--Articulate-regular-oblique)",
        ArticulateMedium: "var(--Articulate-medium)",
        ArticulateMediumOblique: "var(--Articulate-medium-oblique)",
        ArticulateThin: "var(--Articulate-thin)",
        ArticulateThinOblique: "var(--Articulate-thin-oblique)",
        ArticulateBold: "var(--Articulate-bold)",
        ArticulateBoldOblique: "var(--Articulate-bold-oblique)",
        ArticulateDemiBold: "var(--Articulate-demi-bold)",
        ArticulateDemiBoldOblique: "var(--Articulate-demi-bold-oblique)",
        ArticulateExtraBold: "var(--Articulate-extra-bold)",
        ArticulateExtraBoldOblique: "var(--Articulate-extra-bold-oblique)",
        ArticulateExtraLight: "var(--Articulate-extra-light)",
        ArticulateExtraLightOblique: "var(--Articulate-extra-light-oblique)",
        ArticulateHeavy: "var(--Articulate-heavy)",
        ArticulateHeavyOblique: "var(--Articulate-heavy-oblique)",
        ArticulateNormal: "var(--Articulate-normal)",
        ArticulateNormalOblique: "var(--Articulate-normal-oblique)",
        ArticulateLight: "var(--Articulate-light)",
        ArticulateLightOblique: "var(--Articulate-light-oblique)",

        AntarcticanMonoBook: "var(--AntarcticanMono-book)",
        AntarcticanMonoBookItalic: "var(--AntarcticanMono-book-italic)",
        AntarcticanMonoMedium: "var(--AntarcticanMono-medium)",
        AntarcticanMonoMediumItalic: "var(--AntarcticanMono-medium-italic)",
        AntarcticanMonoSemiBold: "var(--AntarcticanMono-semi-bold)",
        AntarcticanMonoSemiBoldItalic:
          "var(--AntarcticanMono-semi-bold-italic)",
        AntarcticanMonoBold: "var(--AntarcticanMono-bold)",
        AntarcticanMonoBoldItalic: "var(--AntarcticanMono-bold-italic)",
      },
      gap: {
        0: "0",
        px: "1px",
        0.5: "0.125em", // 2px in 16px base
        1: "0.25em", // 4px in 16px base
        1.5: "0.375em", // 6px in 16px base
        2: "0.5em", // 8px in 16px base
        2.5: "0.625em", // 10px in 16px base
        3: "0.75em", // 12px in 16px base
        3.5: "0.875em", // 14px in 16px base
        4: "1em", // 16px in 16px base
        5: "1.25em", // 20px in 16px base
        6: "1.5em", // 24px in 16px base
        8: "2em", // 32px in 16px base
        10: "2.5em", // 40px in 16px base
        12: "3em", // 48px in 16px base
        16: "4em", // 64px in 16px base
        20: "5em", // 80px in 16px base
        24: "6em", // 96px in 16px base
        32: "8em", // 128px in 16px base
        40: "10em", // 160px in 16px base
        48: "12em", // 192px in 16px base
        56: "14em", // 224px in 16px base
        64: "16em", // 256px in 16px base
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
