import Image from "next/image";
import logo from "../../public/iradath_logo.png";
import { BsInstagram, BsWhatsapp, BsFacebook } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row  text-white h-full py-8 ">
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="px-2">
            <Image src={logo} height={50} width={50}></Image>
          </div>
          <div className="font-roboto font-semibold py-2  text-3xl">
            IRADATH
          </div>
          <div className="flex flex-row">
            <IconContext.Provider value={{ size: 28 }}>
              <Link href="https://www.facebook.com/iradathinvestments">
                <div className="px-2">
                  <BsFacebook />
                </div>
              </Link>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 28 }}>
              <Link href="https://www.instagram.com/iradathinvestments/">
                <div className="px-2">
                  <BsInstagram />
                </div>
              </Link>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 28 }}>
              <Link href="#">
                <div className="px-2">
                  <BsWhatsapp />
                </div>
              </Link>
            </IconContext.Provider>
          </div>
        </div>
        <div className="flex-1 grid md:grid-cols-3 grid-cols-1 gap-2 w-full items-center">
          <div>
            <span className="font-bold">Iradath Investments </span>
            <br /> Manjeri, Malappuram
            <br /> 676542, Kerala
          </div>
          <div>
            Learn <br />
            Apps <br />
            Community
          </div>
          <div>
            Legal Mentions <br />
            Terms of Services <br />
            Privacy Policy
          </div>
        </div>
      </div>
      <hr />
      <div className="text-white text-center py-2">
        2023 COPYRIGHT BY IRADATH
      </div>
    </div>
  );
}
