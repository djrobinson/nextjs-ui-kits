import { Chip } from "@nextui-org/react";

export const MyChip = ({ children }: any) => {
    return <Chip classNames={{
        base: 'bg-success'
    }} >{children}</Chip>
}