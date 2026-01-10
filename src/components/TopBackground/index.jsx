import UserImage from '../../assets/users.png'
immport { Background } from './styles'

function TopBackground(){

    return (
        <Background>
            <img src={UsersImage} alt="Imagem Usuarios" />
            </Background>
    )
}

export default TopBackground