import {
  tileMasterMockUpImage,
  netflixMockupIllustration,
  weatherAppMockup,
  spaceshipGameMockupImage,
  quickBiteMockupImage,
} from "../assets/asset";

export interface ProjectDetail {
  title: string;
  image: string;
  url: string;
  tags: string[];
  description: string;
  github: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    title: "Tile Maste Game",
    image: tileMasterMockUpImage,
    url: "https://tilemaster.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "I built a browser-based tile puzzle game using HTML, CSS, and vanilla JavaScript. I implemented the core logic for choosing a not matching tile and score tracking, along with responsive design and smooth animations for a clean user experience. The game adjusts difficulty dynamically to keep players engaged.",
    github: "https://github.com/cd-Shrey13/Tile-Master",
  },
  {
    title: "Spaceship Game",
    image: spaceshipGameMockupImage,
    url: "https://spaceship-game-phi.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "Created a 2D SpaceShip Game using HTML, CSS and JavaScript where the player controls a spaceship to destroy obstacles. I handled real-time keyboard/mouse input, obstacle generation, collision detection, and game loop optimization for smooth performance. It was a fun way to explore physics and game mechanics.",
    github: "https://github.com/cd-Shrey13/spaceship-game",
  },
  {
    title: "QuickBite",
    image: quickBiteMockupImage,
    url: "https://quick-bite-henna-one.vercel.app/",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDb"],
    description:
      "developed and full-stack food-ordering website, demonstrating expertise in both front-end and back-end development. Designed an engaging and user-friendly interface, implemented seamless navigation, and integrated secure payment systems. Leveraged a comprehensive tech stack to deliver a responsive and visually appealing website, showcasing a passion for crafting compelling digital experiences",
    github: "https://github.com/cd-Shrey13/QuickBite",
  },
  {
    title: "Landing-page clone",
    image: netflixMockupIllustration,
    url: "https://cd-shrey13.github.io/Netflix-Landing-Page/",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "Landing page build using vanilla javascript",
    github: "https://github.com/cd-Shrey13/Netflix-Landing-Page",
  },
  {
    title: "Weather App",
    image: weatherAppMockup,
    url: "https://cd-shrey13.github.io/Weather-App/",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "Simple weather app built using vanilla Javascript",
    github: "https://github.com/cd-Shrey13/Weather-App",
  },
];

export const colorVarients = ["Default", "Black", "Purple"] as const;
export type ColorVariant = typeof colorVarients[number];

export interface ThemeStyle {
  primaryBackground: string;
  secondaryBackground: string;
  primaryFont: string;
  secondaryFont: string;
  buttonPrimary: string;
  buttonHover: string;
  buttonActive?: string;
  buttonBorder: string;
  cardPrimary: string;
  cardBorder: string;
  buttonText: string;
  colorHighlight: string;
}

export const themeVarients: Record<ColorVariant, ThemeStyle> = {
  Default: {
    primaryBackground: "#0f0c29",
    secondaryBackground: "#0f0c29",
    primaryFont: "oklch(70.7% 0.022 261.325)",
    secondaryFont: "",
    buttonPrimary: "#241f57",
    buttonHover: "oklch(43.482% 0.08354 306.699)",
    buttonText: "#ffffff",
    buttonBorder: "#68638c",
    cardPrimary: "#0d0b1c",
    cardBorder: "#282637",
    colorHighlight: "oklch(62.3% 0.214 259.815)",
  },
  Black: {
    primaryBackground: "#232526",
    secondaryBackground: "#414345",
    primaryFont: "oklch(70.7% 0.022 261.325)",
    secondaryFont: "",
    buttonPrimary: "#222529",
    buttonHover: "#454b52",
    buttonActive: "#68676b",
    buttonBorder: "#68676b",
    cardPrimary: "#1c1d1e",
    cardBorder: "#68676b",
    buttonText: "#ffffff",
    colorHighlight: "oklch(41.631% 0.0036 264.618)",
  },
  Purple: {
    primaryBackground: "#6441A5",
    secondaryBackground: "#2a0845",
    primaryFont: "oklch(70.7% 0.022 261.325)",
    secondaryFont: "",
    buttonPrimary: "#9261ec",
    buttonHover: "#c8aff7",
    buttonActive: "",
    buttonBorder: "#7149bc",
    cardPrimary: "#251233",
    cardBorder: "rgb(139, 114, 214)",
    colorHighlight: "oklch(79.5% 0.184 86.047)",
    buttonText: "#ffffff",
  },
};

export function changeThemeColor(themeColor: ColorVariant) {
  const selectedTheme = themeVarients[themeColor];
  const documentObject = document.documentElement;
  documentObject.style.setProperty(
    "--color-background-primary",
    selectedTheme.primaryBackground,
  );
  documentObject.style.setProperty(
    "--color-background-secondary",
    selectedTheme.secondaryBackground,
  );
  documentObject.style.setProperty(
    "--color-font-primary",
    selectedTheme.primaryFont,
  );
  documentObject.style.setProperty(
    "--color-font-secondary",
    selectedTheme.secondaryFont,
  );
  documentObject.style.setProperty(
    "--color-button-primary",
    selectedTheme.buttonPrimary,
  );
  documentObject.style.setProperty(
    "--color-button-hover",
    selectedTheme.buttonHover,
  );
  documentObject.style.setProperty(
    "--color-button-border",
    selectedTheme.buttonActive ?? "",
  );
  documentObject.style.setProperty(
    "--color-card-primary",
    selectedTheme.buttonBorder,
  );
  documentObject.style.setProperty(
    "--color-card-primary",
    selectedTheme.cardPrimary,
  );
  documentObject.style.setProperty(
    "--color-card-border",
    selectedTheme.cardBorder,
  );
  documentObject.style.setProperty(
    "--color-button-text",
    selectedTheme.buttonText,
  );
  documentObject.style.setProperty(
    "--color-highlight",
    selectedTheme.colorHighlight,
  );
}
