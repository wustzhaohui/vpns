// Removed: /// <reference types="vite/client" />
// Removed: /// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  // Vite-provided environment variables
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly SSR: boolean;

  // Add your custom environment variables here. For example:
  // readonly VITE_API_KEY: string;
  // readonly VITE_SOME_CONFIG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}