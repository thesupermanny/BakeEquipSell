import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.constainer}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.accent}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center',
  },
});

export default AppTextInput;