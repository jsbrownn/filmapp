import React from "react";
import { Header } from "../components";
function Layout({ children }: any) {
  return (
    <div className="bg-gray-100 h-100">
      <Header />
      <main className="p-4">
        {children}
      </main>
    </div>
  );
}

export default Layout;
