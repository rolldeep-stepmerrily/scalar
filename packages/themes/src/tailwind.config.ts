import type { Config } from 'tailwindcss'

/** Scalar Tailwind Preset */
export default {
  darkMode: ['selector', '.dark-mode'],
  theme: {
    borderRadius: {
      DEFAULT: 'var(--radius)',
      md: 'var(--radius-md)',
      lg: 'var(--radius-lg)',
      xl: 'var(--radius-xl)',
      px: 'var(--radius-px)',
      full: 'var(--radius-full)',
      none: 'var(--radius-none)',
    },
    borderWidth: {
      DEFAULT: 'var(--border-width)',
      '0': 'var(--border-width-0)',
      'half': 'var(--border-width-half)',
      '1': 'var(--border-width-1)',
      '2': 'var(--border-width-2)',
      '4': 'var(--border-width-4)',
    },
    boxShadow: {
      DEFAULT: 'var(--shadow)',
      lg: 'var(--shadow-lg)',
      md: 'var(--shadow-md)',
      sm: 'var(--shadow-sm)',
      none: 'var(--shadow-none)',
      border: 'var(--shadow-border)',
      'border-1/2': 'var(--shadow-border-1/2)',
    },
    fontFamily: {
      sans: 'var(--font-sans)',
      code: 'var(--font-code)',
    },
    fontSize: {
      '3xs': 'var(--font-size-3xs)',
      xxs: 'var(--font-size-xxs)',
      xs: 'var(--font-size-xs)',
      sm: 'var(--font-size-sm)',
      base: 'var(--font-size-base)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)',
    },
    fontWeight: {
      normal: 'var(--font-weight-normal)',
      medium: 'var(--font-weight-medium)',
      bold: 'var(--font-weight-bold)',
    },
    colors: {
      current: 'currentColor',
      inherit: 'inherit',
      // Background Colors
      background: {
        1: 'var(--color-background-1)',
        '1-5': 'var(--color-background-1-5)',
        2: 'var(--color-background-2)',
        3: 'var(--color-background-3)',
        4: 'var(--color-background-4)',
        accent: 'var(--color-background-accent)',
        btn: 'var(--color-background-btn)',
        danger: 'var(--color-background-danger)',
        alert: 'var(--color-background-alert)',
      },
      // Foreground Colors
      foreground: {
        1: 'var(--color-foreground-1)',
        2: 'var(--color-foreground-2)',
        3: 'var(--color-foreground-3)',
        accent: 'var(--color-foreground-accent)',
        ghost: 'var(--color-foreground-ghost)',
        disabled: 'var(--color-foreground-disabled)',
        btn: 'var(--color-foreground-btn)',
        danger: 'var(--color-foreground-danger)',
        alert: 'var(--color-foreground-alert)',
      },
      // Hover Colors
      hover: {
        btn: 'var(--color-hover-btn)',
      },
      // Sidebar Colors
      sidebar: {
        background: {
          1: 'var(--color-sidebar-background-1)',
        },
        foreground: {
          1: 'var(--color-sidebar-foreground-1)',
          2: 'var(--color-sidebar-foreground-2)',
        },
        border: 'var(--color-sidebar-border)',
      },
      // Utility Colors
      backdrop: 'var(--color-backdrop)',
      'backdrop-dark': 'var(--color-backdrop-dark)',
      border: 'var(--color-border)',
      brand: 'var(--color-brand)',
      // Themed Primary Colors
      green: 'var(--color-green)',
      red: 'var(--color-red)',
      yellow: 'var(--color-yellow)',
      blue: 'var(--color-blue)',
      orange: 'var(--color-orange)',
      purple: 'var(--color-purple)',
      grey: 'var(--color-grey)',
      indigo: 'var(--color-indigo)',
      pink: 'var(--color-pink)',
      // Hard-coded Colors
      white: '#FFF',
      transparent: 'transparent',
    },
    lineHeight: {
      none: 'var(--line-height-none)',
      tight: 'var(--line-height-tight)',
      snug: 'var(--line-height-snug)',
      normal: 'var(--line-height-normal)',
      relaxed: 'var(--line-height-relaxed)',
      loose: 'var(--line-height-loose)',
      1: 'var(--line-height-1)',
      2: 'var(--line-height-2)',
      3: 'var(--line-height-3)',
      4: 'var(--line-height-4)',
      5: 'var(--line-height-5)',
    },
    screens: {
      /** Mobile */
      xs: '400px',
      /** Large Mobile */
      sm: '600px',
      /** Tablet */
      md: '800px',
      /** Desktop */
      lg: '1000px',
      /** Ultrawide and larger */
      xl: '1200px',
      /** Custom breakpoint for zoomed in screens (should trigger at about 200% zoom) */
      zoomed: { raw: '(max-width: 720px) and (max-height: 480px)' },
    },
    zIndex: {
      '-1': 'var(--z-index-negative)',
      '0': 'var(--z-index-0)',
      '1': 'var(--z-index-1)',
    },
    extend: {
      borderColor: { DEFAULT: 'var(--color-border)' },
      brightness: {
        lifted: 'var(--brightness-lifted)',
        backdrop: 'var(--brightness-backdrop)',
      },
      spacing: {
        px: 'var(--spacing-px)',
        header: 'var(--spacing-header)',
        border: 'var(--spacing-border)',
      },
    },
  },
} satisfies Partial<Config>
