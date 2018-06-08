import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';

import { Button, Welcome } from '@storybook/react/demo';
import { Header } from "../src/components/Header";

import '../src/styles/styles.scss';

storiesOf( 'Header', module )
    .addDecorator( story => (
        <MemoryRouter initialEntries={ [ '/' ] }>{ story() }</MemoryRouter>
    ))
    .add('with items in cart', () => <Header items={ 4 } /> )
    .add('with an empty cart', () => <Header /> );
