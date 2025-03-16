import Demande from "./Demande";
import demandes from "../assets/demandes";

export default function ConsultDemandes({ onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/25 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white py-8 px-12 w-1/2 rounded-2xl shadow-lg font-roboto"
        onClick={(e) => e.stopPropagation()} // منع الإغلاق عند النقر داخل المربع
      >

        <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">
          Consult Demandes
        </h2>

        <div className="max-h-[600px] overflow-y-auto space-y-4 pr-8 custom-scrollbar ">
          {demandes.map((demande, index) => (
            <Demande key={index} demande={demande} />
          ))}
        </div>
      </div>
    </div>
  );
}
