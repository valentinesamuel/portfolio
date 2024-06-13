+++
title = 'Turn your NextJS 14 app into a Progressive Web App(PWA)'
date = 2024-06-14
draft = false
categories = ['javscript', 'typescript', 'NextJS 14']
keywords = [
  'Valentine Samuel',
   'Javascript',
   'Typescript',
   'NextJS 14',
   'PWA',
    'Progressive Web App',
]
+++

Progressive Web Apps (PWAs) combine the best of web and mobile apps, offering users a seamless, fast, and engaging experience.

![thumbnail](./thumb-nail.jpg)

# Turning Your Next.js 14 App into a Progressive Web App (PWA)

Progressive Web Apps (PWAs) combine the best of web and mobile apps, offering users a seamless, fast, and engaging experience. They leverage modern web capabilities to deliver app-like experiences directly in the browser. In this guide, we’ll walk you through the steps to transform your Next.js 14 app into a PWA.

## Why PWA?

PWAs offer several advantages:

- **Offline Capability:** Users can access the app even without an internet connection.
- **Improved Performance:** Caching resources locally results in faster load times.
- **Enhanced Engagement:** Features like push notifications and home screen installation boost user interaction.
- **Cross-Platform:** Works on any device with a web browser.

> When i was implementing this is my own application(hospital management system), I did not provide for offline capabilities because the application is very dynamic.

## Prerequisites

- Node.js
- Basic understanding of Next.js
- An existing Next.js 14 project

## Steps to Turn Your Next.js 14 App into a PWA

### 1. Install Dependencies

First, you need to install the required dependencies. We will use `next-pwa`, a plugin that simplifies the process of configuring a PWA in Next.js.

```bash
$ npm install @ducanh2912/next-pwa
```

### 2. Configure `@ducanh2912/next-pwa`

Create a `next.config.mjs` file in the root of your project if it doesn't exist already. Add the following configuration:

```js
// @ts-check
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

const nextConfigFunction = async () => {
  const withPWA = (await import("@ducanh2912/next-pwa")).default({
    dest: "public",
  });
  return withPWA(nextConfig);
};

export default nextConfigFunction;
```

> The `@ducanh2912/next-pwa` plugin will automatically generate a service worker for you

### 4. Add a Manifest File

Create a `manifest.json` file in the `public` directory. You can also use a manifest file creator like the https://www.simicart.com/manifest-generator.html. After you download the zip file from SimiCart, extract it into the public folder:

```json
{
  "theme_color": "#f7c99c",
  "background_color": "#f69435",
  "display": "standalone",
  "scope": "/",
  "start_url": "/",
  "name": "Next PWA Test",
  "short_name": "NextPWA",
  "description": "Cool nextjs pwa app",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### 5. Update Layout.tsx

Add the manifest property in the metadata object

```jsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  manifest: "/manifest.json", // this should be the path to the manifest file in the public directory
};
```

### 7. Test Your PWA

Run your Next.js application in production mode to test the PWA functionalities:

```bash
$ npm run build
$ npm start
```

### 8. Verify PWA Installation

To ensure your app is correctly configured as a PWA, use Chrome’s Lighthouse tool:

- Open your app in Chrome.
- Go to DevTools (F12) > Lighthouse.
- Run the audit and ensure your app passes the PWA criteria.

### Conclusion

By following these steps, you've successfully transformed your Next.js 14 app into a Progressive Web App. PWAs offer a powerful way to enhance user experience, increase engagement, and ensure your app is accessible even offline. Happy coding!
