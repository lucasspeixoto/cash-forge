import { useTheme } from '@/src/core/theme/theme.hooks';
import { typography } from '@/src/core/theme/theme.typography';
import { AccountCard } from '@/src/ui/transactions/components/AccountCard';
import { TransactionRow } from '@/src/ui/transactions/components/TransactionRow';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { colors, isDark } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.mainContent}>
          {/* Hero: Total Balance */}
          <LinearGradient
            colors={[colors.primaryContainer, isDark ? colors.background : colors.primaryLight]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroSection}
          >
            <View style={styles.heroContent}>
              <Text style={[styles.heroLabel, { color: isDark ? colors.onPrimaryContainer : colors.textSecondary }]}>
                Patrimônio Total
              </Text>
              <Text style={[styles.heroBalance, { color: isDark ? colors.primary : colors.primary }]}>
                R$ 142.850,00
              </Text>

              <View style={styles.heroStatsContainer}>
                <View
                  style={[
                    styles.heroStatBox,
                    { backgroundColor: isDark ? 'rgba(17, 20, 20, 0.3)' : 'rgba(255, 255, 255, 0.5)' },
                  ]}
                >
                  <Text style={[styles.statLabel, { color: colors.textTertiary }]}>Receita Mensal</Text>
                  <Text style={[styles.statValue, { color: colors.success }]}>+ R$ 12.400</Text>
                </View>
                <View
                  style={[
                    styles.heroStatBox,
                    { backgroundColor: isDark ? 'rgba(17, 20, 20, 0.3)' : 'rgba(255, 255, 255, 0.5)' },
                  ]}
                >
                  <Text style={[styles.statLabel, { color: colors.textTertiary }]}>Despesa Mensal</Text>
                  <Text style={[styles.statValue, { color: colors.tertiary }]}>- R$ 5.120</Text>
                </View>
              </View>
            </View>
            {/* Decorative Element Mock */}
            <View style={[styles.heroDecorative, { backgroundColor: colors.primary, opacity: 0.1 }]} />
          </LinearGradient>

          {/* Bento Grid: Analytics & Insights */}
          <View style={styles.bentoGrid}>
            {/* Category Distribution */}
            <View
              style={[
                styles.bentoCard,
                styles.categoryCard,
                { backgroundColor: colors.surfaceContainer, borderColor: colors.border },
              ]}
            >
              <View style={styles.cardHeader}>
                <Text style={[styles.cardTitle, { color: colors.text }]}>Gastos por Categoria</Text>
                <MaterialIcons name="pie-chart" size={24} color={colors.textTertiary} />
              </View>

              {/* Mock Donut Chart */}
              <View style={styles.donutContainer}>
                <View
                  style={[
                    styles.donutPlaceholder,
                    { borderColor: colors.border, borderTopColor: colors.primary, borderRightColor: colors.tertiary },
                  ]}
                >
                  <Text style={[styles.donutTotal, { color: colors.text }]}>R$ 5.1k</Text>
                  <Text style={[styles.donutLabel, { color: colors.textTertiary }]}>TOTAL</Text>
                </View>
              </View>

              <View style={styles.categoryList}>
                <View style={styles.categoryRow}>
                  <View style={styles.categoryRowLeft}>
                    <View style={[styles.dot, { backgroundColor: colors.primary }]} />
                    <Text style={[styles.categoryName, { color: colors.textSecondary }]}>Essenciais</Text>
                  </View>
                  <Text style={[styles.categoryPercentage, { color: colors.text }]}>65%</Text>
                </View>
                <View style={styles.categoryRow}>
                  <View style={styles.categoryRowLeft}>
                    <View style={[styles.dot, { backgroundColor: colors.tertiary }]} />
                    <Text style={[styles.categoryName, { color: colors.textSecondary }]}>Lazer</Text>
                  </View>
                  <Text style={[styles.categoryPercentage, { color: colors.text }]}>25%</Text>
                </View>
              </View>
            </View>

            {/* Recent Transactions */}
            <View
              style={[
                styles.bentoCard,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <View style={styles.cardHeader}>
                <Text style={[styles.cardTitle, { color: colors.text }]}>Transações Recentes</Text>
                <TouchableOpacity>
                  <Text style={[styles.seeAllText, { color: colors.primary }]}>Ver Tudo</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.transactionsList}>
                <TransactionRow
                  icon="shopping-bag"
                  title="Apple Store"
                  subtitle="Eletrônicos • Hoje"
                  amount="- R$ 899,00"
                  amountColor={colors.tertiary}
                />
                <TransactionRow
                  icon="restaurant"
                  title="Le Jazz Brasserie"
                  subtitle="Alimentação • Ontem"
                  amount="- R$ 342,50"
                  amountColor={colors.tertiary}
                />
                <TransactionRow
                  icon="trending-up"
                  title="Dividendos ITUB4"
                  subtitle="Investimentos • 12 Set"
                  amount="+ R$ 1.250,00"
                  amountColor={colors.success}
                  iconColor={colors.success}
                />
              </View>
            </View>
          </View>

          {/* Accounts Preview */}
          <View
            style={[styles.accountsSection, { backgroundColor: colors.surfaceContainer, borderColor: colors.border }]}
          >
            <Text style={[styles.cardTitle, { color: colors.text, marginBottom: 16 }]}>Minhas Contas</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.accountsScroll}>
              <AccountCard name="Nubank" balance="R$ 24.500" borderColor={colors.primary} />
              <AccountCard name="XP Investimentos" balance="R$ 118.350" borderColor={colors.accent} />
              <AccountCard name="Carteira" balance="R$ 450,00" borderColor={colors.textTertiary} />
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={[styles.fab, { backgroundColor: colors.primary }]}>
        <MaterialIcons name="add" size={28} color={isDark ? colors.background : colors.surface} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Platform.OS === 'ios' ? 120 : 100
  },
  mainContent: {
    paddingHorizontal: 24,
    gap: 32,
    marginTop: 16,
  },
  heroSection: {
    borderRadius: 24,
    padding: 32,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  heroContent: {
    zIndex: 10,
  },
  heroDecorative: {
    position: 'absolute',
    right: -80,
    top: -80,
    width: 256,
    height: 256,
    borderRadius: 128,
  },
  heroLabel: {
    ...typography.small,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  heroBalance: {
    ...typography.largeTitle,
  },
  heroStatsContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 32,
  },
  heroStatBox: {
    flex: 1,
    padding: 12,
    borderRadius: 16,
  },
  statLabel: {
    ...typography.small,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  statValue: {
    ...typography.subtitle,
  },
  bentoGrid: {
    gap: 24,
  },
  bentoCard: {
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
  },
  categoryCard: {
    alignItems: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
  },
  cardTitle: {
    ...typography.subtitle,
  },
  seeAllText: {
    ...typography.smallMedium,
    textTransform: 'uppercase',
  },
  donutContainer: {
    width: 192,
    height: 192,
    justifyContent: 'center',
    alignItems: 'center',
  },
  donutPlaceholder: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  donutTotal: {
    ...typography.title,
  },
  donutLabel: {
    ...typography.small,
    opacity: 0.6,
  },
  categoryList: {
    width: '100%',
    marginTop: 24,
    gap: 8,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  categoryRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  categoryName: {
    ...typography.small,
  },
  categoryPercentage: {
    ...typography.smallMedium,
  },
  transactionsList: {
    gap: 24,
  },
  accountsSection: {
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
  },
  accountsScroll: {
    gap: 16,
  },
  fab: {
    position: 'absolute',
    bottom: 12,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#4F46E5',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});
