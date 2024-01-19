import React, { ReactNode } from "react";
import Sidebar from "../Sidebar";

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <div>
            <Sidebar />
            <main>
                {children}
            </main>
        </div>
    );
}

export default RootLayout;