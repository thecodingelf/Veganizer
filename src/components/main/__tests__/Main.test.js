import 'react-native';
import React from 'react';
import Main from '../Main';
import { Platform } from 'react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const instructions = Platform.select({
    ios: 'More features coming soon!',
    android: 'More features coming soon!',
  })


it('Renders correctly', () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Renders the view and text component', () => {
    const View = require('View');
    const Text = require('Text');
    
    const tree = renderer
        .create(<View><Text>{instructions}</Text></View>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});