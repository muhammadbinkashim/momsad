"use client"

import { useState } from "react"

const Providers = () => {
  const [queryClient] = useState(() => new queryClient)
  const [trpcClient] = useState(() => trpc.createClient({
    links: [
      httpBatchLink({
        url: `${process.env.NEXT_PUBLIC_SERVERURL}/api/trpc`,
        fetch:(url)
      })
    ]
  }))
}

export default Providers