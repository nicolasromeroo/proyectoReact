import { useState } from "react"

const States = () => {
    const [contador, setContador] = useState(0)

    // function añadirReserva() {
    //     setContador(contador + 1)
    // }

    return (
        <>
            <div className="calendarContainer">
                <img className="rounded-circle" src="https://e7.pngegg.com/pngimages/985/518/png-clipart-graphics-calendar-illustration-computer-icons-calendar-icon-calendar-logo.png" />
                <p className="rounded-circle">{contador}</p>
            </div>
        </>
    )
}





export default States