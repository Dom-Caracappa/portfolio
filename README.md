---

### 🧾 pnpm Workflow Cheat Sheet

This project uses [`pnpm`](https://pnpm.io/) as its package manager for faster, safer dependency handling. Here's the workflow we follow for both development and deployment:

---

#### 🌱 Local Development

```bash
pnpm install
```
Install everything listed in `package.json`, updating `pnpm-lock.yaml` as needed.

```bash
pnpm add package-name
```
Add a runtime dependency.

```bash
pnpm add -D package-name
```
Add a dev-only dependency (e.g. Tailwind, Astro plugins).

```bash
pnpm remove package-name
```
Remove a package cleanly.

```bash
pnpm dev
```
Start the local dev server.

```bash
pnpm build
```
Generate the production `dist/` folder.

---

#### 🧊 Lockfile Safety

```bash
pnpm install --frozen-lockfile
```
Use this to install **only** what’s already defined in `pnpm-lock.yaml`.  
⚠️ Prevents accidental upgrades or surprises.

> 💡 Use this in **deployments**, **CI/CD**, or when cloning the repo to a new machine.

---

#### 🚀 Deployment Commands

In production (e.g. Netlify, DigitalOcean, CI tools), use:

```bash
pnpm install --frozen-lockfile && pnpm run build
```

This ensures:
- All dependencies are exact
- Lockfile is respected
- No version drift between dev and prod

---

#### 🧼 Cleanup & Maintenance

```bash
pnpm install --force
```
Clean reinstall from scratch — good for weird local issues.

```bash
pnpm update package-name
```
Update a specific package (within its version range).

---

#### 📁 Important Files

| File              | Purpose                            |
|-------------------|------------------------------------|
| `package.json`    | Declares what the project needs    |
| `pnpm-lock.yaml`  | Freezes the exact versions installed |
| `.env`            | Environment variables (e.g. `NODE_ENV`) |
| `node_modules/`   | Actual installed packages (symlinked) |

---

> 👽 *"This project has been hardened against Tailwind v4 breakage and other dependency chaos. You’re safe here."*

---
