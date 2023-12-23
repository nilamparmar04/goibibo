import Navbar from "../components/Navbar";



export default function BusesLayout({
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