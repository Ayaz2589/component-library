import React from "react";

const Container = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <main className="p-10 sm:px-16 lg:px-44">
      <div className="mx-auto max-w-31 space-y-10">
        <header>
          <h1 className="block text-2xl font-bold text-gray-800">{title}</h1>
          <p className="mt-2 text-lg text-gray-800">{description}</p>
        </header>
        {children}
      </div>
    </main>
  );
};

export default Container;
