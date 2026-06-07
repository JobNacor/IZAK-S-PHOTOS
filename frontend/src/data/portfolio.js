import aboutPhotographer from "../images/portfolio/about-photographer.png";
import brandEditorial from "../images/portfolio/brand-editorial.png";
import eventCoverage from "../images/portfolio/event-coverage.png";
import heroPortrait from "../images/portfolio/hero-portrait.png";
import cameraDetail from "../images/Camera1.png";
import portraitOne from "../images/img1.jpg";
import portraitTwo from "../images/img2.jpg";
import portraitThree from "../images/img3.jpg";


export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const portfolioCategories = [
  "All",
  "Portraits",
  "Editorial",
  "Events",
  "Commercial",
];

export const works = [
  {
    id: "natural-light-portraits",
    title: "Natural Light Portraits",
    category: "Portraits",
    year: "2026",
    location: "Studio / Natural Light",
    image: portraitTwo,
    layout: "tall",
    description:
      "A quiet portrait series shaped by soft light, honest expression, and clean direction.",
  },
  {
    id: "founder-editorial",
    title: "Founder Editorial",
    category: "Commercial",
    year: "2026",
    location: "Brand Campaign",
    image: brandEditorial,
    layout: "tall",
    description:
      "Elevated imagery for founders, creators, and brands that need confidence without noise.",
  },
  {
    id: "after-hours",
    title: "After Hours",
    category: "Events",
    year: "2026",
    location: "Private Reception",
    image: eventCoverage,
    layout: "wide",
    description:
      "Documentary-style event coverage focused on atmosphere, movement, and real emotion.",
  },
  {
    id: "warm-studio-profile",
    title: "Warm Studio Profile",
    category: "Portraits",
    year: "2026",
    location: "Editorial Portrait",
    image: portraitThree,
    layout: "medium",
    description:
      "An intimate studio portrait built around warmth, texture, and a natural connection.",
  },
  {
    id: "quiet-presence",
    title: "Quiet Presence",
    category: "Portraits",
    year: "2026",
    location: "Personal Session",
    image: portraitOne,
    layout: "medium",
    description:
      "Minimal portrait direction that lets the subject carry the frame with stillness.",
  },
  {
    id: "studio-language",
    title: "Studio Language",
    category: "Editorial",
    year: "2026",
    location: "Creative Direction",
    image: heroPortrait,
    layout: "medium",
    description:
      "A cinematic editorial study of gaze, shadow, skin texture, and controlled contrast.",
  },
];

export const services = [
  {
    number: "01",
    title: "Portrait Sessions",
    image: portraitThree,
    summary:
      "Guided personal portraits for artists, professionals, couples, and anyone ready for images with presence.",
    details: ["Direction before every frame", "Natural or studio light", "Private proofing gallery"],
  },
  {
    number: "02",
    title: "Brand Editorial",
    image: brandEditorial,
    summary:
      "Campaign-ready visuals for founders, products, press kits, launches, and modern personal brands.",
    details: ["Creative treatment", "Location planning", "Usage-aware image delivery"],
  },
  {
    number: "03",
    title: "Event Coverage",
    image: eventCoverage,
    summary:
      "Discreet documentary coverage that preserves the tone, energy, and small emotional moments of an event.",
    details: ["Low-light expertise", "Candid storytelling", "Fast preview selections"],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Connect",
    description:
      "We talk through the story, references, location, and what the images need to feel like.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Mood, wardrobe, timing, and shot priorities become a clear production path.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "The session stays calm and directed, leaving room for honest moments to happen.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Final images are edited with care and delivered in a polished client gallery.",
  },
];

export const about = {
  image: aboutPhotographer,
  cameraImage: cameraDetail,
  intro:
    "I photograph people, brands, and rooms with a quiet, intentional approach: less posing, more presence.",
  body:
    "The work is built on natural light, honest connection, and a careful edit. Whether the project is a personal portrait, a founder campaign, or a private event, the goal is the same: images that feel composed without feeling manufactured.",
  quote:
    "Izak made the whole experience feel easy and genuine. The photos are more beautiful than I imagined.",
  quoteAuthor: "Maya L.",
};
