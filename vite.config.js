// 10 lines (9 sloc)  202 Bytes

import vue from '@vitejs/plugin-vue';
import Icons from 'vite-plugin-icons';

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue(), Icons()],
};