export interface PricingTier {
  pageViews : string;
  price : number;
}

export interface ThemeContextType {
  isDark : boolean;
  toggleTheme : () => void;
}