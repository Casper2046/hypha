# Logo Implementation Guide - Hypha DAO Ecosystem

This document provides a comprehensive overview of all logo implementations in the NextJS web application and instructions for modifying them.

## Current Logo Locations and Implementations

### 1. Homepage (app/page.tsx)

#### Main Hypha DAO Logo
**Location**: Hero section of the homepage
**Implementation Method**: Direct URL reference
**Current Code**:
```tsx
<Image
  src="https://docs.hypha.app/assets/hypha-logo.png"
  alt="Hypha DAO Logo"
  width={160}
  height={80}
  className="object-contain"
/>
```

**File Path**: `app/page.tsx` (lines ~85-90)
**Container**: White background card with backdrop blur effect
**Styling**: 
- Dimensions: 160x80 pixels
- Container: `bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200`
- Additional text: "Hypha DAO" and "Flywheel Ecosystem" below the logo

### 2. Navigation Header (components/navigation.tsx)

#### Navigation Logo/Icon
**Location**: Top navigation bar
**Implementation Method**: CSS gradient with text initial
**Current Code**:
```tsx
<div className="w-8 h-8 bg-gradient-to-br from-[#FF5000] to-[#0077C8] rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-sm">H</span>
</div>
```

**File Path**: `components/navigation.tsx` (lines ~45-50)
**Styling**: 
- Gradient background using Verida brand colors
- White "H" letter as logo symbol
- Dimensions: 32x32 pixels (w-8 h-8)

### 3. Image Utility References (lib/image-utils.ts)

#### Logo URL Definitions
**Implementation Method**: Centralized URL management
**Current Code**:
```tsx
export const imageUrls = {
  // Verida branding images
  veridaLogoLight: 'https://verida.com/wp-content/uploads/2022/01/Verida_RGB-72_Orange-Logo.png',
  veridaLogoDark: 'https://facility.verida.com/Images/Verida_RGB%2072_Orange%20Logo.png',
  
  // Hypha DAO images
  hyphaLogo: 'https://docs.hypha.app/assets/hypha-logo.png',
  hyphaFlywheel: 'https://cdn.abacus.ai/images/76499916-f985-4078-8217-a5456c50ecf6.png',
  // ... other images
};
```

**File Path**: `lib/image-utils.ts` (lines ~3-15)
**Purpose**: Centralized image URL management (currently not used for main logo but available)

## How to Modify Logos

### Option 1: Replace with Local Images (Recommended)

#### Step 1: Add Logo Files to Public Folder
1. Place your new logo files in the `public/` directory
2. Recommended naming: `hypha-logo.png`, `hypha-logo-dark.png`, etc.
3. Ensure proper image formats (PNG, SVG, or WebP recommended)

#### Step 2: Update Homepage Logo
**File**: `app/page.tsx`
**Find this code** (around line 85):
```tsx
<Image
  src="https://docs.hypha.app/assets/hypha-logo.png"
  alt="Hypha DAO Logo"
  width={160}
  height={80}
  className="object-contain"
/>
```

**Replace with**:
```tsx
<Image
  src="/your-new-logo.png"
  alt="Hypha DAO Logo"
  width={160}
  height={80}
  className="object-contain"
/>
```

#### Step 3: Update Image Utils (Optional but Recommended)
**File**: `lib/image-utils.ts`
**Update the imageUrls object**:
```tsx
export const imageUrls = {
  // Update Hypha DAO images
  hyphaLogo: '/your-new-logo.png',
  hyphaLogoDark: '/your-new-logo-dark.png', // if you have a dark version
  // ... rest of the images
};
```

**Then update homepage to use the utility**:
```tsx
import { imageUrls } from '@/lib/image-utils';

// In the component:
<Image
  src={imageUrls.hyphaLogo}
  alt="Hypha DAO Logo"
  width={160}
  height={80}
  className="object-contain"
/>
```

### Option 2: Update External URLs

#### Update Homepage Logo URL
**File**: `app/page.tsx`
**Simply replace the URL**:
```tsx
<Image
  src="https://your-domain.com/path/to/new-logo.png"
  alt="Hypha DAO Logo"
  width={160}
  height={80}
  className="object-contain"
/>
```

