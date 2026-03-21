import { useTheme } from '@/src/core/theme/theme.hooks';
import { typography } from '@/src/core/theme/theme.typography';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface WalletCardProps {
  name: string;
  balance: string;
  borderColor: string;
}

export function WalletCard({ name, balance, borderColor }: WalletCardProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.walletCard,
        { backgroundColor: colors.borderLight, borderLeftColor: borderColor, borderLeftWidth: 4 },
      ]}
    >
      <Text style={[styles.walletName, { color: colors.textSecondary }]}>{name}</Text>
      <Text style={[styles.walletBalance, { color: colors.text }]}>{balance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  walletCard: {
    minWidth: 160,
    padding: 16,
    borderRadius: 16,
  },
  walletName: {
    ...typography.small,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  walletBalance: {
    ...typography.bodyMedium,
  },
});
