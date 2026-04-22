# Coolify Deployment Instructions - Mobile Fix

## Problem Identified
The mobile JavaScript issues were NOT code-related. The issue is with Coolify's static site deployment using Nixpacks, which doesn't properly handle Nuxt 3 SPA routing and mobile headers.

## Solution: Switch to Docker Deployment

### 1. In Coolify Dashboard:
1. Go to your application settings
2. Change deployment method from "Static Site" to "Docker"
3. Select "Dockerfile" as the build method
4. Set the base directory to `/` (root)
5. Port should be `80` (from nginx)

### 2. Files Added:
- `Dockerfile` - Custom build with proper nginx setup
- `nginx.conf` - Mobile-optimized nginx configuration
- `.dockerignore` - Optimize build context

### 3. Key nginx.conf Features:
- **SPA Routing**: `try_files $uri $uri/ /index.html;` - CRITICAL for JS to work
- **Mobile Headers**: Proper cache-control and security headers
- **Gzip Compression**: Better mobile performance
- **Language Routes**: Handles `/en/` and `/de/` prefixes
- **Static Caching**: Optimized for mobile bandwidth

### 4. Deployment Steps:
1. Commit and push these changes to GitHub
2. In Coolify, trigger a new deployment
3. The build will use Docker instead of static build pack
4. Test on mobile device immediately after deployment

### 5. Verification Checklist:
- [ ] Typewriter animation works on mobile
- [ ] Dark mode toggle responds to touch
- [ ] Floating nav highlights correctly on scroll
- [ ] Project drawer opens/closes properly
- [ ] All buttons respond to touch events

### 6. Why This Fixes Mobile Issues:
1. **SPA Routing**: Coolify's static nginx config doesn't handle client-side routing
2. **Mobile Headers**: Missing cache-control breaks hydration on mobile
3. **JavaScript Loading**: Static build doesn't serve JS properly for mobile browsers
4. **Touch Events**: Mobile browsers need specific headers for proper JS execution

### 7. If Issues Persist:
Check Coolify logs for nginx errors and verify the nginx.conf is being used correctly.

## Files Changed:
- `Dockerfile` (new)
- `nginx.conf` (new)  
- `.dockerignore` (new)
- Code fixes for touch events in all components
