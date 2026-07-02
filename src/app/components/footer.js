export default function Footer() {
  return (
    <footer className="backdrop-blur-md mt-5">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Church of St Theresa</h2>
          <p className="leading-relaxed">
            510 Kampong Bahru Road
            <br />
            Singapore 099447
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#TermsOfUse" className="hover:underline">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#PrivacyPolicy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-2xl mb-2">Get in Touch</h3>
          <p>Tel: 6271 1184</p>
          <p>Email: cst.secretariat@catholic.org.sg</p>
        </div>
      </div>

      <div className="text-center py-4 mb-4">
        © {new Date().getFullYear()} Church of St Theresa. All rights reserved.
      </div>
    </footer>
  );
}
