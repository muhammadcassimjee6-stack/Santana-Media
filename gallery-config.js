/*
 * ============================================================
 * SANTANA MEDIA — GALLERY CONFIGURATION
 * ============================================================
 * 
 * INSTRUCTIONS:
 * 1. Download each Google Drive folder
 * 2. Place the files in the matching images/ subfolder
 * 3. List the actual filenames below for each category
 * 4. The site will automatically build adaptive galleries
 * 
 * VIDEOGRAPHY: https://drive.google.com/drive/folders/12zZaQOM2JhOQz29wQw-xp8Fzm82wMdRN
 * GRADUATION:  https://drive.google.com/drive/folders/1apdEnJyTcVycdpty-eBxqHTLS2rlMsCP
 * PORTRAITS:   https://drive.google.com/drive/folders/1nUcLskX2Bhe4xuPmddBmxjeGqfNSr2BF
 * MATRIC DANCE:https://drive.google.com/drive/folders/1TiIXRPKHdgWEO8aSzc9gOh3nBVuEmnXw
 * BIRTHDAYS:   https://drive.google.com/drive/folders/1cm9XPViQHpY2SUzM4bKyQ5sqeKIhoz2R
 * EVENTS:      https://drive.google.com/drive/folders/1vfkO8QktjgBPR85OQZrSwEjJXzepO934
 * CORPORATE:   https://drive.google.com/drive/folders/17d51DoNpkNAVIRl6vbYeGtYaXtb8sLH6
 * 
 * For each category, make sure cover.jpg (or cover.mp4 for videography) exists.
 * Then list all other gallery images below.
 */

window.GALLERY_CONFIG = {
  videography: {
    title: 'Videography',
    description: 'Cinematic films crafted with intention — frame by frame, breath by breath.',
    // List all your images from images/videography/ folder
    // (cover.jpg and cover.mp4 are used automatically for hero/thumbnail)
    images: [
      '01.jpg',
      '02.jpg',
      '03.jpg',
      '04.jpg',
      '05.jpg',
      '06.jpg'
      // Add more filenames as needed
    ]
  },

  graduation: {
    title: 'Graduation',
    description: 'Years of work, captured in a single, unforgettable afternoon.',
    images: [
      '01.jpg',
      '02.jpg',
      '03.jpg',
      '04.jpg',
      '05.jpg',
      '06.jpg',
      '07.jpg',
      '08.jpg'
    ]
  },

  portraits: {
    title: 'Portraits',
    description: 'Editorial portraiture that holds a person in their full presence.',
    images: [
      '01.jpg',
      '02.jpg',
      '03.jpg',
      '04.jpg',
      '05.jpg',
      '06.jpg',
      '07.jpg',
      '08.jpg'
    ]
  },

  'matric-dance': {
    title: 'Matric Dance',
    description: 'The final dance — and every shimmer of it preserved.',
    images: [
      '01.jpg',
      '02.jpg',
      '03.jpg',
      '04.jpg',
      '05.jpg',
      '06.jpg',
      '07.jpg'
    ]
  },

  birthdays: {
    title: 'Birthdays',
    description: 'Joy, laughter, candles — captured with warmth and intention.',
    images: [
      '01.jpg',
      '02.jpg',
      '03.jpg',
      '04.jpg',
      '05.jpg',
      '06.jpg',
      '07.jpg'
    ]
  },

  events: {
    title: 'Events',
    description: 'Atmospheric coverage of gatherings, openings, and celebrations.',
    images: [
      '01.jpg',
      '02.jpg',
      '03.jpg',
      '04.jpg',
      '05.jpg',
      '06.jpg',
      '07.jpg'
    ]
  },

  corporate: {
    title: 'Corporate',
    description: 'Polished visuals for brands that take themselves seriously.',
    images: [
      '01.jpg',
      '02.jpg',
      '03.jpg',
      '04.jpg',
      '05.jpg',
      '06.jpg',
      '07.jpg'
    ]
  }
};
