# Abdul Ghani Sons

Marketing site for [abdulghanisons.com](https://www.abdulghanisons.com): industrial wiping rags and cotton rags from Karachi.

Content was rebuilt from the archived company site (Wayback Machine) after hosting expired: product codes AGSF / AGSU / AGSUC, mill address, and contact lines.

## Local

```bash
npm install
npm run dev
```

## Deploy to the existing domain

1. `npm run build`
2. Upload the contents of `dist/` to the domain document root (public_html).
3. Keep `.htaccess` so React routes (`/products`, `/about`, `/contact`) resolve on Apache/cPanel.

Inquiry form opens email to `info@abdulghanisons.com`.
