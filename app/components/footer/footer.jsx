import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mb-6 mt-32">
      <div className="flex  items-start justify-around ">
        <div className="flex">
          <div className="p-3 mr-10 ">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={54}
              className="object-contain"
            />
          </div>
          <ul className="py-4 pr-5 pl-1 gap-2 ">
            <li className="text-footer-header text-grey-600 p-1 ">
              <Link href="/">About</Link>
            </li>
            <li className="text-grey-400 p-1 ">
              <Link href="/">About Tripma</Link>
            </li>
            <li className="text-grey-400 p-1 ">
              <Link href="/">How it works</Link>
            </li>
            <li className="text-grey-400 p-1 ">
              <Link href="/">Careers</Link>
            </li>
            <li className="text-grey-400 p-1 ">
              <Link href="/">Press</Link>
            </li>
            <li className="text-grey-400 p-1 ">
              <Link href="/">Blog</Link>
            </li>
            <li className="text-grey-400 p-1 ">
              <Link href="/">Forum</Link>
            </li>
          </ul>
        </div>
        <ul className="py-4 pr-5 pl-1 gap-2 ">
          <li className="text-footer-header text-grey-600 p-1 ">
            <Link href="/">Partner with us</Link>
          </li>
          <li className="text-grey-400 p-1 ">
            <Link href="/">Partnership programs</Link>
          </li>
          <li className="text-grey-400 p-1 ">
            <Link href="/">Affiliate program</Link>
          </li>
          <li className="text-grey-400 p-1 ">
            <Link href="/">Connectivity partners</Link>
          </li>
          <li className="text-grey-400 p-1 ">
            <Link href="/">Promotions and events</Link>
          </li>
          <li className="text-grey-400 p-1 ">
            <Link href="/">Integrations</Link>
          </li>
          <li className="text-grey-400 p-1 ">
            <Link href="/">Community</Link>
          </li>
          <li className="text-grey-400 p-1 ">
            <Link href="/">Loyalty program</Link>
          </li>
        </ul>{" "}
        <ul className="py-4 pr-5 pl-1 gap-2 ">
          <li className="text-footer-header text-grey-600 p-1 ">
            <Link href="/">Support</Link>
          </li>
          <li className="text-grey-400 p-1 ">
            <Link href="/">Help Center</Link>
          </li>
          <li className="text-grey-400 p-1 ">
            <Link href="/">Contact us</Link>
          </li>
          <li className="text-grey-400 p-1 ">
            <Link href="/">Privacy policy</Link>
          </li>
          <li className="text-grey-400 p-1 ">
            <Link href="/">Terms of service</Link>
          </li>
          <li className="text-grey-400 p-1 ">
            <Link href="/">Trust and safety</Link>
          </li>
          <li className="text-grey-400 p-1 ">
            <Link href="/">Accessibility</Link>
          </li>
        </ul>{" "}
        <ul className="py-4 pr-5 pl-1 gap-2 ">
          <li className="text-footer-header text-grey-600 p-1 ">
            <Link href="/">Get the app</Link>
          </li>
          <li className="text-grey-400 p-1 ">
            <Link href="/">Tripma for Android</Link>
          </li>
          <li className="text-grey-400 p-1 ">
            <Link href="/">Tripma for iOS</Link>
          </li>
          <li className="text-grey-400 p-1 ">
            <Link href="/">Mobile site</Link>
          </li>
          <div className="mb-3 mt-6">
            <Link href="/">
              <Image
                src="/appstore.png"
                alt="appstore"
                width={135}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>
          <Link href="/">
            <Image
              src="/googleplay.png"
              alt="googleplay"
              width={135}
              height={40}
              className="object-contain"
            />
          </Link>
        </ul>
      </div>
      <div className="border-t-2 border-grey-200"></div>

      <div className="flex justify-between mx-32 mt-4 ">
        <div className=" flex gap-2">
          <div className="p-1 ">
            <Link href="/">
              <Image
                src="/twitter.png"
                alt="twitter"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="p-1 ">
            <Link href="/">
              <Image
                src="/instagram.png"
                alt="instagram"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="p-1 ">
            <Link href="/">
              <Image
                src="/facebook.png"
                alt="facebook"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
        <span className="text-grey-400  text-lg">
          © 2020 Tripma incorporated
        </span>
      </div>
    </div>
  );
}
