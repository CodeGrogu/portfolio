---
name: chrome-devtools-automation
description: Automate, inspect, profile, and debug web applications using the Chrome DevTools MCP toolset. Use whenever navigating live web pages, capturing accessible DOM snapshots, profiling performance traces (LCP, INP, CLS), taking heap snapshots for memory leak detection, running on-page Lighthouse audits, or debugging console errors and network traffic.
---

# Chrome DevTools MCP Automation & Profiling

Comprehensive guide for autonomous browser control, performance profiling, memory diagnostics, and on-page auditing using the Chrome DevTools MCP server.

---

## 1. Toolset Overview & Navigation Lifecycle

The `chrome-devtools-mcp` provides a full browser automation and diagnostics interface:

| Functional Area          | Key MCP Tools                                                                                     | Purpose                                                                          |
| :----------------------- | :------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------- |
| **Page Control**         | `new_page`, `navigate_page`, `select_page`, `close_page`, `resize_page`                           | Tab lifecycle, URL navigation, and responsive viewport sizing                    |
| **Interaction**          | `click`, `hover`, `type_text`, `fill`, `fill_form`, `press_key`, `drag`                           | Simulating keyboard, mouse, and form input                                       |
| **Observation**          | `take_snapshot`, `take_screenshot`, `wait_for`                                                    | Semantic DOM inspection, visual rendering checks, and selector waits             |
| **Diagnostics**          | `list_console_messages`, `get_console_message`, `list_network_requests`                           | Capturing runtime JavaScript exceptions and HTTP waterfalls                      |
| **Profiling & Auditing** | `performance_start_trace`, `performance_analyze_insight`, `take_heapsnapshot`, `lighthouse_audit` | Deep performance traces, Core Web Vitals profiling, memory leaks, and Lighthouse |

---

## 2. Core Operational Workflows

### A. Navigating & Inspecting Semantic DOM

1. **Navigate to Target URL**:
   ```json
   {
     "ServerName": "chrome-devtools-mcp",
     "ToolName": "navigate_page",
     "Arguments": {
       "url": "http://localhost:3000"
     }
   }
   ```
2. **Capture Accessible DOM Snapshot**:
   `take_snapshot` returns structured accessibility tree representations with actionable coordinates for interactive elements:
   ```json
   {
     "ServerName": "chrome-devtools-mcp",
     "ToolName": "take_snapshot",
     "Arguments": {
       "verbose": false
     }
   }
   ```

### B. Core Web Vitals & Performance Tracing

1. **Start Performance Trace with Page Reload**:
   ```json
   {
     "ServerName": "chrome-devtools-mcp",
     "ToolName": "performance_start_trace",
     "Arguments": {
       "reload": true,
       "autoStop": true,
       "filePath": "scratch/performance-trace.json.gz"
     }
   }
   ```
2. **Analyze Performance Insights (LCP, INP, CLS)**:
   ```json
   {
     "ServerName": "chrome-devtools-mcp",
     "ToolName": "performance_analyze_insight",
     "Arguments": {
       "insightType": "LCP"
     }
   }
   ```

### C. On-Page Lighthouse Auditing

Run immediate audits for Accessibility, SEO, and Best Practices:

```json
{
  "ServerName": "chrome-devtools-mcp",
  "ToolName": "lighthouse_audit",
  "Arguments": {
    "device": "desktop",
    "mode": "navigation"
  }
}
```

### D. Memory Profiling & 3D Memory Leak Detection

When mounting and unmounting Three.js / WebGPU scenes, capture heap snapshots before and after route transitions to verify GPU geometries and materials are disposed:

1. **Take Baseline Heap Snapshot**:
   ```json
   {
     "ServerName": "chrome-devtools-mcp",
     "ToolName": "take_heapsnapshot",
     "Arguments": {
       "filePath": "scratch/heap-baseline.heapsnapshot"
     }
   }
   ```
2. **Navigate through routes / unmount 3D scene**.
3. **Take Post-Unmount Heap Snapshot**:
   ```json
   {
     "ServerName": "chrome-devtools-mcp",
     "ToolName": "take_heapsnapshot",
     "Arguments": {
       "filePath": "scratch/heap-post-unmount.heapsnapshot"
     }
   }
   ```

### E. Runtime Console & Network Monitoring

Verify zero console errors and monitor failed network requests:

```json
{
  "ServerName": "chrome-devtools-mcp",
  "ToolName": "list_console_messages",
  "Arguments": {
    "types": ["error", "warning"]
  }
}
```

```json
{
  "ServerName": "chrome-devtools-mcp",
  "ToolName": "list_network_requests",
  "Arguments": {
    "resourceTypes": ["Fetch", "XHR", "Script"]
  }
}
```

---

## 3. Best Practices for Autonomous Browser Debugging

1. **Wait for Network Idle**: Always use `wait_for` or ensure DOM loaded state before asserting on dynamic React 19 content.
2. **Inspect Accessibility Trees**: Prefer `take_snapshot` over raw HTML dumps for token-efficient semantic analysis.
3. **Automate Trace Diagnostics**: Use `performance_analyze_insight` to pinpoint long tasks (> 50ms) and main-thread blocking scripts.
4. **Clean up Resources**: Explicitly close non-essential pages with `close_page` to conserve memory during test execution.
