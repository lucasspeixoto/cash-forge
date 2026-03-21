import { useTheme } from '@/src/core/theme/theme.hooks';
import { useLoadingStore } from '@/src/shared/hooks/use-loading';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';

export const LoadingOverlay = () => {
  const { isLoading } = useLoadingStore();

  const { colors } = useTheme();

  return (
    <View>
      {isLoading ? (
        <Modal visible={true} transparent animationType="fade">
          <View
            style={[
              styles.overlay,
              {
                backgroundColor: colors.overlay,
              },
            ]}
          >
            <ActivityIndicator animating={true} size="large" color={colors.primary} />
          </View>
        </Modal>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
