import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <header></header>
      <main>
        <nav></nav>
        <section></section>
      </main>
      <footer></footer>
    </>
  )
};
