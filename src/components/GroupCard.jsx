export default function GroupCard({ group, onClick }) {
    return (
        <div 
            className="flex flex-col gap-3 w-56 h-36 p-4 text-[#E6F0F2] text-sm rounded-3xl shadow-md bg-gradient-to-r from-[#202020] to-[#2F3E47] cursor-pointer"
            onClick={() => onClick(group)}
        >
            <p className="text-[#f3f8f888]">{group.id}</p>
            <p>{`Theme : ${group.theme}`}</p>
            <p>{`Members ${group.members.length}`}</p>
        </div>
    );
}
