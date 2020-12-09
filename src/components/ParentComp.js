import React, { useState } from 'react';

import Button from './Button';
import Title from './Title';
import Count from './Count';

const ParentComp = () => {

    const [ age, setAge ] = useState(22);
    const [ salary, setSalary ] = useState(22000);

    const incrementAge = () => {
        setAge(age + 1)
    };
    const incrementSalary = () => {
        setSalary(salary + 1000)
    };

    return (
        <>
            <Title />
            <Count text='Age' count={age}/>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </>
    );
};

export default ParentComp;