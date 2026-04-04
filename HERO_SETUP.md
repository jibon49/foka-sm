# Hero Section Component - Setup Guide

## Overview
The Hero section is a pixel-perfect, modern creative agency hero with:
- Full-screen video background with gradient overlay
- Bold typography with layered text effects
- Floating glass-morphism card with call-to-action
- GSAP-powered entrance animations
- ScrollTrigger parallax effect
- Fully responsive design

## Component Location
`src/components/Hero.jsx`

## Setup Instructions

### 1. Add Your Hero Video
To use the hero video background:

1. Create a video file in MP4 format (recommended: 1920x1080, 10-30 seconds, looped)
2. Place it in the public folder:
   ```
   public/assets/hero-video.mp4
   ```

3. The video will automatically fade in on component load

**If no video is provided:** The component will use a dark gradient fallback

### 2. Customize the Component

#### Change the Main Heading
In `Hero.jsx`, find:
```jsx
<h1
  ref={headingRef}
  className="text-7xl sm:text-8xl lg:text-9xl font-black text-white leading-tight mb-8"
>
  Floka
</h1>
```

#### Change the Card Content
Find the card section and update:
```jsx
<p className="text-xs font-semibold text-gray-300 uppercase tracking-widest">
  HEAD OF IDEA  {/* Change this */}
</p>
<p className="text-sm font-semibold text-white">Almond D. Nelsi</p>  {/* Change this */}
```

#### Change the Avatar Image
Replace the image URL:
```jsx
<img
  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  alt="Avatar"
  className="w-full h-full object-cover"
/>
```

#### Change the Bottom Text
Find and update:
```jsx
<p className="text-sm text-gray-400 leading-relaxed">
  No cookie-cutter websites. No fluff. Just real tools and smart strategies for brands that dare to stand out.
</p>
```

### 3. Animation Customization

#### Adjust Timing
In the `useEffect` hook, modify the duration values:
```jsx
tl.fromTo(
  videoRef.current,
  { opacity: 0 },
  { opacity: 1, duration: 1.5, ease: 'power3.out' }, // Change duration here
  0
);
```

#### Change Easing
Replace `ease: 'power3.out'` with any GSAP easing:
- `'power1.out'` - Slow
- `'power2.out'` - Medium
- `'power3.out'` - Default (Fast)
- `'power4.out'` - Very Fast
- `'expo.out'` - Smooth spring
- `'elastic.out'` - Bouncy

#### Disable Animations
To disable GSAP animations temporarily, comment out the timeline:
```jsx
// const tl = gsap.timeline();
// ... rest of animation code
```

### 4. Scroll Animation Customization

#### Adjust Parallax Speed
Modify the `scrub` value (0-1):
```jsx
scrub: 1, // 0 = instant, 1 = smooth
```

#### Adjust Opacity on Scroll
Change the opacity value:
```jsx
opacity: 0.3, // Change from 0.3 to desired value
```

### 5. Responsive Adjustments

The component is fully responsive using Tailwind breakpoints:
- `sm:` - 640px
- `lg:` - 1024px

The floating card and scroll indicator automatically hide on mobile/tablet (`hidden lg:flex`)

## Features at a Glance

✅ Full-screen responsive hero  
✅ Video background with fallback gradient  
✅ Dark gradient overlay  
✅ Layered typography effect  
✅ Glass-morphism floating card  
✅ GSAP entrance animations  
✅ ScrollTrigger parallax  
✅ Avatar with custom image  
✅ CTA button with hover effects  
✅ Scroll indicator  
✅ Mobile optimized  

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## Performance Tips

1. **Video Compression**: Use a quality video compressor to reduce file size
2. **Format**: Use H.264 codec for best compatibility
3. **Duration**: Keep video to 15-30 seconds maximum
4. **Resolution**: 1920x1080 is ideal for desktop
5. **Mobile**: Consider serving a shorter/smaller video to mobile users

## Troubleshooting

### Video won't load
- Check the file path: should be `/public/assets/hero-video.mp4`
- Ensure video format is MP4
- Check browser console for errors
- The component will use the fallback gradient if video fails to load

### Animations not playing
- Check browser console for GSAP licensing warnings
- Ensure GSAP and gsap/ScrollTrigger are properly imported
- Verify useEffect is running (check React DevTools)

### Card doesn't show on mobile
- This is intentional - the card is hidden on screens smaller than `lg` (1024px)
- To show on mobile, change `hidden lg:flex` to `flex`

## Integration with Main Layout

The Hero component is already integrated into the Home page. It appears above the rest of the content and has its own scroll animations that work independently of the navbar.

## Customization Examples

### Example 1: Change Colors
```jsx
{/* Change overlay color */}
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/70 to-blue-600/20 z-10" />
```

### Example 2: Remove Card
Simply comment out the card section:
```jsx
{/* <div ref={cardRef} ... > ... </div> */}
```

### Example 3: Add Social Links
Add before closing the section:
```jsx
<div className="absolute bottom-8 left-12 flex gap-4 items-center z-20">
  <a href="#" className="text-white hover:text-gray-300">Facebook</a>
  <a href="#" className="text-white hover:text-gray-300">Instagram</a>
</div>
```

## Dependencies

- React
- GSAP (gsap package)
- GSAP ScrollTrigger plugin
- Tailwind CSS

All dependencies are already installed in your project.

---

For more information about GSAP, visit: https://greensock.com/gsap/
For ScrollTrigger docs: https://greensock.com/scrolltrigger/
