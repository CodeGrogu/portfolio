---
name: web3d-engineering
description: >-
  Architect, optimize, and debug Web3D, WebGPU, WebGL, Three.js, React Three Fiber (R3F), and Drei features
  for the CodeGrogu Portfolio. Use whenever implementing 3D scenes, shaders, canvas mount points, asset pipelines
  (GLB/Draco/Meshopt), device-aware quality tiers, reduced-motion fallbacks, or 3D telemetry and memory profiling.
---

# Web3D Engineering & Graphics Architecture Skill

This skill defines the technical standards, performance boundaries, and engineering protocols for the **Web3D Engine** in the CodeGrogu Portfolio, verified against current Three.js (WebGPU/TSL) and React Three Fiber documentation.

---

## Core Graphics Stack & Conventions

| Technology | Role | Verified Standards & Import Paths |
| :--- | :--- | :--- |
| **Three.js** | Core 3D Engine | WebGPU-first via `three/webgpu` (`WebGPURenderer`) with seamless WebGL fallback |
| **React Three Fiber (R3F)** | React Renderer | Declarative canvas mounting via `@react-three/fiber` |
| **Drei** | Shader & Helper Primitives | `@react-three/drei` (`useGLTF`, `Environment`, `Float`, `Center`) |
| **Asset Pipeline** | 3D Assets & Meshes | Blender $\rightarrow$ glTF/GLB with Draco geometry compression & Meshopt texture optimization |
| **Animation** | Camera & Scene Motion | GSAP + ScrollTrigger synchronized with R3F render loop (`useFrame`) |
| **Motion Accessibility** | A11y & Comfort | Respects `prefers-reduced-motion` with static camera / 2D fallback |

---

## Verified Implementation Patterns

### 1. WebGPURenderer with WebGL Fallback (`three/webgpu`)

Three.js modern `WebGPURenderer` targets WebGPU by default and automatically falls back to a WebGL 2 backend if WebGPU is unsupported.

```typescript
// Verified Three.js WebGPU Initialization
import * as THREE from 'three/webgpu';

export async function createPortfolioRenderer(canvas: HTMLCanvasElement): Promise<THREE.WebGPURenderer> {
  const renderer = new THREE.WebGPURenderer({
    canvas,
    antialias: true,
    alpha: true,
    forceWebGL: false, // Automatically targets WebGPU if available; falls back to WebGL 2
    outputBufferType: THREE.HalfFloatType,
  });

  // WebGPURenderer requires asynchronous initialization
  await renderer.init();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  return renderer;
}
```

### 2. R3F Canvas Integration Strategy

When mounting in Next.js / React 19 App Router:

```tsx
'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three/webgpu';

export function Web3DSceneCanvas({ children }: { children: React.ReactNode }) {
  return (
    <Canvas
      gl={(canvas) => {
        const renderer = new THREE.WebGPURenderer({
          canvas,
          antialias: true,
          alpha: true,
        });
        renderer.init();
        return renderer as unknown as THREE.WebGLRenderer;
      }}
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        {children}
      </Suspense>
    </Canvas>
  );
}
```

### 3. Asset Pipeline & Compression Standards (`CV-48`)

- **Payload Budget**: Keep initial hero GLB payload **$< 1.5\text{ MB}$**.
- **Geometry Compression**: Draco (`gltf-pipeline -i model.glb -o model.draco.glb -d`).
- **Texture Compression**: Meshopt / KTX2 texture transcoding via `@react-three/drei` (`useGLTF.preload('/models/grogu.glb', true)`).
- **Progressive Loading (`CV-66`)**: Stream lightweight low-poly proxy meshes or wireframe skeletons before full PBR textures resolve.

### 4. Device-Aware Quality Profiles (`CV-49`)

Dynamically select rendering profiles based on hardware concurrency, device memory, and frame timing:

| Quality Tier | Target Devices | Shadow Maps | Pixel Ratio | Post-Processing | MSAA |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **High** | Desktop with Discrete GPU | PCFSoft / Cascaded | `Math.min(window.devicePixelRatio, 2)` | Bloom, Vignette, Depth of Field | $4\times$ |
| **Medium** | Modern Mobile / Integrated GPU | Basic ShadowMap | `1.0` | Subtle Vignette only | $2\times$ |
| **Low** | Low-end Mobile / Battery Saver | Disabled | `1.0` / Dynamic Resolution | Disabled | None |

### 5. Memory Hygiene & Resource Disposal (`CV-71`)

- **Explicit Disposal**: Always traverse scenes and call `.dispose()` on geometries, materials, and textures when unmounting canvas components to prevent VRAM leaks.
- **Instancing**: Use `InstancedMesh` for repeated objects or particles to maintain $< 50$ draw calls.
- **Texture Recycling**: Share textures across materials where possible.

### 6. Reduced-Motion & Accessibility (`CV-65`, `CV-88`)

- Check `(prefers-reduced-motion: reduce)`.
- When active, freeze continuous rotation and camera orbit transitions, replacing them with subtle, static framing or smooth step transitions.

---

## Context7 API Lookup

When implementing Three.js / R3F features, query documentation via Context7:

- Three.js: `/mrdoob/three.js`
- React Three Fiber: `/pmndrs/react-three-fiber`
- Drei: `/pmndrs/drei`
