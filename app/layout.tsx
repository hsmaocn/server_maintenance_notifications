import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "服务器维护通知",
  description: "我们正在进行服务器维护，以提供更好的服务体验。",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="gray" dir="ltr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'