import { CardDemo } from "@/components/cardDemo";

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
      <div className="flex flex-wrap gap-6 p-12 justify-center">
        {data.map(({ name, description, image }) => (
          <CardDemo
            key={name}
            name={name}
            description={description}
            image={image}
          />
        ))}
      </div>
    </main>
  );
}
