import * as initTrpc from '@trpc/server';

const t = initTrpc.context().create()

export const router = t.router
export const publicProcedure = t.publicProcedure