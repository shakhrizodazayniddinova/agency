import React, { useState } from 'react';
import { Root, TypesBox } from './TypesStyle';
import { Button } from '@mui/material';
import { TypesBtnsData } from './TypesData';

export default function Types() {
    const [ active, setActive ] = useState(0);
  return (
    <Root>
        <TypesBox>
            {TypesBtnsData.map((item, index) => (
                <Button variant='outlined' key={index} className={active === index && 'active'} onClick={() => setActive(index)}>{item}</Button>
            ))}
        </TypesBox>
    </Root>
  );
};
