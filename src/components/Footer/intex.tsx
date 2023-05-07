import FooterWrapper from "./style";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <FooterWrapper>
          &copy; {currentYear} Mateus Riff
        </FooterWrapper>
    );
}

export default Footer;