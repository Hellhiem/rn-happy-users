import { Linking, Platform, useColorScheme } from 'react-native';

export const isAndroid = () => Platform.OS === 'android';

export const isIOS = () => Platform.OS === 'ios';

export const isDarkMode = () => useColorScheme() === 'dark';

export const triggerPhoneCall = (phoneNumber: string) => Linking.openURL(`tel://${phoneNumber}`);
