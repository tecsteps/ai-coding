---
name: playwright-skill
description: Use this skill for browser automation, UI testing, and web page interactions. Triggers for tasks involving navigating websites, clicking elements, filling forms, taking screenshots, or verifying page content. Uses headless Chromium by default; say "show me" for visible browser.
---

# Playwright Browser Automation Skill

Browser automation for testing and interacting with web pages. Uses `concurrent-browser-mcp` for parallel headless browsers.

## When This Skill Applies

- Testing UI components visually
- Navigating and interacting with web pages
- Taking screenshots of pages or elements
- Filling forms and clicking buttons
- Verifying page content after actions
- Testing responsive layouts across viewports
- Debugging frontend issues in browser

## Available Servers

| Server | Mode | Max Instances | Use When |
|--------|------|---------------|----------|
| `browser` | Headless | 10 | Default - parallel testing, no UI needed |
| `browser-visible` | Headed | 3 | User says "show me" or debugging needed |

## Usage Pattern

```
1. Create instance:
   mcp__browser__browser_create_instance({ headless: true, metadata: { name: "task-name" } })
   -> Returns instanceId

2. Navigate:
   mcp__browser__browser_navigate({ instanceId: "...", url: "http://agendo.test" })

3. Interact:
   mcp__browser__browser_click({ instanceId: "...", selector: "button.submit" })
   mcp__browser__browser_fill({ instanceId: "...", selector: "input[name=email]", value: "test@example.com" })

4. Get content:
   mcp__browser__browser_get_markdown({ instanceId: "..." })  // Best for LLMs
   mcp__browser__browser_screenshot({ instanceId: "..." })

5. Close:
   mcp__browser__browser_close_instance({ instanceId: "..." })
```

## Available Tools

### Instance Management
- `mcp__browser__browser_create_instance` - Create new browser
- `mcp__browser__browser_list_instances` - List active browsers
- `mcp__browser__browser_close_instance` - Close specific browser
- `mcp__browser__browser_close_all_instances` - Cleanup all

### Navigation
- `mcp__browser__browser_navigate` - Go to URL
- `mcp__browser__browser_go_back` - Browser back
- `mcp__browser__browser_go_forward` - Browser forward
- `mcp__browser__browser_refresh` - Reload page

### Interaction
- `mcp__browser__browser_click` - Click element
- `mcp__browser__browser_type` - Type text (keystroke by keystroke)
- `mcp__browser__browser_fill` - Fill form field (instant)
- `mcp__browser__browser_select_option` - Select dropdown option

### Content Extraction
- `mcp__browser__browser_get_page_info` - Full HTML and metadata
- `mcp__browser__browser_get_markdown` - Page as markdown (best for LLMs)
- `mcp__browser__browser_get_element_text` - Get element text
- `mcp__browser__browser_get_element_attribute` - Get element attribute
- `mcp__browser__browser_screenshot` - Capture image
- `mcp__browser__browser_evaluate` - Run JavaScript

### Waiting
- `mcp__browser__browser_wait_for_element` - Wait for element
- `mcp__browser__browser_wait_for_navigation` - Wait for page load

## Local Development

Works with Laravel Herd `.test` domains:
```
mcp__browser__browser_navigate({ instanceId: "...", url: "http://agendo.test" })
```

## Example: Test Login Flow

```
1. browser_create_instance({ metadata: { name: "login-test" } })
   -> instanceId: "abc123"

2. browser_navigate({ instanceId: "abc123", url: "http://agendo.test/login" })

3. browser_fill({ instanceId: "abc123", selector: "input[name=email]", value: "test@example.com" })

4. browser_fill({ instanceId: "abc123", selector: "input[name=password]", value: "password" })

5. browser_click({ instanceId: "abc123", selector: "button[type=submit]" })

6. browser_wait_for_navigation({ instanceId: "abc123" })

7. browser_get_markdown({ instanceId: "abc123" })
   -> Verify redirected to dashboard

8. browser_close_instance({ instanceId: "abc123" })
```

## Example: Responsive Screenshot

```
1. browser_create_instance({
     metadata: { name: "responsive" },
     viewport: { width: 375, height: 667 }  // iPhone SE
   })

2. browser_navigate({ instanceId: "...", url: "http://agendo.test" })

3. browser_screenshot({ instanceId: "...", fullPage: true })

4. browser_close_instance({ instanceId: "..." })
```

## Parallel Agents

Each agent creates its own isolated instance:

```
// Agent 1
browser_create_instance({ metadata: { name: "agent-1" } })

// Agent 2
browser_create_instance({ metadata: { name: "agent-2" } })

// Agent 3
browser_create_instance({ metadata: { name: "agent-3" } })
```

Instances auto-cleanup after 30 minutes idle.

## Visible Mode

When user says "show me" or debugging is needed, use `browser-visible` server:

```
mcp__browser-visible__browser_create_instance({ metadata: { name: "debug" } })
```

This opens a visible Chrome window for watching actions.
