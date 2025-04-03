import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text,
  Alert,
} from 'react-native';
import {
  OnboardingProvider,
  Highlight,
  Overlay,
  useOnboarding,
} from 'react-native-highlight-onboarding';

const DemoContent = () => {
  const { start, nextStep, steps, currentStepIndex, isActive, finish } =
    useOnboarding();

  const currentStep = steps[currentStepIndex];

  return (
    <SafeAreaView style={styles.container}>
      <Highlight
        stepId="step1"
        description="Este es el primer botón importante"
      >
        <Button title="Botón Importante 1" onPress={start} />
      </Highlight>

      <Highlight stepId="step2" description="Este es otro botón importante">
        <Button
          title="Botón Importante 2"
          onPress={() => Alert.alert('Botón 2 presionado')}
        />
      </Highlight>

      {isActive && currentStep?.targetLayout && (
        <>
          <Overlay layout={currentStep.targetLayout} />
          <View style={styles.tooltip}>
            <Text style={styles.tooltipText}>{currentStep.description}</Text>
            {currentStepIndex < steps.length - 1 ? (
              <Button title="Siguiente" onPress={nextStep} />
            ) : (
              <Button title="Finalizar" onPress={finish} />
            )}
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <OnboardingProvider>
      <DemoContent />
    </OnboardingProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tooltip: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 5,
  },
  tooltipText: {
    marginBottom: 8,
    fontSize: 16,
  },
});
