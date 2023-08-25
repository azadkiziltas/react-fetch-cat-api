import { useEffect, useState } from "react";

function App() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        // API'den verileri çekme
        fetch("https://api.thecatapi.com/v1/images/search?limit=12")
            .then((response) => response.json())
            .then((apiData) => {
                // API verilerini useState ile saklayın
                setCats(apiData);
                console.log(apiData);
            })
            .catch((error) => {
                console.error("API isteği sırasında hata oluştu: ", error);
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-3 gap-4">
                {cats.map((cat) => {
                    return (
                        <div className="card h-fit w-fit rounded-lg flex justify-center">
                            <img
                                className="w-fit h-fit rounded-lg "
                                key={cat.id}
                                src={cat.url}
                                alt=""
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
