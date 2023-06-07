import { PageLinks } from "../Data";
 export const Pagelinks=({parentClass,itemClass})=>{
    return (
        <ul className={parentClass} id="nav-links">
                    {PageLinks.map((link) => {
                        return (
                            <li key={link.id}>
                                <a href={link.href} className={itemClass}> {link.text} </a>
                            </li>

                        );
                    })}
                </ul>
    )
}
