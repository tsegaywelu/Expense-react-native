import { colors } from '@/constants/theme'
import { TypoProps } from '@/type'
import { verticalScale } from '@/utils/styling'
import React from 'react'
import { Text, TextStyle } from 'react-native'

const Typo = ({
  size,
  color = colors.text,
  fontWeight = "400",
  style,
  children,
  textProps = {},
}: TypoProps) => {
  const textStyle: TextStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
  };
  return (
    <Text style={[textStyle, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default Typo
