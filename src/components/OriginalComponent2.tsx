import React from 'react';
import withSomethingNew from "../hok/withSomethingNew";

const OriginalComponent2 = () => {
    return (
        <div>
            <i>Lorem on three words</i>
        </div>
    );
};

export default withSomethingNew(OriginalComponent2);