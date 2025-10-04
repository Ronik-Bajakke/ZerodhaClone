import React from "react";

function Footer() {
  const linkClass = "d-block mb-3 text-muted text-decoration-none";

  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="logo"
            />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Account</p>
            <a className={linkClass} href="">
              Open demat account
            </a>
            <a className={linkClass} href="">
              Minor demat account
            </a>
            <a className={linkClass} href="">
              NRI demat account
            </a>
            <a className={linkClass} href="">
              Commodity
            </a>
            <a className={linkClass} href="">
              Dematerialisation
            </a>
            <a className={linkClass} href="">
              Fund transfer
            </a>
            <a className={linkClass} href="">
              MTF
            </a>
            <a className={linkClass} href="">
              Referral program
            </a>
          </div>

          <div className="col">
            <p>Support</p>
            <a className={linkClass} href="">
              Contact us
            </a>
            <a className={linkClass} href="">
              Support portal
            </a>
            <a className={linkClass} href="">
              How to file a complaint?
            </a>
            <a className={linkClass} href="">
              Status of your complaints
            </a>
            <a className={linkClass} href="">
              Bulletin
            </a>
            <a className={linkClass} href="">
              Circular
            </a>
            <a className={linkClass} href="">
              Z-Connect blog
            </a>
            <a className={linkClass} href="">
              Downloads
            </a>
          </div>

          <div className="col">
            <p>Company</p>
            <a className={linkClass} href="">
              About
            </a>
            <a className={linkClass} href="">
              Philosophy
            </a>
            <a className={linkClass} href="">
              Press & media
            </a>
            <a className={linkClass} href="">
              Careers
            </a>
            <a className={linkClass} href="">
              Zerodha Cares (CSR)
            </a>
            <a className={linkClass} href="">
              Zerodha.tech
            </a>
            <a className={linkClass} href="">
              Open source
            </a>
          </div>

          <div className="col">
            <p>Quick links</p>
            <a className={linkClass} href="">
              Upcoming IPOs
            </a>
            <a className={linkClass} href="">
              Brokerage charges
            </a>
            <a className={linkClass} href="">
              Market holidays
            </a>
            <a className={linkClass} href="">
              Economic calendar
            </a>
            <a className={linkClass} href="">
              Calculators
            </a>
            <a className={linkClass} href="">
              Markets
            </a>
            <a className={linkClass} href="">
              Sectors
            </a>
          </div>
        </div>

        {/* Legal / Disclaimer */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary."
          </p>
        </div>
        <div className="pb-3 text-center " style={{ fontSize: "13px" }}>
          <a className="text-muted text-decoration-none mx-3" href="">
            NSE
          </a>
          <a className="text-muted text-decoration-none mx-3" href="">
            BSE
          </a>
          <a className="text-muted text-decoration-none mx-3" href="">
            MCX
          </a>
          <a className="text-muted text-decoration-none mx-3" href="">
            Terms & conditions
          </a>
          <a className="text-muted text-decoration-none mx-3" href="">
            Policies & procedures
          </a>
          <a className="text-muted text-decoration-none mx-3" href="">
            Privacy policy
          </a>
          <a className="text-muted text-decoration-none mx-3" href="">
            Disclosure
          </a>
          <a className="text-muted text-decoration-none mx-3" href="">
            For investor's attention
          </a>
          <a className="text-muted text-decoration-none mx-3" href="">
            Investor charter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
