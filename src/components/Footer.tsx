import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 w-full bg-gray-100 py-4">
      <div className="container mx-auto text-center text-sm text-gray-600">
        <p>© 2025 경매사이트. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:text-indigo-600">
            About
          </a>
          <a href="#" className="hover:text-indigo-600">
            Contact
          </a>
          <a href="#" className="hover:text-indigo-600">
            Terms
          </a>
          <a href="#" className="hover:text-indigo-600">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
