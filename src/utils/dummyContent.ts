// Collection of dummy headlines, subheadlines, and image URLs to simulate AI regeneration

export interface DummyContent {
  headline: string;
  subheadline: string;
  imageUrl: string;
  imageAlt: string;
}

export const dummyContents: DummyContent[] = [
  {
    headline: "Transform Your Digital Experience,Click me to Change the text ",
    subheadline: "Create beautiful user interfaces that engage and inspire with our powerful design system.",
    imageUrl: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Team collaborating on digital design project"
  },
  {
    headline: "Elevate Your Brand with AI-Powered Design ,Click me to Change the text",
    subheadline: "Leverage advanced machine learning algorithms to create stunning visuals that captivate your audience.",
    imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Futuristic AI visualization"
  },
  {
    headline: "Unlock Your Creative Potential,Click me to Change the text",
    subheadline: "Empower your team with cutting-edge tools that streamline your workflow and boost productivity.",
    imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Creative team brainstorming session"
  },
  {
    headline: "Craft Experiences That Inspire,Click me to Change the text",
    subheadline: "Build immersive digital journeys that connect with your audience on a deeper level.",
    imageUrl: "https://images.pexels.com/photos/3182744/pexels-photo-3182744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "User experiencing digital content"
  },
  {
    headline: "Design Without Boundaries,Click me to Change the text",
    subheadline: "Break free from constraints with our flexible and powerful design platform.",
    imageUrl: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Designer working on creative project"
  },
  {
    headline: "Reimagine What's Possible,Click me to Change the text",
    subheadline: "Push the boundaries of digital design with our innovative and intuitive platform.",
    imageUrl: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Innovative design concept visualization"
  },
  {
    headline: "Build the Future of Digital Experience,Click me to Change the text",
    subheadline: "Create tomorrow's interfaces today with our cutting-edge design tools and frameworks.",
    imageUrl: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Futuristic digital interface design"
  }
];

export const getRandomContent = (): DummyContent => {
  const randomIndex = Math.floor(Math.random() * dummyContents.length);
  return dummyContents[randomIndex];
};