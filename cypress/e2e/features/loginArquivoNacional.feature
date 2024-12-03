#language: pt
Funcionalidade: Funcionalidade de Login

Cenário: Usuário tenta fazer login informando dados nao cadastrados
    Dado que eu acesse a página do arquivo nacional
    Quando eu preencher o campo e-mail com "email@teste.com"
    E preencher o campo senha com "senhaTeste"
    E clicar no botão Entrar
    Então a seguinte mensagem de erro deve ser exibida "Usuário não cadastrado"

Cenário: Usuário tenta fazer login sem informar o e-mail
    Dado que eu acesse a página do arquivo nacional
    E preencher o campo senha com "senhaTeste"
    E clicar no botão Entrar
    Então a seguinte mensagem de erro deve ser exibida "O campo login é um campo obrigatório."

Cenário: Usuário tenta fazer login sem informar a senha
    Dado que eu acesse a página do arquivo nacional
    Quando eu preencher o campo e-mail com "email@teste.com"
    E clicar no botão Entrar
    Então a seguinte mensagem de erro deve ser exibida "O campo login password é um campo obrigatório."
