// SwiftUI Button Component
export const swiftUIButtonCode = `Button(action: {
    // Handle button press
}) {
    HStack {
        if iconPosition == .left && icon != nil {
            icon
        }
        Text(title)
            .font(.system(size: fontSize, weight: .medium))
        if iconPosition == .right && icon != nil {
            icon
        }
    }
    .padding(.horizontal, paddingX)
    .padding(.vertical, paddingY)
}
.buttonStyle(variant == .primary ? .borderedProminent : 
           variant == .secondary ? .bordered : .plain)
.controlSize(size == .small ? .small : 
           size == .large ? .large : .regular)
.disabled(disabled)
.cornerRadius(borderRadius)
.frame(maxWidth: fullWidth ? .infinity : nil)
.overlay {
    if loading {
        ProgressView()
            .scaleEffect(0.8)
    }
}
.accessibilityIdentifier(testID ?? "")`;

export const swiftUIButtonProps = [
  { prop: 'title', type: 'String', default: '-', desc: 'Button text content that will be displayed inside the button' },
  { prop: 'action', type: '() -> Void', default: '-', desc: 'Callback function that gets called when the button is pressed by the user' },
  { prop: 'variant', type: 'ButtonVariant', default: '.primary', desc: 'Visual style variant that determines the button appearance and behavior' },
  { prop: 'disabled', type: 'Bool', default: 'false', desc: 'When true, the button becomes non-interactive and appears dimmed' },
  { prop: 'size', type: 'ControlSize', default: '.regular', desc: 'Controls the overall size and padding of the button component' },
  { prop: 'fullWidth', type: 'Bool', default: 'false', desc: 'When true, button expands to take the full width of its container' },
  { prop: 'loading', type: 'Bool', default: 'false', desc: 'Shows loading spinner and disables interaction while an action is in progress' },
  { prop: 'icon', type: 'Image?', default: 'nil', desc: 'Optional icon element to display alongside the button text' },
  { prop: 'iconPosition', type: 'IconPosition', default: '.left', desc: 'Determines whether the icon appears before or after the button text' },
  { prop: 'testID', type: 'String?', default: 'nil', desc: 'Identifier used for testing and automation purposes across platforms' }
];
