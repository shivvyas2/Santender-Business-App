import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function MoreScreen() {
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

      {/* Unified scroll: content */}
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Cards */}
        {renderSection('Account Settings', [
          ['person', 'Profile settings'],
          ['bell', 'Notifications'],
          ['lock', 'Security settings'],
          ['creditcard', 'Card management'],
        ])}

        {renderSection('Support', [
          ['questionmark.circle', 'Help center'],
          ['phone', 'Contact us'],
          ['message', 'Live chat'],
          ['location', 'Find branches'],
        ])}

        {renderSection('Benefits & Travel', [
          ['airplane', 'Travel portal'],
          ['star', 'Rewards points'],
          ['gift', 'Card benefits'],
        ])}

        {renderSection('Plan & Track', [
          ['chart.bar', 'Spending insights'],
          ['target', 'Savings goals'],
          ['calendar', 'Budget tracking'],
        ])}

        {renderSection('Business Services', [
          ['building.2', 'Business banking'],
          ['chart.line.uptrend.xyaxis', 'Business insights'],
          ['doc.text', 'Business reports'],
        ])}

        {renderSection('Legal & Privacy', [
          ['doc', 'Terms of service'],
          ['lock.shield', 'Privacy policy'],
          ['info.circle', 'About Santander'],
        ])}
      </ScrollView>
    </View>
  );
}

function renderSection(title: string, rows: [string, string][]) {
  return (
    <View style={styles.featureCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>{title}</Text>
      </View>
      <View style={styles.cardContent}>
        {rows.map(([icon, text], idx) => (
          <TouchableOpacity style={[styles.featureItem, idx === rows.length - 1 && { borderBottomWidth: 0 }]} key={text}>
            <IconSymbol name={icon as any} size={24} color="#EC0000" />
            <Text style={styles.featureText}>{text}</Text>
            <IconSymbol name="chevron.right" size={16} color="#999999" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white' 
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
  scroll: { 
    flex: 1 
  },
  scrollContent: { 
    paddingHorizontal: 20, 
    paddingBottom: 24, 
    paddingTop: 20 
  },
  featureCard: { 
    backgroundColor: 'white', 
    borderRadius: 12, 
    marginBottom: 16, 
    overflow: 'hidden', 
    borderWidth: 1, 
    borderColor: '#E5E5E5' 
  },
  cardHeader: { 
    backgroundColor: '#EC0000', 
    paddingHorizontal: 16, 
    paddingVertical: 12 
  },
  cardHeaderText: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: '600' 
  },
  cardContent: { 
    padding: 16 
  },
  featureItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 12, 
    borderBottomWidth: 1, 
    borderBottomColor: '#E5E5E5' 
  },
  featureText: { 
    flex: 1, 
    fontSize: 16, 
    fontWeight: '500', 
    color: '#000000', 
    marginLeft: 16 
  },
});

