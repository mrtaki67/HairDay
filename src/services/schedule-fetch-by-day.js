import { apiConfig } from "./api-config"
import dayjs from "dayjs"

export async function scheduleFetchByDay({ date }) {
  try {
    // Fazendo a requisição 
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    // Converte para json
    const data = await response.json()

    // Filtra os agendamentos pelo dia selecionado.
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "date"))

    return dailySchedules
  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar os agendamentos do dia selecionado.")
    
  }
}