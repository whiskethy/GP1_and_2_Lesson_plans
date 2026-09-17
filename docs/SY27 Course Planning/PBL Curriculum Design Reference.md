---
status: active
project: classes
type: reference
tags: [curriculum-design, lesson-plan, gp1, gp2]
created: 2026-08-23
---
# Curriculum Design & Pacing Reference

A working reference for planning GP1/GP2 lessons — not a literature review. Built from backward design (Wiggins & McTighe), cognitive load / deep-thinking curriculum research (Sweller, Surma & Kirschner), explicit-instruction research (Rosenshine), Gold Standard PBL (PBLWorks / Ron Berger), and course-design practice from CS50 (Malan) and MIT 6.100L (Bell). Full source list at the bottom.

## 1. The core principles, synthesized

These sources converge on the same handful of ideas from different angles. Treat them as one system, not five separate frameworks.

**Design backward from evidence, not forward from content.** Before planning an activity, decide what you'd accept as proof students got it (a build, a trace, a written justification) — then build toward that. The two failure modes to watch for in your own planning: *coverage-focused* (marching through the scope & sequence because it's scheduled) and *activity-focused* (a fun build with no clear conceptual payoff). Both are pacing traps — coverage rushes, activity-focus wanders.

**Working memory is the real constraint, not the clock.** Novices can hold roughly 4±1 new elements at once. A lesson that introduces a new pattern (e.g. Enhanced Input) *and* new syntax *and* a new tool in one sitting isn't ambitious, it's overloaded. Teach interacting elements in isolation before combining them.

**New content should ride on something already stable.** CS50 keeps the language constant (C) for six weeks while layering one big idea at a time (arrays → algorithms → memory → data structures); only once those ideas are secure does the language itself change. Apply this directly: don't introduce a new engine feature and a new academic skill (e.g. a Doc Hunt) on the same day if you can avoid it.

**Guided practice before independent practice, always.** Full worked example → partially-completed example → independent problem. Skipping straight from demo to solo work is the single most common overload trigger for this ACT band.

**The 80% checkpoint.** During guided practice, aim for ~80% accuracy before releasing students to work alone. Below that, re-model or add another worked example — don't advance on schedule anyway. Above ~90%, you're wasting time on something already mastered. This is the single most actionable trigger for "am I moving too fast."

**Retrieval and spacing beat re-reading.** A short, low-stakes recall of prior content (a Do Now) at the start of most periods, with format varied over time, builds retention that a one-time lesson doesn't. Revisit key ideas at increasing intervals (next class, next week, next unit) rather than once and done — this is why the scope & sequence deliberately repeats standards across quarters.

**Projects need a public product and a backward-planned scaffold.** PBLWorks' Gold Standard elements (challenging problem, sustained inquiry, authenticity, voice & choice, reflection, critique & revision, public product) work together — but the pacing-relevant one is: plan checkpoints backward from the final deliverable, and use those checkpoints to catch scope creep *before* the deadline, not after. Ron Berger's critique protocol ("be kind, be specific, be helpful," multiple real drafts, models of excellence studied before building) is what makes those checkpoints formative rather than just grading events.

**Responsive pacing beats protected pacing.** If a checkpoint or exit ticket shows the room isn't at ~80%, the plan should flex — add a day, re-teach, split the class — rather than protecting a printed schedule. This is the fix for "pacing feels too fast": it's a signal to check, not just a feeling to override by pushing through.

## 2. Per-period templates

GP1/GP2 meet on 48-minute A days and 72-minute B days. Use these as defaults, not law — the 80% checkpoint governs whether you move to the next chunk.

### A day (48 min) — one new idea, max

| Time | Block |
|---|---|
| 0:00–0:05 | **Do Now** — retrieval warm-up (prior content, varied format) |
| 0:05–0:18 | **Chunk 1** — worked example / demo of the one new idea for today |
| 0:18–0:30 | **Guided practice** — students apply it with support; you check for ~80% |
| 0:30–0:43 | **Independent / build time** — reuse today's idea + last class's idea together |
| 0:43–0:48 | **Exit Ticket** — collected |

Only one genuinely new concept fits in an A day. If the day's plan has two, cut one — it becomes tomorrow's Do Now instead.

### B day (72 min) — one new idea, more practice depth

| Time | Block |
|---|---|
| 0:00–0:05 | **Do Now** — retrieval warm-up |
| 0:05–0:20 | **Chunk 1** — worked example / demo |
| 0:20–0:35 | **Guided practice** — check for ~80% before moving on |
| 0:35–0:45 | **Chunk 2 (optional)** — only if Chunk 1 hit 80%+; otherwise this becomes more guided practice on Chunk 1 |
| 0:45–0:65 | **Independent / build time** |
| 0:65–0:72 | **Exit Ticket** — collected |

A B day is not "two A days of content" — it's one A day's worth of new material with roughly 50% more practice and build time. Resist the urge to double content just because the period is longer.

## 3. Worked example: re-pacing GP1/GP2 Unit 1

The Week 1 materials built so far packed multiple genuinely new ideas into single days (e.g. GP1 Day 2: file systems + paths + naming conventions + a paper activity in one 48-minute period). Applying the principles above:

