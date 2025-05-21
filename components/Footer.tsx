export default function Footer() {
  return (
    <footer className="bg-white border-t py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Last Supper Rentals. All rights reserved.
      </div>
    </footer>
  );
}
