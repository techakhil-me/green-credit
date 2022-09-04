import { FunctionComponent, useEffect } from "react";
import { TextField, Button, Icon } from "@mui/material";
import NavBar from "../components/NavBar";
import About from "../components/About";

const DigitalAgencyLandingPageUI: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="relative bg-gray-500 w-full flex flex-col items-start justify-start">
      <NavBar />
      <section className="self-stretch flex flex-row p-[40px_66px] box-border items-center justify-start gap-[40px] text-left text-lg text-gray-300 font-roboto lg:flex-row md:flex-col">
        <div className="flex-[1] flex flex-col items-start justify-start gap-[28px] md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
            <img
              className="relative w-[18.66px] h-[18.66px] shrink-0"
              alt=""
              src="../vector1.svg"
            />
            <div className="relative leading-[16px] inline-block w-[499.35px] shrink-0">
              Green Credit
            </div>
          </div>
          <b className="self-stretch relative text-[62px] tracking-[-0.03em] leading-[75px] inline-block text-gray-100 sm:text-3xl sm:leading-[30px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>We help you</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              <span>more</span>
              <span className="text-white">{` `}</span>
              <span className="text-green">Cultivate</span>
              <span> more</span>
            </p>
            <p className="m-[0]">
              <span>to your farm</span>
            </p>
          </b>
          <div className="self-stretch relative text-[22px] tracking-[-0.02em] leading-[30px] inline-block sm:text-base">{`Financial consortium specialized in agri financing, agriculture loan, finance in agriculture, agricultural finance & agriculture bank loans`}</div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
            <TextField
              className="[border:none] bg-[transparent] relative"
              sx={{ width: 403 }}
              color="primary"
              variant="outlined"
              type="text"
              label="Email address"
              size="medium"
              margin="none"
            />
            <Button
              className="relative"
              sx={{ width: 130 }}
              variant="contained"
              color="success"
              size="large"
            >
              Lets Go
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-end justify-start relative">
          <img
            className="relative w-[552.97px] h-[552.84px] shrink-0 object-cover z-[0]"
            alt=""
            src="../image-61@2x.png"
          />
          <img
            className="absolute m-[0_!important] top-[-53.22px] left-[-43.25px] w-[375.57px] h-[437.77px] shrink-0 object-cover [&.animate]:animate-[6s_ease-in-out_0s_infinite_alternate_both_bounce-top] opacity-[1] z-[1]"
            alt=""
            src="../image-59@2x.png"
            data-animate-on-scroll
          />
          <img
            className="absolute m-[0_!important] top-[96.12px] left-[137.18px] w-[390.28px] h-[443.06px] shrink-0 object-cover [&.animate]:animate-[6s_ease-in-out_1s_infinite_alternate_both_bounce-top] opacity-[1] z-[2]"
            alt=""
            src="../image-60@2x.png"
            data-animate-on-scroll
          />
        </div>
      </section>
      <section className="self-stretch flex flex-row p-[40px_66px] box-border items-center justify-between text-left text-base text-gray-100 font-roboto md:flex-col sm:pl-[66px] sm:box-border">
        <div className="relative inline-block">{`Proud partern at Hubspot & Segment`}</div>
        <div className="w-[942px] shrink-0 flex flex-row items-center justify-center gap-[20px] sm:flex-col">
          <img
            className="relative w-[111.57px] h-[28.55px] shrink-0"
            alt=""
            src="../slack.svg"
          />
          <img
            className="relative w-[99.65px] h-[30px] shrink-0"
            alt=""
            src="../trusted-partner.svg"
          />
          <img
            className="relative w-[148.78px] h-[30px] shrink-0"
            alt=""
            src="../union.svg"
          />
          <img
            className="relative w-[133px] h-[24px] shrink-0 object-cover"
            alt=""
            src="../group-1000001909@2x.png"
          />
          <img
            className="relative w-[138px] h-[30px] shrink-0 object-cover"
            alt=""
            src="../group-1000001910@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch bg-gray-400 flex flex-row p-[60px_135px] box-border items-start justify-center gap-[103px] text-left text-2xl text-gray-100 font-roboto md:flex-col sm:pl-[66px] sm:box-border">
        <div className="flex flex-col items-start justify-start gap-[15px] text-base text-gray-200">
          <div className="relative tracking-[0.06em] font-medium inline-block">
            ACHIEVE MORE
          </div>
          <b className="relative text-3xl leading-[40px] inline-block text-gray-100 w-[300px]">
            Purpose of a convoy is to keep increase yield
          </b>
        </div>
        <div className="flex flex-row items-start justify-start gap-[24px]">
          <img
            className="relative w-[50px] h-[50px] shrink-0"
            alt=""
            src="../icon.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[14px]">
            <div className="relative tracking-[-0.01em] font-medium inline-block">
              Built for Farmers
            </div>
            <div className="self-stretch relative text-base leading-[26px] text-gray-300 inline-block">
              pioneered the formation and growth of Farmer Producer
              Organizations/Farmer Producers
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[24px]">
          <img
            className="relative w-[50px] h-[50px] shrink-0"
            alt=""
            src="../icon1.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[14px]">
            <div className="relative tracking-[-0.01em] font-medium inline-block">
              In sync with you
            </div>
            <div className="self-stretch relative text-base leading-[26px] text-gray-300 inline-block">
              Schemes like Equity Grant and Credit Guarantee Fund Scheme to FPCs
              to improve availability of working capital
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[20px] text-center text-[42px] text-gray-100 font-roboto">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="relative leading-[54px] font-medium inline-block">
            What our happy client say
          </div>
          <div className="relative text-base tracking-[0.02em] leading-[28px] text-gray-300 inline-block">
            Things that make it the best place to start trading
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-[30px] text-lg text-gray-300">
          <div className="relative w-[548px] h-[300px] shrink-0">
            <div className="absolute top-[30px] left-[0px] rounded-[16px] bg-gray-400 w-[548px] h-[270px]" />
            <div className="absolute top-[164px] left-[63px] leading-[30px] inline-block w-[422px]">{`When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline `}</div>
            <img
              className="absolute top-[83.83px] left-[143px] w-[83.62px] h-[61.03px]"
              alt=""
              src="../icon2.svg"
            />
            <div className="absolute top-[114px] left-[206.5px] text-xl font-medium text-gray-100 inline-block">
              Rowhan Smith
            </div>
            <img
              className="absolute top-[84px] left-[143px] w-[291.34px] h-[270.19px]"
              alt=""
              src="../review.svg"
            />
            <img
              className="absolute top-[-14px] left-[210px] rounded-[60px] w-[128px] h-[128px] object-cover"
              alt=""
              src="../image@2x.png"
            />
          </div>
          <div className="relative w-[570px] h-[300px] shrink-0">
            <div className="absolute top-[30px] left-[0px] rounded-[16px] bg-gray-400 shadow-[0px_55px_80px_-10px_rgba(0,_0,_0,_0.04)] w-[570px] h-[270px]" />
            <div className="absolute top-[164px] left-[51px] leading-[30px] inline-block w-[468px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove.
            </div>
            <img
              className="absolute top-[83.83px] left-[73.5px] w-[86.62px] h-[61.03px]"
              alt=""
              src="../icon3.svg"
            />
            <div className="absolute top-[114px] left-[220.5px] text-xl font-medium text-gray-100 inline-block">
              John De marli
            </div>
            <img
              className="absolute top-[84px] left-[124.66px] w-[320.69px] h-[270.19px]"
              alt=""
              src="../review1.svg"
            />
            <img
              className="absolute top-[-14px] left-[221px] rounded-[60px] w-[128px] h-[128px] object-cover"
              alt=""
              src="../image1@2x.png"
            />
          </div>
          <div className="relative w-[548px] h-[300px] shrink-0">
            <div className="absolute top-[30px] left-[0px] rounded-[16px] bg-gray-400 w-[548px] h-[270px]" />
            <div className="absolute top-[164px] left-[63px] leading-[30px] inline-block w-[422px]">
              From the countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at the coast.
            </div>
            <img
              className="absolute top-[83.83px] left-[62.5px] w-[86.62px] h-[61.03px]"
              alt=""
              src="../icon4.svg"
            />
            <div className="absolute top-[114px] left-[197px] text-xl font-medium text-gray-100 inline-block">
              Robin Ayala Doe
            </div>
            <img
              className="absolute top-[84px] left-[113.66px] w-[291.34px] h-[270.19px]"
              alt=""
              src="../review2.svg"
            />
            <img
              className="absolute top-[-14px] left-[210px] rounded-[60px] w-[128px] h-[128px] object-cover"
              alt=""
              src="../image2@2x.png"
            />
          </div>
        </div>
        <img
          className="relative w-[269.12px] h-[67.02px] shrink-0"
          alt=""
          src="../button.svg"
        />
        <img
          className="relative w-[1170px] h-[0.6px] shrink-0"
          alt=""
          src="../line.svg"
        />
      </section>
      <section className="self-stretch flex flex-col p-[40px_80px] box-border items-center justify-center text-left text-[34px] text-gray-100 font-roboto">
        <div className="self-stretch rounded-[24px] bg-gray-400 flex flex-row p-[61px_64px] box-border items-center justify-center gap-[94px] md:flex-col">
          <div className="flex-[1] flex flex-col items-start justify-start gap-[22px] md:flex-[unset] md:self-stretch">
            <div className="relative tracking-[-0.01em] leading-[40px] font-medium inline-block">
              Subscribe newsletter
            </div>
            <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] text-gray-300 inline-block opacity-[0.88]">
              The copy warned the Little Blind Text, that where it came from it
              would have been rewritten.
            </div>
          </div>
          <div className="flex-[1] flex flex-row items-start justify-start md:flex-[unset] md:self-stretch sm:flex-col">
            <TextField
              className="[border:none] bg-[transparent] flex-[1] relative sm:flex-[unset] sm:self-stretch"
              color="success"
              variant="outlined"
              type="text"
              placeholder="Enter email address"
              size="medium"
              margin="none"
            />
            <Button
              className="flex-[1] self-stretch sm:flex-[unset] sm:self-stretch"
              variant="contained"
              color="success"
              size="large"
              endIcon={<Icon>arrow_forward_ios_sharp</Icon>}
            >
              Discover
            </Button>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-gray-400 flex flex-col p-[24px_0px] box-border items-center justify-start text-left text-sm text-gray-300 font-roboto">
        <div className="flex flex-row items-start justify-start gap-[145px] sm:flex-col">
          <div className="flex flex-col items-start justify-start gap-[26px] text-lg text-gray-100">
            <div className="self-stretch flex flex-row items-center justify-start gap-[13px]">
              <img
                className="relative w-[30px] h-[20px] shrink-0"
                alt=""
                src="../logo.svg"
              />
              <div className="relative leading-[18px] font-medium inline-block">
                Green Credit
              </div>
            </div>
            <div className="relative text-base tracking-[-0.01em] leading-[28px] text-gray-300 inline-block w-[274px]">
              focused on increasing incomes of small and marginal farmers
              through aggregation and development of agribusiness.
            </div>
            <a
              className="[text-decoration:none] flex flex-row items-start justify-start gap-[17px]"
              href="#"
            >
              <img
                className="relative w-[30px] h-[30px] shrink-0"
                alt=""
                src="../facebook.svg"
              />
              <img
                className="relative w-[30px] h-[30px] shrink-0"
                alt=""
                src="../twitter.svg"
              />
              <img
                className="relative w-[30px] h-[30px] shrink-0"
                alt=""
                src="../linkedin.svg"
              />
            </a>
          </div>
          <div className="flex flex-col items-start justify-start gap-[22px]">
            <div className="relative text-lg leading-[18px] font-medium text-gray-100 inline-block">
              Company
            </div>
            <About />
            <div className="relative tracking-[-0.01em] inline-block">
              Terms of Use
            </div>
            <div className="relative tracking-[-0.01em] inline-block">
              Privacy Policy
            </div>
            <div className="relative tracking-[-0.01em] inline-block">
              How it Works
            </div>
            <div className="relative tracking-[-0.01em] inline-block">
              Contact Us
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[25px]">
            <div className="relative text-lg leading-[18px] font-medium text-gray-100 inline-block">
              Get Help
            </div>
            <div className="relative tracking-[-0.01em] inline-block">
              Support Carrer
            </div>
            <div className="relative tracking-[-0.01em] inline-block">
              24h Service
            </div>
            <div className="relative tracking-[-0.01em] inline-block">
              Quick Chat
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[25px]">
            <div className="relative text-lg leading-[18px] font-medium text-gray-100 inline-block">
              Support
            </div>
            <div className="relative tracking-[-0.01em] inline-block">FAQ</div>
            <div className="relative tracking-[-0.01em] inline-block">
              Policy
            </div>
            <div className="relative tracking-[-0.01em] inline-block">
              Business
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[29px]">
            <a className="relative text-lg leading-[18px] font-medium text-gray-100 inline-block">
              Contact
            </a>
            <div className="relative tracking-[-0.01em] inline-block">
              WhatsApp
            </div>
            <div className="relative tracking-[-0.01em] inline-block">
              Support 24
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalAgencyLandingPageUI;
