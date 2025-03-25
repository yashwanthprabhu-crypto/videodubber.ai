import { useState } from 'react';
import {
  Container,
  TextInput,
  ColorPicker,
  Text,
  Paper,
  Button,
  Stack,
  Title,
  Code,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import type { ChangeEvent } from 'react';

export function DiscordColorGenerator() {
  const [text, setText] = useState<string>('');
  const [color, setColor] = useState<string>('#1C7ED6');

  const getColoredText = (): string => {
    const hex = color.replace('#', '');
    return `[${text}](https://via.placeholder.com/15/${hex}/000000?text=+)`;
  };

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(getColoredText());
      notifications.show({
        title: 'Copied!',
        message: 'Text copied to clipboard',
        color: 'green',
      });
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Failed to copy text',
        color: 'red',
      });
    }
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  return (
    <Container size="sm" py="xl">
      <Stack spacing="lg">
        <Title order={1}>Discord Colored Text Generator</Title>
        
        <TextInput
          label="Your Text"
          placeholder="Enter your text here"
          value={text}
          onChange={handleTextChange}
        />

        <Text>Select Color</Text>
        <ColorPicker
          format="hex"
          value={color}
          onChange={setColor}
          fullWidth
        />

        <Paper p="md" withBorder>
          <Text>Preview:</Text>
          <Text size="lg" c={color}>
            {text || 'Preview will appear here'}
          </Text>
        </Paper>

        <Button onClick={handleCopy} disabled={!text}>
          Copy Discord Format
        </Button>

        <Paper p="md" withBorder>
          <Text>Discord Format:</Text>
          <Code block>{getColoredText()}</Code>
        </Paper>
      </Stack>
    </Container>
  );
}