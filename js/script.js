// Grab image by ID, store in variable, add event listener

let towerImage = document.getElementById("tower")
towerImage.addEventListener("click", towerFacts)

let hospitalImage = document.getElementById("hospital")
hospitalImage.addEventListener("click", hospitalFacts)

let parkImage = document.getElementById("park")
parkImage.addEventListener("click", parkFacts)

 let riverImage = document.getElementById("river")
riverImage.addEventListener("click", riverFacts)

let churchImage = document.getElementById("church")
churchImage.addEventListener("click", churchFacts)

 let stationImage = document.getElementById("station")
 stationImage.addEventListener("click", stationFacts)

 // Filler text variable
 let fillerText = "Lorem Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos dolores, adipisci deleniti deserunt dolor, voluptatibus explicabo ad autem consequatur quisquam neque aspernatur veniam! Natus, dolore accusantium. Cum, impedit consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos dolores, adipisci deleniti deserunt dolor, voluptatibus explicabo ad autem consequatur quisquam neque aspernatur veniam! Natus, dolore accusantium. Cum, impedit consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos dolores, adipisci deleniti deserunt dolor, voluptatibus explicabo ad autem consequatur quisquam neque aspernatur veniam! "

// Create a function that displays the map image and history of location in DOM

function towerFacts() {
let towerInfo = document.querySelector(".overview")
towerInfo.textContent = `${fillerText}`

let towerHistory = document.querySelector(".blackHistory")
towerHistory.innerHTML = `<img src="img/hudlun.jpg" alt= Image of Anna Hudlun, also known as the Fire Angel.>`

let towerMap = document.querySelector(".locationMap")
towerMap.innerHTML = `<iframe height="400" width="300" border="0" marginwidth="0" marginheight="0" src="https://www.mapquest.com/embed/us/illinois/chicago-water-tower-27067430?center=41.8970544334826,-87.62446403503418&zoom=15&maptype=map"></iframe>`
} 

function hospitalFacts() {
    let hospitalInfo = document.querySelector(".overview")
    hospitalInfo.textContent = `${fillerText}`

    let hospitalHistory = document.querySelector(".blackHistory")
    hospitalHistory.innerHTML = `<img src="img/nurses.jpg" alt= Image of black nurses.>`

    let hospitalMap = document.querySelector(".locationMap")
    hospitalMap.innerHTML = `<iframe height="400" width="300" border="0" marginwidth="0" marginheight="0" src="https://www.mapquest.com/embed/us/illinois/provident-hospital-of-cook-county-261770879?center=41.802358000000005,-87.61419100000003&zoom=15&maptype=map"></iframe>`
    } 

    function parkFacts() {
        let parkInfo = document.querySelector(".overview")
        parkInfo.textContent = `${fillerText}`

        let parkHistory = document.querySelector(".blackHistory")
        parkHistory.innerHTML = `<img src="img/Ida.jpg" alt= Image of Ida B. Wells.>`

        let parkMap = document.querySelector(".locationMap")
        parkMap.innerHTML = `<iframe height="400" width="300" border="0" marginwidth="0" marginheight="0" src="https://www.mapquest.com/embed/us/illinois/jackson-park-304578720?center=41.778773999999984,-87.58622199999999&zoom=15&maptype=map"></iframe>`
        } 

        function riverFacts() {
            let riverInfo = document.querySelector(".overview")
            riverInfo.textContent = `${fillerText}`

            let riverHistory = document.querySelector(".blackHistory")
            riverHistory.innerHTML = `<img src="img/dusable.jpg" alt= Image of Jean Baptiste Point Dusable.>`

            let riverMap = document.querySelector(".locationMap")
            riverMap.innerHTML = `<iframe height="400" width="300" border="0" marginwidth="0" marginheight="0" src="https://www.mapquest.com/embed/us/illinois/dusable-bridge-450856930?center=41.888748489937704,-87.6243782043457&zoom=15&maptype=map"></iframe>`
            }

            function churchFacts() {
                let churchInfo = document.querySelector(".overview")
                churchInfo.textContent = `${fillerText}`

                let churchHistory = document.querySelector(".blackHistory")
                churchHistory.innerHTML = `<img src="img/chapel.jpg" alt= Image of Jean Baptiste Point Dusable.>`

                let churchMap = document.querySelector(".locationMap")
                churchMap.innerHTML = `<iframe height="400" width="300" border="0" marginwidth="0" marginheight="0" src="https://www.mapquest.com/embed/us/illinois/quinn-chapel-african-methodist-church-7736437?center=41.84908551724649,-87.62507800296099&zoom=15&maptype=map"></iframe>`
                }

                function stationFacts() {
                    let stationInfo = document.querySelector(".overview")
                    stationInfo.textContent = `${fillerText}`

                    let stationHistory = document.querySelector(".blackHistory")
                    stationHistory.innerHTML = `<img src="img/pullman.jpg" alt= Image of Pullman Porters.>`

                    let stationMap = document.querySelector(".locationMap")
                    stationMap.innerHTML = `<iframe height="400" width="300" border="0" marginwidth="0" marginheight="0" src="https://www.mapquest.com/embed/us/illinois/union-station-265713145?center=41.87868407292287,-87.64034271240234&zoom=15&maptype=map"></iframe>`
                    }