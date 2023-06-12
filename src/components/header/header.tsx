import { Container, HeaderText, LogoImage } from "./header.style"
import LogoIcon from '../../assets/Screenshot_1.png'
function Header(){
    return(
        <Container>
            <LogoImage src={LogoIcon}/>
            <HeaderText>Sua lista de animes aqui!</HeaderText>
        </Container>
    )
}

export default Header