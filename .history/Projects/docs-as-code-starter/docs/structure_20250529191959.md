# Project Structure

This project follows a lightweight and modular structure to keep documentation organized, scalable, and version-controlled.

---

## Top-Level Layout

```plaintext
docs-as-code-starter/
├── docs/                  # Markdown content for all documentation pages
├── .github/workflows/     # CI/CD GitHub Actions configuration
├── mkdocs.yml             # Main site config (nav, theme, extensions)
└── requirements.txt       # Python dependencies for MkDocs and plugins
```

---

## Key Files

- **`mkdocs.yml`**  
  Main configuration file. Defines navigation, theme, plugins, and Markdown extensions.

- **`requirements.txt`**  
  Python packages needed for local development and deployment.

- **`.github/workflows/deploy.yml`**  
  Automates publishing to GitHub Pages on every push to `main`.

---

## `docs/` Directory

This is where your documentation lives. Each `.md` file becomes a page in the site.

- `index.md` – The homepage (landing page with overview)
- `install.md` – How to install and run locally
- `structure.md` – This file: explains how the project is organized
- `customize.md` – How to modify the theme or structure
- `ci-cd.md`, `deploy.md` – Pages explaining automation and deployment

> 💡 You can create subfolders to organize large sets of topics or reference docs.

---

## Local Development

The following command launches a live-reloading preview of the site:

```bash
mkdocs serve
```

Any changes to `.md` files or the config will update automatically at `http://127.0.0.1:8000`.
