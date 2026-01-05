# TestFlight Setup Guide

## Prerequisites
1. Apple Developer Account (paid membership required)
2. App Store Connect access
3. EAS CLI installed (already installed)

## Steps to Submit to TestFlight

### 1. Update Bundle Identifier (if needed)
Edit `app.json` and ensure the `bundleIdentifier` is unique to your organization:
```json
"ios": {
  "bundleIdentifier": "com.yourcompany.santanderbusiness"
}
```

### 2. Login to EAS
```bash
eas login
```

### 3. Configure the Project
```bash
eas build:configure
```

### 4. Build for iOS Production
```bash
eas build --platform ios --profile production
```

This will:
- Build your app in the cloud
- Create an `.ipa` file
- Take approximately 10-20 minutes

### 5. Submit to App Store Connect
After the build completes, submit to TestFlight:
```bash
eas submit --platform ios --latest
```

You'll need:
- Your Apple ID
- App Store Connect API key (or credentials)
- Team ID from Apple Developer portal

### 6. Configure TestFlight in App Store Connect
1. Go to [App Store Connect](https://appstoreconnect.apple.com)
2. Navigate to your app
3. Go to TestFlight tab
4. Add testers or internal testing groups
5. Add build notes
6. Submit for Beta App Review (if needed)

## Important Notes

- **Bundle Identifier**: Must be unique and match your Apple Developer account
- **App Store Connect**: You need to create the app record first if it doesn't exist
- **Certificates**: EAS will handle certificate creation automatically
- **Build Time**: First build takes longer (10-20 min), subsequent builds are faster

## Alternative: Manual Submission
If you prefer manual submission:
1. After `eas build` completes, download the `.ipa` file
2. Use Transporter app or Xcode to upload to App Store Connect
3. Configure TestFlight in App Store Connect web interface

