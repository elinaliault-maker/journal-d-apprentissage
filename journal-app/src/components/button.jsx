import { Link } from "react-router"
import goToNextArticle from "../utils/goToNextArticle"

export default function ButtonNext() {
    return (
        <Link to={"/" + goToNextArticle().url}><button>{goToNextArticle().titre}</button></Link>
    )
}