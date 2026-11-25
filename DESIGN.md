---
name: Aroosha Zuha
description: Portfolio of an AI Automation Engineer & Full Stack Developer, built as a signal analyzer probing live systems.
colors:
  ink-0: "#07090c"
  ink-1: "#0b0f14"
  ink-2: "#10151c"
  ink-3: "#161d26"
  line: "rgba(150, 172, 198, 0.13)"
  line-strong: "rgba(150, 172, 198, 0.28)"
  grat: "rgba(140, 165, 190, 0.055)"
  grat-major: "rgba(140, 165, 190, 0.09)"
  fg: "#e9edf2"
  fg-2: "#a9b3c0"
  fg-3: "#7d8999"
  ch1-yellow: "#f2d64b"
  ch2-cyan: "#36e2e6"
  ch3-magenta: "#ff4fa3"
  ch4-blue: "#7d93ff"
  run-green: "#3ef08a"
  on-channel: "#08090b"
  key-run-hover: "#fff07a"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.4rem, min(10.5vw, 15.5vh), 9.5rem)"
    fontWeight: 850
    lineHeight: 0.84
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 6.2vw, 5.4rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 68"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.45rem, 2.4vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.15
    fontVariation: "'wdth' 88"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  readout:
    fontFamily: "Martian Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.04em"
    fontFeature: "tnum"
    fontVariation: "'wdth' 87.5"
  label:
    fontFamily: "Martian Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 87.5"
rounded:
  hair: "1px"
  tick: "2px"
  key: "3px"
  tray: "4px"
  led: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  section-y: "clamp(6rem, 12vw, 10.5rem)"
  maxw: "1320px"
  nav-h: "64px"
components:
  key-run:
    backgroundColor: "{colors.ch1-yellow}"
    textColor: "{colors.on-channel}"
    rounded: "{rounded.key}"
    padding: "0 1.5rem"
    height: "52px"
  key-run-hover:
    backgroundColor: "{colors.key-run-hover}"
    textColor: "{colors.on-channel}"
  key-soft:
    backgroundColor: "rgba(16, 21, 28, 0.6)"
    textColor: "{colors.fg}"
    rounded: "{rounded.key}"
    padding: "0 1.5rem"
    height: "52px"
  ch-badge-num:
    backgroundColor: "{colors.ch1-yellow}"
    textColor: "{colors.on-channel}"
    typography: "{typography.label}"
    rounded: "{rounded.tick}"
    padding: "0.2rem 0.4rem"
  softkey:
    backgroundColor: "rgba(11, 15, 20, 0.6)"
    textColor: "{colors.fg-2}"
    rounded: "{rounded.key}"
    padding: "0 0.85rem"
    height: "40px"
  softkey-on:
    backgroundColor: "{colors.fg}"
    textColor: "{colors.on-channel}"
  nav-key:
    textColor: "{colors.fg-2}"
    rounded: "{rounded.tick}"
    padding: "0.5rem 1rem"
  nav-key-active:
    backgroundColor: "{colors.fg}"
    textColor: "{colors.on-channel}"
  tech-tag:
    textColor: "{colors.fg-2}"
    typography: "{typography.label}"
    rounded: "{rounded.tick}"
    padding: "0.3rem 0.6rem"
  input-field:
    backgroundColor: "{colors.ink-0}"
    textColor: "{colors.fg}"
    rounded: "{rounded.key}"
    padding: "0.8rem 0.9rem"
    height: "50px"
---

# Design System: Aroosha Zuha

## Overview

**Creative North Star: "The Signal Analyzer"**

The site is a bench instrument probing live systems. Each body of work is a channel you can isolate and measure, because the owner's working habit is verifying against live data. Near-black instrument glass carries square bezel chrome, hairline borders, corner ticks, channel badges, softkeys and tabular readouts. Measurement surfaces (the hero scope canvas, the competencies spectrum panel, the project capture frames) carry graticules and phosphor traces; everything around them is plain glass so the measurements read as measurements.

