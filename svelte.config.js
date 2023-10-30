import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: process.env.ADAPTER === 'NODE' ? adapterNode() : adapterStatic(),
		alias: {
			components: 'src/components',
			styles: 'src/styles'
		}
	}
};

export default config;
