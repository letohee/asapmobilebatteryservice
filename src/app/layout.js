// File: src/app/layout.js
import './globals.css';
import Navbar from './components/Navbar';

export const metadata = { /* … */ };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
