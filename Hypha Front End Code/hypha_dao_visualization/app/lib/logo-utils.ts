// Logo utility functions for managing logo sources and configurations

export interface LogoConfig {
  main: string;
  dark?: string;
  light?: string;
  icon?: string;
  wordmark?: string;
}

// Default logo configuration
export const defaultLogoConfig: LogoConfig = {
  main: 'https://docs.hypha.app/assets/hypha-logo.png',
  dark: '/logos/hypha-logo-dark.png', // Local fallback
  light: '/logos/hypha-logo-light.png', // Local fallback
  icon: '/logos/hypha-icon.png', // Local fallback
  wordmark: '/logos/hypha-wordmark.png' // Local fallback
};

// Function to get logo source based on theme and type
export const getLogoSource = (
  type: keyof LogoConfig = 'main',
  theme?: 'light' | 'dark',
  customConfig?: Partial<LogoConfig>
): string => {
  const config = { ...defaultLogoConfig, ...customConfig };
  
  // If theme is specified and we have theme-specific logos
  if (theme === 'dark' && config.dark) {
    return config.dark;
  }
  if (theme === 'light' && config.light) {
    return config.light;
  }
  
  // Return the requested type or fallback to main
  return config[type] || config.main;
};

// Function to validate logo URLs
export const validateLogoUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// Function to get logo dimensions based on size
export const getLogoDimensions = (size: 'small' | 'medium' | 'large' | 'custom', customDimensions?: { width: number; height: number }) => {
  const sizeMap = {
    small: { width: 32, height: 32 },
    medium: { width: 80, height: 40 },
    large: { width: 160, height: 80 },
    custom: customDimensions || { width: 100, height: 50 }
  };
  
  return sizeMap[size];
};

// Function to generate logo alt text
export const generateLogoAltText = (
  variant: 'main' | 'icon' | 'wordmark' = 'main',
  organizationName: string = 'Hypha DAO'
): string => {
  const altTextMap = {
    main: `${organizationName} Logo`,
    icon: `${organizationName} Icon`,
    wordmark: `${organizationName} Wordmark`
  };
  
  return altTextMap[variant];
};

// Function to create logo configuration for different environments
export const createLogoConfig = (environment: 'development' | 'staging' | 'production'): LogoConfig => {
  const baseConfig = {
    development: {
      main: '/logos/hypha-logo-dev.png',
      dark: '/logos/hypha-logo-dark-dev.png',
      light: '/logos/hypha-logo-light-dev.png'
    },
    staging: {
      main: '/logos/hypha-logo-staging.png',
      dark: '/logos/hypha-logo-dark-staging.png',
      light: '/logos/hypha-logo-light-staging.png'
    },
    production: defaultLogoConfig
  };
  
  return baseConfig[environment];
};

// Logo replacement utility
export const replaceLogoInConfig = (
  currentConfig: LogoConfig,
  newLogos: Partial<LogoConfig>
): LogoConfig => {
  return {
    ...currentConfig,
    ...newLogos
  };
};

// Function to check if logo is local or external
export const isLocalLogo = (logoUrl: string): boolean => {
  return logoUrl.startsWith('/') || logoUrl.startsWith('./');
};

// Function to get optimized logo URL for different screen densities
export const getOptimizedLogoUrl = (
  baseUrl: string,
  density: 1 | 2 | 3 = 1
): string => {
  if (isLocalLogo(baseUrl)) {
    // For local images, append density suffix
    const extension = baseUrl.split('.').pop();
    const baseName = baseUrl.replace(`.${extension}`, '');
    return density > 1 ? `${baseName}@${density}x.${extension}` : baseUrl;
  }
  
  // For external URLs, return as-is (could be enhanced with URL parameters)
  return baseUrl;
};

// Logo preloading utility
export const preloadLogo = (logoUrl: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load logo: ${logoUrl}`));
    img.src = logoUrl;
  });
};

// Batch preload multiple logos
export const preloadLogos = async (logoUrls: string[]): Promise<void> => {
  try {
    await Promise.all(logoUrls.map(url => preloadLogo(url)));
  } catch (error) {
    console.warn('Some logos failed to preload:', error);
  }
};