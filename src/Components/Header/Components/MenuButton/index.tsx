import { 
    Line,
    MenuButtonContainer
} from "./style"

interface MenuButtonProps{
    status: boolean
}

const MenuButton: React.FC<MenuButtonProps> = ({status}) =>{
    console.log(status)
    return(
        <MenuButtonContainer>
            <Line active={status} type='first-line'/>
            <Line active={status} type='mid-line'/>
            <Line active={status} type='last-line'/>
        </MenuButtonContainer>
    )
}
 
export default MenuButton