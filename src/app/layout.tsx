import ReactQueryProviders from "@/utils/ReactQueryProviders"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </body>
    </html>
  )
}
