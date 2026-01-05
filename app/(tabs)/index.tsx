import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AccountsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <View style={styles.walletIcon}>
            <IconSymbol name="creditcard" size={20} color="#0066CC" />
            <View style={styles.plusOverlay}>
              <IconSymbol name="plus" size={12} color="#0066CC" />
            </View>
          </View>
        </TouchableOpacity>
        
        <View style={styles.logoContainer}>
          <View style={styles.chaseLogo}>
            <View style={styles.logoInner} />
          </View>
        </View>
        
        <TouchableOpacity style={styles.headerButton}>
          <IconSymbol name="person.circle.fill" size={28} color="#0066CC" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Text style={styles.searchPlaceholder}>What are you looking for?</Text>
        </View>
        <TouchableOpacity style={styles.helpButton}>
          <IconSymbol name="questionmark" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton}>
            <IconSymbol name="plus" size={16} color="#0066CC" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Send | Zelle®</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Deposit checks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Pay bills</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Accounts Section */}
      <ScrollView style={styles.accountsSection} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Accounts</Text>
          <TouchableOpacity>
            <IconSymbol name="ellipsis" size={20} color="#999999" />
          </TouchableOpacity>
        </View>

        {/* Bank Accounts */}
        <View style={styles.accountCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Bank accounts (2)</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.accountItem}>
              <Text style={styles.accountName}>CHASE COLLEGE (...8472)</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            <View style={styles.balanceContainer}>
              <View style={styles.balanceTextContainer}>
                <Text style={styles.balanceAmount}>$12,847.32</Text>
                <Text style={styles.balanceLabel}>Available balance</Text>
              </View>
              <View style={styles.verticalLine} />
            </View>
          </View>
        </View>

        <View style={styles.accountCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Business Checking</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.accountItem}>
              <Text style={styles.accountName}>CHASE BUSINESS (...2951)</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            <View style={styles.balanceContainer}>
              <View style={styles.balanceTextContainer}>
                <Text style={styles.balanceAmount}>$8,429.67</Text>
                <Text style={styles.balanceLabel}>Available balance</Text>
              </View>
              <View style={styles.verticalLine} />
            </View>
          </View>
        </View>

        {/* Credit Cards */}
        <View style={styles.accountCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Credit cards (3)</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.accountItem}>
              <Text style={styles.accountName}>Sapphire Preferred (...7384)</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            {/* Credit Card Image */}
            <View style={styles.creditCard}>
              <View style={styles.cardBackground}>
                <View style={styles.cardPattern}>
                  <View style={styles.cardPatternLine} />
                  <View style={styles.cardPatternLine} />
                  <View style={styles.cardPatternLine} />
                </View>
                <Text style={styles.cardText}>SAPPHIRE PREFERRED</Text>
                <View style={styles.cardBottom}>
                  <Text style={styles.cardVisa}>VISA</Text>
                  <Text style={styles.cardSignature}>Signature</Text>
                </View>
              </View>
            </View>
            
            <View style={styles.balanceContainer}>
              <View style={styles.balanceTextContainer}>
                <Text style={styles.balanceAmount}>$1,247.89</Text>
                <Text style={styles.balanceLabel}>Current balance</Text>
              </View>
              <View style={styles.verticalLine} />
            </View>
            
            <View style={styles.paymentStatus}>
              <IconSymbol name="checkmark.circle.fill" size={16} color="#00AA00" />
              <Text style={styles.paymentText}>You don't have a payment due right now.</Text>
            </View>
          </View>
        </View>

        <View style={styles.accountCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Freedom Unlimited</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.accountItem}>
              <Text style={styles.accountName}>Freedom Unlimited (...5629)</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <View style={styles.balanceContainer}>
              <View style={styles.balanceTextContainer}>
                <Text style={styles.balanceAmount}>$892.45</Text>
                <Text style={styles.balanceLabel}>Current balance</Text>
              </View>
              <View style={styles.verticalLine} />
            </View>
            
            <View style={styles.paymentStatus}>
              <IconSymbol name="exclamationmark.triangle.fill" size={16} color="#FF4444" />
              <Text style={styles.paymentText}>Payment due in 5 days - $45.00</Text>
            </View>
          </View>
        </View>

        <View style={styles.accountCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Amazon Prime Rewards</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.accountItem}>
              <Text style={styles.accountName}>Amazon Prime (...1847)</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <View style={styles.balanceContainer}>
              <View style={styles.balanceTextContainer}>
                <Text style={styles.balanceAmount}>$0.00</Text>
                <Text style={styles.balanceLabel}>Current balance</Text>
              </View>
              <View style={styles.verticalLine} />
            </View>
            
            <View style={styles.paymentStatus}>
              <IconSymbol name="checkmark.circle.fill" size={16} color="#00AA00" />
              <Text style={styles.paymentText}>Account in good standing</Text>
            </View>
          </View>
        </View>

        {/* Link External Accounts */}
        <TouchableOpacity style={styles.linkAccounts}>
          <Text style={styles.linkAccountsText}>Link external accounts</Text>
          <IconSymbol name="chevron.right" size={16} color="#999999" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
  },
  headerButton: {
    padding: 12,
    borderRadius: 8,
  },
  walletIcon: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusOverlay: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: 'white',
    borderRadius: 8,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#0066CC',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chaseLogo: {
    width: 44,
    height: 44,
    backgroundColor: '#0066CC',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  logoInner: {
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 2,
    transform: [{ rotate: '45deg' }],
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginRight: 16,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  searchPlaceholder: {
    color: '#8E8E93',
    fontSize: 17,
    fontWeight: '400',
  },
  helpButton: {
    padding: 12,
    backgroundColor: '#0066CC',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickActionsContainer: {
    paddingHorizontal: 20,
    marginBottom: 0,
  },
  quickActions: {
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: 'white',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
    height: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  actionText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#1C1C1E',
    textAlign: 'center',
  },
  accountsSection: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  accountCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  cardHeader: {
    backgroundColor: '#0066CC',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  cardHeaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cardContent: {
    padding: 16,
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  accountName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  balanceTextContainer: {
    flex: 1,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#666666',
  },
  verticalLine: {
    width: 1,
    height: 40,
    backgroundColor: '#E5E5E5',
    marginLeft: 16,
  },
  creditCard: {
    marginBottom: 16,
    width: 80,
    height: 50,
  },
  cardBackground: {
    backgroundColor: '#1A1A1A',
    borderRadius: 6,
    padding: 8,
    height: 50,
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
  },
  cardPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
  },
  cardPatternLine: {
    height: 1,
    backgroundColor: '#4A90E2',
    marginVertical: 2,
    transform: [{ rotate: '15deg' }],
  },
  cardText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginTop: 2,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardVisa: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  cardSignature: {
    color: 'white',
    fontSize: 6,
  },
  paymentStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  paymentText: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 8,
  },
  linkAccounts: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  linkAccountsText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
});

