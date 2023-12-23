import Navbar from "../components/Navbar";



export default function TrainLayout({
    children 
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