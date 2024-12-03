#language: pt
Funcionalidade: Validação de CPF na consulta pública da Receita Federal

Esquema do Cenario: Buscar por uma informação com dado válido
    Dado que eu acesso portal Brasileiro de dados abertos
    Quando eu digito "<dado>" na barra de pesquisa
    E eu clico no botão "Buscar"
    Então um conjunto de dados é apresentado como resultado
    Exemplos:
    | dado |
    | IFSC |
    | Incra |
    | Selic |


Esquema do Cenário: Buscar por uma informação com dado inválido
    Dado que eu acesso portal Brasileiro de dados abertos
    Quando eu digito "<dado>" na barra de pesquisa
    E eu clico no botão "Buscar"
    Então uma mensagem informa que nenhum resultado foi encontrado
    Exemplos:
    | dado |
    | Teste123ABCD |
    | XYZABC123 |