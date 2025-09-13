// React Native Button Component - TypeScript
export const reactNativeButtonCodeTS = `import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator,
  View 
} from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  testID?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  size = 'medium',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  testID
}) => {
  const getButtonStyle = () => ({
    ...styles.button,
    ...styles[\`button_\${variant}\`],
    ...styles[\`button_\${size}\`],
    ...(fullWidth && styles.fullWidth),
    ...(disabled && styles.disabled)
  });
  
  const getTextStyle = () => ({
    ...styles.text,
    ...styles[\`text_\${variant}\`],
    ...styles[\`text_\${size}\`],
    ...(disabled && styles.textDisabled)
  });

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled || loading}
      testID={testID}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'primary' ? 'white' : '#007AFF'} 
          size="small" 
        />
      ) : (
        <View style={styles.content}>
          {iconPosition === 'left' && icon && (
            <View style={styles.iconLeft}>{icon}</View>
          )}
          <Text style={getTextStyle()}>{title}</Text>
          {iconPosition === 'right' && icon && (
            <View style={styles.iconRight}>{icon}</View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button_primary: {
    backgroundColor: '#007AFF',
  },
  button_secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  button_ghost: {
    backgroundColor: 'transparent',
  },
  button_small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  button_medium: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  button_large: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
  },
  text_primary: {
    color: 'white',
  },
  text_secondary: {
    color: '#007AFF',
  },
  text_ghost: {
    color: '#007AFF',
  },
  text_small: {
    fontSize: 14,
  },
  text_medium: {
    fontSize: 16,
  },
  text_large: {
    fontSize: 18,
  },
  textDisabled: {
    opacity: 0.7,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

export default PrimaryButton;`;

// React Native Button Component - JavaScript
export const reactNativeButtonCodeJS = `import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator,
  View 
} from 'react-native';

const PrimaryButton = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  size = 'medium',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  testID
}) => {
  const getButtonStyle = () => ({
    ...styles.button,
    ...styles[\`button_\${variant}\`],
    ...styles[\`button_\${size}\`],
    ...(fullWidth && styles.fullWidth),
    ...(disabled && styles.disabled)
  });
  
  const getTextStyle = () => ({
    ...styles.text,
    ...styles[\`text_\${variant}\`],
    ...styles[\`text_\${size}\`],
    ...(disabled && styles.textDisabled)
  });

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled || loading}
      testID={testID}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'primary' ? 'white' : '#007AFF'} 
          size="small" 
        />
      ) : (
        <View style={styles.content}>
          {iconPosition === 'left' && icon && (
            <View style={styles.iconLeft}>{icon}</View>
          )}
          <Text style={getTextStyle()}>{title}</Text>
          {iconPosition === 'right' && icon && (
            <View style={styles.iconRight}>{icon}</View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button_primary: {
    backgroundColor: '#007AFF',
  },
  button_secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  button_ghost: {
    backgroundColor: 'transparent',
  },
  button_small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  button_medium: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  button_large: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
  },
  text_primary: {
    color: 'white',
  },
  text_secondary: {
    color: '#007AFF',
  },
  text_ghost: {
    color: '#007AFF',
  },
  text_small: {
    fontSize: 14,
  },
  text_medium: {
    fontSize: 16,
  },
  text_large: {
    fontSize: 18,
  },
  textDisabled: {
    opacity: 0.7,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

export default PrimaryButton;`;

export const reactNativeButtonProps = [
  { prop: 'title', type: 'string', default: '-', desc: 'Button text content that will be displayed inside the button' },
  { prop: 'onPress', type: '() => void', default: '-', desc: 'Callback function that gets called when the button is pressed by the user' },
  { prop: 'variant', type: "'primary' | 'secondary' | 'ghost'", default: "'primary'", desc: 'Visual style variant that determines the button appearance and behavior' },
  { prop: 'disabled', type: 'boolean', default: 'false', desc: 'When true, the button becomes non-interactive and appears dimmed' },
  { prop: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", desc: 'Controls the overall size and padding of the button component' },
  { prop: 'fullWidth', type: 'boolean', default: 'false', desc: 'When true, button expands to take the full width of its container' },
  { prop: 'loading', type: 'boolean', default: 'false', desc: 'Shows loading spinner and disables interaction while an action is in progress' },
  { prop: 'icon', type: 'React.ReactNode', default: 'undefined', desc: 'Optional icon element to display alongside the button text' },
  { prop: 'iconPosition', type: "'left' | 'right'", default: "'left'", desc: 'Determines whether the icon appears before or after the button text' },
  { prop: 'testID', type: 'string', default: 'undefined', desc: 'Identifier used for testing and automation purposes across platforms' }
];
