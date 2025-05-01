import {Text, ImageBackground, Image, View} from 'react-native';
import React from 'react';
import {createStyles} from './onboarding.style';
import assets from '../../assets';
import Button from '../../components/button';
import {navigate} from '../../navigators/navigation-utilities';

const OnBoardingScreen = () => {
  const styles = createStyles();
  const {logo, overlayBg, whiteCar} = assets;
  return (
    <ImageBackground
      source={whiteCar}
      resizeMode="cover"
      style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={overlayBg}
        style={styles.overlay}>
        <View>
          <View style={styles.logoContianer}>
            <Image source={logo} resizeMode="contain" style={styles.carLogo} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to</Text>
            <Text style={styles.title}>Qent</Text>
          </View>
        </View>
        <Button
          onPress={() => navigate('OnBoardingScreenTwo')}
          text="Get Started"
          buttonStyles={styles.buttonStyle}
          textStyles={styles.buttonText}
        />
      </ImageBackground>
    </ImageBackground>
  );
};

export default OnBoardingScreen;
