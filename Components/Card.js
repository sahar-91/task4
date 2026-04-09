export default function Card({array}) {
    return ( 
    
        <div className="grid items-center grid-cols-2 md:grid-cols-4 gap-8">
            {array.map((item, index) => (
                <div key={index} className=" bg-white rounded-[20px] p-6"> 
                    <img src={item.image} alt={item.title} className="w-10 h-10 mb-4 pl-2" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                </div>
            ))}
        </div>
        
    )}