import React from "react";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  FormInput,
  Form,
  FooterLinkTitle,
  FooterLink,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  SocialMediaWrap,
  SocialMedia,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";
import { Button } from "../../GlobalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the lastest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investistors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investistors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investistors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investistors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            ULTRA
          </SocialLogo>
          <WebsiteRights>ULTRA 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" arial-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" arial-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              arial-label="Youtube"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              arial-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              arial-label="Twitter"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
