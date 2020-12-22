import React, { useState } from 'react';

const initialState = {
    id: 0
};


//change Context name to User later
export const Context = React.createContext();

const Store = ({ children }) => {
    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}

export default Store;