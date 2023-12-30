import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";

export default function CardDemo({ name, description, image }) {
  return (
    <Card className="max-w-[400px] min-h-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={60}
          radius="sm"
          src={image}
          width={60}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button>Click Here</Button>
      </CardFooter>
    </Card>
  );
}
