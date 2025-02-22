export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body style={{ margin: 0 }}>
        {/* <StyledComponentsRegistry>{children}</StyledComponentsRegistry> */}
        {children}
      </body>
    </html>
  )
}
