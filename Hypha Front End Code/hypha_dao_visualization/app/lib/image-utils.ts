// Image utility functions for handling placeholder images and optimizing image loading

export const imageUrls = {
  // Verida branding images
  veridaLogoLight: 'https://verida.com/wp-content/uploads/2022/01/Verida_RGB-72_Orange-Logo.png',
  veridaLogoDark: 'https://facility.verida.com/Images/Verida_RGB%2072_Orange%20Logo.png',
  veridaHomepage: 'https://cdn.abacus.ai/images/a6d6021e-8137-443a-89d9-c9dbe6be3ef4.png',
  
  // Hypha DAO images
  hyphaLogo: 'https://docs.hypha.app/assets/hypha-logo.png',
  hyphaFlywheel: 'https://cdn.abacus.ai/images/76499916-f985-4078-8217-a5456c50ecf6.png',
  
  // Background and hero images
  blockchainNetwork: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  businessChallenges: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  blockchainSolutions: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  technologyRoadmap: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  teamCollaboration: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  
  // Sector-specific images
  ngoMicrogrants: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  creatorCollectives: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  freelancerEcosystem: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  realEstateDao: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  
  // Industry and technology images
  industryProfessionals: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  daoComponents: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
};

export const getSectorImage = (sectorId: string): string => {
  const sectorImages: Record<string, string> = {
    'ngo-microgrants': imageUrls.ngoMicrogrants,
    'creator-collectives': imageUrls.creatorCollectives,
    'freelancer-ecosystem': imageUrls.freelancerEcosystem,
    'real-estate-dao': imageUrls.realEstateDao
  };
  
  return sectorImages[sectorId] || imageUrls.industryProfessionals;
};

export const getImageWithFallback = (primaryUrl: string, fallbackUrl: string): string => {
  return primaryUrl || fallbackUrl;
};

// Image optimization helper
export const getOptimizedImageUrl = (url: string, width?: number, height?: number): string => {
  if (url.includes('unsplash.com')) {
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    params.set('auto', 'format');
    params.set('fit', 'crop');
    params.set('q', '80');
    
    return `${url}&${params.toString()}`;
  }
  
  return url;
};