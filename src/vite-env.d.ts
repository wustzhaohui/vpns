// /// <reference types="vite/client" />
// /// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  // Add your custom environment variables here. For example:
  // readonly VITE_API_KEY: string;
  // readonly VITE_SOME_CONFIG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
