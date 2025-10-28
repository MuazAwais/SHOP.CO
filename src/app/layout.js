import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./componenet/shared/layout/layout";

const geistInter = Inter({
  variable: "--font-geist-inter",
  subsets: ["inter"],
});



export const metadata = {
  title: "SHOP.CO",
  description: "We have clothes that suits your style and which you’re proud to wear. For men.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://res.cloudinary.com/dv8dtipj1/image/upload/v1761390583/original-983633d1f6de58f5d871f174ff34f057_o4jxkt.png" type="image"/>
      </head>
      <body
        className={`${geistInter.variable}`}
      >
        <Layout>
        {children}
        </Layout>
      </body>
    </html>
  );
}
