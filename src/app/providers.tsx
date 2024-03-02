"use client"
const { NextUIProvider } = require("@nextui-org/react");

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}