- **Split "new idea" days from "practice" days.** File systems (the tree concept) is one idea. Paths (absolute vs. relative) is a second. Naming conventions is a third. That's three A-day's worth of new content, not one. Re-pace as: Day 2 = file systems only (tree diagram + Draw the Tree, simplified to just the tree, no paths yet), Day 3 = paths (building on the now-familiar tree), Day 4 = naming conventions + the "why" (shorter, since it's more judgment than new mechanics).
- **Let the Do Now carry yesterday's idea forward.** Day 3's Do Now becomes "label this tree with a path" instead of a fresh icebreaker-style question — this is the retrieval mechanism, not wasted time.
- **Same move applies to GP2 Day 2.** Variables/types, functions, and control flow are three separate "new idea" chunks that got compressed into one deck. Spread across two-plus A days: Day 2 = variables & types only (the card/table slide, the { }/;/scope slide moved to its own day since it's genuinely a fourth idea), Day 3 = functions, Day 4 = control flow, revisiting variables in the Do Now each time. **Updated 2026-08-26:** GP2 Week 1 was further reordered to front-load the conceptual deck (slides 1-34) and a Codédex hands-on session before the syntax breakdown (slides 37-53). See the GP2 S&S for the current chunk order.
- **Don't cut content — cut the day's dosage.** Nothing here proposes removing material from the scope & sequence; it proposes spreading the same content over more meetings so each one stays under the working-memory ceiling. The unit's total meeting count (8 for GP1 Unit 1, 8 for GP2 Unit 1) already has slack — Q1's "48-min equivalent" hours (36.5) were budgeted for this.

## 4. Quick-reference checklist

Before finalizing any day's plan, check:

- [ ] Is there exactly one (rarely two) genuinely new concept today?
- [ ] Does today's new idea ride on something already stable (same tool/language/pattern as yesterday)?
- [ ] Is there a worked example before guided practice, and guided practice before independent work?
- [ ] Is there a concrete ~80% checkpoint before moving to the next chunk or to independent work?
- [ ] Does the Do Now retrieve something from a prior lesson (not just today's icebreaker)?
- [ ] Is today's evidence of learning (build, trace, exit ticket) something you decided on *before* planning the activity?
- [ ] If a checkpoint shows the room isn't at ~80%, is there a plan to flex rather than push through?

## Sources

**Backward design & deep-thinking curriculum**
- [UbD Framework White Paper — McTighe & Wiggins (ASCD)](https://files.ascd.org/staticfiles/ascd/pdf/siteASCD/publications/UbD_WhitePaper0312.pdf)
- [WHERETO Framework (PA Dept. of Education)](https://static.pdesas.org/content/documents/WHERETO.pdf)
- [Backward Design — UIC Center for the Advancement of Teaching Excellence](https://teaching.uic.edu/cate-teaching-guides/syllabus-course-design/backward-design/)
- [Developing Curriculum for Deep Thinking: The Knowledge Revival — Surma et al. (Springer, open access)](https://link.springer.com/book/10.1007/978-3-031-74661-1)

**Cognitive load & explicit instruction**
- [Cognitive Load Theory: A Teacher's Guide — Structural Learning](https://www.structural-learning.com/post/cognitive-load-theory-a-teachers-guide)
- [The Expertise Reversal Effect — Kalyuga et al.](https://www.uky.edu/~gmswan3/EDC608/Kalyuga2007_Article_ExpertiseReversalEffectAndItsI.pdf)
- [Rosenshine's Principles of Instruction — Structural Learning](https://www.structural-learning.com/post/rosenshines-principles-a-teachers-guide)
- [Cognitive Load Theory Practice Guide — NSW Dept. of Education](https://education.nsw.gov.au/content/dam/main-education/about-us/educational-data/cese/2017-cognitive-load-theory-practice-guide.pdf)
- [7 Ways to Get Retrieval Practice Right — Edutopia](https://www.edutopia.org/article/7-ways-get-retrieval-practice-right/)
- [Spacing and Retrieval Practice Guide — AERO](https://www.edresearch.edu.au/guides-resources/practice-guides/spacing-and-retrieval-practice-guide-full-publication)

**Project-based learning**
- [Gold Standard PBL: Essential Project Design Elements — PBLWorks](https://www.pblworks.org/what-is-pbl/gold-standard-project-design)
- [Gold Standard PBL: Scaffold Student Learning — MyPBLWorks](https://my.pblworks.org/resource/blog/gold_standard_pbl_scaffold_student_learning)
- [Fostering an Ethic of Excellence — Ron Berger (PDF)](https://jaymctighe.com/wp-content/uploads/2011/04/Ron-Berger-Article.pdf)

**CS1 / course pacing practice**
- [Week 0 (Scratch) — CS50x](https://cs50.harvard.edu/x/weeks/0/)
- [Problem Sets — CS50x 2025](https://cs50.harvard.edu/x/2025/psets/)
- [6.100L Course Information — MIT (Ana Bell)](https://introcomp.mit.edu/6.100L_fa23/information)
- [Ten Quick Tips for Teaching Programming — PLOS Computational Biology](https://journals.plos.org/ploscompbiol/article?id=10.1371%2Fjournal.pcbi.1006023)
- [A Theory of Instruction for Introductory Programming Skills — Xie et al.](https://faculty.washington.edu/ajko/papers/Xie2019IntroCSTheoryOfInstruction.pdf)
