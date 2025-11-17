import { colors } from '@/constants/theme'
import React, { ReactNode } from 'react'
import {
  Dimensions,
  Platform,
  View,
  StyleProp,
  ViewStyle,
  StatusBar,
} from "react-native";

type screenWrapperProps = {
  styles?: StyleProp<ViewStyle>;
  children?: ReactNode;
};
const {height} = Dimensions.get("window")

const ScreenWrapper = ({ styles, children }: screenWrapperProps) => {
    let paddingTop = Platform.OS === 'ios'? height *0.06 :height *0.1
  return (
    <View style={[{flex:1,paddingTop,backgroundColor:colors.neutral900,
        
    },
    styles,
    ]}>
        <StatusBar barStyle="light-content" />
     {children}
    </View>
  );
};

export default ScreenWrapper
