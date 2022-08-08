import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CheckOut } from '../pages/CheckOut';
import { Home } from '../pages/Home';
import { Items } from '../pages/Items';
import { Item } from '../pages/Item';
import { Layout } from '../components/Layout';
import { AppContext } from '../context/AppContext';
import { useInitialState } from '../hooks/useInitialState';

function App() {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/items" element={<Items />} />
                        <Route exact path="/item-detail" element={<Item />} />
                        <Route exact path="/checkout" element={<CheckOut />} />
                        <Route exact path="*" element={<Home />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export { App };
