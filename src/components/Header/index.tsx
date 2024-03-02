import { ModeToggle } from "../mode-toggle.tsx" 
// import "./style.css"

export function Header () {
    return(
        <nav className="p-2 container absolute flex justify-end ">
            <ModeToggle />
        </nav> 
    )
        
    
}