// /// <reference types="vite/client" />
// /// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  // Add your custom environment variables here. For example:
  // readonly VITE_API_KEY: string;
  // readonly VITE_SOME_CONFIG: string;
  readonly DEV: boolean; // For process.env.NODE_ENV === 'development'
  readonly PROD: boolean; // For process.env.NODE_ENV === 'production'
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}