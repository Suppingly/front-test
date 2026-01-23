import { Link } from 'react-router-dom';
import logo from '../assets/Logo Color.svg'
import { useTheme } from '../App';
function Header() {
    const { theme } = useTheme();
    if (theme==="light")
    return (<>
    <div className='flex fixed w-full h-auto top-0 left-0 justify-center'>
        <div className="w-4/5 top-0 right-0 flex flex-row justify-around h-15 items-center bg-white">
            <a href="">
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
                    <div className="flex items-center hover:border-b-2
                     border-indigo-500 hover:text-gray-900">Блог</div>
                 </Link>
            </div>
            <a href="" className="flex w-50 h-12.5 items-center
             justify-center bg-orange-500 rounded-lg text-white text-[17px] font-bold">Начать</a>
        </div>
    </div>
    </>)
    else
    return (<>
        <div className='flex fixed w-full h-auto top-0 left-0 justify-center'>
        <div className="w-4/5 top-0 right-0 flex flex-row justify-around h-15 items-center bg-gray-900">
            <a href="">
                <img src={logo} className="bg-white rounded-xl" alt="Logo" />
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
                    border-indigo-500 hover:text-gray-50">Главная</button>
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
                    border-indigo-500 hover:text-gray-50">Функции</button>
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
                    border-indigo-500 hover:text-gray-50">Цены</button>
                 </Link>
                 <Link to='/blog'>
                    <div className="flex items-center hover:border-b-2
                     border-indigo-500 hover:text-gray-50">Блог</div>
                 </Link>
            </div>
            <a href="" className="flex w-50 h-12.5 items-center
             justify-center bg-orange-500 rounded-lg text-white text-[17px] font-bold">Начать</a>
        </div>
    </div>
    </>)
}
export default Header