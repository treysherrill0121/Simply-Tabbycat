# Simply Tabbycat

Single-site, static, free-hosting deployment bundle. Contains the existing quiz website and its mascot. The handwritten-photo-to-quiz feature is experimental and **has not passed real handwriting recognition tests**. It should not be advertised as working. No backend OCR is deployed by this bundle.

## Publishing

Create a new GitHub repository called `simply-tabbycat`, upload `index.html`, `tabbycat-mascot.webp`, and `render.yaml` to its root, and deploy it as a Render Static Site (free). The included `render.yaml` is a static site blueprint, not a Python OCR server. Do not create a second Simply Tabbycat service.

The browser photo feature may attempt client-side OCR and fail. Text/manual quizzes remain available.
