import React from 'react';

type PreProps = {
  children: React.ReactNode;
};

const Pre: React.FC<PreProps> = ({ children }) => {
  return (
    <pre className="overflow-x-auto rounded bg-gray-200 p-4">
      <code>{children}</code>
    </pre>
  );
};

export default Pre;