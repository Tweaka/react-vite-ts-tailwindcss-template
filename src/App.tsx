import * as React from 'react';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header text-center">
        <h1 className="bg-blue-600 text-5xl border-neutral-800 font-extrabold m-5"> vite + typescript + tailwindcss Template</h1>
        <p className="callout">
          Edit <code>/src/routes/index.ts</code> for routes config.
        </p>
        <p>
          <a
            className="app-link"
            href="https://daisyui.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="underline text-green-600 ">add daisyui</p>
          </a>
          <code>
            npm i daisyui <br /> require('daisyui'), => tailwindconfig/plugins
          </code>
        </p>
      </header>
    </div>
  );
};

export default App;
