import React from "react";
import Sidebar from "@/app/components/Sidebar";
import Specifies from "@/app/components/Specifics";

interface CanvasProps {
    children: React.ReactNode;
}

export default function Canvas({ children }: CanvasProps) {
    return (
        <main className="flex flex-row h-svh">
            <Sidebar>{children}</Sidebar>
            <Specifies>{children}</Specifies>
        </main>
    );
}