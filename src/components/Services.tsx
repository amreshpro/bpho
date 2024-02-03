import { Link } from "react-router-dom";
import { SERVICES_TAB } from "../data/data";

export default function Services() {
  return (
    <div>

<div className="link-container flex gap-3 flex-wrap justify-center ">
    {
        SERVICES_TAB?.map((service)=>{
            const { link, title,id} = service;
            return<Link to={link} key={id} className="text-xl px-4 py-2 bg-blue-600 text-white">{title}</Link>
        })
    }
</div>

    </div>
  )
}