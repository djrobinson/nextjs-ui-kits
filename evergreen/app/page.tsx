"use client";
import Image from "next/image";

import { Button, Pane, Text, majorScale } from "evergreen-ui";
// DANNY NOTE: SAME DEAL AS CHAKRA & ANT:
// node_modules/evergreen-ui/esm/theme/src/ThemeContext.js (10:32) @ React
//  ⨯ createContext only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/context-in-server-component

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
          <Pane display="flex" alignItems="center" marginX={majorScale(2)}>
            <Button>Click me!</Button>
            <Text>This is a clickable Button</Text>
          </Pane>
        </div>
      ))}
    </main>
  );
}
