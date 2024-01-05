import { PrimaryButton } from "@fluentui/react";
// Same deal as ant, evergreen, chakra
import Image from "next/image";

const data = [
  {
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
  {
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
  {
    name: "Projec 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
  {
    name: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
  {
    name: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
  {
    name: "Project 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
  {
    name: "Project 8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
  {
    name: "Project 9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
  {
    name: "Project 10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
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
