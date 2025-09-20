import { scheduleDay } from "./schedules/load.js"

document.addEventListener("DOMContentLoaded", () => {
  // Chama os agendamentos toda vez que a página carrega.
  scheduleDay()
})