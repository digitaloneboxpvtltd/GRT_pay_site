
import "./NewsBox.css"

export default function NewsBox(props){
    return (<div className="News_box_container">
        <img src={props.sorce} alt="" />
        <h2>{props.title}</h2>
    </div>)
}