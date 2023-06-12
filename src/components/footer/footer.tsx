import { Container, CopyImage, FooterImage } from "./footer.style"
import FooterLogo from '../../assets/footer name.png'
function Footer(){
    return(
        <Container>
            <FooterImage src={FooterLogo}/>
            <CopyImage>© 2023 - Code by Leonardo Mendes.</CopyImage>
        </Container>
    )
}

export default Footer