import { GitHubIcon, LinkedInIcon } from "@/assets";
import { AboutMeWrapper, StyledIcon } from "./style";

const AboutMe = () => {
    return(
        <AboutMeWrapper>
            <div>
                <a href="https://www.linkedin.com/in/mateus-riff/" target="_blank">
                    <StyledIcon src={LinkedInIcon} alt="My LinkedIn" />
                </a>                         
                <a href="https://github.com/mateusriff" target="_blank">
                    <StyledIcon src={GitHubIcon} alt="My GitHub" />
                </a>
            </div>
            <h1>Hello, I&apos;m Mateus Riff</h1>
            <h3>I&apos;m a software developer from Brazil</h3>
            <p>👇 You can check out my projects and articles below 👇</p>
        </AboutMeWrapper>
    );
}

export default AboutMe;