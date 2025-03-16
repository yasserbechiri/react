export default function Demande({demande}) {
  const listStyle =
    "font-fragment border-[#46464640] text-[#464646] border rounded-full py-1 px-2";
  const buttonStyle = "px-12 py-1 rounded-full";
  return (
    <div className="flex gap-6 items-center font-fragment border-b border-[#46464696]  pb-4">
      <img className="w-20 rounded-full" src={demande.img} />
      <div className="w-1/4">
              <p className="text-[#282A2C] text-xl mb-1">{demande.name }</p>
              <p className="text-[#464646] text-sm">{ demande.email}</p>
      </div>
      <ul className="flex flex-col gap-2 mt-2">
          {demande.skills.map((skill, index) => (
            <li key={index} className={listStyle}>
              {skill}
            </li>
          ))}
        </ul>
      <div className="flex flex-col gap-2 ml-auto">
        <button className={`bg-[#B70000] text-[#E6F0F2] ${buttonStyle}`}>
          refuse
        </button>
        <button className={`bg-[#00A99B] text-[#E6F0F2] ${buttonStyle}`}>
          accept
        </button>
      </div>
    </div>
  );
}
