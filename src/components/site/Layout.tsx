import React from "react";
import { Navbar } from ".";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
