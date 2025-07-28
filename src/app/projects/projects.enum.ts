export enum Projects {
  Enlil = 'Enlil',
  Papsukkal = 'Papsukkal',
  Ninshubur = 'Ninshubur',
  Papsukkal_Experiment = 'MovieCataloguerJavaSwing',
  TextEncrypter = 'TextEncrypter',
  UnitsConverter = 'UnitsConverter',
  LeetCodeRust = 'LeetCodeRust',
}

export const PROJECT_DETAILS: Record<Projects, {
  title: string;
  tags: string[];
  description: string;
  repository: string;
  demo?: string;
  downloadPreview?: string;
}> = {
  [Projects.Papsukkal]: {
    title: 'Papsukkal',
    tags: ['Java ♨️', 'Spring Boot 🍃', 'MongoDB 📃', 'Angular 🅰️'],
    description: 'This is a movie cataloging project developed using Java 11+, Spring Boot, MongoDB (back-end) and Angular (front-end). It allows you to register movies and assign them a custom score on a scale from 0 to 10.',
    repository: 'https://github.com/ryunezm/papsukkal',
  },
  [Projects.TextEncrypter]: {
    title: 'Text encrypter',
    tags: ['HTML 📑', 'CSS 🎨', 'JavaScript 💡'],
    description: 'An application for encrypting and decrypting text using predefined rules. Works with lowercase letters only, excluding accented characters and special symbols.',
    repository: 'https://github.com/ryunezm/EncriptadorTextoHTML',
    demo: 'https://ryunezm.github.io/EncriptadorTextoHTML',
  },
  [Projects.UnitsConverter]: {
    title: 'Units converter',
    tags: ['Java ♨️'],
    description: 'This project is a unit conversion application that provides functionality to convert between different types of units, such as currency, length, mass, temperature, and time.',
    repository: 'https://github.com/ryunezm/Unit_Converter',
    downloadPreview: 'https://github.com/ryunezm/Unit_Converter/releases/download/v0.0.1-alpha/JavaCurrencyConverter.jar',
  },
  [Projects.LeetCodeRust]: {
    title: "LeetCode's problems solved in Rust",
    tags: ['Rust 🦀'],
    description: 'Series of exercises solved in Rust, for now, the easy ones, as I become more familiar with this lovely language.',
    repository: 'https://github.com/ryunezm/leetcode_rust',
  },

  [Projects.Papsukkal_Experiment]: {
    title: "Papsukkal (Experiment)",
    tags: ['Java ♨️', 'H2 🗄️'],
    description: 'Small experiment of a local application (movie cataloguer) using Java and part of Spring Boot to simplify the database part (H2).',
    repository: 'https://github.com/ryunezm/papsukkal_javaswing'
  },
  [Projects.Ninshubur]: {
    title: "Ninshubur",
    tags: ['Java ♨️', 'Spring Boot 🍃', 'PostgreSQL 🐘'],
    description: 'Restaurant management system: allows customers to place orders, employees to manage them, and administrators to monitor users and the menu. Includes JWT authentication, role control, automated testing and clean, layer-based architecture.',
    repository: "https://github.com/ryunezm/Ninshubur",
    demo: undefined,
    downloadPreview: undefined
  },
  [Projects.Enlil]: {
    title: "Enlil",
    tags: ['Angular 🅰️'],
    description: 'Small weather app using Nominatim and OpenWeather APIs.',
    repository: "https://github.com/ryunezm/enlil",
    demo: "https://ryunezm.github.io/enlil",
    downloadPreview: undefined
  }
};
