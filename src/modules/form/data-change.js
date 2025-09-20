import { scheduleDay } from "../schedules/load.js"

// Selecionar o input de data.
const selectedDate = document.getElementById("date")

// Recarrega a lista de horários quanto o input de data mudar.
selectedDate.onchange = () => scheduleDay()