import React from "react"
import Navbar from "../components/Navbar"

export default function FlightLayout({
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