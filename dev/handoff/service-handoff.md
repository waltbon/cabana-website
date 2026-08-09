# UI Handoff — Service Page Implementation

**For:** Claude Code, working directly in the Cabana Data website repo.
**Objective:** Implement a service page following Cabana Data's standard 9-section service page template.

**Content source for this page:** `[PATH TO BE PROVIDED — e.g. /mnt/.../web-data-consulting.md]`

---

## 0. Before writing any code

Do not assume the repo's structure. Explore first and answer these questions before touching code:

- [ ] Is there already a live reference page implementing this same pattern? (Known example: `/services/ai-readiness-assessment`, corresponding to "Ruta IA"). If it exists in this repo, treat it as the source of truth for components, spacing, and conventions — do not reinvent patterns that are already solved.
- [ ] What folder/routing convention does the repo use for service pages? (`/app/services/[slug]`, `/pages/services/`, or other).
- [ ] Do reusable components already exist for: hero with CTA, problem-block grid, FAQ accordion, "who this is for" profile cards? List them if found, and reuse instead of duplicating.
- [ ] How is language handled? The site has a visible ES/EN toggle — confirm whether page content should go through an i18n system (translation files) or be hardcoded in the component, with EN pending.
- [ ] Are there existing design tokens (colors, typography, spacing — e.g. Tailwind config or a tokens file)? If so, use them — do not introduce new styles without checking consistency with the rest of the site.

If any of these questions can't be answered by exploring the repo, ask before assuming.

---

## 1. Page content

The source of truth for all copy is the `.md` file referenced at the top of this document (9 sections, already written and approved in Spanish — the site's target market is Costa Rica/LATAM). Do not paraphrase or "improve" the copy — implement it as written. If something doesn't fit the layout, flag it instead of silently trimming content.

Standard section order:
1. Hero
2. The problem (3-4 specific business-problem blocks)
3. What we do (sub-service breakdown, if the service has sub-services — each block links to its own sub-service page)
4. What you get (concrete deliverables)
5. Credibility (service-specific proof point — varies per service, check the source `.md`)
6. Zero-friction logistics
7. Who this is for (buyer profiles)
8. Final CTA
9. FAQ (real client objections, accordion format if the repo already has that pattern)

---

## 2. Expected behavior per section

**Section 1 — Hero**
- CTA should point to the same action used by the Ruta IA page in production (book a call). Confirm the real calendar URL in the repo or ask before hardcoding a placeholder.

**Section 3 — What we do**
- If the source `.md` includes links to sub-service pages that don't exist yet, implement the links pointing to placeholder routes and leave a code comment (`// TODO: page doesn't exist yet`) so it isn't mistaken for a broken link caused by implementation error.

**Section 9 — FAQ**
- If the repo already has an accordion/FAQ component used elsewhere, reuse it. If not, implement as an expand/collapse accordion, not as plain text — the section typically has 5-6 questions and shouldn't read as a wall of text.

**All sections**
- None of Cabana Data's banned words should appear in the rendered copy: "robusto", "ecosistema digital", "potencializar". This should already be true in the source `.md`, but do a final check before marking the implementation done.

---

## 3. Language

Content provided is in Spanish. The site has an ES/EN toggle — confirm with the repo whether this page needs an English version in this pass, or whether it ships Spanish-only for now with English added after the pattern is validated.

---

## 4. Out of scope for this task

Do not implement in this pass (future work, once this page is validated):
- Sub-service pages linked from Section 3 (placeholder links only, per Section 2 above).
- Other service pages beyond the one specified in this handoff.
- English translation (unless confirmed otherwise per Section 3).

---

## 5. Acceptance criteria

- [ ] All 9 sections implemented in the specified order.
- [ ] Copy matches the source `.md` exactly (no paraphrasing).
- [ ] Sub-service links (if any) point to placeholder routes with a TODO comment.
- [ ] None of the banned words appear anywhere in the rendered text.
- [ ] Visual design is consistent with the existing reference page (Ruta IA / `/services/ai-readiness-assessment`), reusing components rather than introducing new styles where a pattern already exists.
- [ ] Page is responsive (mobile-first, consistent with the rest of the site).

---

## 6. Note on this process

This page is one of several service pages being rolled out (main service pages + sub-service pages) using a shared template. If a real framework or design-system limitation comes up during implementation (e.g. a component that doesn't cleanly support a 4-block problem grid, or no accordion pattern exists yet and one must be built from scratch), flag it explicitly instead of resolving it with a silent workaround — that's useful signal for deciding whether the 9-section template needs adjusting before scaling to the remaining pages.