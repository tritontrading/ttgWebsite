# Triton Trading Group Website PRD

## Overview

Build a cutting‑edge website for Triton Trading Group (TTG) that visually communicates the organization as a hybrid of a hedge fund, quant research lab, and consulting organization. The site should rely heavily on scroll-driven storytelling and data-driven animations.

Primary goals:

* Position TTG as the most technically sophisticated finance organization at UCSD
* Clearly communicate TTG departments and activities
* Drive recruitment applications
* Showcase real work and analytical capability

Target audience:

* UCSD students interested in finance, consulting, and quantitative trading
* Potential corporate partners
* Recruiters

Success metrics:

* Increased application conversion rate
* Time spent on site
* Scroll completion rate

---

# Design Principles

1. Data-first aesthetic
2. Minimalist dark interface
3. Smooth scroll-driven storytelling
4. Charts and quantitative visuals
5. Professional hedge fund feel

Color palette:

* Black
* Dark navy
* Electric blue
* Neon green highlights

Fonts:

* Inter
* IBM Plex Mono

---

# Core Narrative Structure

The scroll experience should feel like descending deeper into a trading operation.

Story progression:

Markets → Research → Departments → Strategies → Real Work → Careers

Each section becomes more technical and impressive.

---

# Section 1: Hero — Entering the Market

Goal:
Create a powerful first impression that resembles a trading terminal.

Components:

* Large headline
* Animated background market data
* Subheading describing TTG

Animations:

* Candlestick charts draw themselves
* Market tickers scroll horizontally
* Grid background parallax

Headline example:
"Triton Trading Group"

Subheadline:
"UC San Diego's Student Investment, Quantitative Finance, and Strategy Organization"

CTA:
Apply / Learn More

---

# Section 2: Market Simulation

Goal:
Showcase investment strategy and portfolio growth.

Scroll interaction:
Scrolling advances a simulated portfolio backtest timeline.

Visual elements:

* Equity curve that grows with scroll
* Time progression (2018 → present)
* Strategy overlays appearing during scroll

Examples:

* Sector research
* Diversification
* Risk management

Technical implementation:

* SVG or canvas chart
* Scroll-linked animation

---

# Section 3: Departments Overview

Goal:
Explain TTG's internal structure.

The section is pinned while scrolling reveals each department.

Departments:

1. Asset Management
2. FP&A Consulting
3. Quantitative Finance

Each department includes:

* Animated visualization
* Short description
* Key activities

---

# Department Detail Animations

## Asset Management

Visualization:
Interactive sector map.

Sectors:

* Technology
* Finance
* Healthcare
* Industrials
* Energy & Defense
* Commodities

Animation ideas:

* Companies appear as nodes
* Sector clusters expand

---

## FP&A Consulting

Visualization:
Consulting dashboard UI.

Panels animate into view for:

* Financial forecasting
* Market research
* Strategy development
* Technology consulting

Additional visual elements:

* Workflow diagrams
* Financial models

---

## Quantitative Finance

Visualization:
Quant research interface.

Animation ideas:

* Code typing animation
* Factor model visualization
* Trading signals appearing

Topics:

* Algorithmic trading
* Factor investing
* Statistical arbitrage
* Machine learning

---

# Section 4: Interactive Strategy Builder

Goal:
Demonstrate how trading strategies are built.

Scroll sequence:

Step 1: Market data
Step 2: Factor signals
Step 3: Risk filters
Step 4: Portfolio optimization
Step 5: Backtest results

Visual elements:

* Signal indicators
* Portfolio construction visualization
* Equity curve output

Metrics shown:

* Sharpe ratio
* Drawdown
* Returns

---

# Section 5: Industry Tools

Goal:
Highlight tools used by members.

Interactive cards expand into mini dashboards.

Example tools:

* Quant trading platforms
* Data analytics tools
* AI research tools

Animation:
Cards expand on scroll or hover.

---

# Section 6: Real Work / Consulting

Goal:
Show real-world projects.

Visualization:
Project team structure.

Example roles:

* Engagement Lead
* Senior Consultant
* Consultant
* Analyst

Animation ideas:

* Org chart builds itself
* Project workflow visualizations

---

# Section 7: Member Development Timeline

Goal:
Explain the TTG member journey.

Timeline steps:

Recruitment
Training
Research Teams
Projects
Industry Careers

Animation:
Vertical timeline fills while scrolling.

Nodes illuminate as the user progresses.

---

# Section 8: Recruitment Funnel

Goal:
Convert visitors into applicants.

Visualization:
Application funnel animation.

Stages:

* Application
* Interview
* Selection
* Join TTG

CTA:
"Apply Next Quarter"

---

# Technical Architecture

Framework:

* Next.js

UI:

* React
* TailwindCSS

Animation:

* GSAP
* ScrollTrigger
* Lenis smooth scrolling

Visualization:

* D3.js
* Chart.js

Optional advanced graphics:

* Three.js
* React Three Fiber

---

# Performance Requirements

* Lighthouse score > 90
* Mobile responsive
* Animations degrade gracefully on low power devices

Optimization strategies:

* Lazy load animation sections
* GPU transforms for motion
* Use SVG for charts

---

# Future Enhancements

Potential features for future iterations:

1. Interactive strategy demos
2. Live market data visualizations
3. Member research report showcase
4. Interactive stock universe explorer
5. Alumni career outcomes dashboard

---

# Timeline

Phase 1
Design + wireframes

Phase 2
Frontend architecture

Phase 3
Animation implementation

Phase 4
Content integration

Phase 5
Testing + launch

---

# Final Goal

Create a website that feels closer to a hedge fund or quant research firm than a traditional student club website, using modern scroll-driven storytelling and data visualization.
