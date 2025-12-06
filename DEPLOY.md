# Como fazer Deploy na Vercel

Este guia passo a passo ajudará você a colocar seu projeto Fidelify LP no ar usando a Vercel.

## Pré-requisitos

1.  Uma conta na [Vercel](https://vercel.com/).
2.  O projeto enviado para um repositório Git (GitHub, GitLab ou Bitbucket).

## Passo a Passo

1.  **Acesse o Dashboard da Vercel**:
    *   Vá para [vercel.com/dashboard](https://vercel.com/dashboard) e faça login.

2.  **Adicione um Novo Projeto**:
    *   Clique no botão **"Add New..."** e selecione **"Project"**.

3.  **Importe o Repositório Git**:
    *   Na lista de repositórios, encontre o repositório `Fidelify-lp` (ou o nome que você deu).
    *   Clique no botão **"Import"** ao lado dele.

4.  **Configure o Projeto**:
    *   **Project Name**: Você pode deixar o padrão ou alterar se desejar.
    *   **Framework Preset**: A Vercel deve detectar automaticamente como **Vite**. Se não, selecione **Vite** manualmente.
    *   **Root Directory**: Deixe como `./` (padrão).
    *   **Build and Output Settings**:
        *   **Build Command**: `npm run build` (Deve estar preenchido automaticamente ou sobrescrito pelo `vercel.json` que criamos).
        *   **Output Directory**: `dist` (Deve estar preenchido automaticamente ou sobrescrito pelo `vercel.json` que criamos).
        *   **Install Command**: `npm install` (Padrão).

5.  **Deploy**:
    *   Clique no botão **"Deploy"**.

6.  **Aguarde a Conclusão**:
    *   A Vercel irá clonar o repositório, instalar as dependências e construir o projeto.
    *   Isso pode levar alguns minutos.

7.  **Sucesso!**:
    *   Assim que terminar, você verá uma tela de "Congratulations!".
    *   Clique na imagem de preview ou no botão "Visit" para ver seu site no ar.

## Configurações Adicionais (Opcional)

*   **Domínio Personalizado**: Se você tiver um domínio (ex: `fidelify.com.br`), vá em **Settings > Domains** no seu projeto na Vercel para configurá-lo.
*   **Variáveis de Ambiente**: Se precisar adicionar chaves de API, vá em **Settings > Environment Variables**.

## Solução de Problemas

*   Se o deploy falhar, verifique os logs de build na Vercel para ver o erro específico.
*   Certifique-se de que todas as dependências estão listadas no `package.json`.
*   Teste o build localmente rodando `npm run build` na sua máquina antes de enviar para o Git.
