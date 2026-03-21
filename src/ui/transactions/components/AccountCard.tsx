import { useTheme } from '@/src/core/theme/theme.hooks';
import { typography } from '@/src/core/theme/theme.typography';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface AccountCardProps {
  name: string;
  balance: string;
  borderColor: string;
}

export function AccountCard({ name, balance, borderColor }: AccountCardProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.accountCard,
        { backgroundColor: colors.borderLight, borderLeftColor: borderColor, borderLeftWidth: 4 },
      ]}
    >
      <Text style={[styles.accountName, { color: colors.textSecondary }]}>{name}</Text>
      <Text style={[styles.accountBalance, { color: colors.text }]}>{balance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  accountCard: {
    minWidth: 160,
    padding: 16,
    borderRadius: 16,
  },
  accountName: {
    ...typography.small,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  accountBalance: {
    ...typography.bodyMedium,
  },
});
