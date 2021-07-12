import { FaHtml5, FaJs, FaNodeJs, FaReact, FaCss3Alt, FaGithub } from 'react-icons/fa';
import {DiMongodb, DiMysql} from 'react-icons/di';

const items = [
	{color:' #F16529 ', language: 'html', icon: <FaHtml5 size="180"/> },
	{color:' #264de4 ', language: 'css',  icon: <FaCss3Alt size="180"/>},
    {color:' #f0db4f ', language: 'JavaScript', icon: <FaJs size="180"/> },
    {color:' #3C873A ', language: 'NodeJs', icon: <FaNodeJs size="180"/> },
    {color:' #61DBFB ', language: 'reactJs', icon: <FaReact size="180"/> },
    {color:' #6e5494 ', language: 'Git', icon: <FaGithub size="180"/> },
    {color:' #4DB33D ', language: 'MongoDb', icon: <DiMongodb size="180"/> },
    {color:' #00758F ', language: 'Mysql', icon: <DiMysql size="180"/> }
]

const getItems = () => {
	return items;
}
export default getItems;