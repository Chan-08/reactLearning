import React from 'react';


const stringValue: string = 'value from context file, used in main page for useContext example page';

const MyContext = React.createContext(stringValue);

export default MyContext;
