import { PiniaColadaQueryHooksPlugin } from '@pinia/colada'
import type { PiniaColadaOptions } from '@pinia/colada'

export default {
  plugins: [
    PiniaColadaQueryHooksPlugin({
      // global query hooks
    }),
  ],

  queryOptions: {
    staleTime: 60000, // 1 minute
  },
} satisfies PiniaColadaOptions
