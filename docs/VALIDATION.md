# Validation record

Date: 2026-10-28. Tested locally in the Codex browser against a static HTTP server.

## Observed browser checks

- Desktop course overview renders without console errors.
- Starting a lesson shows one chapter, with breadcrumb, chapter navigation and next/previous links.
- Weight-file experiment changes from XOR output `[0, 1, 1, 0]` to AND output `[0, 0, 0, 1]`.
- Choosing the correct answer shows explanatory feedback. Marking a chapter complete updates progress from 0/41 to 1/41.
- Reload restores the selected chapter, quiz feedback and completed count.
- Search for `KV` ranks the KV-cache chapter first. Selecting it closes search and opens chapter 7.3. Browser Back returns to the prior chapter.
- Attention demo advances to step 3/7 and the causal mask can be disabled.
- Bilingual and dark modes render without horizontal page overflow on desktop.
- At 390 × 844, the homepage and chapter 1.1 have no horizontal page overflow; the contents menu opens and closes on navigation.
- Part references remain accessible from mobile breadcrumbs.
- A direct subsection URL opens its owning lesson; sticky-header spacing is explicitly applied to subsection headings.

## Scope

These checks cover representative learning journeys and redesigned navigation. They are not exhaustive numerical verification of every experiment, browser certification, or independent verification of every original citation. Experiments are educational calculations/simulations, not production model inference.
