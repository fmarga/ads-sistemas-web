# Petshop da Bisteca - Sistema Web

Projeto da disciplina de Sistemas Web do curso de Análise e Desenvolvimento de Sistemas - PUCRS.

## Objetivo

Desenvolver um sistema web para um petshop, permitindo a visualização de produtos organizados por categorias, serviços oferecidos e informações de contato do estabelecimento.

## Metas

- Construir páginas HTML semânticas com estrutura de header, body e footer.
- Exibir produtos organizados em 3 categorias, com 2 produtos cada (foto, descrição e valor).
- Apresentar os serviços do petshop com descrição, valor e indicação de tele-busca.
- Disponibilizar informações de contato e formulário para envio de mensagens.
- Estilizar o site com CSS customizado e Bootstrap 5.
- Adicionar interatividade com JavaScript (validações e funções temporais).
- Publicar o sistema via GitHub Pages.

## Estrutura do Projeto

```
ads-sistemas-web/
├── index.html                          # Página inicial
├── sobre.html                          # Página sobre o petshop
├── produtos.html                       # Catálogo de produtos (carrosséis por categoria)
├── servicos.html                       # Serviços oferecidos (carrosséis por categoria)
├── contato.html                        # Contato e formulário de agendamento
├── js/
│   └── script.js                       # Validações e funções temporais
├── style/
│   └── style.css                       # Estilos customizados
├── src/
│   ├── home/                           # Imagens da página inicial
│   │   ├── bisteca.png
│   │   ├── bisteca1.png
│   │   └── Subject.png
│   ├── produtos/                       # Imagens dos produtos
│   │   ├── racao-premium.png
│   │   ├── petisco-natural.png
│   │   ├── bola-borracha.png
│   │   ├── ratinho-pelucia.png
│   │   ├── shampoo-neutro.png
│   │   └── escova-pelos.png
│   ├── servicos/                       # Imagens dos serviços
│   │   ├── banho_completo.png
│   │   ├── tosa_higienica.png
│   │   └── tosa_completa.png
│   └── redes-sociais/                  # Ícones de redes sociais
│       └── instagram.svg
└── README.md
```

## Páginas

| Página | Descrição |
|--------|-----------|
| **Home** | Apresentação do petshop com modal interativo (categorias e serviços) e imagem da mascote |
| **Sobre** | História, missão, visão, valores e horário de funcionamento |
| **Produtos** | 3 categorias (Alimentação, Brinquedos, Higiene e Cuidados) com carrosséis e badges de destaque |
| **Serviços** | Banho, tosa, consulta veterinária, vacinação e hotel pet (com indicação de tele-busca) |
| **Contato** | Cards de contato, formulário de agendamento de banho e tosa com validações |

## Fases

### Fase 1

Construção das páginas utilizando somente HTML puro, sem customizações de CSS, Bootstrap ou JavaScript.

### Fase 2
- Estilização com **Bootstrap 5** e **CSS customizado**
- Layout responsivo com navbar fixa e transparente (aparece no hover)
- Componentes interativos: modal, carrosséis, collapse
- **Formulário de agendamento** com campos variados (input text, email, tel, number, date, time, select, checkbox, radio button, textarea) e campos obrigatórios
- **JavaScript** com funções temporais:
  - Bloqueio de datas passadas e domingos no agendamento
  - Validação de horário conforme dia da semana
  - Mensagem de confirmação com contagem regressiva e redirecionamento automático

## Links

- **Repositório:** [GitHub](https://github.com/fmarga/ads-sistemas-web)
- **Sistema publicado:** [GitHub Pages](https://fmarga.github.io/ads-sistemas-web/)

## Tecnologias

- HTML5
- CSS3
- Bootstrap 5.3.8
- JavaScript
