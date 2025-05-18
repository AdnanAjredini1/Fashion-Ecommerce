module.exports = {
    preset: 'jest-expo',
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    transformIgnorePatterns: [
      "node_modules/(?!(expo-modules-core|expo-font|@expo/vector-icons|expo(nent)?|react-native|@react-native|@expo|react-navigation|@react-navigation)/)"
    ],
  };
  