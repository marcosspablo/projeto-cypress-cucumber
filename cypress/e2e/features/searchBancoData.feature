#language: pt
Funcionalidade: Pesquisar Instituições Financeiras

  Esquema do Cenário: Usuário pesquisa por uma instituição específica
    Dado que eu esteja na página inicial do BancoData
    Quando eu digitar o nome da instituição "<instituicao>" no campo de busca
    E clico no botão de pesquisar
    Então no resultado da busca devem conter a instituição "<instituicao>"
    Exemplos:
    | instituicao |
    | Banco do Brasil |
    | C6 Bank |

    Esquema do Cenário: Usuário pesquisa por uma instituição que não existe
    Dado que eu esteja na página inicial do BancoData
    Quando eu digitar o nome da instituição "<instituicao>" no campo de busca
    E clico no botão de pesquisar
    Então uma mensagem de erro e exibida
    Exemplos:
    | instituicao |
    | A123BCD |
    | zzzzzaaaa |

  Esquema do Cenário: Usuário deseja verificar os dados de uma instituição específica
    Dado que eu esteja na página inicial do BancoData
    Quando eu digitar o nome da instituição "<instituicao>" no campo de busca
    E clico no botão de pesquisar
    Então no resultado da busca devem conter a instituição "<instituicao>"
    E escolho a instituicao desejada
    Então os dados da instituição são exibidos
    Exemplos:
    | instituicao |
    | Agibank |
    | XP Investimentos |