import { store } from './redux/store';
import { Provider } from 'react-redux';
import './Firebase/FirebaseConfig';
import Footer from './Components/Footer/Footer';
import ScreenManager from './Components/ScreenManager';

function App() {
  return (
    <Provider store={store}>
      <ScreenManager />
      <Footer />
    </Provider>
  );
}

export default App;
