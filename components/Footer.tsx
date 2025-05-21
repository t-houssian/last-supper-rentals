export default function Footer() {
  return (
    <footer className="bg-primary border-t border-accent py-8 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-200">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Last Supper Rentals. All rights reserved.
        </div>
        <div className="mt-4 md:mt-0">
          <a
            href="tel:5127555508"
            className="text-accent font-semibold hover:underline"
          >
            📞 512-755-5508
          </a>
        </div>
      </div>
    </footer>
  );
}
