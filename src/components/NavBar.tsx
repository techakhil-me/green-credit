import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const NavBar: FunctionComponent = () => {
  return (
    <nav className="self-stretch h-[120px] shrink-0 flex flex-row p-[0px_66px] box-border items-center justify-between">
      <img
        className="relative w-[80px] h-[53.37px] shrink-0 object-cover"
        alt=""
        src="../image-58@2x.png"
      />
      <div className="relative w-[623px] h-[48px] shrink-0 md:hidden">
        <Button
          className="absolute top-[0px] left-[454.9px]"
          sx={{ width: 168.09637451171875 }}
          variant="contained"
          color="success"
          size="large"
        >
          Get in touch
        </Button>
        <a
          className="[text-decoration:none] absolute top-[14px] left-[0px] flex flex-row items-start justify-start gap-[49px]"
          href="#"
        >
          <a className="[text-decoration:none] relative text-base font-roboto text-gray-100 text-left inline-block">
            About Us
          </a>
          <a className="relative text-base font-roboto text-gray-100 text-left inline-block">
            Our Service
          </a>
          <a className="relative text-base font-roboto text-gray-100 text-left inline-block">{`The Team `}</a>
          <a className="relative text-base font-roboto text-gray-100 text-left inline-block">
            Portfolio
          </a>
        </a>
      </div>
      <div className="relative w-[32px] h-[32px] shrink-0 overflow-hidden hidden md:flex">
        <img
          className="absolute h-[50%] w-[75%] top-[25%] right-[12.5%] bottom-[25%] left-[12.5%] max-w-full max-h-full"
          alt=""
          src="../vector.svg"
        />
      </div>
    </nav>
  );
};

export default NavBar;
