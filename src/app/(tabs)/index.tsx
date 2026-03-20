import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1 }}>
      <Text>Bem vindo</Text>
    </SafeAreaView>
  );
}
