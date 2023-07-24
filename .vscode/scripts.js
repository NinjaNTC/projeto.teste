function toggleMode () {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")) {
        // O que acontece se a classlist tiver "light"
    img.setAttribute("src","./assets/Avatar Guaxinim Vermelho.png")
    } else{
    img.setAttribute("src","./assets/Avatar Guaxinim Vermelho.png")
    }
  
    const alt = document.querySelector("#profile img")

    if(html.classList.contains("light")) {

    img.setAttribute("alt", "Foto do modo claro de Maykebrito")
    }
    else{
    img.setAttribute("alt", "Foto padrão do Maykebrito")
    }



}