import * as React from 'react';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header text-center">
        <h1 className="bg-blue-600 text-5xl border-neutral-800 font-extrabold m-5">template</h1>
        <p className="callout">
          Edit <code>/src/routes/index.ts</code> for routes config.
        </p>
        <p>
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code className="underline text-green-600 ">template</code>
          </a>
          {' | '}
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code className="underline text-green-600">welcome</code>
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
