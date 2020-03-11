import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function User({ route }) {
  const { user } = route.params;

  return <View />;
}

User.propTypes = {
  route: PropTypes.shape({}).isRequired,
};
