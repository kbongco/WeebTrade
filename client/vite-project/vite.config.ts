import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_REACT_APP_ANON_KEY': JSON.stringify(process.env.VITE_REACT_APP_ANON_KEY),
    'import.meta.env.VITE_REACT_APP_SUPABASEURL': JSON.stringify(process.env.VITE_REACT_APP_SUPABASEURL),
  },
});
