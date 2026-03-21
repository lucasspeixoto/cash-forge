import { StyleSheet } from 'react-native';
import { borderRadius, spacing } from '../../../core/theme/theme.typography';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  alertContainer: {
    width: '100%',
    maxWidth: 340,
    borderRadius: borderRadius.lg,
    padding: spacing.xxl,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  title: {
    marginBottom: spacing.md,
    textAlign: 'center',
    fontWeight: '700',
  },
  message: {
    marginBottom: spacing.xxl,
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: spacing.xxxl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
});
