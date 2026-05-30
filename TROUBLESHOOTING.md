# Troubleshooting

Common setup issues and how to fix them.

---

## `npm install` fails with peer dependency errors

**Symptom:**
```
npm ERR! ERESOLVE could not resolve
```

**Cause:** npm strict peer dependency resolution with React 19.

**Fix:**
```bash
npm install --legacy-peer-deps
```

Or use the included lockfile:
```bash
npm ci
```

---

## `npm run dev` fails with "Cannot find module"

**Symptom:**
```
Error: Cannot find module '@/lib/demo/campaigns'
```

**Cause:** TypeScript path aliases not resolved.

**Fix:**
1. Check that `tsconfig.json` has `"baseUrl": "."` and `"paths": { "@/*": ["src/*"] }`.
2. Restart the dev server.

---

## Charts not rendering

**Symptom:** Empty chart containers on Overview and Replies pages.

**Cause:** Recharts sometimes fails to calculate container size.

**Fix:**
1. Hard-refresh the browser (`Cmd+Shift+R`).
2. If using Safari, try Chrome or Firefox.
3. Check Console for ResizeObserver warnings (harmless).

---

## `npm test` fails

**Symptom:**
```
Cannot find module '@/lib/agent/orchestrator'
```

**Cause:** Jest path aliases not configured.

**Fix:** Ensure `jest.config.js` has:
```js
moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/src/$1'
}
```

---

## Docker build fails

**Symptom:**
```
npm ERR! code EUSAGE
```

**Cause:** `package-lock.json` out of sync.

**Fix:**
```bash
npm install
docker build -t mcp-outreach-engine .
```

---

## Still stuck?

Open an issue with:
1. Your Node version (`node -v`)
2. Your OS
3. The full error message (copy-paste, not screenshot)
4. What you've already tried from this guide
