import { CardDemo } from "@/components/cardDemo";

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
      <div className="flex flex-wrap">
        {data.map(({ name, description, image }) => (
          <CardDemo />
        ))}
      </div>
    </main>
  );
}
