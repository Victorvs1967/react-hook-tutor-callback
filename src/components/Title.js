import { memo } from 'react';

const Title = () => {
    console.log('Rendering Title');
    return (
        <h2>useCallback hook</h2>
    );
};

export default memo(Title);