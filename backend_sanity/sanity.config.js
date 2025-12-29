import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemaTypes from './schemas/index'

export default defineConfig({
  name: 'default',
  title: 'xdev_portfolio',

  projectId: 'r0e6zcnl',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
