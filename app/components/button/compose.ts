// Jetpack Compose Button Component
export const composeButtonCode = `@Composable
fun PrimaryButton(
    title: String,
    onPress: () -> Unit,
    variant: ButtonVariant = ButtonVariant.Primary,
    disabled: Boolean = false,
    size: ButtonSize = ButtonSize.Medium,
    fullWidth: Boolean = false,
    loading: Boolean = false,
    icon: (@Composable () -> Unit)? = null,
    iconPosition: IconPosition = IconPosition.Left,
    testID: String? = null
) {
    val buttonColors = when (variant) {
        ButtonVariant.Primary -> ButtonDefaults.buttonColors(
            containerColor = MaterialTheme.colorScheme.primary
        )
        ButtonVariant.Secondary -> ButtonDefaults.outlinedButtonColors()
        ButtonVariant.Ghost -> ButtonDefaults.textButtonColors()
    }
    
    Button(
        onClick = onPress,
        enabled = !disabled && !loading,
        colors = buttonColors,
        modifier = Modifier
            .then(if (fullWidth) Modifier.fillMaxWidth() else Modifier)
            .height(when (size) {
                ButtonSize.Small -> 36.dp
                ButtonSize.Medium -> 48.dp
                ButtonSize.Large -> 56.dp
            })
            .testTag(testID ?: "")
    ) {
        if (loading) {
            CircularProgressIndicator(
                modifier = Modifier.size(16.dp),
                strokeWidth = 2.dp
            )
        } else {
            Row(
                horizontalArrangement = Arrangement.Center,
                verticalAlignment = Alignment.CenterVertically
            ) {
                if (iconPosition == IconPosition.Left && icon != null) {
                    icon()
                    Spacer(modifier = Modifier.width(8.dp))
                }
                Text(
                    text = title,
                    fontSize = when (size) {
                        ButtonSize.Small -> 14.sp
                        ButtonSize.Medium -> 16.sp
                        ButtonSize.Large -> 18.sp
                    }
                )
                if (iconPosition == IconPosition.Right && icon != null) {
                    Spacer(modifier = Modifier.width(8.dp))
                    icon()
                }
            }
        }
    }
}`;

export const composeButtonProps = [
  { prop: 'title', type: 'String', default: '-', desc: 'Button text content that will be displayed inside the button' },
  { prop: 'onPress', type: '() -> Unit', default: '-', desc: 'Callback function that gets called when the button is pressed by the user' },
  { prop: 'variant', type: 'ButtonVariant', default: 'Primary', desc: 'Visual style variant that determines the button appearance and behavior' },
  { prop: 'disabled', type: 'Boolean', default: 'false', desc: 'When true, the button becomes non-interactive and appears dimmed' },
  { prop: 'size', type: 'ButtonSize', default: 'Medium', desc: 'Controls the overall size and padding of the button component' },
  { prop: 'fullWidth', type: 'Boolean', default: 'false', desc: 'When true, button expands to take the full width of its container' },
  { prop: 'loading', type: 'Boolean', default: 'false', desc: 'Shows loading spinner and disables interaction while an action is in progress' },
  { prop: 'icon', type: '@Composable (() -> Unit)?', default: 'null', desc: 'Optional icon composable to display alongside the button text' },
  { prop: 'iconPosition', type: 'IconPosition', default: 'Left', desc: 'Determines whether the icon appears before or after the button text' },
  { prop: 'testID', type: 'String?', default: 'null', desc: 'Identifier used for testing and automation purposes across platforms' }
];