Density is instrument-like rather than editorial: big condensed uppercase headings, generous section spacing, and compact mono data clustered at the edges of panels. Motion is acquisition, not decoration: traces sweep in, captures arm and trigger, sections reveal with a left-to-right sweep. The system refuses the glow-card dark portfolio: no glass bento grids, no gradient orbs, no constellation particles.

**Key Characteristics:**
- Near-black glass ground (ink-0) with tonal panels (ink-1) and hairline borders, no card shadows.
- Four channel colours with fixed meanings; colour always tells you which body of work you are looking at.
- Condensed Archivo display at 62-70% width, Archivo body, Martian Mono for data only.
- Square chrome: 2-3px radii, corner ticks, hexagonal decode packets.
- Signature interaction: channel isolation, dimming every channel except the focused one.

## Colors

A neutral instrument-glass palette with four saturated phosphor channels and one live-status green.

### Primary
- **Trigger Yellow / CH1** (ch1-yellow): the AI & Automation channel. Its second, functional role is the trigger: the RUN key ("Get in touch"), the wordmark full stop, text selection and the skip link. Text on it is on-channel near-black.

### Secondary
- **Probe Cyan / CH2** (ch2-cyan): the Full Stack channel. Its functional role is the probe: focus rings (2px outline, 3px offset), input caret, focused input border and the soft-key hover border.

### Tertiary
- **Phosphor Magenta / CH3** (ch3-magenta): the CRM & GoHighLevel channel.
- **Trace Blue / CH4** (ch4-blue): the Web & WordPress channel.
- **Run Green** (run-green): live status only: availability LEDs, the nav clock LED, "current" acquisition status, armed/complete capture state. Never a channel, never a button fill.

### Neutral
- **Instrument Glass** (ink-0): page ground, input wells, capture frame backing.
- **Panel Glass** (ink-1): measurement panels, decode lanes, capture screens, footer.
- **Raised Glass** (ink-2, ink-3): hover fills in nav softkeys and small raised chrome.
- **Hairline / Hairline Strong** (line, line-strong): every border, divider, tick and rail. Strong is used for interactive outlines (soft keys, inputs) and corner ticks.
- **Graticule / Graticule Major** (grat, grat-major): grid lines on measurement surfaces only.
- **Signal White / Dim / Faint** (fg, fg-2, fg-3): primary text; secondary text, intros and heading emphasis; readouts and inactive labels.

### Named Rules
**The Fixed Channel Rule.** CH1 is AI & Automation, CH2 is Full Stack, CH3 is CRM & GoHighLevel, CH4 is Web & WordPress. The labels are identical everywhere they appear. A channel colour on an element means that element belongs to that channel; never apply one as decoration or to make something "pop".

**The Live-Only Green Rule.** Run green marks something live right now. If nothing is live, the LED is fg-3.

**The Neutral Emphasis Rule.** Emphasised words inside section headings are set in fg-2, not a channel colour.

## Typography

**Display Font:** Archivo (variable, wdth 62-125), with Helvetica Neue, Arial
**Body Font:** Archivo
**Label/Mono Font:** Martian Mono (variable, wdth 75-112.5), with ui-monospace, Cascadia Mono, Consolas

**Character:** A single grotesque stretched across its width axis does all the talking, from 62% condensed uppercase slabs down to normal-width body; Martian Mono sits beside it as the instrument's printed legend.

### Hierarchy
- **Display** (850, wdth 62%, clamp(3.4rem, min(10.5vw, 15.5vh), 9.5rem), line-height 0.84, uppercase): the hero name only. The contact closing title and footer wordmark use the same voice at 64% width.
- **Headline** (800, wdth 68%, clamp(2.6rem, 6.2vw, 5.4rem), line-height 0.92, -0.02em, uppercase): section titles. Project capture titles use 800 at 70% width, clamp(2rem, 3.6vw, 3.1rem).
- **Title** (600, wdth 88%, clamp(1.45rem, 2.4vw, 2rem), line-height 1.15): the hero role line and subsection titles; lane titles drop to 700 at 85% width, 1.125rem.
- **Lead** (400, clamp(1.15rem, 1.6vw, 1.4rem), line-height 1.5, fg-2): section intros, max 46ch.
- **Body** (400, 1.0625rem, line-height 1.6): paragraphs and project bullets, 54-66ch.
- **Readout** (Martian Mono 400, wdth 87.5%, 0.75rem, 0.04em, uppercase, tabular numerals, fg-3): measurement captions, axes, counters, panel headers. Measured values in the hero strip scale to 1.25rem at 500.
- **Label** (Martian Mono, wdth 87.5%, 0.6875rem, 0.06em, uppercase): channel badges, tech tags, signal-chain nodes.

