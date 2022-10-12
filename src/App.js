import AppContextProvider from './app/contexts/AppContext/AppContextProvider';
import RegisterLayout from './app/pages/Register/components/Layout';
import './global-styles.css';

function App() {
    return (
        <AppContextProvider>
            <div className="App">
                <RegisterLayout />
            </div>
        </AppContextProvider>
    );
}

export default App;
