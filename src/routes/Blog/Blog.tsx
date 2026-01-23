import React from 'react'

import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.png'

interface BlogCard{
  img: string;
  title: string;
  desc: string;
}

const blogCards: BlogCard[] = [
  {
    img:pic1,
    title:'Подписки 2026: что взорвало рынок в начале года',
    desc:'Новый год — время новых трендов. В январе 2026-го сразу несколько крупных платформ пересмотрели свои модели монетизации, а пользователи активно ищут альтернативы. Рассказываем, какие подписки стали хитами, какие сервисы удивили неожиданными обновлениями, и как это может повлиять на ваш выбор.'
  },
  {
    img:pic2,
    title:'Как компании используют AI, чтобы удержать вас на подписке',
    desc:'Персонализированные рекомендации, динамические скидки, предиктивные уведомления — искусственный интеллект уже давно работает не только для контента, но и для удержания клиентов. Разбираемся, как это устроено и как не попасться на маркетинговые уловки.'
  },
  {
    img:pic3,
    title:'Важные новости',
    desc:'От микроподписок за отдельные функции до NFT-доступа — мир подписочных моделей стремительно меняется. Эксперты прогнозируют, какие форматы станут мейнстримом, и как это повлияет на потребительское поведение.'
  }
]

function Blog(){
  return (
    <>
      <div className="font-bold text-5xl text-left ml-10 mb-10 pt-20">Блог</div>
      <div className="flex flex-row justify-around items-start text-black">
        {blogCards.map((blogCard)=>(
          <div className="flex flex-col justify-center text-left p-5 bg-gray-100 w-3/10 rounded-4xl select-none 
        transition duration-0.25 ease-in-out hover:transform-[translateY(-5px)]">
          <div className='flex justify-center overflow-hidden w-4-5 h-50 rounded-3xl'>
            <img src={blogCard.img} alt="" className='min-h-auto min-w-full object-cover overflow-hidden'/>
          </div>
          <div className="font-bold text-2xl my-5">{blogCard.title}</div>
          <div>{blogCard.desc}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blog