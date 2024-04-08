export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white p-12">
      <div className="container flex flex-row justify-center gap-20">
        <div>
          <h1 className="text-3xl font-semibold">MiniMAL</h1>
          <p className="text-gray-400">Modern and Minimal Homes</p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <p className="text-gray-400">
            123-456-7890
            <br />
            123 Main St.
            <br />
            Yokohama, Japan
          </p>
        </div>
      </div>
      <div className="flex gap-5 py-12 justify-center">
        <a href="https://www.facebook.com">
          <img
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/facebook-new.png"
            alt="Facebook"
          />
        </a>
        <a href="https://www.twitter.com">
          <img
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/twitter.png"
            alt="Twitter"
          />
        </a>
        <a href="https://www.instagram.com">
          <img
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/instagram-new.png"
            alt="Instagram"
          />
        </a>
      </div>
    </footer>
  );
}
