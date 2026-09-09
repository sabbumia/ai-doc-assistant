import React from "react";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

function EmergencyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default EmergencyLayout;