### Named Rules
**The Mono-Is-Data Rule.** Martian Mono is for readouts, measurements, axes, counters and tech tags only. Never set a sentence in mono.

**The Width-Axis Rule.** Hierarchy is carried by Archivo's width and weight together: the louder the heading, the narrower and heavier. Body copy stays at 100% width.

## Layout

A centred 1320px column with fluid gutters (clamp(1.25rem, 4vw, 3rem)) and fluid section padding (clamp(6rem, 12vw, 10.5rem)). Section heads are a two-column grid (1.25fr title, 1fr intro, bottom-aligned) that stacks below 860px. Content grids are asymmetric two-column splits (roughly 0.85/1.15 or 1.2/1) with sticky figures or capture screens on the shorter side. The hero is a full-viewport screen: channel selectors top-left, name and actions bottom-left, capture right, and a measurement strip pinned to the bottom edge. Breakpoints observed: 1180px, 1100px, 960px, 860px, 560px and 520px. The nav is 64px tall and safe-area aware.

## Elevation & Depth

Flat. Depth is tonal (ink-0 ground, ink-1 panels) and drawn with hairlines and corner ticks, not shadows. The only shadows are light emission: the RUN key's soft yellow bloom, the capture scan beam's glow, pulsing LED rings, and a single drop shadow under the floating project preview and back-to-top key. Translucent blur appears only on chrome that floats over moving content (the nav bar, the hero measurement strip, back-to-top).

### Shadow Vocabulary
- **RUN bloom** (`box-shadow: 0 10px 30px -12px rgba(242, 214, 75, 0.55)`, hover `0 16px 40px -14px rgba(242, 214, 75, 0.75)`): primary RUN key only.
- **Scan beam** (`box-shadow: 0 0 24px 6px rgba(var(--c-rgb), 0.35)`): the 2px acquisition beam crossing a capture frame.
- **LED pulse** (`0 0 0 6px` ring fading from run green at 0.45 alpha): live status LEDs.
- **Float** (`0 30px 60px -20px rgba(0, 0, 0, 0.8)`): pointer-following project preview.

### Named Rules
**The Emission-Only Rule.** A shadow is light coming off a signal or a key, never a card lifting off the page.

**The Graticule Rule.** Graticules appear only on measurement surfaces: the hero canvas, the spectrum panel and capture frames. The page ground is plain glass.

## Shapes

Square instrument chrome. Radii are tiny and functional: 2px for badges, tags, chain nodes and nav keys; 3px for keys, softkeys, inputs and channel selectors; 4px for the nav key tray; circles only for LEDs. Panels and capture frames are square-cornered with 1px hairline borders, often marked with 12px corner ticks (bezel marks) that switch to the channel colour when a capture is armed. Decode packets in the tool lanes use a hexagonal clip (10px pointed ends), like a protocol decode. Experience trigger markers are 13px rotated squares.

## Components

### Buttons (Keys)
Tactile instrument keys, never pills.
- **Shape:** 3px radius, 52px tall, 0 1.5rem padding, Archivo 650 at 0.9375rem.
- **RUN key (primary):** trigger yellow fill, on-channel text, blinking 7px LED at the left, RUN bloom shadow. Hover lightens to key-run-hover and grows the bloom; active presses 1px down at 0.985 scale.
- **Soft key (secondary):** translucent panel glass, 1px line-strong border, fg text. Hover moves the border to probe cyan with an 8% cyan wash.
- **Icon motion:** trailing arrows nudge 4px right on hover. Disabled is 0.55 opacity with a progress cursor.

