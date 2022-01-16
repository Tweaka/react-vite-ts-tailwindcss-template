import * as React from 'react';

const ErrorPage: React.FC = () => {
  return (
    <div className="bg-red-800 h-screen ">
      <a className="underline absolute pt-2 pl-2 " href="/">
        back to home page
      </a>
      <img className="w-screen h-screen" src="src/images/bison.jpg" alt="404 not found" />
    </div>
  );
};

export default ErrorPage;
