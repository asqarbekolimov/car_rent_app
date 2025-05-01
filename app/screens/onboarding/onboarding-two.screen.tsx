import {Text, ImageBackground, Image, View} from 'react-native';
import React from 'react';
import {createStyles} from './onboarding.style';
import assets from '../../assets';
import Button from '../../components/button';

const OnBoardingScreenTwo = () => {
  const styles = createStyles();
  const {logo, overlayBg, carBg} = assets;
  return (
    <ImageBackground source={carBg} resizeMode="cover" style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={overlayBg}
        style={styles.overlay}>
        <View>
          <View style={styles.logoContianer}>
            <Image source={logo} resizeMode="contain" style={styles.carLogo} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.title, styles.title2]}>Lets Start</Text>
            <Text style={[styles.title, styles.title2]}>A New Experience</Text>
            <Text style={[styles.title, styles.title2]}>With Car rental.</Text>
          </View>
        </View>
        <View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>
              Discover your next adventure with Qent. we’re here to
            </Text>
            <Text style={styles.infoText}>
              provide you with a seamless car rental experience.
            </Text>
            <Text style={styles.infoText}>
              Let’s get started on your journey.
            </Text>
          </View>
          <Button
            text="Get Started"
            buttonStyles={styles.buttonStyle}
            textStyles={styles.buttonText}
          />
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default OnBoardingScreenTwo;
