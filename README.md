# Creative Home Plan & Design — React Website

Premium React + Vite website created around the supplied Creative Home Plan & Design references.

## Sections

1. Animated architecture hero / landing page
2. Auto-running building/project listing
3. Our Services
4. Our Gallery
5. What We Build + interactive CSS 3D model
6. Client Testimonials slider
7. FAQ
8. Footer / contact CTA

## Company details

- Company: Creative Home Plan & Design
- Email: creativehome202297@gmail.com
- Phone / WhatsApp: +91 96444 54455
- Location: Raimilan, Singrauli, Madhya Pradesh

## Run

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm run preview
```

## WhatsApp

WhatsApp actions are configured in `src/App.jsx` using:

```js
const COMPANY = {
  phone: "919644454455"
};
```

Change the number if the company wants another WhatsApp line.

## Images

The two supplied reference images are included in:

`public/assets/services-reference.jpg`
`public/assets/creative-home-reference.jpg`

The project also uses remote Unsplash demo photography so it can run immediately. Replace those URLs with licensed company project photos before publishing.

## 3D model

The "What We Build" section contains a lightweight CSS 3D architectural model. It requires no external 3D library, so the site remains fast and easy to deploy. Clicking project types changes the model angle.

If a real `.glb`/`.gltf` model is later supplied, this section can be upgraded to a Three.js/WebGL viewer.

## Vercel

Import the GitHub repository into Vercel.

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
