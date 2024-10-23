import { Card, CardHeader, CardOverflow } from "@signalco/ui-primitives/Card";
import Link from "next/link";
import { PropsWithChildren } from "react";

export function ItemCard({ children, label, href }: PropsWithChildren<{ label: string, href: string }>) {
    return (
        <Link href={href || ''} passHref legacyBehavior>
            <Card className="overflow-hidden">
                <CardOverflow className="p-6 aspect-square">
                    <div className="relative size-full">
                        {children}
                    </div>
                </CardOverflow>
                <CardHeader className="bg-muted/60 border-t -m-2 px-2 py-2 text-center">{label}</CardHeader>
            </Card>
        </Link>
    );
}