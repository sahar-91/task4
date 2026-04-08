export default function Card({array}) {
    return ( 
    
        <div className="flex items-center flex-col md:flex-row gap-6">
            {array.map((item, index) => (
                <div key={index}>
                    <img src={item.image} alt={item.title} className="w-10 h-10 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                </div>
            ))}
        </div>
        
    )}