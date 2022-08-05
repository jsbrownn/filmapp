import React from "react";
import { Header } from "../components";
function Layout({ children }: any) {
  return (
    <div className="bg-gray-100 h-100">
      <Header />
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        {children}
      </main>
    </div>
  );
}

export default Layout;
