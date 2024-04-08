export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container flex flex-row justify-between">
        <div className="container">
          <h1 className="text-3xl font-semibold">MiniMAL</h1>
          <p className="text-gray-400">Modern and Minimal Homes</p>
        </div>
        <div className="container">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <p className="text-gray-400">
            123-456-7890
            <br />
            123 Main St.
            <br />
            New York, NY 10001
          </p>

          <div className="flex flex-row gap-5 py-12">
            <a href="https://www.facebook.com">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"
                alt="Facebook"
              />
            </a>
            <a href="https://www.twitter.com">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/twitter.png"
                alt="Twitter"
              />
            </a>
            <a href="https://www.instagram.com">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
