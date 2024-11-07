import { router } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

const Onboarding = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity onPress={() => router.replace('/(auth)/sign-up')}>
        <Text>SKip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding;
