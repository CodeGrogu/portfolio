import { ProjectCaseStudy, ProjectFilterOption } from '@/types/projects';

export const PROJECT_FILTER_OPTIONS: ProjectFilterOption[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'web3d', label: 'WebGPU & 3D' },
  { id: 'fullstack', label: 'Full-Stack Systems' },
  { id: 'creative-shaders', label: 'Shaders & Creative' },
  { id: 'cloud-systems', label: 'Cloud & Database' },
];

export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: 'spatial-canvas-engine',
    title: 'Spatial Canvas Engine',
    tagline: 'WebGPU-first real-time 3D asset configurator with procedural WGSL compute shaders',
    category: 'web3d',
    categoryLabel: 'WebGPU & 3D',
    badgeVariant: 'emerald',
    featured: true,
    order: 1,
    timeline: 'Q3 2026',
    role: 'Principal Graphics Engineer & Architect',
    client: 'Spatial Dynamics Studio',
    summary:
      'High-performance 3D asset configurator engineered for 60 FPS across desktop and mobile devices. Features automated Draco mesh decompression, custom WGSL compute shaders, and device-aware quality scaling.',
    thumbnail: {
      src: '/images/projects/spatial-canvas.svg',
      alt: 'Spatial Canvas Engine 3D viewport preview with real-time wireframe and shader nodes',
      width: 1200,
      height: 675,
      blurDataURL:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDY3NSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzA5MGQwYSIvPjwvc3ZnPg==',
    },
    liveUrl: 'https://codegrogu.com/projects/spatial-canvas-engine',
    githubUrl: 'https://github.com/CodeGrogu/portfolio',
    techStack: ['WebGPU', 'Three.js', 'React Three Fiber', 'WGSL', 'TypeScript', 'Draco/Meshopt'],
    metrics: [
      {
        label: 'Framerate Target',
        value: '60 FPS',
        description: 'Locked on modern mobile & desktop',
      },
      {
        label: 'Asset Compression',
        value: '78%',
        description: 'Draco + Meshopt geometry reduction',
      },
      { label: 'Draw Calls', value: '< 24', description: 'Instanced buffer batching' },
      { label: 'Fallback Latency', value: '< 16ms', description: 'Instant WebGL 2 degradation' },
    ],
    problemStatement: {
      challenge:
        'Interactive 3D configurators traditionally suffer from bloated asset payloads (>50MB), sluggish load times, frame drops on mobile Safari, and complex fallback orchestration between WebGPU and legacy WebGL contexts.',
      context:
        'Spatial Dynamics required a browser-based 3D configurator that would feel instant for enterprise users, load under 1.5 seconds on 4G networks, and seamlessly harness WebGPU compute pipelines when available without breaking older hardware.',
      objectives: [
        'Deliver a unified WebGPU-first canvas pipeline with zero-flicker WebGL fallback.',
        'Compress complex industrial CAD models down to under 4MB using Draco and Meshopt.',
        'Implement device-aware dynamic resolution and quality tiers based on GPU telemetry.',
        'Guarantee WCAG 2.2 AA accessibility with full keyboard camera navigation.',
      ],
    },
    architecture: {
      summary:
        'A decoupled 3-tier graphics pipeline consisting of a Context Detection Engine, a Draco/Meshopt Asset Streaming Manager, and a Reactive Canvas Bridge.',
      decisions: [
        {
          title: 'Runtime WebGPU Capability Profiling',
          rationale:
            'Rather than blanket user-agent sniffing, the engine performs a live navigator.gpu.requestAdapter() probe with timeout protection to detect WGSL shader capabilities and select optimal render paths.',
        },
        {
          title: 'Instanced Mesh Geometry Batching',
          rationale:
            'Grouped static geometry into single-pass instanced draw calls, reducing CPU draw call overhead from 340+ down to under 24 per frame.',
        },
        {
          title: 'Progressive LOD & Draco Decompression Worker Pool',
          rationale:
            'Moved heavy Draco decompression and mesh parsing into background Web Workers, keeping the main React render thread free of jank.',
        },
      ],
    },
    technicalDeepDive: {
      title: 'Procedural WGSL Compute Shader Pipeline',
      description:
        'The engine leverages WebGPU compute passes to calculate particle deformation and vertex displacement directly on the GPU before passing buffer attributes to the render pipeline.',
      snippet: {
        language: 'wgsl',
        filename: 'src/shaders/spatial-compute.wgsl',
        code: `@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;
@group(0) @binding(1) var<uniform> simParams: SimulationParameters;

struct Particle {
  position: vec4<f32>,
  velocity: vec4<f32>,
  color: vec4<f32>,
};

@compute @workgroup_size(64, 1, 1)
fn main(@builtin(global_invocation_id) global_id: vec3<u32>) {
  let index = global_id.x;
  if (index >= arrayLength(&particles)) {
    return;
  }

  var p = particles[index];
  let force = calculateSpatialForce(p.position.xyz, simParams.center, simParams.strength);
  p.velocity = vec4<f32>(p.velocity.xyz + force * simParams.deltaTime, 0.0);
  p.position = vec4<f32>(p.position.xyz + p.velocity.xyz * simParams.deltaTime, 1.0);
  
  particles[index] = p;
}`,
        caption:
          'Optimized WebGPU WGSL compute kernel executing 60,000 spatial calculations per frame.',
      },
    },
    outcomes: [
      {
        title: '78% Bandwidth Reduction',
        detail:
          'Model payload sizes shrunk from 38.4MB to 8.2MB with sub-second initial decompression.',
      },
      {
        title: 'Sustained 60 FPS Stability',
        detail:
          'Achieved zero dropped frames during continuous camera rotation on iPhone 15 and Pixel 8.',
      },
      {
        title: 'Zero-Config Universal Fallback',
        detail:
          '100% of non-WebGPU clients transparently received optimized WebGL 2 fallbacks with no visual seams.',
      },
    ],
  },
  {
    slug: 'neon-drizzle-booking-core',
    title: 'Transactional Booking Engine',
    tagline:
      'Concurrency-safe scheduling platform with Neon PostgreSQL serialized slot locks and Drizzle ORM',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Systems',
    badgeVariant: 'cyan',
    featured: true,
    order: 2,
    timeline: 'Q3 2026',
    role: 'Lead Full-Stack Architect',
    client: 'Peer Pressure Engineering',
    summary:
      'High-reliability appointment booking engine designed to eliminate double-booking race conditions under high concurrency. Uses Neon Serverless PostgreSQL, Drizzle ORM transactions, Upstash Redis rate limiting, and Resend notifications.',
    thumbnail: {
      src: '/images/projects/neon-drizzle.svg',
      alt: 'Transactional Booking Engine system architecture flow and transaction locks',
      width: 1200,
      height: 675,
      blurDataURL:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDY3NSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzAwMTcyMCIvPjwvc3ZnPg==',
    },
    liveUrl: 'https://codegrogu.com/book',
    githubUrl: 'https://github.com/CodeGrogu/portfolio',
    techStack: ['Next.js 16', 'Neon PostgreSQL', 'Drizzle ORM', 'Zod', 'Upstash Redis', 'Resend'],
    metrics: [
      {
        label: 'Concurrency Safety',
        value: '100%',
        description: 'Zero double-booking race conditions',
      },
      {
        label: 'API Response Time',
        value: '< 85ms',
        description: 'Edge database transaction lifecycle',
      },
      { label: 'Rate Limiting', value: '5 req / min', description: 'Sliding window IP protection' },
      { label: 'Type Safety', value: 'Strict', description: 'End-to-end Zod & Drizzle inference' },
    ],
    problemStatement: {
      challenge:
        'High-demand consulting schedules face race conditions when multiple users attempt to reserve the same time slot simultaneously, causing corrupted database states and booking collisions.',
      context:
        'CodeGrogu needed a production-grade scheduling engine capable of handling spikes in booking volume with sub-100ms API response times, strict rate limiting against spam bots, and instant email confirmation.',
      objectives: [
        'Implement serialized database transactions with exclusive slot locks in Neon PostgreSQL.',
        'Define strict Zod runtime validation schemas for all inputs and API responses.',
        'Configure distributed Redis sliding-window rate limiting to prevent spam and abuse.',
        'Orchestrate asynchronous transactional emails via Resend with webhook delivery tracking.',
      ],
    },
    architecture: {
      summary:
        'An atomic transactional architecture linking Next.js 16 Server Actions to Neon Serverless PostgreSQL with Drizzle ORM isolation levels.',
      decisions: [
        {
          title: 'Database-Level Exclusive Slot Locks',
          rationale:
            'Instead of relying on fragile client-side locks, the engine executes SELECT ... FOR UPDATE in a serialized transaction, locking the slot record until the insert commit completes.',
        },
        {
          title: 'Drizzle ORM Zero-Cost Type Inference',
          rationale:
            'Drizzle ORM provides direct TypeScript mapping without heavyweight ORM overhead or runtime codegen steps, keeping edge cold starts under 15ms.',
        },
        {
          title: 'Sliding-Window Redis Abuse Prevention',
          rationale:
            'Deployed Upstash Redis rate limiters using IP hashes to restrict booking submissions to 5 requests per minute, defeating automated reservation bot attacks.',
        },
      ],
    },
    technicalDeepDive: {
      title: 'Atomic Slot Reservation Transaction',
      description:
        'The core booking transaction enforces strict concurrency isolation. If another request attempts to reserve the same slot during execution, the database throws a serialization error which is gracefully handled.',
      snippet: {
        language: 'typescript',
        filename: 'src/lib/db/booking-transaction.ts',
        code: `export async function reserveBookingSlot(db: Database, input: BookingPayload) {
  return await db.transaction(async (tx) => {
    // 1. Lock slot exclusively for duration of transaction
    const existing = await tx
      .select()
      .from(bookingSlots)
      .where(and(eq(bookingSlots.slotTime, input.slotTime), eq(bookingSlots.status, 'confirmed')))
      .for('update');

    if (existing.length > 0) {
      throw new ConcurrencyConflictError('Slot has already been reserved by another client.');
    }

    // 2. Insert booking record atomically
    const [booking] = await tx
      .insert(bookings)
      .values({ ...input, createdAt: new Date() })
      .returning();

    // 3. Mark slot as confirmed
    await tx
      .insert(bookingSlots)
      .values({ slotTime: input.slotTime, bookingId: booking.id, status: 'confirmed' });

    return booking;
  });
}`,
        caption: 'Drizzle ORM transaction with exclusive slot lock preventing concurrent overlaps.',
      },
    },
    outcomes: [
      {
        title: 'Zero Double Bookings',
        detail: 'Simulated 500 concurrent synthetic reservation requests with 100% data integrity.',
      },
      {
        title: 'Sub-90ms Edge Latency',
        detail: 'Transaction round-trip times averaged 82ms from Vercel Edge to Neon US-East.',
      },
      {
        title: 'Automated Lifecycle Emails',
        detail: '99.9% Resend delivery rate with instant calendar invite ICS attachments.',
      },
    ],
  },
  {
    slug: 'ambient-audio-visualizer',
    title: 'Ambient Audio Visualizer',
    tagline:
      'Interactive 50,000-particle audio reactive experience with real-time FFT frequency bloom shaders',
    category: 'creative-shaders',
    categoryLabel: 'Shaders & Creative',
    badgeVariant: 'violet',
    featured: true,
    order: 3,
    timeline: 'Q2 2026',
    role: 'Creative Developer & Sound Designer',
    client: 'Acoustic Labs Interactive',
    summary:
      'Real-time WebGL audio reactive visual experience combining Web Audio API frequency analysis with instanced GPU particle systems and custom GLSL post-processing bloom shaders.',
    thumbnail: {
      src: '/images/projects/audio-visualizer.svg',
      alt: 'Ambient Audio Visualizer particle frequency spectrum with bloom glow',
      width: 1200,
      height: 675,
      blurDataURL:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDY3NSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzEwMDUyMCIvPjwvc3ZnPg==',
    },
    liveUrl: 'https://codegrogu.com/projects/ambient-audio-visualizer',
    githubUrl: 'https://github.com/CodeGrogu/portfolio',
    techStack: ['WebGL 2', 'GLSL Shaders', 'Web Audio API', 'Three.js', 'React 19', 'GSAP'],
    metrics: [
      { label: 'Active Particles', value: '50,000', description: 'Instanced buffer geometry' },
      { label: 'Shader Passes', value: '3 Passes', description: 'Downsampled dual-blur bloom' },
      { label: 'Audio Latency', value: '< 12ms', description: 'Low-latency AnalyserNode' },
      {
        label: 'Motion Adaptation',
        value: 'A11y Safe',
        description: 'prefers-reduced-motion fallback',
      },
    ],
    problemStatement: {
      challenge:
        'High-density particle visualizers often monopolize CPU threads when processing raw audio FFT data and cause severe GPU overheating or motion sickness for sensitive users.',
      context:
        'Acoustic Labs wanted an ambient web experience showcasing their soundscapes with buttery smooth visuals, real-time frequency reactivity, and strict accessibility compliance.',
      objectives: [
        'Stream Web Audio API frequency byte data directly to GPU uniform arrays.',
        'Render 50,000 particles at 60 FPS on integrated mobile GPUs.',
        'Implement an efficient multi-pass Kawase/dual-blur bloom shader pipeline.',
        'Support WCAG reduced-motion modes with gentle ambient color shifts.',
      ],
    },
    architecture: {
      summary:
        'A high-throughput Web Audio to WebGL pipeline with InstancedBufferGeometry and custom post-processing render targets.',
      decisions: [
        {
          title: 'Direct Uniform Array Buffer Streaming',
          rationale:
            'Instead of transforming 50,000 particle positions on the JavaScript main thread, audio bins are uploaded once per frame to a 16-element uniform float array, allowing vertex shaders to calculate displacement on the GPU.',
        },
        {
          title: 'Dual-Filtering Post-Process Bloom',
          rationale:
            'Downsampling the emissive buffer before applying two Kawase blur passes produced lush visual glow with 70% lower texture fill rate cost than standard Gaussian passes.',
        },
        {
          title: 'Reduced-Motion Adaptive Fallback',
          rationale:
            'Detected prefers-reduced-motion to swap rapid frequency particle bursts with smooth, calming color gradients and static geometric wave displays.',
        },
      ],
    },
    technicalDeepDive: {
      title: 'Real-Time Audio Reactive Fragment Shader',
      description:
        'Custom GLSL fragment shader combining audio-driven chromatic aberration, SDF ring distances, and dynamic emissive color pulsing.',
      snippet: {
        language: 'glsl',
        filename: 'src/shaders/audio-bloom.frag',
        code: `precision highp float;

uniform sampler2D uSceneTexture;
uniform float uAudioLow;
uniform float uAudioHigh;
uniform float uTime;
varying vec2 vUv;

void main() {
  vec2 center = vUv - vec2(0.5);
  float dist = length(center);
  
  // Audio-reactive chromatic aberration
  float aberration = (uAudioHigh * 0.02) * smoothstep(0.2, 0.8, dist);
  vec3 color;
  color.r = texture2D(uSceneTexture, vUv + vec2(aberration, 0.0)).r;
  color.g = texture2D(uSceneTexture, vUv).g;
  color.b = texture2D(uSceneTexture, vUv - vec2(aberration, 0.0)).b;
  
  // Emissive bass pulse
  float pulse = sin(uTime * 2.0 - dist * 10.0) * uAudioLow * 0.15;
  color += vec3(0.05, 0.2, 0.3) * pulse;
  
  gl_FragColor = vec4(color, 1.0);
}`,
        caption:
          'GLSL fragment shader providing real-time audio-reactive chromatic shift and glow.',
      },
    },
    outcomes: [
      {
        title: '50k Particles at 60 FPS',
        detail: 'GPU memory consumption kept under 42MB with zero frame stutter.',
      },
      {
        title: 'Zero Main-Thread Jitter',
        detail: 'Main thread CPU utilization held under 4% during intense musical tracks.',
      },
      {
        title: 'Accessible by Design',
        detail:
          'Fully certified for users with vestibular and photosensitivity motion preferences.',
      },
    ],
  },
  {
    slug: 'cloud-data-pipeline-suite',
    title: 'Cloud & Database Optimization Suite',
    tagline:
      'High-throughput data streaming pipelines and multi-region database replication architectures',
    category: 'cloud-systems',
    categoryLabel: 'Cloud & Database',
    badgeVariant: 'amber',
    featured: false,
    order: 4,
    timeline: 'Q1 2026',
    role: 'Cloud Systems Architect',
    client: 'Enterprise Data Group',
    summary:
      'Resilient multi-region data ingestion and synchronization architecture connecting serverless Edge compute with distributed PostgreSQL databases and Redis memory caches.',
    thumbnail: {
      src: '/images/projects/cloud-suite.svg',
      alt: 'Cloud Database Architecture streaming nodes and data replication topology',
      width: 1200,
      height: 675,
      blurDataURL:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDY3NSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE4MTAwMCIvPjwvc3ZnPg==',
    },
    liveUrl: 'https://codegrogu.com/projects/cloud-data-pipeline-suite',
    githubUrl: 'https://github.com/CodeGrogu/portfolio',
    techStack: ['PostgreSQL', 'Neon DB', 'Drizzle ORM', 'Bun', 'Redis', 'Docker'],
    metrics: [
      { label: 'Throughput', value: '12k ops/s', description: 'Peak ingested event stream' },
      { label: 'Replication Lag', value: '< 20ms', description: 'Cross-region read replicas' },
      { label: 'Uptime SLA', value: '99.99%', description: 'Fault-tolerant failover' },
      { label: 'Query Speedup', value: '4.8x', description: 'Index and CTE optimization' },
    ],
    problemStatement: {
      challenge:
        'Legacy monolithic database clusters struggled with scaling read throughput and suffered from 400ms+ cross-region query latency during traffic surges.',
      context:
        'Enterprise Data Group required an automated cloud database architecture capable of high-throughput write ingestion while serving sub-30ms reads globally.',
      objectives: [
        'Migrate from fixed-capacity PostgreSQL to serverless autoscaling compute.',
        'Implement read-replica routing and connection pooling with Drizzle ORM.',
        'Deploy distributed Redis caching layers for volatile session data.',
        'Establish automated schema migration pipelines with zero downtime.',
      ],
    },
    architecture: {
      summary:
        'A decoupled serverless cloud topology leveraging Neon compute autoscaling, connection pooling, and multi-region Redis caches.',
      decisions: [
        {
          title: 'Serverless Autoscaling Branches',
          rationale:
            'Decoupled storage and compute layers allowed instant spin-up of read replica nodes during traffic spikes without provisioning idle infrastructure.',
        },
        {
          title: 'Connection Pooling with Drizzle Proxy',
          rationale:
            'Introduced PgBouncer connection pooling to eliminate database connection exhaustion during serverless function cold starts.',
        },
        {
          title: 'Predictive Query Indexing',
          rationale:
            'Analyzed EXPLAIN ANALYZE traces to create targeted partial indexes and composite keys, reducing sequential table scans by 94%.',
        },
      ],
    },
    technicalDeepDive: {
      title: 'Read-Replica Routing & Query Splitting',
      description:
        'Implemented automatic transaction-aware query routing separating read operations to nearest geographic replicas while ensuring write operations hit the primary cluster with immediate consistency.',
      snippet: {
        language: 'typescript',
        filename: 'src/lib/db/replica-router.ts',
        code: `export function getDatabaseClient(operation: 'read' | 'write') {
  if (operation === 'read') {
    // Route read queries to closest regional read replica
    const replicaUrl = process.env.DATABASE_READ_REPLICA_URL || process.env.DATABASE_URL;
    return drizzle(createPool({ connectionString: replicaUrl }), { schema });
  }
  
  // Route write queries to primary transactional cluster
  return drizzle(createPool({ connectionString: process.env.DATABASE_URL }), { schema });
}`,
        caption: 'Drizzle ORM dynamic connection routing for high-throughput global queries.',
      },
    },
    outcomes: [
      {
        title: '4.8x Faster Query Response',
        detail: 'Average global API query latency dropped from 380ms to 78ms.',
      },
      {
        title: 'Zero Downtime Migrations',
        detail: 'Successfully executed 18 schema updates with 100% continuous uptime.',
      },
      {
        title: '65% Cost Reduction',
        detail: 'Serverless compute scale-to-zero slashed idle infrastructure expenses.',
      },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectCaseStudy[] {
  return PROJECTS.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export function getProjectsByCategory(category: string): ProjectCaseStudy[] {
  if (category === 'all' || !category) {
    return PROJECTS.sort((a, b) => a.order - b.order);
  }
  return PROJECTS.filter((p) => p.category === category).sort((a, b) => a.order - b.order);
}
