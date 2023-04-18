import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

const Icons = () => {
    return (
                <div className="social-medias">
                    <a target="_blank" href="https://www.linkedin.com/in/ryanpaiva05/" rel="noopener noreferrer" class="outer-shadow">
                        <i><FaLinkedinIn /></i>
                    </a>
                    <a target="_blank" href="https://api.whatsapp.com/send/?phone=5531983560836&text&type=phone_number&app_absent=0" rel="noopener noreferrer" class="outer-shadow">
                        <i><FaWhatsapp /></i>
                    </a>
                    <a target="_blank" href="https://github.com/ryanpaiva" rel="noopener noreferrer" class="outer-shadow">
                        <i><FaGithub /></i>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/paivary/" rel="noopener noreferrer" class="outer-shadow">
                        <i><FaInstagram /></i>
                    </a>
                </div>
    )
}
export { Icons }