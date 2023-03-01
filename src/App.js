import {Card} from "./Components/Card";
import * as React from "react";
import {useEffect, useState} from "react";

let data = [{
    "id": 1,
    "list":
        ["İslam Simonu Chandra Hektor Rostami",
         "Rian Félix Temir Milan Sugiura",
         "Helmold Kenzō Ívarr Auxentios Wu",
         "Firuz Philemon Sjoerd August Clay",
         "Tiyamike Aureliano Atsushi Abu al-Fadl Jamison"]
}, {
    "id": 2,
    "list":
        [
            "Odoacre Leonti Heiko Eskandar Christison",
            "Zach Nawel Cato Akuchi Cassano",
            "Brahma 'Achashwerosh Predrag Melor Ignatiev",
            "Hrvoje Henrich Nudd Ásmundur Como",
            "Alfonso 'Ach'av Magdi Brodie Chaudhary"
        ]
}, {
    "id": 3,
    "list": [
        "Dölgöön Jamsheed Goffredo Léopold Sharma",
        "César Zuzen Callixtus Sagi Espina",
        "Raul Warren Apollo Demeter Färber",
        "Ohad Laquan Kurtis Markiyan Glenn",
        "Fatih Vaast Theudofrid Hrothgar Vlahović"
    ]
}, {
    "id": 4,
    "list": [
        "Keane Eudoxos Olumide Troilus Tolvaj",
        "Glaukos Fólki Heard Ronan Lehmann",
        "Alboin Lakshman Ahmad Arsenios Nana",
        "Szilárd Ejiroghene Ashur-Bani-Apli Lorenzo Solak",
        "Hildebrand Hasan Rafael Peter Serra"
    ]
}, {
    "id": 5,
    "list": [
        "Yaniv Danyal Nikodim Eli Bramson",
        "Puck Oskar Elias Amhlaidh O'Hanegan",
        "Nonus Gabriel Danijel Gunne Van Achthoven",
        "Quintilianus Anti Léo Thorvald Bernard",
        "Huguo Lekan Masozi Eoghan Kristoffersen"
    ]
}]
let individual_page = data.map((chunk) => {
    return chunk
})

function App() {
    let [currentPage, setcurrentPage] = useState(0)
    let [prevDisable, setprevDisable] = useState(currentPage === 0)
    let [nextDisable, setnextDisable] = useState(currentPage === data.length-1)
    useEffect(() => {
        if (currentPage===0) setprevDisable(true); else setprevDisable(false)
        if (currentPage===data.length-1) setnextDisable(true); else setnextDisable(false)
    }, [currentPage])
    return (
        <div>
            <Card props={data[currentPage]}></Card>
            <div style={{display: "flex", justifyContent: 'center', marginTop: '1rem'}}>
                <button disabled={prevDisable} onClick={() => {
                    setcurrentPage(0)
                }}>
                    {"<<"}
                </button>
                <button disabled={prevDisable} onClick={() => {
                    setcurrentPage(currentPage-1)
                }}>
                    {"<"}
                </button>
                <button style={{marginLeft:"1rem",marginRight:"1rem"}}>{currentPage+1}</button>
                <button disabled={nextDisable} onClick={() => {
                    setcurrentPage(currentPage+1)
                }}>
                    {">"}
                </button>
                <button disabled={nextDisable} onClick={() => {
                    setcurrentPage(4)
                }}>
                    {">>"}
                </button>
            </div>
        </div>
    )

}

export default App;
