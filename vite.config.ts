import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    sourcemap: false
  },
  plugins: [react()],
  resolve: {
    alias:[{
      find: "@public",
      replacement: path.resolve(projectRootDir,"public")
    }]
  }
})
