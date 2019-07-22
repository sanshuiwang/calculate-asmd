import { splash } from 'docz-plugin-splash'

export default {
  esm: 'rollup',
  cjs: 'rollup',
  doc: {
    src: './docs',
    public: './public',
    base: '/calculate-asmd/',
    title: 'calculate-asmd',
    description: 'calculate/arithmetic',
    plugins: [splash()]
  }
}
