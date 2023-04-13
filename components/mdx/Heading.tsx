import React from 'react';

const H1: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h1 className="mb-6 text-4xl font-bold">{children}</h1>;
};

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h2 className="mb-4 text-3xl font-bold">{children}</h2>;
};

const H3: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h3 className="mb-4 text-2xl font-bold">{children}</h3>;
};

const H4: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h4 className="mb-4 text-xl font-bold">{children}</h4>;
};

export { H1, H2, H3, H4 };