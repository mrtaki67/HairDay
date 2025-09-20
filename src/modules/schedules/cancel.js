import { scheduleDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel"

const periods = document.querySelectorAll(".period")

// Gerar evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  // Capturando o evento de clique na lista.
  period.addEventListener("click", async (e) => {
    if(e.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado.
      const item = e.target.closest("li")

      // Pega o id do agendamento para remover.
      const { id } = item.dataset

      // Confirma que o id foi selecionado.
      if(id) {
        // Confirma se o usuário quer cancelar.
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

        if(isConfirm){
          // Faz a requsição na API para cancelar.
          await scheduleCancel({id})

          // Recarrega os agendamentos.
          await scheduleDay()
        }


      }
    }
  })

})