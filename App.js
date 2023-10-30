import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {PaperProvider} from 'react-native-paper';
import Navigations from './src/navigation';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} />
            <PaperProvider>
                <Navigations />
            </PaperProvider>
        </Provider>
    );
}

export default App;
