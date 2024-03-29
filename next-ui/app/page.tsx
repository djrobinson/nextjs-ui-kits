import CardDemo from "@/components/CardDemo";

const data = [
  {
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/400/180",
  },
  {
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/400/180",
  },
  {
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/400/180",
  },
  {
    name: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/400/180",
  },
  {
    name: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/400/180",
  },
  {
    name: "Project 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/400/180",
  },
  {
    name: "Project 8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/400/180",
  },
  {
    name: "Project 9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/400/180",
  },
  {
    name: "Project 10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/400/180",
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
          opportunities, then click &quot;Learn More&quot; to purchase
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
