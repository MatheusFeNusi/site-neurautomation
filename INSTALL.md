# Instruções de Instalação

## 🔧 Habilitar Execução de Scripts PowerShell (se necessário)

Se você encountering erro de execução de scripts, execute:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## 📦 Instalação de Dependências

### Opção 1: Usando npm

```bash
cd site-neurautomation-react
npm install
```

### Opção 2: Usando yarn

```bash
cd site-neurautomation-react
yarn install
```

## 🚀 Executar o Projeto

### Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

### Produção

```bash
npm run build
npm run start
```

## 📋 Dependências Instaladas

O `package.json` já inclui todas as dependências necessárias:

- React 18.3.1
- Next.js 14.2.0
- TypeScript 5.3.3
- Tailwind CSS 3.4.1
- lucide-react 0.263.1
- class-variance-authority 0.7.0
- @radix-ui/react-slot 1.0.2
- clsx 2.1.0
- tailwind-merge 2.2.0

## 🔍 Verificação

Após instalar as dependências, verifique se a pasta `node_modules` foi criada.

## ⚠️ Solução de Problemas

### Erro: "npx não pode ser carregado"

Execute no PowerShell (como administrador se necessário):

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Erro: Módulos não encontrados

Certifique-se de estar na pasta correta:

```bash
cd site-neurautomation-react
npm install
```

### Limpar cache se necessário

```bash
rm -rf node_modules package-lock.json
npm install
```