import { ContextProvider } from "@/utils/ContextProvider"
import ReactQueryProviders from "@/utils/ReactQueryProviders"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ReactQueryProviders>
          <ContextProvider>{children}</ContextProvider>
        </ReactQueryProviders>
      </body>
    </html>
  )
}
