import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();
console.log('VITE_REACT_APP_ANON_KEY:', process.env.VITE_REACT_APP_ANON_KEY);
console.log('VITE_REACT_APP_SUPABASEURL:', process.env.VITE_REACT_APP_SUPABASEURL);

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_REACT_APP_ANON_KEY': JSON.stringify(process.env.VITE_REACT_APP_ANON_KEY),
    'import.meta.env.VITE_REACT_APP_SUPABASEURL': JSON.stringify(process.env.VITE_REACT_APP_SUPABASEURL),
  },
});
