# Auditoria do projeto VS Design Studio

## A. Problemas críticos

1. `src/app/sitemap.ts`
   - Problema: sitemap inclui apenas a página raiz (`/`).
   - Por que importa: mecanismos de busca podem não descobrir rotas importantes como `/contato`, `/servicos`, `/portfolio`, `/sobre`, `/depoimentos`.
   - Recomendação: gerar entradas para todas as páginas públicas ou construir sitemap dinamicamente.

2. `src/components/ProjectCard.tsx` e `src/components/FeaturedProject.tsx`
   - Problema: ambos têm `min-h-[410px]` / `min-h-[450px]` no mobile.
   - Por que importa: pode tornar cards excessivamente altos em telas pequenas e causar excesso de scroll.
   - Recomendação: usar altura mínima mais flexível ou layout adaptativo que dependa do conteúdo.

3. `src/components/Contact.tsx`
   - Problema: o formulário usa `window.open` para construir WhatsApp URL sem validação de tamanho ou sanitização extra.
   - Por que importa: experiência de usuário pode ser afetada com mensagens longas ou caracteres especiais; também esse fluxo impede um fallback mais amigável caso o WhatsApp não esteja instalado.
   - Recomendação: validar/limitar tamanho da mensagem, tratar erros de URL e considerar um fallback de envio por e-mail.

4. Repetição de constantes de contato em vários arquivos
   - Arquivos afetados: `src/components/FinalCTA.tsx`, `src/components/Footer.tsx`, `src/components/Contact.tsx`, `src/components/Header.tsx`.
   - Problema: `whatsappNumber`, `whatsappMessage` e `whatsappUrl` são declarados repetidamente.
   - Por que importa: aumenta a chance de inconsistência e dificulta manutenção.
   - Recomendação: extrair constantes de contato em um arquivo compartilhado.

## B. Melhorias importantes

1. `use client` desnecessários
   - Arquivos afetados: `src/components/FeaturedProject.tsx`, `src/components/ProjectCard.tsx`, `src/components/FinalCTA.tsx`, `src/components/Portfolio.tsx`, `src/components/About.tsx`, `src/components/Services.tsx`, `src/components/Stats.tsx`, `src/components/Testimonials.tsx`, `src/components/Footer.tsx`.
   - Problema: muitos componentes são marcados como client mesmo sem hooks ou APIs de cliente.
   - Por que importa: aumenta o bundle JavaScript e reduz performance.
   - Recomendação: remover `use client` de componentes sem dependência de estado ou efeitos.

2. Estrutura de código duplicada
   - Arquivos afetados: `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/Contact.tsx`, páginas de rota.
   - Problema: mesmo array `navigation`, mesmas CTAs, mesmos serviços e dados de contato repetidos.
   - Por que importa: manutenção mais difícil e risco de inconsistências.
   - Recomendação: centralizar constantes e criar componentes reutilizáveis.

3. `src/app/robots.ts`
   - Problema: propriedade `host` pode não ser necessária e é pouco usada no metadata route.
   - Por que importa: não é crítico, mas a configuração deve ser enxuta e compatível com a versão do Next.js.
   - Recomendação: manter apenas regras e sitemap se necessário.

4. Metadata por página pouco completa
   - Arquivos afetados: `src/app/sobre/page.tsx`, `src/app/servicos/page.tsx`, `src/app/portfolio/page.tsx`, `src/app/depoimentos/page.tsx`, `src/app/contato/page.tsx`.
   - Problema: `metadata` local não inclui `keywords` ou `twitter` específicos.
   - Por que importa: SEO fica menos rico e menos otimizado para cada rota.
   - Recomendação: adicionar `twitter`, `keywords` e outros metadados específicos por página.

## C. Melhorias opcionais

1. JSON-LD em `src/app/page.tsx`
   - Problema: uso de `dangerouslySetInnerHTML` para JSON-LD, embora funcional, pode ser melhor organizado.
   - Recomendação: extrair o JSON-LD para um componente específico.

2. `src/components/CursorGlow.tsx`
   - Problema: adiciona JavaScript pesado e animação no cliente na home.
   - Por que importa: impacto de performance em dispositivos lentos.
   - Recomendação: manter apenas em desktop ou usar CSS mais leve.

3. `src/components/ScrollProgress.tsx`
   - Problema: usa `framer-motion` apenas para barra de progresso.
   - Recomendação: considerar implementar com CSS ou hook simples.

4. Otimização de imagens
   - Problema: imagens em `public/images` são `.png` e `.jpeg`; tamanhos não verificados.
   - Recomendação: converter para `webp`/`avif`, reduzir peso e manter `next/image` configurado.

5. `sitemap.ts` com `new Date()`
   - Problema: gera data mutável a cada build.
   - Recomendação: usar data fixa ou gerar apenas quando houver alteração significativa.

## D. O que já está bem feito

1. Estrutura App Router
   - `src/app/layout.tsx` e rotas em `src/app/` estão organizados corretamente.
   - Uso de `next/font/google` e metadata global está bem configurado.

2. SEO básico
   - `metadata` global contém title, description, Open Graph, Twitter e canonical.
   - páginas individuais têm `metadata` locais definidos.
   - existe `robots.ts` e `sitemap.ts`.

3. Uso de `next/image`
   - `Hero`, `FeaturedProject`, `ProjectCard` usam `Image` com `sizes`.
   - `priority` aplicado na imagem em destaque.

4. Acessibilidade
   - uso de `aria-label`, `aria-expanded`, `aria-controls` e `aria-hidden` em elementos decorativos.
   - botão de voltar ao topo acessível.

5. Design consistente
   - cores, tipografia e layout visual mantêm uma identidade sólida.
   - botões e CTAs seguem um padrão uniforme.

## E. Ordem recomendada para corrigir tudo

1. SEO / sitemap
   - Expandir `sitemap.ts` para incluir todas as páginas.
   - Revisar metadata de cada rota.

2. Performance / client bundle
   - Remover `use client` desnecessários.
   - Avaliar uso de `framer-motion` e reduzir dependências onde possível.

3. Código / organização
   - Centralizar constantes de navegação, contato e serviços.
   - Extrair componentes reutilizáveis.

4. Responsividade
   - Ajustar altura de cards e layouts para telas pequenas.
   - Revisar elementos que podem estourar em mobile.

5. SEO e conteúdo
   - Garantir sitemap completo e canonical corretos.
   - Confirmar alt de imagens e links internos.

6. Acessibilidade e segurança
   - Revisar contraste de texto em fundos escuros.
   - Validar foco e navegação em mobile.
   - Revisar formulário de contato para robustez.
