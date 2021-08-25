describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('The Main Page', () => {
  it('The page loads successfully!', () => {
    cy.visit('http://127.0.0.1:5503/index.html')
  })
})

describe('Basic plus Operator Test', () => {
  it('Should check 7 + 2 equals 9!', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5503/index.html')

    //ACT
    cy.get('.seven').click();
    cy.get('.plus').click();
    cy.get('.two').click();
    cy.get('.equals').click();

    //Assert
    cy.get('.currentOperation').contains('div', 9)
  })
})

describe('Basic minus Operator Test', () => {
  it('Should check 5 - 5 equals 0!', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5503/index.html')

    //ACT
    cy.get('.five').click();
    cy.get('.minus').click();
    cy.get('.five').click();
    cy.get('.equals').click();

    //Assert
    cy.get('.currentOperation').contains('div', 0)
  })
})

describe('Basic times Operator Test', () => {
  it('Should check 4 x 8 equals 32!', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5503/index.html')

    //ACT
    cy.get('.four').click();
    cy.get('.times').click();
    cy.get('.eight').click();
    cy.get('.equals').click();

    //Assert
    cy.get('.currentOperation').contains('div', 32)
  })
})

describe('Basic divide Operator Test', () => {
  it('Should check 9 / 3 equals 3!', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5503/index.html')

    //ACT
    cy.get('.four').click();
    cy.get('.times').click();
    cy.get('.eight').click();
    cy.get('.equals').click();

    //Assert
    cy.get('.currentOperation').contains('div', 3)
  })
})

describe('Basic delete Test', () => {
  it('input value 32 del then 2!', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5503/index.html')

    //ACT
    cy.get('.three').click();
    cy.get('.two').click();
    cy.get('.delete').click();

    //Assert
    cy.get('.currentOperation').contains('div', 3)
  })
})

describe('Multiple Operator Test', () => {
  it('input value 6 x 7 then / 2!', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5503/index.html')

    //ACT
    cy.get('.six').click();
    cy.get('.times').click();
    cy.get('.seven').click();
    cy.get('.divide').click();
    cy.get('.two').click();
    cy.get('.equals').click();

    //Assert
    cy.get('.currentOperation').contains('div', 21)
  })
})

describe('Multiple Operator Test', () => {
  it('input value 6 x 7 then / 2!', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5503/index.html')

    //ACT
    cy.get('.six').click();
    cy.get('.times').click();
    cy.get('.seven').click();
    cy.get('.divide').click();
    cy.get('.two').click();
    cy.get('.equals').click();

    //Assert
    cy.get('.currentOperation').contains('div', 21)
  })
})

describe('Multiple Operator double digits Test', () => {
  it('input value 6 x 7 then / 2 - 1!', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5503/index.html')

    //ACT
    cy.get('.six').click();
    cy.get('.times').click();
    cy.get('.seven').click();
    cy.get('.divide').click();
    cy.get('.two').click();
    cy.get('.minus').click();
    cy.get('.one').click();
    cy.get('.times').click();
    cy.get('.one').click();
    cy.get('.zero').click();
    cy.get('.delete').click();
    cy.get('.plus').click();
    cy.get('.five').click();
    cy.get('.equals').click();

    //Assert
    cy.get('.currentOperation').contains('div', 25)
  })
})