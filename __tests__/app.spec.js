import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../app/app';

it('renders correctly', () => {
    renderer.create(
        <Index />,
    );
});
