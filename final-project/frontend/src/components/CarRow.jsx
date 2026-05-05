import { deleteService } from "../api";
const CarRow = ({ data, setOpen, setModalData }) => {
  const { id, make_model, vin, mileage, service_date, status } = data;
  return (
    <div className="flex items-center justify-between bg-white border border-slate-200 p-4 hover:bg-slate-50 transition-colors group cursor-pointer">
      
      <div className="flex-1 min-w-0">
        <h2 className="text-sm font-bold text-slate-900">
          {make_model}
        </h2>
        <p className="text-md font-mono text-slate-400 mt-0.5 uppercase">
          {vin}
        </p>
      </div>

      <div className="flex items-center gap-8 mr-6">
        <div className="hidden md:block text-right">
          <p className="text-sm font-bold text-slate-400 uppercase">Mileage</p>
          <p className="text-sm text-slate-700 font-medium">{mileage}</p>
        </div>

        <div className="hidden sm:block text-right">
          <p className="text-sm font-bold text-slate-400 uppercase">Last Service</p>
          <p className="text-sm text-slate-700">{service_date}</p>
        </div>
      </div>

      <div className="relative group/menu">
        <button className="p-2 hover:bg-slate-200 rounded-md transition-colors">
          <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
        
        <div className="absolute right-0 top-full mt-1 w-28 bg-white border border-slate-200 rounded shadow-xl opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all z-20">
          <button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 border-b border-slate-100" onClick={()=>{setModalData(data); setOpen(true)}}>
            Edit
          </button>
          <button className="w-full text-left px-3 py-2 text-xs font-medium text-red-500 hover:bg-red-50" onClick={()=>deleteService(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarRow;