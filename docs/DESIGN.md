# Design notes

The redesign preserves the original bilingual teaching material and numerical demonstrations while separating the learning interface from the experiment engine.

- Course overview introduces the audience, learning path, time commitment and conceptual pipeline.
- Seven navigation groups cover eight subject areas; Parts 2 and 3 retain the original interleaved prerequisite order.
- One lesson is visible at a time. All lesson elements remain mounted so shared demonstrations retain state.
- Stable hash URLs support lessons, sources and section headings. Browser history supports returning to previous lessons.
- Search indexes chapter titles and source text locally. Exact title matches rank first.
- Progress, answers and lab settings use the original `llm-course-v1` localStorage key; theme has a separate key. Nothing is transmitted.
- Emerald navigation accents are distinct from the original amber parameter / blue activation coding.
- The homepage decoder diagram is a schematic, not an inference simulation. Residual connections and normalization are explained in Parts 4 and 5.

Visual and organizational references: Happy-LLM, Transformer Explainer, and LLM Visualization, linked in the README. No source code or assets were imported from those projects.
