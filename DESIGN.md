# DESIGN.md - Sistema de Design Luxury Real Estate (Saymonn SPH)

Este documento define todos os tokens e regras de estilo do sistema de design cinematográfico, escuro e premium (Gold on Black) para a SAYMONN SPH.

---

## 1. Tipografia (Google Fonts)

- **Display (Títulos e Destaques)**: `"Cinzel", serif`
  - Pesos: `600` (Semi-Bold), `700` (Bold)
  - Uso obrigatório:
    - Todos os títulos (`h1`, `h2`, `h3`, `h4`)
    - Marca na Navbar (`Life Soluções` e subtítulo `Gestão Imobiliária`)
    - Títulos de seções e cartões
    - Grandes números e preços (`R$ ...`)
  - Responsividade: Títulos principais com `clamp()` para nunca transbordar em telas pequenas (a partir de 360px).

- **Body (Corpo e Interface)**: `"Poppins", sans-serif`
  - Pesos: `400` (Regular), `500` (Medium), `600` (Semi-Bold)
  - Uso obrigatório:
    - Parágrafos de texto e descrições
    - Rótulos, inputs, formulários
    - Textos de botões e links de navegação
    - Badges, tags e textos utilitários

---

## 2. Paleta de Cores

### Tons Dourados Metálicos
- **Gold Light**: `#F1DDB0`
- **Gold Mid**: `#D4B07A`
- **Gold Deep**: `#A88445`
- **Gold Border**: `rgba(212, 176, 122, 0.5)`
- **Gold Glow**: `rgba(212, 176, 122, 0.35)`

### Tons Escuros e Superfícies
- **Charcoal (Fundo Base do Site)**: `#121212`
- **Surface (Superfície Primária / Cartões)**: `#1B1B1D`
- **Raised Surface (Superfície Elevada / Navbar / Modais)**: `#2A2A2C`
- **Glass Surface**: `rgba(20, 20, 20, 0.45)` com `backdrop-filter: blur(14px)`

### Textos e Bordas
- **Texto Principal (Branco)**: `#FFFFFF`
- **Texto Secundário / Muted**: `rgba(255, 255, 255, 0.7)` (`#B3B3B3`)
- **Texto Escuro para Botão Dourado**: `#2A2418`
- **Bordas Sutis**: `rgba(255, 255, 255, 0.15)`
- **Bordas Douradas**: `rgba(212, 176, 122, 0.5)`

---

## 3. Efeitos e Gradientes Especiais

### Texto Dourado Metálico Padrão (Títulos de Seção)
```css
background: linear-gradient(180deg, #F6E6BE 0%, #D9B97F 45%, #A88445 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.6));
```

