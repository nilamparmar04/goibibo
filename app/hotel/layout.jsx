import Navbar from "../components/Navbar";



export default function HotelLayout({
    children,
  }) {
    return (
      <html lang="en">
        <body>
          {/* <Navbar/> */}
          {children}
        </body>
      </html>
    )
}