# DESIGN.md

# Editorial Brutalist Design System

## Vision

Build a premium portfolio experience that feels like a fashion magazine rather than a software website.

Every screen should feel intentionally art directed.

The interface should communicate confidence through typography, whitespace, motion, and composition instead of colors, shadows, or visual effects.

Users should feel like they are exploring an editorial publication instead of navigating a website.

---

# Design Principles

## 1. Typography First

Typography is the primary visual element.

Images support typography.

Layouts are created around oversized type instead of containers.

Use typography to create rhythm, hierarchy, and depth.

Large words should often become part of the background composition.

Example

```
FRONTEND

DEVELOPER

DESIGNER

CREATIVE

ENGINEER
```

Large typography should occasionally overflow the viewport.

Cropping is intentional.

---

## 2. Less UI, More Composition

Avoid obvious UI.

Avoid cards whenever possible.

Instead create layouts using

- whitespace
- alignment
- typography
- imagery

Every section should resemble an editorial spread.

---

## 3. Minimal Color

Primary Palette

Background

```
#FAFAFA
```

Primary Text

```
#0D0D0D
```

Secondary

```
#555555
```

Borders

```
#DDDDDD
```

Never introduce multiple accent colors.

One accent maximum.

Possible accents

```
Electric Blue

Lime

Orange

Purple
```

Accent usage should remain below 5% of the page.

---

# Typography

## Headlines

Very large.

Very bold.

Condensed.

Suggested fonts

- Druk
- Anton
- Bebas Neue
- Monument Extended
- Helvetica Now Display
- Neue Haas Grotesk

Sizes

Desktop

```
Clamp(6rem,12vw,14rem)
```

Tablet

```
Clamp(4rem,10vw,8rem)
```

Mobile

```
Clamp(3rem,12vw,5rem)
```

---

## Body

Readable.

Neutral.

Never decorative.

Font suggestions

- Inter
- Neue Montreal
- Suisse Intl
- Helvetica

Body size

```
18px

20px

22px
```

Large line height.

---

# Grid

12-column Swiss grid.

Desktop margin

```
120px
```

Tablet

```
80px
```

Mobile

```
24px
```

Whitespace is a design element.

Never fill space just because it exists.

---

# Layout Language

Everything should feel asymmetrical.

Preferred composition

```
Large typography

↓

Portrait interrupts typography

↓

Tiny navigation

↓

Huge whitespace

↓

Small supporting labels
```

Avoid centered layouts.

Avoid boxed sections.

---

# Photography

Photography should feel editorial.

Characteristics

- black and white
- grain
- raw lighting
- high contrast
- natural expressions
- cropped aggressively

Portraits should overlap typography.

Images should never feel like rectangles placed inside cards.

---

# Motion Principles

Motion should feel expensive.

Never playful.

Never bouncy.

Every animation should appear intentional.

Preferred easing

```
Power4.out

Expo.out

Circ.out

Power2.inOut
```

Avoid

- bounce
- elastic
- overshoot

---

# Hero

Hero should occupy nearly the entire viewport.

Structure

```
Navigation

↓

Huge Typography

↓

Portrait Overlay

↓

Minimal Description

↓

Scroll Indicator
```

Background typography should extend beyond screen edges.

Portrait interrupts typography.

---

# Navigation

Very small.

Minimal.

Example

```
Logo

Work

About

Journal

Contact
```

Navigation should disappear while scrolling down.

Return while scrolling up.

---

# Sections

Every section should feel like a magazine spread.

Possible flow

Hero

↓

Selected Work

↓

About

↓

Capabilities

↓

Process

↓

Awards

↓

Testimonials

↓

Contact

Avoid repetitive layouts.

Alternate compositions.

---

# Project Showcase

Projects should feel immersive.

Each project occupies nearly an entire viewport.

Structure

```
01

Project Name

Category

↓

Large Image

↓

Description

↓

Visit →
```

Hover

Image scales

Typography shifts

Cursor transforms

---

# Buttons

Buttons should not look like buttons.

Preferred

```
View Project →

Read More →

Let's Talk →
```

Hover

Arrow slides.

Underline grows.

---

# Forms

Minimal.

Bottom border only.

Example

```
Name

_____________________

Email

_____________________

Message

_____________________
```

---

# Cursor

Large custom cursor.

Magnetic interaction.

Changes depending on context.

Examples

```
View

Open

Play

Drag

Explore
```

---

# Scroll Behaviour

Smooth scrolling.

Sections transition slowly.

Hero pins briefly.

Typography slides independently.

Images reveal using masks.

Horizontal scrolling is acceptable for project galleries.

---

# Image Treatments

Use

- grayscale
- grain overlay
- subtle blur
- cinematic crops
- soft shadows only when necessary

Avoid

- rounded corners
- colorful overlays
- excessive gradients

---

# Micro Interactions

Hover

- typography tracking expands
- underline animates
- image zooms slightly
- cursor morphs

Scroll

- text reveals
- clip-path wipes
- staggered paragraphs
- parallax imagery

---

# Components

Cards

Avoid.

Prefer full-width layouts.

Icons

Outline.

Minimal.

Thin strokes.

Dividers

1px.

Light gray.

Spacing over borders.

---

# Animation Library

GSAP

Primary animation engine.

Use

- ScrollTrigger
- Flip
- SplitText
- Observer

Lenis

Smooth scrolling.

Framer Motion

Only for simple component interactions.

Avoid using Framer Motion for scroll storytelling.

---

# Performance

Animation should always maintain 60fps.

Use

transform

opacity

clip-path

Avoid

width

height

top

left

whenever possible.

Lazy load imagery.

Preload hero assets.

---

# Accessibility

Minimum contrast ratio AA.

Respect prefers-reduced-motion.

Keyboard navigation required.

Focus states remain visible.

---

# Overall Feeling

The experience should feel like

- a luxury magazine
- a creative director's portfolio
- an architectural publication
- a fashion editorial
- an art gallery

Never feel like

- a SaaS landing page
- a dashboard
- a Bootstrap template
- a startup website
- a component library

---

# Keywords

Editorial

Swiss Grid

Brutalism

Minimalism

Luxury

Typography First

Monochrome

Art Direction

Negative Space

Confidence

Cinematic

Timeless

Premium

Intentional

Gallery Experience

Magazine Layout

Modern

Sophisticated

Immersive

High-End Digital Craft