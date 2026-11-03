---
title: WGI AI Laboratory
date: 2026-11-03
tags:
  - project/wgi
  - active
  - documentation
aliases:
  - WGI Lab
  - AI Office
cssclasses:
  - wgi-dashboard
---

# WGI AI Laboratory

Welcome to the digital twin documentation of the **WGI AI Laboratory** — a 3D Liquid Glass multi-agent office environment built with Three.js and GSAP.

> [!important] Live Dashboard
> The laboratory is accessible locally via `node server.mjs` at `http://localhost:3000`.

## Departments Overview

The agency consists of 12 specialized departments coordinated by the [[Master Agent]]:

- [[CEO]] — Executive oversight, final decisions, and governance.
- [[Strategy]] — Business planning and growth roadmap.
- [[Sales]] — Pipeline management and lead conversion.
- [[Finance]] — Budgeting, financial modeling, and cost analysis.
- [[HR]] — Talent acquisition, onboarding, and culture.
- [[Operations]] — SOPs, SLA monitoring, and process efficiency.
- [[Marketing]] — Brand positioning and campaigns.
- [[IT & Data]] — Infrastructure, data pipelines, and security.
- [[Legal]] — Compliance, contracts, and risk management.
- [[Research]] — Market research and competitive intelligence.
- [[Support]] — Customer success and ticket resolution.
- [[Admin]] — Scheduling, resource coordination, and workflow hub.

## Technical Architecture

The project relies on:
- **[[Three.js]]** — For rendering the 3D isometric laboratory, glass walls, workstations, and characters.
- **[[GSAP]]** — For smooth performance-optimized character bobbing, rotation, and lighting pulses.
- **[[n8n]]** — For live backend workflow synchronization (`data/departments.json`).

> [!note] Obsidian Embed Example
> ![[Architecture Diagram.png|600]]

## Tasks & Progress

- [x] Create 12 department agent definitions
- [x] Build Three.js 3D Liquid Glass Laboratory (`laboratory.html`)
- [x] Implement GSAP performance optimizations
- [ ] Connect full production n8n webhook triggers

%% 
Hidden notes for maintainers: Ensure local web server uses port 3000 by default.
%%