### Option 3: Modify Navigation Logo

#### Replace Gradient Icon with Image Logo
**File**: `components/navigation.tsx`
**Find this code** (around line 45):
```tsx
<div className="w-8 h-8 bg-gradient-to-br from-[#FF5000] to-[#0077C8] rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-sm">H</span>
</div>
```

**Replace with**:
```tsx
<div className="w-8 h-8 rounded-lg overflow-hidden">
  <Image
    src="/your-nav-logo.png"
    alt="Hypha DAO"
    width={32}
    height={32}
    className="object-contain"
  />
</div>
```

#### Or Update the Letter/Colors
**Keep the gradient but change the letter or colors**:
```tsx
<div className="w-8 h-8 bg-gradient-to-br from-[#YOUR_COLOR1] to-[#YOUR_COLOR2] rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-sm">Y</span> {/* Change letter */}
</div>
```

## Logo Styling and Responsive Behavior

### Homepage Logo Container Styling
The main logo is wrapped in a styled container that provides:
- Semi-transparent white background (`bg-white/90`)
- Backdrop blur effect (`backdrop-blur-sm`)
- Rounded corners (`rounded-2xl`)
- Padding (`p-8`)
- Shadow (`shadow-lg`)
- Border (`border border-gray-200`)

### Responsive Considerations
- Logo dimensions are fixed but container is responsive
- On mobile devices, the logo maintains its aspect ratio
- Navigation logo is consistently sized across all screen sizes

## Dark Mode Considerations

Currently, the application supports dark/light mode, but the logos don't automatically switch. To implement dark mode logo switching:

### Add Dark Mode Logo Support
**File**: `app/page.tsx`
```tsx
import { useTheme } from 'next-themes';

// In component:
const { theme } = useTheme();

<Image
  src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
  alt="Hypha DAO Logo"
  width={160}
  height={80}
  className="object-contain"
/>
```

## Best Practices for Logo Implementation

### 1. Image Optimization
- Use Next.js Image component for automatic optimization
- Provide appropriate width and height props
- Use modern image formats (WebP, AVIF) when possible

### 2. Accessibility
- Always include descriptive alt text
- Ensure sufficient color contrast
- Consider users with visual impairments

### 3. Performance
- Optimize image file sizes
- Use appropriate dimensions (don't scale large images down)
- Consider using SVG for simple logos

### 4. Consistency
- Maintain consistent logo sizing across pages
- Use the same logo variants throughout the application
- Follow brand guidelines for spacing and placement

## File Structure for Logo Assets

```
public/
├── logos/
│   ├── hypha-logo.png          # Main logo
│   ├── hypha-logo-dark.png     # Dark mode variant
│   ├── hypha-icon.png          # Small icon version
│   └── hypha-wordmark.png      # Text-only version
└── Screenshot 2025-05-27 at 2.23.58 PM.png  # Existing file
```

## Testing Logo Changes

After making logo changes:

1. **Test on different screen sizes**
   - Desktop (1920px+)
   - Tablet (768px-1024px)
   - Mobile (320px-767px)

2. **Test in different themes**
   - Light mode
   - Dark mode
   - System preference

3. **Check loading performance**
   - Ensure images load quickly
   - Verify no layout shift occurs

4. **Verify accessibility**
   - Screen reader compatibility
   - Color contrast ratios
   - Keyboard navigation

## Common Issues and Solutions

### Issue: Logo appears blurry
**Solution**: Ensure you're providing high-resolution images (2x or 3x for retina displays)

### Issue: Logo doesn't fit container
**Solution**: Adjust width/height props or use `object-fit` CSS properties

### Issue: Logo not loading
**Solution**: Check file paths, ensure images are in public folder, verify file permissions

### Issue: Layout shift when logo loads
**Solution**: Always specify width and height dimensions

## Summary

The Hypha DAO application currently uses:
1. **Main homepage logo**: External URL to docs.hypha.app
2. **Navigation icon**: CSS gradient with "H" letter
3. **Utility references**: Centralized in image-utils.ts but not actively used

To modify logos, you can either replace the external URLs or add local images to the public folder and update the respective components. The recommended approach is to use local images for better performance and reliability.