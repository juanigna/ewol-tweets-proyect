import AppContext from '.';
import { useState, useEffect } from 'react';

const AppContextProvider = ({ children }) => {
    const initialDataState =
        JSON.parse(window.localStorage.getItem('app_context')) ?? {};
    const [appState, setAppState] = useState(initialDataState);

    useEffect(() => {
        window.localStorage.setItem('app_context', JSON.stringify(appState));
    }, [appState]);

    return (
        <AppContext.Provider value={{ data: appState, setData: setAppState }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
