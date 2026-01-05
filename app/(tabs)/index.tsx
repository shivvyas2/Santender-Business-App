import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Path, Svg } from 'react-native-svg';

export default function AccountsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const SmallCreditGauge = () => (
    <View style={styles.smallGaugeContainer}>
      <Svg width={120} height={70} viewBox="0 0 400 220" style={styles.smallGaugeSvg}>
        {/* Track arc */}
        <Path
          d="M 80 180 A 120 120 0 0 1 320 180"
          stroke="#EC0000"
          strokeOpacity="0.2"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        {/* Progress arc with gaps */}
        <Path
          d="M 80 180 A 120 120 0 0 1 320 180"
          stroke="#EC0000"
          strokeWidth="10"
          fill="none"
          strokeDasharray="60 15"
          strokeDashoffset="77"
          strokeLinecap="round"
        />
      </Svg>
      <View style={styles.smallGaugeInfo}>
        <Text style={styles.smallScoreValue}>745</Text>
        <Text style={styles.smallScoreLabel}>Credit Score</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#EC0000" translucent />
      
      {/* Santander Red Header Banner */}
      <View style={[styles.headerBanner, { paddingTop: insets.top + 8 }]}>
        <View style={styles.headerContent}>
          <View style={styles.santanderLogo}>
            <View style={styles.logoFlame1} />
            <View style={styles.logoFlame2} />
            <View style={styles.logoFlame3} />
          </View>
          <Text style={styles.santanderText}>Santander</Text>
          <TouchableOpacity style={styles.menuButton}>
            <IconSymbol name="line.3.horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.lastLoginText}>Last Log in: Dec 7, 2025 at 11:16 AM (EST)</Text>
      </View>

      {/* Business Balances Section */}
      <View style={styles.balancesSection}>
        <Text style={styles.balancesTitle}>Business Balances</Text>
        <Text style={styles.totalBalance}>$34,276.99</Text>
        <View style={styles.pendingRow}>
          <Text style={styles.pendingLabel}>Pending Authorizations</Text>
          <Text style={styles.pendingValue}>0</Text>
          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewButtonText}>VIEW</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* FDIC Information */}
      <View style={styles.fdicSection}>
        <View style={styles.fdicLogo}>
          <Text style={styles.fdicText}>FDIC</Text>
        </View>
        <Text style={styles.fdicDescription}>FDIC-Insured - Backed by the full faith and credit of the U.S. Government</Text>
      </View>

      {/* Credit Journey Card */}
      <TouchableOpacity 
        style={styles.creditJourneyCard}
        onPress={() => router.push('/(tabs)/credit-journey')}
        activeOpacity={0.7}
      >
        <View style={styles.creditJourneyContent}>
          <View style={styles.creditJourneyLeft}>
            <Text style={styles.creditJourneyTitle}>Lumiq Credit Journey</Text>
            <Text style={styles.creditJourneySubtitle}>View your credit score and insights</Text>
          </View>
          <SmallCreditGauge />
        </View>
      </TouchableOpacity>

      {/* Accounts Section */}
      <ScrollView style={styles.accountsSection} showsVerticalScrollIndicator={false}>
        {/* Business Accounts */}
        <View style={styles.accountSection}>
          <View style={styles.sectionHeaderWithIcon}>
            <IconSymbol name="building.2" size={20} color="#666666" />
            <Text style={styles.sectionTitle}>Business Accounts</Text>
          </View>

          <View style={styles.accountCard}>
            <View style={styles.accountRow}>
              <View style={styles.accountInfo}>
                <Text style={styles.accountType}>Small Business Checking (*0976)</Text>
                <Text style={styles.accountBalance}>$22,847.32</Text>
                <Text style={styles.balanceStatus}>AVAILABLE BALANCE</Text>
              </View>
            </View>
          </View>

          <View style={styles.accountCard}>
            <View style={styles.accountRow}>
              <View style={styles.accountInfo}>
                <Text style={styles.accountType}>Business Money Market (*3469)</Text>
                <Text style={styles.accountBalance}>$11,429.67</Text>
                <Text style={styles.balanceStatus}>AVAILABLE BALANCE</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Personal Accounts */}
        <View style={styles.accountSection}>
          <View style={styles.sectionHeaderWithIcon}>
            <IconSymbol name="person.fill" size={20} color="#666666" />
            <Text style={styles.sectionTitle}>Personal Accounts</Text>
          </View>

          <View style={styles.accountCard}>
            <View style={styles.accountRow}>
              <View style={styles.accountInfo}>
                <Text style={styles.accountType}>Select Checking (*7525)</Text>
                <Text style={styles.accountBalance}>$5,218.25</Text>
                <Text style={styles.balanceStatus}>AVAILABLE BALANCE</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  // Santander Red Header Banner
  headerBanner: {
    backgroundColor: '#EC0000',
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  santanderLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  logoFlame1: {
    width: 8,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  logoFlame2: {
    width: 10,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  logoFlame3: {
    width: 8,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  santanderText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
    letterSpacing: 0.5,
  },
  menuButton: {
    padding: 8,
  },
  lastLoginText: {
    color: 'white',
    fontSize: 12,
    opacity: 0.9,
    textAlign: 'center',
  },
  // Business Balances Section
  balancesSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  balancesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  totalBalance: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  pendingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  pendingLabel: {
    fontSize: 14,
    color: '#666666',
  },
  pendingValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  viewButton: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 4,
  },
  viewButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333333',
  },
  // FDIC Section
  fdicSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  fdicLogo: {
    backgroundColor: '#0066CC',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fdicText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  fdicDescription: {
    flex: 1,
    fontSize: 12,
    color: '#666666',
    lineHeight: 18,
  },
  // Accounts Section
  accountsSection: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  accountSection: {
    marginBottom: 24,
  },
  sectionHeaderWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  accountCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountInfo: {
    flex: 1,
  },
  accountType: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 8,
  },
  accountBalance: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  negativeBalance: {
    color: '#EC0000',
  },
  balanceStatus: {
    fontSize: 12,
    color: '#666666',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  // Credit Journey Card
  creditJourneyCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  creditJourneyContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  creditJourneyLeft: {
    flex: 1,
    marginRight: 20,
  },
  creditJourneyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  creditJourneySubtitle: {
    fontSize: 14,
    color: '#666666',
  },
  smallGaugeContainer: {
    width: 120,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallGaugeSvg: {
    position: 'absolute',
    top: -5,
  },
  smallGaugeInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },
  smallScoreValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EC0000',
    marginBottom: 2,
  },
  smallScoreLabel: {
    fontSize: 10,
    color: '#666666',
    fontWeight: '500',
  },
});

