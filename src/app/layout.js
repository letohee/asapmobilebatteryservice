import './globals.css';         // this must point exactly at src/app/globals.css
import Navbar from './components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-red-500 text-white">
        <Navbar />
        {children}               {/* ← this is critical */}
      </body>
    </html>
  );
}
