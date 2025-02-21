import ReactQueryProviders from "@/utils/ReactQueryProviders"
import StyledComponentsRegistry from "@/lib/registry"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body style={{ margin: 0 }}>
        <StyledComponentsRegistry>
          <ReactQueryProviders>{children}</ReactQueryProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