### Channel Badges
- **Style:** a mono label with a solid channel-coloured number plate ("CH1") at 2px radius and on-channel text; the label beside it is fg-2.
- **Use:** the only way a channel is named. Badge text matches the fixed channel labels exactly.

### Softkeys (Filters)
- **Style:** 40px tall, 3px radius, translucent panel glass, hairline border, fg-2 text, with a small channel-coloured number plate.
- **State:** hover brightens text and border; on fills with its channel colour (signal white for "All") and on-channel text. Selecting one isolates that channel in the project index.

### Tech Tags and Signal Chains
- **Tech tag:** mono label, fg-2, 1px hairline border, 2px radius, no fill.
- **Signal chain:** mono nodes tinted 10% with the channel and bordered at 40%, joined by 22px wires carrying a travelling pulse.

### Captures (Cards / Containers)
- **Corner Style:** square, 1px hairline border, corner ticks.
- **Background:** panel glass with a faint channel-tinted radial; capture frames sit on a 10x8 major graticule.
- **Treatment:** illustrations render as phosphor captures: grayscale with a multiply tint in the channel colour and 3px scanlines; hover or focus clears to full colour. Project screenshots arm, scan and trigger (a 2px beam sweeps, the image wipes in left to right) and then hold still.
- **Header/footer rows:** readout rows separated by hairlines, 0.7rem 1rem padding.

### Inputs / Fields
- **Style:** instrument-glass well, 1px line-strong border, 3px radius, 50px minimum height, labels in Archivo 600 with an optional mono hint.
- **Focus:** border goes probe cyan with a 3px cyan ring at 18% alpha.

### Navigation
- **Style:** a 64px bar with blurred glass on a pseudo-element; condensed 800 wordmark "Aroosha" with a yellow square full stop; a 4px-radius tray of softkeys (Archivo 550, 0.875rem, fg-2). Hover fills ink-3; the active section inverts to fg fill with near-black text.
- **Right side:** a live clock with a run-green LED and a compact RUN key (40px).
- **Timebase:** the scroll progress is a trigger marker running along the nav's bottom edge.

### Decode Lanes (Signature)
Tool groups render as logic-analyzer lanes: a 15rem head column, a faint channel waveform, and hexagonal decode packets tinted 13% with the channel that fill solid on hover. Lanes for other channels dim to 0.38 when one is focused.

### Channel Isolation (Signature Interaction)
Hovering or pressing a channel (hero badges, tool lanes, project filters, spectrum bands) keeps that channel at full strength and dims the others (opacity 0.35-0.45). It is the one interaction shared across the page and the main way colour is put to work.

## Do's and Don'ts

### Do:
- **Do** tie every channel colour to its fixed meaning: CH1 #f2d64b AI & Automation, CH2 #36e2e6 Full Stack, CH3 #ff4fa3 CRM & GoHighLevel, CH4 #7d93ff Web & WordPress, with identical labels everywhere.
- **Do** reserve run green (#3ef08a) for live status.
- **Do** keep graticules on measurement surfaces (hero canvas, spectrum panel, capture frames) and leave the page ground plain.
- **Do** use Martian Mono at 87.5% width with tabular numerals for readouts, axes, counters and tech tags.
- **Do** set section heading emphasis in fg-2.
- **Do** use channel isolation (dim the non-focused channels) when a new surface groups work by channel.
- **Do** frame measurement panels with 1px hairlines and corner ticks on panel glass, with 2-3px radii on interactive chrome.
- **Do** keep content visible by default and arm reveals only when IntersectionObserver exists and motion is allowed; honour prefers-reduced-motion.

### Don't:
- **Don't** use a channel colour as decoration, background wash or emphasis on something that does not belong to that channel.
- **Don't** set sentences, intros or body copy in mono.
- **Don't** put a graticule or grid on the page ground.
- **Don't** use glass bento grids, gradient orbs, constellation particles or glow cards.
- **Don't** lift cards with drop shadows; shadows are emission only.
- **Don't** use pill shapes or large radii; chrome is square.
