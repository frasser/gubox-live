import React from 'react';

import '../styles/components/PageLoading.css';
import Loader from './Loader';

function PageLoading() {
    return (
        <div className="PageLoading">
          <Loader></Loader>
        </div>
    )
    
}

export default PageLoading;