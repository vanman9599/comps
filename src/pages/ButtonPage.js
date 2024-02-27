import Button from '../components/Button';
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go'


function ButtonPage() {
const handleClick = () => {
   
}
    return <div>
    <div><Button onClick={handleClick} success className="mb-5" rounded outline><GoBell className='mr-1'/> Click Me!!</Button></div>
    <div><Button danger outline><GoDatabase />Buy Now!</Button></div>
    <div><Button warning><GoCloudDownload />See Deal</Button></div>
    <div><Button secondary>Hide Ads</Button></div>
    <div><Button primary rounded>HI there/</Button></div>
   
    </div>
    

}

export default ButtonPage;