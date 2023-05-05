import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: '3f83csl4',
    dataset: 'production',
    title: 'Mateus Riff Portfolio',
    apiVersion: '2023-05-02',
    basePath: '/studio',
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;