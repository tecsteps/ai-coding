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

## Architecture

- Uses Next.js App Router (`app/` directory)
- Path alias `@/*` maps to project root
- Geist font family configured via `next/font`
