# DF Distribuidora — Site Institucional

## Integrantes da dupla
- A preencher
- A preencher

---

## Descrição do caso escolhido

A **DF Distribuidora** é uma empresa de pequeno porte sediada em Brasília (DF) que trabalha com **logística reversa** para o varejo e o comércio eletrônico local. A operação envolve receber produtos devolvidos por consumidores, fazer a triagem de cada item e encaminhá-los para o destino correto: reestoque, conserto, liquidação ou descarte responsável.

---

## Necessidade identificada

A empresa não tinha presença digital. Isso dificultava a captação de novos clientes e a apresentação dos serviços. Lojistas interessados em terceirizar o processo de devoluções não encontravam informações sobre a DF Distribuidora online, o que gerava perda de oportunidades de negócio.

A proposta foi criar uma **landing page institucional simples e direta**, que apresente quem é a empresa, o que ela faz e facilite o contato para orçamento.

---

## Público-alvo

Lojistas e operadores de e-commerce no Distrito Federal que recebem devoluções de clientes e precisam de uma solução externa para gerenciar esse processo. Esse público precisa encontrar com facilidade: quais serviços são oferecidos, como funciona a operação e como entrar em contato.

---

## Objetivo do site

A ação principal esperada do visitante é **solicitar um orçamento via formulário de contato ou WhatsApp**. Tudo na página aponta para essa ação.

---

## Processo de desenvolvimento

1. Identificação do caso e levantamento da necessidade real (ausência de site e dificuldade de captação).
2. Definição das seções: Hero, Sobre, Serviços, FAQ e Contato — só o necessário, sem encher de conteúdo.
3. Escolha visual: paleta azul + laranja, fonte Inter (legível e direta), layout limpo.
4. Desenvolvimento do HTML com estrutura semântica.
5. CSS próprio com variáveis, responsividade e Bootstrap 5 para grid e accordion.
6. JavaScript para validação do formulário e destaque do link ativo no menu.
7. Testes de responsividade e navegação por teclado.

---

## Principais decisões do projeto

**Paleta azul + laranja:** azul passa confiança e seriedade (adequado para logística); laranja dá energia e destaca as ações importantes como o botão de orçamento.

**Fonte única (Inter):** mais simples de manter consistência, leitura confortável em qualquer tamanho de tela.

**Página única (landing):** o negócio não precisa de múltiplas páginas. Uma página bem organizada responde tudo que o visitante precisa saber antes de entrar em contato.

**Bootstrap usado para:** grid responsivo, navbar com menu hambúrguer no mobile, accordion do FAQ e classes utilitárias. O visual foi todo feito no CSS próprio.

---

## Funcionalidade em JavaScript

**Validação do formulário de contato** (arquivo `js/script.js`):

- Verifica se nome, e-mail e mensagem estão preenchidos corretamente antes de enviar.
- Exibe mensagens de erro abaixo de cada campo inválido e foca no primeiro campo com problema.
- Ao digitar após um erro, o aviso some automaticamente assim que o campo fica válido.
- Após o envio simulado, exibe uma mensagem de confirmação e limpa o formulário.

Essa funcionalidade foi escolhida porque é diretamente útil para o objetivo da página (captar contatos) e demonstra a integração entre HTML, CSS e comportamento da interface.

**Funcionalidade adicional:** destaque do link ativo no menu conforme a seção visível na tela, usando `IntersectionObserver`.

---

## Uso de Bootstrap

- **Grid** (`row`, `col-*`): organiza as seções em colunas que se adaptam a diferentes tamanhos de tela.
- **Navbar** com `navbar-expand-lg` e `navbar-toggler`: gera o menu hambúrguer funcional em telas menores.
- **Accordion** (`accordion`, `accordion-item`): seção de perguntas frequentes com expansão e recolhimento.
- **Utilitários**: `d-none`, `text-center`, `ms-auto`, `g-4`, `mb-4`, `w-100`.

O Bootstrap foi usado apenas onde simplificava componentes complexos. Todo o estilo visual (cores, tipografia, hover, layout próprio) foi feito no `style.css`.

---

## Testes realizados

- **Responsividade:** testado nos breakpoints 375px, 768px e 1280px via DevTools.
- **Links:** todos os links âncora navegam para a seção correta.
- **Formulário:** testado com campos vazios, e-mail inválido, mensagem muito curta e dados válidos — todos os casos com comportamento esperado.
- **Teclado:** navegação por Tab funciona corretamente; foco visível em todos os elementos interativos.
- **Publicação:** a verificar após publicar no GitHub Pages.

---

## Links

- Link do repositório: *(preencher após publicar)*
- Link do site publicado: *(preencher após publicar no GitHub Pages)*

---

## Contribuição dos integrantes

- Integrante 1: *(a preencher)*
- Integrante 2: *(a preencher)*
