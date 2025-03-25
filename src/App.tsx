import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { DiscordColorGenerator } from './components/DiscordColorGenerator';

function App() {
  return (
    <MantineProvider>
      <Notifications />
      <DiscordColorGenerator />
    </MantineProvider>
  );
}

export default App;