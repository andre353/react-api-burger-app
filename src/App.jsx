import Catalog from './components/Catalog/Catalog';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { ModalDelivery } from './components/ModalDelivery/ModalDelivery';

export const App = () => {

  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <footer></footer>
      <ModalDelivery />
    </>
  )
};
