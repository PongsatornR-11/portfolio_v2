import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pongsatorn R. | Full Stack Software Engineer",
  description: "A self-taught Full Stack Software Engineer with a background in Electrical Engineering. Passionate about building robust and user-friendly web applications.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Pongsatorn R." }],
  openGraph: {
    title: "Pongsatorn R. | Full Stack Software Engineer",
    description: "A self-taught Full Stack Software Engineer with a background in Electrical Engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
