describe('Fluxo - Deletar Tarefa', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/')
  })

  const criarTarefa = (nome) => {
    // execução dos comandos add_task.cy.js
    cy.contains('Adicionar Tarefa').click()
    cy.get('.sc-gsnTZi').type(nome)
    cy.get('.btn').click()
    cy.contains(nome, { timeout: 10000 }).should('be.visible')
  }

  it('Deve criar e depois remover uma tarefa', () => {
    const nomeTarefa = 'Tarefa para deletar'

    // 1. Criar a tarefa
    criarTarefa(nomeTarefa)

    // 2. Seleciona o card que contém o texto da tarefa
    cy.contains('p', nomeTarefa).parents('.sc-gKXOVf').as('tarefaCard')

    // 3. Mover para exibir o botão de delete
    cy.get('@tarefaCard').trigger('mouseover')

    // 4. Clica no SVG do delete dentro do card
    cy.get('@tarefaCard').find('svg.trash').click({ force: true })

    // 5. Verifica que a tarefa sumiu
    cy.contains(nomeTarefa).should('not.exist')
  })
})
