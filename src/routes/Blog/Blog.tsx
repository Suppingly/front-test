import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.png'
function Blog(){
  return (
    <>
      <div className="font-bold text-5xl text-left ml-10 my-10">Блог</div>
      <div className="flex flex-row justify-around items-center">
        <div className="flex flex-col justify-center bg-gray-100 w-300">
          <img src={pic1} alt="" />
          <div className="font-bold text-4xl">Важные новости</div>
        </div>
        <div className="flex flex-col justify-center bg-gray-100 w-300">
          <img src={pic2} alt="" />
          <div className="font-bold text-4xl">Важные новости</div>
        </div>
        <div className="flex flex-col justify-center bg-gray-100 w-300">
          <img src={pic3} alt="" />
          <div className="font-bold text-4xl">Важные новости</div>
        </div>
      </div>
    </>
  )
}

export default Blog