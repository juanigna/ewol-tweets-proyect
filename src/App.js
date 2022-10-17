import AppContextProvider from './app/contexts/AppContext/AppContextProvider';
import './app/global-styles.css';
import AppRouter from './app/router/AppRouter';

function App() {
    return (
        <AppContextProvider>
            <AppRouter />
        </AppContextProvider>
    );
}

export default App;
