import React from 'react';

import Navbar from './Navbar';
import Stories from './Stories';
import Posts from './Posts';
import Sidebar from './Sidebar';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <div className="container">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    )
}

export default App;