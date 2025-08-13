describe('Fluxo - Adicionar Tarefa', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/')
  })

  it('Deve adicionar uma nova tarefa com sucesso', () => {
    
    // 1. Clica no botão de adicionar
    cy.contains('Adicionar Tarefa').click()

    // 2. Digitar no input de nova tarefa
    cy.get('.sc-gsnTZi').type('Tarefa criada pelo Cypress')

    // 3. Clicar no botão Enviar
    cy.get('.btn').click()

    // 4. Verificar se a tarefa foi adicionada
    cy.contains('Tarefa criada pelo Cypress').should('be.visible')
  })
})
