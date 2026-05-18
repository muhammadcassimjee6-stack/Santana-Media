SANTANA MEDIA — WEBSITE SETUP
==============================

This is your complete photography portfolio website.
Open index.html in Chrome and it works immediately.

STEP 1: ADD YOUR GOOGLE DRIVE MEDIA
====================================

Download each Google Drive folder and place the files in the matching folder:

VIDEOGRAPHY → images/videography/
  https://drive.google.com/drive/folders/12zZaQOM2JhOQz29wQw-xp8Fzm82wMdRN

GRADUATION → images/graduation/
  https://drive.google.com/drive/folders/1apdEnJyTcVycdpty-eBxqHTLS2rlMsCP

PORTRAITS → images/portraits/
  https://drive.google.com/drive/folders/1nUcLskX2Bhe4xuPmddBmxjeGqfNSr2BF

MATRIC DANCE → images/matric-dance/
  https://drive.google.com/drive/folders/1TiIXRPKHdgWEO8aSzc9gOh3nBVuEmnXw

BIRTHDAYS → images/birthdays/
  https://drive.google.com/drive/folders/1cm9XPViQHpY2SUzM4bKyQ5sqeKIhoz2R

EVENTS → images/events/
  https://drive.google.com/drive/folders/1vfkO8QktjgBPR85OQZrSwEjJXzepO934

CORPORATE → images/corporate/
  https://drive.google.com/drive/folders/17d51DoNpkNAVIRl6vbYeGtYaXtb8sLH6


STEP 2: FILE NAMING
===================

Each folder needs:
  - cover.jpg (or cover.jpeg) — used as the category thumbnail
  - Videography folder also needs cover.mp4 for the hero video

For gallery images, you have 2 options:

OPTION A (Easiest): Name your files sequentially
  01.jpg
  02.jpg
  03.jpg
  04.jpg
  ...

The default gallery-config.js is already set up for this.

OPTION B: Use your actual filenames
  Open gallery-config.js and replace the filenames for each category:

  videography: {
    images: [
      'behind-the-scenes.jpg',
      'camera-setup.jpg',
      'on-location.jpg'
    ]
  }


STEP 3: OPEN THE WEBSITE
=========================

Double-click index.html — it opens in your browser and works immediately.

All pages, galleries, navigation, lightbox, mobile menu, and animations
are fully functional.


HOW THE ADAPTIVE GALLERY WORKS
================================

The JavaScript automatically:
  1. Reads each image's natural dimensions
  2. Detects if it's portrait, landscape, ultrawide, or tall
  3. Groups images into cinematic layouts:
     - Two portraits side by side
     - Ultrawides full width
     - Asymmetric portrait + landscape pairs
     - Solo landscapes centered
  4. Sets each container to the image's true aspect ratio

Result: NO cropping, NO stretching, NO distortion — every image shows
in its original proportions, beautifully laid out.


UPLOADING TO WEB HOSTING
==========================

To put this live:
  1. Upload all files/folders to your web host
  2. Point your domain at it
  3. Done

Works on any host: Netlify, Vercel, cPanel, GitHub Pages, etc.


CONTACT INFO
============

All WhatsApp / email / Instagram links are already wired throughout:
  - WhatsApp: +27 66 241 4503 (opens chat directly)
  - Email: dustinscott692@gmail.com
  - Instagram: @santana_shoots

These appear in:
  - Navbar
  - Mobile menu
  - Footer
  - Floating WhatsApp button
  - Contact section
  - Every "Book Now" button


PROJECT STRUCTURE
=================

santana-media/
├── index.html                 ← Landing page
├── style.css                  ← All styling (25 KB)
├── script.js                  ← Navbar, menu, gallery, lightbox
├── gallery-config.js          ← Image filenames for each category
├── README.txt                 ← This file
├── images/
│   ├── videography/           ← Your videography photos + cover.mp4
│   ├── graduation/            ← Your graduation photos
│   ├── portraits/             ← Your portrait photos
│   ├── matric-dance/          ← Your matric dance photos
│   ├── birthdays/             ← Your birthday photos
│   ├── events/                ← Your event photos
│   └── corporate/             ← Your corporate photos
└── pages/
    ├── videography.html
    ├── graduation.html
    ├── matric-dance.html
    ├── birthdays.html
    ├── events.html
    ├── portraits.html
    └── corporate.html


DESIGN NOTES
============

Typography:
  - Display: Cormorant Garamond (elegant serif)
  - Body: Inter Tight (modern sans-serif)

Colors:
  - Background: Deep black (#0a0a0a)
  - Text: Warm bone (#e8e6e1)
  - Accent: Muted neutrals (no yellow anywhere)

Layout:
  - Horizontal stacked image rows (editorial magazine style)
  - Cinematic spacing and vignettes
  - Smooth scroll animations
  - Fully responsive (desktop, tablet, mobile)

Video:
  - Videography hero: autoplay, loop, muted, no controls
  - Works on mobile (playsinline attribute)


QUESTIONS?
==========

If images don't show:
  1. Check file paths match gallery-config.js exactly
  2. Make sure cover.jpg exists in each folder
  3. Check browser console (F12) for errors

The adaptive gallery handles ALL aspect ratios — just drop your photos in.
