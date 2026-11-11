import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

export default function App() {
  const manejarContacto = () => {
    alert('📩 ¡Gracias por tu interés! (aldon.rodriguez@email.com)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* 📜 ScrollView: permite scroll si el contenido es largo */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 🖼️ Foto */}
        <View style={styles.photoContainer}>
          <Image
            source={{ uri: 'https://github.com/Aldon161.png' }}
            style={styles.photo}
          />
        </View>

        {/* 👤 Info personal */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Aldon Manuel Rodríguez</Text>
          <Text style={styles.title}>Estudiante de Informática</Text>
          <Text style={styles.bio}>
            🚀 Aprendiendo apps móviles con Expo.{'\n'}
            💡 Mi meta: crear algo útil.
          </Text>
        </View>

        {/* 🏷️ Badges */}
        <View style={styles.skillsContainer}>
          <Text style={styles.sectionTitle}>Mis habilidades</Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>✨ React Native</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>🎨 Diseño UI</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>🐳 Docker</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>📱 Expo Go</Text>
          </View>
        </View>

        {/* 🔗 Botones */}
        <View style={styles.actionsContainer}>
          <Pressable style={styles.buttonPrimary} onPress={manejarContacto}>
            <Text style={styles.buttonPrimaryText}>📩 Contáctame</Text>
          </Pressable>

          <Pressable
            style={styles.buttonSecondary}
            onPress={() => alert('🔗 Próximamente: github.com/Aldon161')}>
            <Text style={styles.buttonSecondaryText}>🌐 Mi portafolio</Text>
          </Pressable>

          {/* 👇 BOTONES DE PRUEBA PARA FORZAR EL SCROLL EN EL PIXEL 7 PRO 👇 */}
          <Pressable style={styles.buttonPrimary}>
            <Text style={styles.buttonPrimaryText}>Prueba de Scroll 1</Text>
          </Pressable>
          <Pressable style={styles.buttonPrimary}>
            <Text style={styles.buttonPrimaryText}>Prueba de Scroll 2</Text>
          </Pressable>
          <Pressable style={styles.buttonPrimary}>
            <Text style={styles.buttonPrimaryText}>Prueba de Scroll 3</Text>
          </Pressable>
          <Pressable style={styles.buttonPrimary}>
            <Text style={styles.buttonPrimaryText}>Prueba de Scroll 4</Text>
          </Pressable>
          <Pressable style={styles.buttonPrimary}>
            <Text style={styles.buttonPrimaryText}>Prueba de Scroll 5</Text>
          </Pressable>
          {/* ☝️ Bórralos después de verificar que el scroll funciona ☝️ */}
        </View>

        {/* 🦶 Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Creado con ❤️ en Snack.expo.dev{'\n'}
            📅 {new Date().getFullYear()}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },

  // 📜 ESTILOS PARA SCROLLVIEW
  scrollContent: {
    flexGrow: 1, // 👈 Permite que el contenido crezca y active el scroll
    paddingBottom: 30, // 📏 Espacio extra al final para que no quede pegado
  },

  photoContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#2196F3',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  infoContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: '500',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 20,
  },
  skillsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  badge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 14,
    color: '#1565C0',
    fontWeight: '500',
  },
  actionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  buttonPrimary: {
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonPrimaryText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonSecondary: {
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  buttonSecondaryText: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: '600',
  },

  // 🦶 FOOTER
  footer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
});
