# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A presentation about AI-Coding built with Next.js. The project includes both the slides infrastructure and the actual slide content.

## Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Production build
- `npm run lint` - Run ESLint

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript (strict mode)
- Tailwind CSS 4 (via PostCSS)
- MagicUI + shadcn/ui components (113 components in `components/ui/`)

## UI Components

This project uses MagicUI and shadcn/ui for UI components. All components are located in `components/ui/`.

### Available Component Categories
- **Base UI**: accordion, button, card, dialog, dropdown-menu, form, input, select, tabs, tooltip, etc.
- **Animated**: animated-beam, animated-list, blur-fade, border-beam, marquee, particles, ripple, etc.
- **Text Effects**: aurora-text, hyper-text, sparkles-text, typing-animation, word-rotate, etc.
- **Cards**: magic-card, neon-gradient-card, bento-grid
- **Backgrounds**: dot-pattern, grid-pattern, retro-grid, flickering-grid, warp-background
- **Buttons**: shimmer-button, rainbow-button, pulsating-button, shiny-button
- **Device Mockups**: safari, iphone, android, terminal

### Adding New Components
```bash
# Add shadcn/ui component
npx shadcn@latest add <component-name>

# Add MagicUI component
npx shadcn@latest add "https://magicui.design/r/<component-name>"
```

## MCP Tools

- **Playwright MCP**: Available for browser automation and testing

## Architecture

- Uses Next.js App Router (`app/` directory)
- Path alias `@/*` maps to project root
- Geist font family configured via `next/font`

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
