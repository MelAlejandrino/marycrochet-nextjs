"use client";
import logo from "@public/logo.png";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiFlowerTulipOutline } from "@mdi/js";
import mary from "@public/mary.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav>
      <picture className={pathname === "/" ? "active" : ""}>
        <Link href="/">
          <Image src={logo} alt="mary crochet" />
        </Link>
      </picture>
      <picture className={pathname === "/mary" ? "active" : ""}>
        <Link href="/mary">
          <Icon path={mdiFlowerTulipOutline} size={1.5} />
        </Link>
      </picture>
      <picture className={pathname === "/about" ? "active" : ""}>
        <Link href="/about">
          <Image src={mary} className="img-circle" alt="profile" />
        </Link>
      </picture>
    </nav>
  );
};

export default Navbar;
