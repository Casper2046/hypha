'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { imageUrls } from '@/lib/image-utils';

interface LogoComponentProps {
  variant?: 'main' | 'navigation' | 'footer';
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

const sizeMap = {
  small: { width: 32, height: 32 },
  medium: { width: 80, height: 40 },
  large: { width: 160, height: 80 }
};

export default function LogoComponent({ 
  variant = 'main', 
  size = 'medium',
  showText = true,
  className = ''
}: LogoComponentProps) {
  const { theme } = useTheme();
  const dimensions = sizeMap[size];

  // Navigation variant uses gradient icon
  if (variant === 'navigation') {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        <div className="w-8 h-8 bg-gradient-to-br from-[#FF5000] to-[#0077C8] rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">H</span>
        </div>
        {showText && (
          <div className="hidden sm:block">
            <span className="text-xl font-bold text-[#003366]">Hypha DAO</span>
            <span className="text-sm text-gray-600 ml-2">Ecosystem</span>
          </div>
        )}
      </div>
    );
  }

  // Main and footer variants use image logo
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`${variant === 'main' ? 'bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200' : ''}`}>
        <Image
          src={imageUrls.hyphaLogo}
          alt="Hypha DAO Logo"
          width={dimensions.width}
          height={dimensions.height}
          className="object-contain"
          priority={variant === 'main'}
        />
        {showText && variant === 'main' && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-bold text-[#003366]">Hypha DAO</h2>
            <p className="text-sm text-gray-600 mt-1">Flywheel Ecosystem</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Utility function to easily replace logo sources
export const updateLogoSource = (newLogoUrl: string) => {
  // This function can be used to dynamically update logo sources
  // Implementation would depend on your state management approach
  console.log('Update logo source to:', newLogoUrl);
};

// Hook for logo management
export const useLogoConfig = () => {
  const { theme } = useTheme();
  
  const getLogoSource = (logoType: 'main' | 'dark' | 'light') => {
    switch (logoType) {
      case 'dark':
        return imageUrls.veridaLogoDark;
      case 'light':
        return imageUrls.veridaLogoLight;
      default:
        return imageUrls.hyphaLogo;
    }
  };

  const getCurrentLogo = () => {
    return theme === 'dark' ? getLogoSource('dark') : getLogoSource('main');
  };

  return {
    getLogoSource,
    getCurrentLogo,
    theme
  };
};