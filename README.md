# Neurautomation - Technology. Performance. Growth.

Projeto Next.js com TypeScript, Tailwind CSS e shadcn/ui integrando o componente RadialOrbitalTimeline para mostrar a jornada da Neurautomation.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Conta no Vercel para deployment

## 🔧 Instalação

### 1. Instalar dependências

```bash
cd site-neurautomation-react
npm install
```

### 2. Executar o projeto

```bash
npm run dev
```

Acesse http://localhost:3000 para ver o resultado.

## 📁 Estrutura do Projeto

```
site-neurautomation-react/
├── app/
│   ├── globals.css          # Estilos globais com animações customizadas
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal com demo do componente
├── components/
│   └── ui/
│       ├── badge.tsx         # Componente Badge
│       ├── button.tsx        # Componente Button
│       ├── card.tsx          # Componente Card
│       └── radial-orbital-timeline.tsx  # Componente principal
├── lib/
│   └── utils.ts              # Utilitários (cn function)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Componente RadialOrbitalTimeline

O componente mostra uma timeline interativa em formato orbital com:

- **Auto-rotação**: Girar automaticamente quando não interagindo
- **Interatividade**: Clique nos nós para expandir detalhes
- **Conexões**: Mostra relacionamentos entre itens
- **Status**: Visualização de progresso (completed, in-progress, pending)
- **Energy Level**: Barra de progresso de energia para cada item

## 📊 Dados da Neurautomation

O timeline mostra a jornada da empresa:

1. **Fundação** (Jan 2024) - Início das operações
2. **Primeiros Clientes** (Fev 2024) - Aquisição de clientes
3. **Desenvolvimento Tech** (Mar 2024) - Automação e IA
4. **Expansão E-commerce** (Abr 2024) - Estratégias de vendas
5. **Otimização Performance** (Mai 2024) - Melhoria de resultados
6. **Testes e Validação** (Jun 2024) - Inovação tecnológica
7. **Escalabilidade** (Jul 2024) - Expansão global

## 🎯 Personalização

Para personalizar os dados, edite o array `neurautomationTimeline` em `app/page.tsx`:

```typescript
const customTimeline = [
  {
    id: 1,
    title: "Seu Título",
    date: "Data",
    content: "Descrição do item",
    category: "Categoria",
    icon: SeuIcone,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 100,
  },
  // ... mais itens
];
```

## 🛠️ Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa ESLint
```

## � Deployment no Vercel

### 1. Conectar repositório ao Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Importe o repositório `MatheusFeNusi/site-neurautomation`
4. O Vercel detectará automaticamente que é um projeto Next.js

### 2. Configurações de Build

O arquivo `vercel.json` já está configurado com:
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Framework**: Next.js
- **Install Command**: `npm install`

### 3. Variáveis de Ambiente (se necessário)

Se precisar de variáveis de ambiente, adicione no Vercel:
- Settings → Environment Variables

### 4. Deploy Automático

Após conectar, cada push para o branch `master` acionará um deploy automático.

### 5. Domínio Personalizado (opcional)

No Vercel, você pode configurar um domínio personalizado em:
- Settings → Domains

## �📝 Notas

- O componente usa `"use client"` para interatividade
- Animações customizadas estão definidas em `globals.css`
- Ícones são do Lucide React
- Componentes shadcn seguem o padrão `/components/ui`

## 🌟 Features

- ✅ TypeScript para type safety
- ✅ Tailwind CSS para estilização
- ✅ shadcn/ui para componentes consistentes
- ✅ Responsivo (pode necessitar ajustes para mobile)
- ✅ Animações suaves e efeitos visuais
- ✅ Dados customizáveis da Neurautomation