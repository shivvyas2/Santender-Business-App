import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PayTransferScreen() {
  const insets = useSafeAreaInsets();
  
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

      {/* Pay & Transfer Section */}
      <ScrollView style={styles.payTransferSection} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Transfer & Pay</Text>
        </View>

        {/* Transfer Options */}
        <TouchableOpacity style={styles.transferOption}>
          <View style={styles.transferOptionContent}>
            <Text style={styles.transferOptionTitle}>Between my accounts</Text>
            <Text style={styles.transferOptionDescription}>Transfer money instantly between your accounts</Text>
          </View>
          <IconSymbol name="chevron.right" size={20} color="#999999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.transferOption}>
          <View style={styles.transferOptionContent}>
            <Text style={styles.transferOptionTitle}>To someone else</Text>
            <Text style={styles.transferOptionDescription}>Send money to external accounts</Text>
          </View>
          <IconSymbol name="chevron.right" size={20} color="#999999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.transferOption}>
          <View style={styles.transferOptionContent}>
            <Text style={styles.transferOptionTitle}>IRS Wire Tax Payment</Text>
            <Text style={styles.transferOptionDescription}>Make IRS Tax Payments with a wire transfer</Text>
          </View>
          <IconSymbol name="chevron.right" size={20} color="#999999" />
        </TouchableOpacity>
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
  payTransferSection: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionHeader: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  transferOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  transferOptionContent: {
    flex: 1,
  },
  transferOptionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  transferOptionDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
});

