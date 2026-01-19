import hero_img from '../../assets/Hero 3D.png'
import group_img1 from '../../assets/Group.svg'
import group_img2 from '../../assets/Group (1).svg'
import group_img3 from '../../assets/Group (2).svg'
import group_img4 from '../../assets/Group (3).svg'
import group_img5 from '../../assets/Group (4).svg'
import subscription_img from '../../assets/Content Image 02.png'
import metrics_img from '../../assets/Content Image.png'
import details_img1 from '../../assets/Icon 001.png'
import details_img2 from '../../assets/Icon 002.png'
import details_img3 from '../../assets/Icon 003.png'
import arrow from '../../assets/arrow-down.svg'

function Home(){
    return (
  <>
  <div id='top'></div>
    <div className="flex flex-row justify-around my-10 items-center">
      <div className='gap-10 w-[500px]'>
        <div className='text-[70px] text-base/20 text-left font-bold'>Развивайте свой бизнес по подпискам</div>
        <div className='text-[18px] text-left font-normal my-8'>Продукты, ориентированные на конечный результат, снижают отток клиентов, оптимизируют ценообразование и расширяют ваш бизнес по подписке в целом.</div>
        <div className='flex flex-row justify-between w-3/5'>
          <a href="#" className="flex w-50 h-12.5 items-center
             items-center justify-center bg-indigo-600 rounded-lg text-white text-[17px] font-bold">Начать</a>
          <button type='button' onClick={
            ()=>{
              const target=document.getElementById('image_func')
              if (target){
                target.scrollIntoView({behavior:'smooth'})
              }
            }
          } className='flex justify-center items-center border rounded-full size-12.5 cursor-pointer'><img src={arrow} alt='Вниз'></img></button>
        </div>
      </div>
      <img src={hero_img} alt="Ы" className='h-[644px]'/>
    </div>
    <div className='flex flex-row justify-around my-20'>
      <img src={group_img1} alt="что-то" id='image_func'/>
      <img src={group_img2} alt="что-то"/>
      <img src={group_img3} alt="что-то"/>
      <img src={group_img4} alt="что-то"/>
      <img src={group_img5} alt="что-то"/>
    </div>
    <div className='flex flex-row justify-around my-20 items-center'>
      <img src={subscription_img} alt='Ы' className=''></img>
      <div className='w-[500px]'>
        <div className='text-[45px] text-base/20 text-left font-bold'>Показатель подписок</div>
        <div className='text-[18px] text-left font-normal my-8'>Ежедневный набор данных, позволяющий вам быть в курсе тенденций рынка подпискок и того, что происходит в вашей вертикали.</div>
        <a href="#" className="flex w-50 h-12.5 items-center
            rounded-lg text-indigo-600 font-bold text-[17px]">Узнать больше</a>
      </div>
    </div>
    <div className='flex flex-row justify-around my-20 items-center'>
      <div className='w-[500px]'>
        <div className='text-[45px] text-base/20 text-left font-bold'>Углубленные показатели</div>
        <div className='text-[18px] text-left font-normal my-8'>Точная отчетность в режиме реального времени у вас под рукой. Получать данные еще никогда не было так просто.</div>
        <a href="#" className="flex w-50 h-12.5 items-center
            rounded-lg text-indigo-600 font-bold text-[17px]">Узнать больше</a>
      </div>
      <img src={metrics_img} alt='Ы' className=''></img>
    </div>
    <div className='flex flex-row justify-around my-20 items-center'>
      <div className='flex flex-col justify-center text-center w-75'>
        <div className='flex justify-center'>
          <img src={details_img1} alt='Ы' className='block overflow-hidden w-[151px] h-[97px]'></img>
        </div>
        <div className='text-[20px] text-base/20 font-bold'>Контрольные показатели</div>
        <div className='text-[14px] font-normal my-4'>Посмотрите, как вы выигрываете у аналогичных компаний на похожих этапах.</div>
      </div>
      <div className='flex flex-col justify-center text-center w-75'>
        <div className='flex justify-center'>
          <img src={details_img2} alt='Ы' className='block overflow-hidden w-[151px] h-[97px]'></img>
        </div>
        <div className='text-[20px] text-base/20 font-bold'>Аудит цен</div>
        <div className='text-[14px] font-normal my-4'>Оцените эффективность вашей стратегии монетизации и ценообразования.</div>
      </div>
      <div className='flex flex-col justify-center text-center w-75'>
        <div className='flex justify-center'>
          <img src={details_img3} alt='Ы' className='block overflow-hidden w-[151px] h-[97px]'></img>
        </div>
        <div className='text-[20px] text-base/20 font-bold'>Аудит удержания персонала</div>
        <div className='text-[14px] font-normal my-4'>Проведите аудит, где существует утечка доходов и где вы можете увеличить удержание персонала.</div>
      </div>
    </div>
    <div className='my-20' id='prices'>
      <div className='flex flex-row justify-between items-center'>
        <div className='text-[50px] text-base/20 text-left font-bold w-200'>Разработайте правильный план для будущего продукта.</div>
        <div className='flex w-60 h-15 rounded-lg bg-gray-100 p-1'>
          <div className='flex justify-center items-center w-[50%] text-white rounded-l-lg bg-indigo-500 font-bold'>Год</div>
          <div className='flex justify-center items-center w-[50%] font-bold'>Месяц</div>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center my-20 gap-5'>
        <div className='text-center rounded-lg bg-gray-100 p-5 w-[350px]'>
          <div className='font-bold'>Начинающий</div>
          <div className='text-[50px] font-bold pb-3'>Бесплатно</div>
          <div className='flex flex-col justify-center items-center'>
            <div className='my-3'>1 вебсайт</div>
            <div className='my-3'>Хостинг объемом 5 ГБ</div>
            <div className='my-3'>Ограниченная поддержка</div>
          </div>
          <div className='flex justify-center'>
            <a href="#" className="flex w-50 h-12.5 items-center justify-center w-full
              rounded-lg text-indigo-600 bg-white rounded-lg font-bold text-[17px] mt-10">Узнать больше</a>
          </div>
        </div>
        <div className='text-center rounded-lg bg-orange-500 p-5 py-10 text-white w-100'>
          <div className='font-bold'>Премиум</div>
          <div className='flex justify-center items-end text-[50px] font-bold pb-3'>$29<div className='text-[20px] pb-2'>/месяц</div></div>
          <div className='flex flex-col justify-center items-center'>
            <div className='my-3'>1 вебсайт</div>
            <div className='my-3'>Хостинг объемом 5 ГБ</div>
            <div className='my-3'>Ограниченная поддержка</div>
          </div>
          <div className='flex justify-center'>
            <a href="#" className="flex w-50 h-12.5 items-center justify-center w-full
              rounded-lg bg-orange-800 rounded-lg font-bold text-[17px] mt-10">Узнать больше</a>
          </div>
        </div>
        <div className='text-center rounded-lg bg-gray-100 p-5 w-[350px]'>
          <div className='font-bold'>Для предприятий</div>
          <div className='flex justify-center items-end text-[50px] font-bold pb-3'>$49<div className='text-[20px] pb-2'>/месяц</div></div>
          <div className='flex flex-col justify-center items-center'>
            <div className='my-3'>1 вебсайт</div>
            <div className='my-3'>Хостинг объемом 5 ГБ</div>
            <div className='my-3'>Ограниченная поддержка</div>
          </div>
          <div className='flex justify-center'>
            <a href="#" className="flex w-50 h-12.5 items-center justify-center w-full
              rounded-lg text-indigo-600 bg-white rounded-lg font-bold text-[17px] mt-10">Узнать больше</a>
          </div>
        </div>
      </div>
    </div>
  </>
 )
}

export default Home