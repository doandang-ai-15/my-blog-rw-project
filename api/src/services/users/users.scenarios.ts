import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: { email: 'String6907848', updatedAt: '2025-07-22T10:16:23.273Z' },
    },
    two: {
      data: { email: 'String1453907', updatedAt: '2025-07-22T10:16:23.273Z' },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
