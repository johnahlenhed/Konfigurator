# Konfigurator

A 3D product configurator for a modular DJ mixer system — built with React, TypeScript, and React Three Fiber. Users start from a base mixer and can add swappable modules (a second mixer unit or a speaker), each with independent color options.

## Tech stack

- **React + TypeScript + Vite**
- **React Three Fiber** (`@react-three/fiber`, `@react-three/drei`) — rendering the 3D scene
- **Zustand** — configurator selection state
- **Three.js** — underlying 3D engine
- **Vercel** — hosting/deployment

## Getting started

```bash
npm install
npm run dev
```

Open the local dev server URL shown in the terminal. Vite handles HMR out of the box.

```bash
npm run build      # production build (typechecks via tsc -b, then vite build)
npm test           # vitest
```

## Project structure

```
src/
├── scene/                  # 3D scene: model loading, materials, parts, animation
│   ├── Scene.tsx            # Canvas setup; owns the base model's useGLTF call
│   ├── Model.tsx            # Renders the base mixer, hover/dev logging, plays idle animations
│   ├── materials/           # Per-file material slot configs + color scheme data
│   ├── parts/                # Socket lookup, addon attach/detach, PartSwap
│   ├── animations/           # Animation group definitions
│   └── textures/              # KTX2/Basis texture loader setup
├── store/                   # Zustand store + static config data (colors, addon options, pricing)
├── components/configurator/ # UI: color pickers, addon selectors, controls panel
├── types/                   # Shared TypeScript types (ConfiguratorSelection, etc.)
└── utils/                   # Scene traversal helpers
```

## Key concepts

### Sockets

The base model (`Mixer_final.glb`) has two named Empty nodes marking where addon modules attach: `emptyUp` (top-right slot) and `emptyDown` (bottom-right slot) — see `src/scene/parts/socketNames.ts` for the mapping and a note on why they don't follow the originally-planned `socketAddon1`/`socketAddon2` naming.

`getSocket()` reads a socket's real-time world transform; `attachSocket()` positions an addon's cloned scene graph to match it. Each addon file also has its own **anchor node** (e.g. `baseOption2`, `baseSpeaker`) — `getAnchorOffset()` re-centers the addon's geometry relative to that anchor before attaching, since addon files aren't authored with their attachment point at local origin.

### Material slots & color schemes

Colors are applied at runtime, never baked into a GLB. Each model file (base + each addon type) has its own material slot config (e.g. `materialConfig.ts` for the base, `speakerMaterialSlots.ts` for the speaker addon) mapping a logical name (`gain`, `panel`) to the actual material name in that file. `applyColorScheme()` is generic and works against any of these configs — see `colorScheme.ts` for the shared `ColorScheme<T>` type.

**Important:** glTF materials are always scoped per file — there's no risk of naming collisions between the base product and an addon file, or between two different addon files. The only duplication risk that matters is *within* a single file (the same intended color represented by multiple separate material objects) — this was a real bug early on and is why every material config traces back to one confirmed, unique material name per file.

### Addon selection flow

`PartSwap` reads the current addon selection (`type` + `addonModel`) for its socket from the Zustand store, resolves it to a GLB path and anchor node via a small lookup, and mounts/unmounts an `AddonPart` accordingly. Nothing renders until both a type and a model are selected for that slot.

## Branch workflow

- `main` and `dev` require a pull request and at least one approving review before merging — direct pushes are blocked
- Feature branches are unrestricted
- `main` is the Vercel production branch; `dev` gets its own persistent preview deployment

## A note on GLB deliveries

3D assets come from the CG team as GLB exports, usually paired with a `_scenbeskrivning.md` documentation file. Always verify a new delivery's actual structure (node names, material assignments, animation clip names) against its documentation before building against it — mismatches between the two have happened more than once.
