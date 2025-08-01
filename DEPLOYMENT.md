# 🚀 Vercel Deployment Guide

This guide will help you deploy Adithya's portfolio to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free)
- Node.js 18+ installed locally

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Adithyashettyyyy/portfolio)

## Manual Deployment Steps

### 1. Push to GitHub

```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial portfolio commit"

# Add your GitHub repository
git remote add origin https://github.com/Adithyashettyyyy/portfolio.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

1. **Login to Vercel**: Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. **Import Project**: Click "New Project" and import your GitHub repository
3. **Configure Build Settings**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist/spa`
   - Install Command: `npm install`

### 3. Environment Variables

In your Vercel project settings, add these environment variables:

```
VITE_EMAILJS_SERVICE_ID=service_d42fda3
VITE_EMAILJS_TEMPLATE_ID=template_w8p0s6c
VITE_EMAILJS_PUBLIC_KEY=VkNzR_DSWVnYfyYhW
```

### 4. Custom Domain (Optional)

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Build Optimization

The portfolio is optimized for Vercel with:

- ✅ **Static Site Generation**: Fast loading times
- ✅ **Asset Optimization**: Images and fonts are optimized
- ✅ **Edge Network**: Global CDN deployment
- ✅ **Automatic HTTPS**: SSL certificates included
- ✅ **Branch Previews**: Every commit gets a preview URL

## Features Enabled

- 📧 **Contact Form**: EmailJS integration working
- 📱 **Responsive Design**: Works on all devices
- 🎨 **Animations**: Smooth scroll animations
- 🔍 **SEO Optimized**: Meta tags and structured data
- ⚡ **Fast Loading**: Optimized for Core Web Vitals

## Support

If you encounter any issues:

1. Check the Vercel build logs
2. Ensure all environment variables are set
3. Verify EmailJS configuration
4. Contact support if needed

## Live URLs

- **Production**: `https://your-portfolio.vercel.app`
- **GitHub**: `https://github.com/Adithyashettyyyy/portfolio`

---

**Built with ❤️ by Adithya Shetty B**
