import { Link } from 'react-router-dom';
import logo from '../assets/Logo Color.svg'
function Header() {
    return (<>
        <div className="sticky top-0 flex flex-row justify-around h-15 items-center bg-white">
            <a href="#">
                <img src={logo} className="logo" alt="Logo" />
            </a>
            <div className="flex items-center gap-10 font-(family-name:DMSans) font-bold text-gray-400 text-[15px] h-full">
                <Link to='/'>
                    <button type='button' onClick={
                        ()=>{
                        const target=document.getElementById('top')
                        if (target){
                            target.scrollIntoView({behavior:'smooth'})
                        }
                        }
                    } className="flex items-center hover:border-b-2
                    border-indigo-500 hover:text-gray-900">Главная</button>
                 </Link>
                 <Link to='/#image_func'>
                    <button type='button' onClick={
                        ()=>{
                        const target=document.getElementById('image_func')
                        if (target){
                            target.scrollIntoView({behavior:'smooth'})
                        }
                        }
                    } className="flex items-center hover:border-b-2
                    border-indigo-500 hover:text-gray-900">Функции</button>
                 </Link>
                 <Link to='/#prices'>
                    <button type='button' onClick={
                        ()=>{
                        const target=document.getElementById('prices')
                        if (target){
                            target.scrollIntoView({behavior:'smooth'})
                        }
                        }
                    } className="flex items-center hover:border-b-2
                    border-indigo-500 hover:text-gray-900">Цены</button>
                 </Link>
                 <Link to='/blog'>
                    <a href="" className="flex items-center hover:border-b-2
                     border-indigo-500 hover:text-gray-900">Блог</a>
                 </Link>
            </div>
            <a href="" className="flex w-50 h-12.5 items-center
             justify-center bg-orange-500 rounded-lg text-white text-[17px] font-bold">Начать</a>
        </div>
    </>)
}
export default Header