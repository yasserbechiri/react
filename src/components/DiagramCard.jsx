import fileIcon from "../assets/fileIcon.svg"
import threeDotes from "../assets/threeDotes.svg" 
export default function DiagramCard({ title, filesNumber, lastUpdate }) {
    
    return <div className="bg-[#E6F0F2] w-60 drop-shadow-lg p-4 space-y-2 rounded-2xl">
    <h3 className="text-xl">{title}</h3>
    <div className="flex gap-2 text-[#2F3E47] text-sm font-fragment space-y-8">
    
            <img src={fileIcon} alt="icon" /> 
            <p>{ filesNumber} files</p>

    </div>
    <div className="flex justify-between text-[#2F3E47] font-fragment">
            <p>Edited { lastUpdate} ago</p>
            <img src={threeDotes} alt="icon" />
    </div>
</div>
    
}