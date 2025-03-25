declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<string, string[]>;
  }
}

declare module '@mantine/notifications';