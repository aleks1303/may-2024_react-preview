import React from 'react';
import withSomethingNew from '../hok/withSomethingNew';

const OriginalComponent1 = () => {
    return (
        <div>
            <i>Lorem ipsum dolor sit amet, Explicabo ipsam non sapiente?</i>
        </div>
    );
};

export default withSomethingNew(OriginalComponent1) ;