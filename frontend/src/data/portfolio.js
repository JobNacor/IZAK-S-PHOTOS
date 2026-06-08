import cameraDetail from "../images/Camera1.png";
import portraitOne from "../images/img1.jpg";
import portraitTwo from "../images/img2.jpg";
import portraitThree from "../images/img3.jpg";
import aboutPhotographer from "../images/portfolio/about-photographer.png";
import brandEditorial from "../images/portfolio/brand-editorial.png";
import eventCoverage from "../images/portfolio/event-coverage.png";
import heroPortrait from "../images/portfolio/hero-portrait.png";

export const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Booking", path: "/booking" },
];

export const portfolioCategories = [
  "All",
  "Portraits",
  "Editorial",
  "Events",
  "Commercial",
];

export const projectImages = {
  heroPortrait,
  brandEditorial,
  eventCoverage,
  aboutPhotographer,
  cameraDetail,
  portraitOne,
  portraitTwo,
  portraitThree,
};

export const projects = [
  {
    id: "studio-language",
    title: "Studio Language",
    category: "Editorial",
    year: "2026",
    location: "Santo Domingo Studio",
    cover: heroPortrait,
    layout: "feature",
    summary:
      "A cinematic portrait study built around gaze, contrast, and quiet confidence.",
    description:
      "A controlled editorial session where the lighting stays minimal and the subject carries the frame. The goal was a portrait sequence that feels premium, intimate, and intentional.",
    deliverables: ["16 final portraits", "Private proofing gallery", "Editorial crops"],
    gallery: [heroPortrait, portraitTwo, portraitThree, portraitOne],
  },
  {
    id: "founder-editorial",
    title: "Founder Editorial",
    category: "Commercial",
    year: "2026",
    location: "Colonial City",
    cover: brandEditorial,
    layout: "tall",
    summary:
      "Campaign-ready imagery for a founder profile, launch story, and press kit.",
    description:
      "A polished brand session with a natural city backdrop, refined styling, and enough variation for web, social, editorial, and investor-facing material.",
    deliverables: ["Creative treatment", "40 edited images", "Usage-aware delivery"],
    gallery: [brandEditorial, aboutPhotographer, cameraDetail, portraitThree],
  },
  {
    id: "after-hours",
    title: "After Hours",
    category: "Events",
    year: "2026",
    location: "Private Reception",
    cover: eventCoverage,
    layout: "wide",
    summary:
      "Documentary coverage focused on atmosphere, movement, and real emotion.",
    description:
      "A private evening event photographed with a discreet documentary approach, preserving the warmth, timing, and small human details of the room.",
    deliverables: ["Low-light coverage", "Preview selects", "Full event gallery"],
    gallery: [eventCoverage, brandEditorial, portraitOne, heroPortrait],
  },
  {
    id: "natural-light-portraits",
    title: "Natural Light Portraits",
    category: "Portraits",
    year: "2026",
    location: "Window Light Studio",
    cover: portraitTwo,
    layout: "tall",
    summary:
      "Soft, close portraiture shaped by expression, skin texture, and honest stillness.",
    description:
      "A personal portrait session using clean direction and available light. The result is gentle, direct, and deeply human.",
    deliverables: ["Guided posing", "20 edited portraits", "Print-ready exports"],
    gallery: [portraitTwo, portraitOne, portraitThree, heroPortrait],
  },
  {
    id: "quiet-presence",
    title: "Quiet Presence",
    category: "Portraits",
    year: "2026",
    location: "Personal Session",
    cover: portraitThree,
    layout: "square",
    summary:
      "A moody, warm portrait set with minimal styling and a strong emotional center.",
    description:
      "Built around small movements, soft shadows, and a calm session rhythm that lets the subject settle into the frame.",
    deliverables: ["Moodboard support", "Retouched finals", "Mobile crops"],
    gallery: [portraitThree, portraitTwo, portraitOne, brandEditorial],
  },
  {
    id: "atelier-notes",
    title: "Atelier Notes",
    category: "Commercial",
    year: "2025",
    location: "Creative Studio",
    cover: cameraDetail,
    layout: "square",
    summary:
      "Detail-driven image assets for a small creative studio and its launch content.",
    description:
      "A visual language system of tools, textures, portraits, and scene-setting details for a refined studio brand.",
    deliverables: ["Brand details", "Website crops", "Launch gallery"],
    gallery: [cameraDetail, aboutPhotographer, brandEditorial, eventCoverage],
  },
];

export const heroSlides = [
  {
    title: "Portraits with presence. Stories with light.",
    text:
      "Refined portrait, editorial, and event photography for people and brands that want images with atmosphere, clarity, and intention.",
    image: heroPortrait,
    projectId: "studio-language",
  },
  {
    title: "Editorial images that feel composed, never manufactured.",
    text:
      "A calm creative process for founders, artists, and modern brands that need visual work with depth.",
    image: brandEditorial,
    projectId: "founder-editorial",
  },
  {
    title: "Event coverage with timing, warmth, and discretion.",
    text:
      "Documentary storytelling for intimate celebrations, launches, and rooms where the details matter.",
    image: eventCoverage,
    projectId: "after-hours",
  },
];

export const services = [
  {
    number: "01",
    title: "Portrait Session",
    price: "$650",
    duration: "2 hours",
    image: portraitThree,
    summary:
      "Guided portraits for artists, professionals, couples, and anyone ready for images with presence.",
    details: ["Direction before every frame", "Natural or studio light", "Private proofing gallery"],
  },
  {
    number: "02",
    title: "Brand Editorial",
    price: "$1,250",
    duration: "Half day",
    image: brandEditorial,
    summary:
      "Campaign-ready visuals for founders, products, press kits, launches, and personal brands.",
    details: ["Creative treatment", "Location planning", "Usage-aware image delivery"],
  },
  {
    number: "03",
    title: "Event Coverage",
    price: "$1,800",
    duration: "4 hours",
    image: eventCoverage,
    summary:
      "Discreet documentary coverage that preserves tone, energy, and emotional moments.",
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

export const testimonials = [
  {
    name: "Maya L.",
    project: "Portrait Session",
    quote:
      "Izak made the whole experience feel easy and genuine. The photos are more beautiful than I imagined.",
    image: portraitOne,
  },
  {
    name: "Amanda & James",
    project: "Private Event",
    quote:
      "He caught the exact feeling of the evening. Nothing felt staged, but every image looks intentional.",
    image: eventCoverage,
  },
  {
    name: "Elena R.",
    project: "Brand Editorial",
    quote:
      "The final gallery gave my brand the confidence and refinement I was missing.",
    image: brandEditorial,
  },
];

export const about = {
  image: aboutPhotographer,
  cameraImage: cameraDetail,
  intro:
    "I photograph people, brands, and rooms with a quiet, intentional approach: less posing, more presence.",
  body:
    "The work is built on natural light, honest connection, and a careful edit. Whether the project is a personal portrait, a founder campaign, or a private event, the goal is the same: images that feel composed without feeling manufactured.",
  location: "Based in Santo Domingo. Available for selected travel projects.",
};

export const studioStats = [
  { value: "6+", label: "Years behind the camera" },
  { value: "240+", label: "Delivered client galleries" },
  { value: "48h", label: "Typical preview turnaround" },
];
