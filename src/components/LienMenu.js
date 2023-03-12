import {Link} from "react-router-dom";

function LienMenu({lien, texte, image}){
    return (
        <li className="text-center flex justify-center hover:bg-eerieBlack ">
            <img alt={texte} className="w-10 h-10" src={image} />
            <Link  to={lien}  className="ml-5 font-title font-medium self-center text-tiffanyBlue hover:underline">{texte}</Link>
        </li>
    )
}

export default LienMenu