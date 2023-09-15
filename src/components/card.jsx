import { IoImageOutline } from 'solid-icons/io'
import { TbLocation, TbClock } from 'solid-icons/tb'

export default function Card(props) {
  return (
    <div class="card m-2 cursor-pointer bg-white border-2 border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
      <div class="m-4">
        <div class="flex mb-2">
          <h2 class="w-full leading-5 text-md font-bold">{props.title} lorem ipsum dolor sit amet</h2>
          {props.image && (<div><IoImageOutline class="w-6 h-6 ml-5 text-slate-300" /></div>)}
        </div>
        <p class="font-light font-mono text-xs text-gray-700 hover:text-gray-900 transition-all duration-200">{props.desc}</p>
        <div class="flex flex-col border-t-2 mt-2 pt-2">
          <div class="flex flex-row items-center text-xs font-mono tracking-tigh font-bold text-slate-500"><TbLocation class="w-4 h-4 mr-1 text-slate-300" /> <span class="font-normal">{props.location}</span></div>
          <div class="flex flex-row items-center text-xs font-mono tracking-tigh font-bold text-slate-500"><TbClock class="w-4 h-4 mr-1 text-slate-300" /> <span class="font-normal">{props.type}</span></div>
          <div class='pt-2'>
            <span class="text-xs text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top animate-pulse">Tag</span>
          </div>
        </div>
      </div>
    </div>
  )
} 