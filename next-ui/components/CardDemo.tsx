import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Image,
} from "@nextui-org/react";

export default function CardDemo({ name, description, image }: any) {
  console.log("where is this logging");

  return (
    <Card
      isFooterBlurred
      radius="sm"
      className="border-none rounded-small shadow-none"
    >
      <CardHeader className="p-0">
        <Image className="rounded-none" alt={description} src={image} />
      </CardHeader>
      <Chip
        className="absolute z-10 right-3 top-3 bg-white border-black border-2"
        radius="sm"
        variant="bordered"
      >
        $50M
      </Chip>
      <CardBody className="flex flex-column p-0 pt-2">
        <h3 className="text-large font-extrabold dark:text-white/80">{name}</h3>
        <div className="mt-2 flex flex-row gap-2">
          <Chip
            radius="md"
            color="primary"
            className="flex space-between text-background"
          >
            <div className="flex justify-between align-center">
              <svg
                className="h-3 w-3 mt-1 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <line x1="12" y1="1" x2="12" y2="23" />{" "}
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <p>XTC</p>
            </div>
          </Chip>

          <Chip
            radius="md"
            color="primary"
            className="flex space-between text-background"
          >
            <div className="flex justify-between align-center">
              <svg
                className="h-3 w-3 mt-1 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <p>Solar</p>
            </div>
          </Chip>
        </div>
        <div className="mt-2 flex flex-row gap-2">
          <Chip
            radius="md"
            color="primary"
            className="flex space-between text-background"
          >
            <div className="flex justify-between align-center">
              <svg
                className="h-3 w-3 mr-2 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />{" "}
                <line x1="16" y1="2" x2="16" y2="6" />{" "}
                <line x1="8" y1="2" x2="8" y2="6" />{" "}
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <p>Q2 2024</p>
            </div>
          </Chip>
        </div>

        <div className="mt-2 text-gray-400">
          <h4>Northeast</h4>
        </div>
        <div className="mt-2">
          <Button className="text-tiny text-white" color="primary" size="sm">
            Learn more
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
