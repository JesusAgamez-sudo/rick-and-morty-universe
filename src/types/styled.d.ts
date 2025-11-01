import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryGreen: string;
      primaryPink: string;
      primaryPurple: string;
      primaryCyan: string;
      darkBg: string;
      cardBg: string;
      textPrimary: string;
      textSecondary: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    animations: {
      portalGlow: string;
      textGlow: string;
    };
  }
}