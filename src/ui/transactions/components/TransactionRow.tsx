import { useTheme } from '@/src/core/theme/theme.hooks';
import { typography } from '@/src/core/theme/theme.typography';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TransactionRowProps {
  icon: React.ComponentProps<typeof MaterialIcons>['name'];
  title: string;
  subtitle: string;
  amount: string;
  amountColor: string;
  iconColor?: string;
}

export function TransactionRow({ icon, title, subtitle, amount, amountColor, iconColor }: TransactionRowProps) {
  const { colors } = useTheme();
  const defaultIconColor = colors.text;

  return (
    <View style={styles.txRow}>
      <View style={styles.txLeft}>
        <View style={[styles.txIconContainer, { backgroundColor: colors.borderLight }]}>
          <MaterialIcons name={icon} size={24} color={iconColor || defaultIconColor} />
        </View>
        <View>
          <Text style={[styles.txTitle, { color: colors.text }]}>{title}</Text>
          <Text style={[styles.txSubtitle, { color: colors.textSecondary }]}>{subtitle}</Text>
        </View>
      </View>
      <Text style={[styles.txAmount, { color: amountColor }]}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  txIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txTitle: {
    ...typography.captionMedium,
    marginBottom: 2,
  },
  txSubtitle: {
    ...typography.small,
  },
  txAmount: {
    ...typography.captionMedium,
  },
});
