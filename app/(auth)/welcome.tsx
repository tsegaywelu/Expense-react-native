import React from 'react'
import { StyleSheet, Text } from 'react-native'

import ScreenWrapper from '../../components/screenWrapper'
import Typo from '@/components/Typo'


const  Welcome= () => {
  
    return (
      <ScreenWrapper>
       
        <Typo color='red' fontWeight={700} size={30}>
          welcome page 
        </Typo>
      </ScreenWrapper>
    )
  }
 
export default Welcome
const styles = StyleSheet.create({})
