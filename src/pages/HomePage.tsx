
import { Link } from 'react-router-dom'


const HomePage = (props:any) => {
console.log(props);

  return (
    <div>
      Comics characters
     
      <Link to='/characters' >
        Characters
      </Link>
    </div>
  )
}

export { HomePage }
