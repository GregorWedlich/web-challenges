import logo from "./img/logo.jpg";
import Link from "./components/Link";

export default function Logo() {
  return (
    <Link href="#">
      <img className="round-image" src={logo} alt="logo" />
    </Link>
  );
}
