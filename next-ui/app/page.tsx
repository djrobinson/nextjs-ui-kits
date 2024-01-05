import CardDemo from "@/components/CardDemo";

const data = [
  {
    name: "Next.js",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
  {
    name: "Vercel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
  {
    name: "TypeScript",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
  {
    name: "Tailwind CSS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
  {
    name: "ESLint",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
  {
    name: "Prettier",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
  {
    name: "PostCSS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
  {
    name: "Jest",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
  {
    name: "React Testing Library",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/300/180",
  },
];

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl text-center">NextUI</h1>
      <div className="p-12">
        <h2 className="text-3xl font-extrabold">Projects</h2>
        <p className="text-slate-400 text-lg">
          Filter and sort through the item collection to find ideal
          opportunities, then click "Learn more" to purchase.
        </p>
        <div className="gap-8 grid justify-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 overflow-y:scroll mt-8">
          {data.map(({ name, description, image }, i) => (
            <div key={i} className="inline-flex">
              <CardDemo name={name} description={description} image={image} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
