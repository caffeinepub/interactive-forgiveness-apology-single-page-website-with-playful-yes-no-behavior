# Deployment Guide

This guide explains how to build and deploy your apology single-page application to the Internet Computer with the domain "Sorrykiki".

## Prerequisites

- DFX CLI installed and configured
- Node.js and pnpm installed
- Internet Computer wallet with cycles

## Building for Production

1. **Generate backend bindings** (if not already done):
   ```bash
   dfx generate backend
   ```

2. **Build the frontend**:
   ```bash
   cd frontend
   pnpm run build
   ```

   This creates an optimized production build in the `frontend/dist` directory.

## Deploying to Internet Computer

### Standard Deployment

1. **Deploy the backend canister** (if not already deployed):
   ```bash
   dfx deploy backend
   ```

2. **Deploy the frontend canister**:
   ```bash
   dfx deploy frontend
   ```

3. **Get your public URL**:
   After deployment completes, DFX will output the canister URLs. Look for:
   ```
   Frontend canister via browser:
     frontend: https://<canister-id>.ic0.app/
   ```

   This is your **shareable public URL** that anyone can access.

### Publishing with Custom Domain "Sorrykiki"

To publish your apology site with the custom domain slug **"Sorrykiki"**, follow these steps:

#### Domain Validation Rules

Your domain must meet these requirements:
- **Length**: 5 to 50 characters
- **Characters**: Only letters (a-z, A-Z), numbers (0-9), and hyphens (-)
- **No spaces, parentheses, brackets, commas, or special characters**

The domain **"Sorrykiki"** is valid and meets all requirements.

#### Normalization

Some platforms require lowercase domain slugs. If needed, normalize to:
- `sorrykiki` (all lowercase)

#### Publishing Steps

1. **Build the production bundle** (as described above)

2. **Deploy with domain slug**:
   
   If using the caffeine.ai platform or ICP deployment tools that support custom domains:
   ```bash
   # Example command structure (adjust based on your deployment tool)
   dfx deploy frontend --domain sorrykiki
   ```

   Or if using a deployment configuration file, set:
   ```json
   {
     "domain": "sorrykiki"
   }
   ```

3. **Obtain the public URL**:
   
   After successful deployment, you should receive a URL like:
   - `https://sorrykiki.ic0.app/` (if using IC subdomain)
   - Or a custom domain URL provided by your hosting platform

4. **Share the URL**:
   
   The public URL is now ready to share with Kiki or anyone else!

## Alternative: Export and Deploy Elsewhere

If you want to deploy the static frontend to a different hosting service:

1. **Build the frontend** as described above

2. **The production files** are in `frontend/dist/`

3. **Deploy the dist folder** to any static hosting service:
   - Vercel (with custom domain support)
   - Netlify (with custom domain support)
   - GitHub Pages
   - AWS S3 + CloudFront
   - Any CDN or web server

4. **Configure custom domain** in your hosting provider's settings to use "sorrykiki" or "sorrykiki.yourdomain.com"

## Verification Checklist

After deployment with domain "Sorrykiki", visit your public URL and verify:

### Functionality Tests
- ✅ The public URL loads successfully (no 404 or blank screen)
- ✅ The initial screen shows "Kiki, will you forgive me?" with Yes/No buttons
- ✅ The "No" button evades clicks and moves to random positions
- ✅ Clicking "Yes" shows the forgiven screen with hearts burst animation
- ✅ The apology text displays correctly and is readable
- ✅ The begging cat animation appears below the text without overlapping
- ✅ Falling sad emojis animate continuously on the forgiven screen
- ✅ All interactive elements are clickable and not blocked by overlays

### Cross-Device Tests
- ✅ Layout is responsive on mobile devices
- ✅ Layout is responsive on tablet devices
- ✅ Layout is responsive on desktop browsers
- ✅ Animations play smoothly across all devices

### Performance & Quality
- ✅ No console errors in production build
- ✅ All assets (images, fonts) load correctly
- ✅ Page loads within 3 seconds on standard connection
- ✅ Domain name appears correctly in browser address bar

## Troubleshooting

**Domain validation error**: Ensure your domain contains only letters, numbers, and hyphens, and is between 5-50 characters. "Sorrykiki" meets all requirements.

**Build fails**: Ensure all dependencies are installed with `pnpm install`

**Deployment fails**: Check you have sufficient cycles in your wallet

**Blank screen**: Check browser console for errors; ensure the canister ID is correct

**Assets not loading**: Verify the asset canister is deployed and accessible

**Domain not resolving**: Wait a few minutes for DNS propagation; clear browser cache

## Production Checklist

- [ ] Frontend builds without errors (`pnpm run build` succeeds)
- [ ] Domain "Sorrykiki" passes validation rules
- [ ] Deployment completes successfully with chosen domain
- [ ] Public URL is accessible from any browser
- [ ] All interactive elements work correctly (Yes/No interaction)
- [ ] Animations play smoothly (hearts burst, falling emojis, begging cat)
- [ ] Layout is responsive on mobile and desktop
- [ ] No console errors in production build
- [ ] URL can be shared and accessed by others

---

**Your apology site is now live at your custom domain!** 💝

For more information, visit the [Internet Computer documentation](https://internetcomputer.org/docs).