### Texto Hero 3D Embossed Champagne Gold (Editorial Luxury Real Estate)
```css
/* Container com bisel 3D físico direcional (Luz vindo do canto superior-esquerdo) */
.hero-headline {
  font-family: var(--font-display);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.09;
  filter: 
    drop-shadow(-0.5px -0.5px 0.5px rgba(255, 245, 220, 0.6))
    drop-shadow(0.75px 1px 0px rgba(121, 87, 45, 0.82))
    drop-shadow(1.2px 1.6px 0px rgba(85, 55, 25, 0.45))
    drop-shadow(0px 2.5px 4px rgba(0, 0, 0, 0.28));
}

/* Linha 1: ENCONTRE (Champagne Marfim Quente) */
.hero-title-line-1 {
  background: linear-gradient(180deg, #FFF8E7 0%, #FFF3D4 24%, #E8CC91 60%, #D7AE64 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Linhas 2, 3 e 4: SEU IMÓVEL / PERFEITO / NA BAHIA (Ouro Champanhe Quente) */
.hero-title-line-rest {
  background: linear-gradient(180deg, #FFF3D4 0%, #E8CC91 30%, #D7AE64 65%, #BD914A 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Gradiente Escovado de Ouro Primário (Botão Principal)
```css
background: linear-gradient(90deg, #8E6E3A 0%, #E6CD9A 35%, #F1DDB0 50%, #D4B07A 70%, #9B7A42 100%);
color: #2A2418;
box-shadow: 0 4px 20px rgba(212, 176, 122, 0.35);
```

### Gradiente Metal Escovado Escuro (Navbar)
```css
background: linear-gradient(180deg, #2A2A2C 0%, #151516 100%);
border-bottom: 1px solid rgba(212, 176, 122, 0.5);
backdrop-filter: blur(12px);
```

### Divisória Dourada Curta de Seções
```css
width: 110px;
height: 4px;
border-radius: 999px;
background: linear-gradient(90deg, #A88445 0%, #F1DDB0 50%, #A88445 100%);
```

---

## 4. Regras de Componentes

1. **Botões Primários (`btn-gold` / `btn-primary`)**:
   - Formato pílula completa (`border-radius: 999px`).
   - Gradiente de ouro escovado (`#8E6E3A` a `#9B7A42`).
   - Texto em `Poppins 500`, uppercase, `letter-spacing: 0.08em`, cor `#2A2418`.
   - Sombra suave com brilho dourado (`0 4px 20px rgba(212, 176, 122, 0.35)`).
   - Hover: elevação de 2px (`transform: translateY(-2px)`) e brilho intensificado.

2. **Botões Secundários (`btn-secondary` / `btn-dark-outline`)**:
   - Pílula transparente (`border-radius: 999px`).
   - Borda dourada de 1px (`rgba(212, 176, 122, 0.5)`).
   - Texto dourado (`#D4B07A`), `Poppins 500`, uppercase, `letter-spacing: 0.08em`.
   - Hover: fundo dourado sutil (`rgba(212, 176, 122, 0.12)`) e borda `#D4B07A`.

3. **Botões de Ícone (`btn-icon`)**:
   - Quadrado arredondado com raio de `18px` (`rounded-[18px]`).
   - Fundo escuro semitransparente (`rgba(27, 27, 29, 0.7)` ou `#1B1B1D`).
   - Borda sutil de 1px (`rgba(255, 255, 255, 0.15)`).
   - Ícones finos em dourado ou branco.

4. **Navbar**:
   - Gradiente escovado escuro (`#2A2A2C` a `#151516`) com leve desfoque.
   - Linha dourada de 1px na borda inferior (`rgba(212, 176, 122, 0.5)`).
   - Nome da marca em `Cinzel 700` branco, subtítulo em `Cinzel 600` dourado com amplo espaçamento entre letras.
   - Todos os botões e links originais mantidos e reestilizados.

5. **Cartões, Modais, Dropdowns e Painéis (Glassmorphism)**:
   - Fundo `rgba(20, 20, 20, 0.45)`.
   - `backdrop-filter: blur(14px)`.
   - Borda de 1px `rgba(255, 255, 255, 0.15)`.
   - Raio de canto `28px` (`rounded-[28px]`).
   - Destaque dourado sutil na borda inferior (`box-shadow: inset 0 -1px 0 0 rgba(212, 176, 122, 0.35)`).

6. **Títulos e Cabeçalhos**:
   - `Cinzel` em caixa alta (uppercase).
   - Gradiente dourado metálico para `h1` e títulos de seções principais.
   - Linha divisória curta dourada (`110px x 4px`) abaixo dos títulos de seções.
   - Subtítulos e títulos menores em branco `#FFFFFF` ou dourado `#D4B07A`.

7. **Campos de Formulário e Filtros**:
   - Fundo na cor de superfície escura `#1B1B1D`.
   - Borda sutil de 1px (`rgba(255, 255, 255, 0.15)`), raio de `16px`.
   - Foco com borda dourada (`#D4B07A`) e leve brilho dourado.

8. **Overlay Saymonn Machado (Hero Section)**:
   - Posicionado à direita sobre o terno escuro do corretor, imediatamente acima do card de descrição.
   - Traço fino dourado de `58px x 2px` com gradiente champagne e pontas arredondadas.
   - Nome `SAYMONN MACHADO` em `Cinzel 700`, uppercase, `letter-spacing: 0.08em`, gradiente champagne gold com sombra direcional para legibilidade sobre o vídeo em movimento.
   - Subtítulo `CONSULTOR IMOBILIÁRIO` em `Poppins 500`, uppercase, `letter-spacing: 0.22em`, cor `#E8CC91`.
