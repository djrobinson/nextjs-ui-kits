import Image from "next/image";

type Props = {
  image: string;
  name: string;
  description: string;
  price: string;
};

export default function Card({ image, name, description, price }: Props) {
  return (
    <div className="column">
      <div key={name} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
          <Image
            width={300}
            height={300}
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <h3 className="text-large font-extrabold dark:text-white/80">{name}</h3>
        <div className="mt-2 flex flex-row gap-2">
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            <div className="flex justify-between align-center">
              <svg
                className="h-3 w-3 mt-1 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <line x1="12" y1="1" x2="12" y2="23" />{" "}
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <p>PTC</p>
            </div>
          </span>

          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            <div className="flex justify-between align-center">
              <svg
                className="h-3 w-3 mt-1 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <p>Solar</p>
            </div>
          </span>
        </div>
        <div className="mt-2 flex flex-row gap-2">
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            <svg
              className="h-3 w-3 mr-2 mt-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />{" "}
              <line x1="16" y1="2" x2="16" y2="6" />{" "}
              <line x1="8" y1="2" x2="8" y2="6" />{" "}
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <p>Q2 2024</p>
          </span>
        </div>

        <div className="mt-2 text-gray-400">
          <h4>Northeast</h4>
        </div>
        <div className="mt-2">
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            Learn more
          </span>
        </div>
      </div>
    </div>
  );
}
