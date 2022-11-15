import {Link} from 'react-router-dom';

const TechItem = ({onClick, title, id}) => {
  return(
    <div>
    {title}
    <button onClick={() => onClick(id)}>Удалить</button>
    <button>
      <Link to={`/tech/${id}`} style={{textDecoration: 'none'}}>Посмотреть</Link>
    </button>
    </div>
  )
}
export default TechItem;