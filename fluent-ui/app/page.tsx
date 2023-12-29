import { PrimaryButton } from "@fluentui/react";
// Same deal as ant, evergreen, chakra
import Image from "next/image";

const data = [
  {
    name: "Next.js",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300",
  },
  {
    name: "Vercel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300",
  },
  {
    name: "TypeScript",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300",
  },
  {
    name: "Tailwind CSS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300",
  },
  {
    name: "ESLint",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300",
  },
  {
    name: "Prettier",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300",
  },
  {
    name: "PostCSS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300",
  },
  {
    name: "Jest",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300",
  },
  {
    name: "React Testing Library",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300",
  },
];

export default function Home() {
  return (
    <main>
      {data.map(({ name, description, image }) => (
        <div key={name}>
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="flex-none w-8 h-8"
          />
          <h2>{name}</h2>
          <p>{description}</p>
          <button>Learn More</button>
          <PrimaryButton>Primary</PrimaryButton>
        </div>
      ))}
    </main>
  );
}
