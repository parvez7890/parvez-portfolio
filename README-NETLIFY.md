# Parvez — Developer Portfolio (Netlify-ready source)

## Deploy
1. Upload this project to a GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project** and connect that repository.
3. Netlify should detect the settings in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. The first build installs the dependencies from `package.json`.

## Google Search Console
The HTML `<meta name="google-site-verification">` tag is now in the initial `index.html` response (not inserted only after React runs). After deployment:
1. In Search Console, use the **HTML tag** verification method.
2. Confirm the token shown by Search Console matches the meta tag in `index.html`.
3. Open the deployed site's page source and verify the meta tag is present.
4. Complete verification in Search Console.

The old MagicPath canonical URL was removed because the final Netlify domain is not yet known. Once the final domain is chosen, set a canonical URL to that exact domain if desired.

## Notes
- This is the exported React/Vite source project, not a prebuilt `dist` folder.
- Netlify must build it; do not use Netlify's manual drag-and-drop deploy on this source ZIP.
- ServiceHub remains a separate demo at https://tubular-boba-edc5dd.netlify.app/.
