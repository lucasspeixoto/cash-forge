import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../core/theme/theme.hooks';
import { useAuth } from '../view-models/useAuth';

export const LoginView = () => {
  const { signIn } = useAuth();
  const { colors } = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const login = async () => {
    await signIn(email || 'lspeixotodev@gmail.com', password || 'lucas5678');
  };

  return (
    <LinearGradient colors={[colors.backgroundSecondary, colors.backgroundTertiary]} style={styles.container}>
      <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardView}>
          <View style={styles.content}>
            {/* Brand Identity Section */}
            <View style={styles.brandContainer}>
              <View
                style={[styles.logoContainer, { backgroundColor: colors.primaryLight, shadowColor: colors.primary }]}
              >
                <Text style={{ fontSize: 32 }}>🛡️</Text>
              </View>
              <Text style={[styles.brandText, { color: colors.primary }]}>Finance Pro</Text>
              <Text style={[styles.titleText, { color: colors.text }]}>Bem-vindo de volta</Text>
            </View>

            {/* Login Form */}
            <View style={styles.formContainer}>
              {/* Email Input */}
              <View style={styles.inputWrapper}>
                <Text style={[styles.label, { color: colors.textSecondary }]}>EMAIL</Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: colors.surfaceVariant,
                      borderColor: colors.border,
                      borderWidth: 1,
                      color: colors.text,
                    },
                  ]}
                  placeholder="seu@email.com"
                  placeholderTextColor={colors.textTertiary}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              {/* Password Input */}
              <View style={styles.inputWrapper}>
                <Text style={[styles.label, { color: colors.textSecondary }]}>SENHA</Text>
                <View
                  style={[
                    styles.passwordContainer,
                    { backgroundColor: colors.surfaceVariant, borderColor: colors.border, borderWidth: 1 },
                  ]}
                >
                  <TextInput
                    style={[styles.passwordInput, { color: colors.text }]}
                    placeholder="••••••••"
                    placeholderTextColor={colors.textTertiary}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.visibilityButton}>
                    <Text style={{ color: colors.textSecondary }}>{showPassword ? 'Ocultar' : 'Ver'}</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Forgot Password Link */}
              <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity>
                  <Text style={[styles.forgotPasswordText, { color: colors.primary }]}>Esqueci minha senha</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Primary Action */}
            <TouchableOpacity style={[styles.loginButton, { backgroundColor: colors.primary }]} onPress={login}>
              <Text style={[styles.loginButtonText, { color: colors.surface }]}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  brandContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 5,
  },
  brandText: {
    fontSize: 24,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  formContainer: {
    marginBottom: 24,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    height: 56,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 16,
    fontSize: 16,
  },
  visibilityButton: {
    paddingHorizontal: 16,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginTop: 8,
  },
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: '500',
  },
  loginButton: {
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '800',
  },
});
