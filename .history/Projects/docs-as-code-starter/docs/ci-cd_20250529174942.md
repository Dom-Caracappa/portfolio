# CI/CD with GitHub Actions

This project includes a `.github/workflows/deploy.yml` file that:

- Runs on every push to `main`
- Installs Python + MkDocs
- Builds the docs
- Publishes to `gh-pages` using `mkdocs gh-deploy`

