import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "./ui/badge";

type CardProps = React.ComponentProps<typeof Card>;

interface CardDemoProps extends CardProps {
  name: string;
  description: string;
  image: string;
}

export function CardDemo({
  name,
  description,
  image,
  className,
  ...props
}: any) {
  return (
    <Card className={cn("w-[300px]", className)} {...props}>
      <CardHeader className="p-0 relative">
        <Image alt="nextui logo" height={180} width={300} src={image}  />
        <Badge
          className="absolute z-10 right-3 top-3 bg-white border-black border-2"
          variant="outline"
        >
          <p className="font-extrabold">$50M</p>
        </Badge>
      </CardHeader>
      <CardContent className="grid gap-4 mt-4">
        <h3 className="text-large font-extrabold dark:text-white/80">{name}</h3>
        <div className="flex flex-row gap-2">
          <Badge variant="newvariant" className="flex space-between">
            <div className="flex justify-between align-center">
              <svg
                className="h-4 w-4 mr-1"
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
          </Badge>

          <Badge variant="newvariant">
            <div className="flex justify-between align-center">
              <svg
                className="h-4 w-4 mr-1"
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
          </Badge>
        </div>
        <div className="flex flex-row gap-2">
          <Badge variant="newvariant">
            <div className="flex justify-between align-center">
              <svg
                className="h-4 w-4 mr-2"
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
          </Badge>
        </div>

        <div className="text-gray-400">
          <h4>Northeast</h4>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="default" size="sm">
          Learn more
        </Button>
      </CardFooter>
    </Card>
  );
}
