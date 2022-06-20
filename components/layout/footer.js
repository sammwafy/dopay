import { Col, Image, Row, Switch } from "antd";
import Link from "next/link.js";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher.js";
import { FooterWrapper } from "./styles/footer.styled.js";

const Footer = () => {
  return (
    <FooterWrapper>
      <Col className="footerLeft">
        <Image src="imgs/landing/logo.png" alt="logo" preview={false} />
        <p>DoPay is a bank system project done with love and NextJS</p>
        <h3>© DoPay 2022</h3>
      </Col>
      <Col className="footerLinks">
        <Row>
          <h2>Company</h2>
          <ul>
            <Link href="/commingsoon">
              <li>About Us</li>
            </Link>
            <Link href="/commingsoon">
              <li>FAQ</li>
            </Link>
            <Link href="/commingsoon">
              <li>Contact Us</li>
            </Link>
          </ul>
        </Row>
        <Row>
          <h2>Services</h2>
          <ul>
            <Link href="/commingsoon">
              <li>Send Money</li>
            </Link>
            <Link href="/commingsoon">
              <li>Withdraw Money</li>
            </Link>
            <Link href="/commingsoon">
              <li>Transfer Money</li>
            </Link>
            <Link href="/commingsoon">
              <li>Transactions Log</li>
            </Link>
          </ul>
        </Row>
        <Row>
          <h2>Resources</h2>
          <ul>
            <Link href="/commingsoon">
              <li>Blog</li>
            </Link>
            <Link href="/commingsoon">
              <li>Financial Tips</li>
            </Link>
            <Link href="/commingsoon">
              <li>Careers</li>
            </Link>
          </ul>
        </Row>
      </Col>
      <Col className="rightFooter">
        <ul className="socialLinks">
          <li>
            <Image
              src="imgs/landing/facebook.png"
              alt="facebook"
              preview={false}
            />
          </li>
          <li>
            <Image
              src="imgs/landing/twitter.png"
              alt="facebook"
              preview={false}
            />
          </li>
          <li>
            <Image
              src="imgs/landing/instagram.png"
              alt="facebook"
              preview={false}
            />
          </li>
          <li>
            <Image
              src="imgs/landing/linkedin.png"
              alt="facebook"
              preview={false}
            />
          </li>
        </ul>
        <div className="themeSwitch">
        <hr/>
          <h3>swtich theme</h3>
          <ThemeSwitcher showSwitch />
        </div>
      </Col>
    </FooterWrapper>
  );
};

export default Footer;
