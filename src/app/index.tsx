import { View } from 'react-native';
import { LoadingOverlay } from '../ui/shared/components/LoadingOverlay';

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LoadingOverlay />
    </View>
  );
}
