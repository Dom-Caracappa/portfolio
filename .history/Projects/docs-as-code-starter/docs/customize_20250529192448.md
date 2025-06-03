# Customizing the Site

You can control almost every aspect of this site by editing the `mkdocs.yml` configuration file.

---

## ✏️ Site Metadata

Change the site name, description, and base URL:

```yaml
site_name: Docs-as-Code Starter Kit
site_description: A lightweight example of modern documentation workflows
site_url: https://yourdomain.github.io/docs-site/
```

---

## Theme Customization

Control appearance and branding via the `theme:` section:

```yaml
theme:
  name: material
  palette:
    - scheme: default
      primary: deep orange
      accent: black
    - scheme: slate
      primary: green
      accent: lime
  font:
    text: Inter
    code: Fira Code
```

- Change colors using any [Material color name](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/)
- Set custom fonts
- Add a logo or favicon:

```yaml
  logo: assets/logo.png
  favicon: assets/favicon.ico
```

---

## 🧭 Navigation

The site nav is defined in `mkdocs.yml` using the `nav:` key:

```yaml
nav:
  - Home: index.md
  - Getting Started:
      - Installation: install.md
      - Structure: structure.md
```

- Nest sections with indentation
- Each file listed must exist in the `docs/` folder

---

## 💡 Tip: Add a GitHub Repo Link

```yaml
repo_url: https://github.com/yourname/yourproject
repo_name: yourname/yourproject
```

This will show a GitHub icon in the site header.

---

## Enable Plugins

MkDocs supports plugins like `search` or `macros`. Example:

```yaml
plugins:
  - search
```

Additional plugins can be installed and added here.

> See [mkdocs.org/user-guide/configuration](https://www.mkdocs.org/user-guide/configuration/) for all available options.
