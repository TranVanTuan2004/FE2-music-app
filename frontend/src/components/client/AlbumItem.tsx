import { useNavigate } from "react-router-dom"


const AlbumItem = () => {

  const navigate = useNavigate()
  return (
    <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src="" alt="image" />
      <p className="font-bold mt-2 mb-1">123</p>
      <p className="text-slate-200 text-sm">123123</p>
    </div>
  )
}

export default AlbumItem