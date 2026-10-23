---
status: active
project: classes
type: plan
tags: [gp1, unreal-engine]
---
# Scope & Sequence - Game Programming 1 (GP1)

School year 2026-2027. Dual Credit, 11th-12th grade, Unreal Engine, blended/flipped. Built from the SY26 course (see [[GP1 - Q2 Planning]], [[GP1 - Q3]], [[GP1 - Q4]]) with Q1 rebuilt from scratch. Q2, Q3, and Q4 reuse the existing recorded video series, with selected videos converted to written instruction.

**Re-paced 2026-08-23** against [[PBL Curriculum Design Reference]]'s pacing rules (roughly one genuinely new concept per A-day, worked example → guided practice with an ~80% checkpoint → independent practice before advancing). Quarter meeting totals and hard deadlines are unchanged; only Q1 required moving meetings between units. See [[Scope & Sequence - Game Programming 1 (GP1) - pre-retool 2026-08-23]] for the version this replaces.

## Calendar Reality (read this before the units)

GP1 meets 5th period: Mon/Tue/Wed are A days (48 min), Thu is a B day (72 min). Friday has no GP1 meeting. A days are 48 minute periods, B days are 72 minute periods. "Days" in this document are **class meetings of unequal length**, not uniform periods. GP2 meets 4th period on the complementary schedule (Mon/Tue/Wed A, Fri B, Thu no class) — see [[Scope & Sequence - Game Programming 2 (GP2)]]. Actual load:

| Quarter | Dates | Meetings | A / B | Minutes | Hours | 48-min equivalent |
|---|---|---|---|---|---|---|
| Q1 | 8/24/26 to 10/23/26 | 32 | 23 / 9 | 1,752 | 29.2 | 36.5 |
| Q2 | 10/26/26 to 1/22/27 | 35 | 25 / 10 | 1,920 | 32.0 | 40.0 |
| Q3 | 1/25/27 to 4/2/27 | 32 | 23 / 9 | 1,752 | 29.2 | 36.5 |
| Q4 | 4/5/27 to 6/11/27 | 35 | 26 / 9 | 1,896 | 31.6 | 39.5 |
| **Year** | | **134** | **97 / 37** | **7,320** | **122.0** | **152.5** |

Scheduling constraints that shape the plan:

- **Seniors' last full day is 5/26/27**, with 8 GP1 meetings left in Q4 after that. The Q4 capstone must be finished and graded by 5/26 or seniors do not complete it.
- Q2 W11 has only 2 meetings. Q4 W30 has only 1 meeting. No unit boundary or deadline goes in either week.

## Whole Course

### Written Instruction and Reading Load

The course is flipped, but not video-only. Reading is a graded pathway to the build, not a side assignment, because reading technical material is the skill students are weakest at and the one they need most in a dual credit course.

**The design rule: the first time a pattern is taught it is a video. The second time it appears, it is a reading.** Nothing gets cut. Every converted video stays published and becomes the answer key, released only after the written deliverable is submitted, so a student who reads and builds successfully never needs it and a student who is stuck still has it.

Four task types, used across all four quarters:

| Type | What students get | What they produce | ACT Reading |
|---|---|---|---|
| **Written Build Guide** | A step-by-step document replacing the video | The working build | CLR 401, TST 403, REL 403 |
| **Doc Hunt** | A goal and a pointer to official documentation, no steps | Their own written steps, then the build | CLR 401, CLR 402, IDT 403, WME 402 |
| **Transfer Brief** | One paragraph describing the goal, plus a note on where they built this before | The build, plus a written diff of what changed | CLR 402, REL 403 |
| **Doc Annotation** | An official documentation page | A structured summary: purpose, key details, what it does not tell you | IDT 403, TST 404, PPV 401, SYN 301 |

Totals: **15 of the 47 existing Q2-Q4 videos convert to written instruction**, about 2 hours 15 minutes of video replaced by reading, spread so that every quarter has at least three written pathways. Q1 is new and builds reading in from the start.

### ACT Power Standards

Targeting the 16-19 band with reach into 20-23, per current student performance. Pulled from [[CCRS-MathematicsStandards]] and [[CCRS-ReadingStandards]].

**Reading** (elevated, since written instruction is now a primary pathway)

- **WME 402** Interpret most words and phrases as they are used in somewhat challenging passages, including determining technical, connotative, and figurative meanings. The best fit in the entire framework for a course built on technical vocabulary.
- **CLR 401** Locate important details in somewhat challenging passages. Every Doc Hunt.
- **CLR 402** Draw logical conclusions in somewhat challenging passages. Every Transfer Brief.
- **TST 403** Identify a clear function of paragraphs in somewhat challenging passages. Following a build guide requires knowing which paragraph does what.
- **TST 404** Analyze the overall structure of somewhat challenging passages. Navigating reference documentation.
- **IDT 403** Summarize key supporting ideas and details in somewhat challenging passages.
- **REL 403** Identify clear cause-effect relationships in somewhat challenging passages. Debugging and execution flow.
- **PPV 401** Identify a clear purpose of somewhat challenging passages and how that purpose shapes content and style. Why a tutorial page and an API reference page for the same feature read nothing alike.
- **SYN 301** Make straightforward comparisons between two passages. Comparing a tutorial page against a reference page, or two asset licenses.
- **ARG 401 / ARG 402** Analyze how sentences support a claim; identify a clear central claim. Design justification and postmortems.

**Mathematics**

- **N 302** Identify a digit's place value. Binary and hexadecimal are place value in another base.
- **N 402** Write positive powers of 10 by using exponents. Transfers to powers of 2.
- **N 403** Comprehend the concept of length on the number line, and find the distance between two points. Unreal units.
- **N 404** Understand absolute value in terms of distance. Sprite flip by sign, AI range checks.
- **N 405** Find the distance in the coordinate plane between two points with the same x or y coordinate.
- **A 301 / A 401** Substitute values for unknown quantities to evaluate expressions. Every Blueprint variable.
- **A 406** Exhibit knowledge of slope. Velocity, gravity, jump arc tuning.
- **AF 401** Solve routine two-step or three-step arithmetic problems involving rate and proportion. Movement speed, damage per hit, spawn timing.
- **AF 403** Relate a graph to a situation described in terms of a starting value and an additional amount per unit. Health bars, score, timers.
- **G 406** Locate points in the coordinate plane. Transforms.
- **G 407** Translate points up, down, left, and right in the coordinate plane.
- **S 304** Extract relevant data from a basic table or chart and use it in a computation. Playtest tuning logs.
- **S 404** Describe events as combinations of other events using and, or, and not. State machine transition conditions.

### Content Standards Scope

Restricted to 9th grade and up, per the standing decision:

- [[CSTA Standards]] - Level 3A (grades 9-10) and Level 3B (grades 11-12) only.
- [[ISBE Computer Science Standards]] - Grades 9-10 and Grades 11-12 sections only.
- [[ISTE Standards]] - Students section (1.1 to 1.7) only. Educators, Leaders, and Coaches are professional standards, not course content.

Standards are reused across quarters on purpose. A standard hit once is not taught; one that recurs across three quarters is.

### Curriculum Resource Links

- **Q1 videos** - none yet. All new production, filmed across the quarter.
- **Q2 videos** - [Roll-A-Ball playlist](https://www.youtube.com/playlist?list=PLgLkLzgyXDdnptmiUUqOrg30I25iQG7l0), 16 videos, 3h 31m.
- **Q3 and Q4 videos** - [2D Platformer playlist](https://www.youtube.com/playlist?list=PLgLkLzgyXDdm-noPnni6jMYcBz3vE6FuT), 22 videos, 4h 47m.
- **Glossary** - [[Unreal Terms & Concepts]].
- **Epic documentation** (the reading spine of the course) - [Enhanced Input](https://dev.epicgames.com/documentation/en-us/unreal-engine/enhanced-input-in-unreal-engine), [asset naming conventions](https://dev.epicgames.com/documentation/en-us/unreal-engine/recommended-asset-naming-conventions-in-unreal-engine-projects), UMG and Widget Blueprints, Spring Arm Component, Landscape, Niagara, Behavior Trees, packaging.
- **Assets** - [Kenney pixel assets](https://kenney.nl/assets/tag:pixel), [Spriters Resource](https://www.spriters-resource.com/), [OpenGameArt](https://opengameart.org/), [Craftpix](https://craftpix.net/sets/), [512 8-bit sound effects](https://opengameart.org/content/512-sound-effects-8-bit-style), [Poly Pizza](https://poly.pizza/) (free low-poly 3D models), [Poly Haven](https://polyhaven.com/) (free PBR 3D models, HDRIs, textures), Fab.com. Note: itch.io is blocked at school.
- **Lab** - see [[Computer Lab Setup]].

---

## Q1 (32 meetings, 1,752 min) 8/24/26 to 10/23/26

Rebuilt from scratch. Fundamentals first and independent of working computers, then editor onboarding, then a capstone deliberately small enough to finish.

### Units

- **Unit 1: Data Under the Hood** (8 meetings, W01–W02) — *re-paced 2026-09-04 to match actual delivery*
	1. Syllabus, norms, icebreaker — *not a content chunk; class setup day* · *Performance Task Connection: Sets expectations and classroom culture for all subsequent deliverables.*
	2. What a computer is (CPU, RAM, storage, GPU, I/O) — *new idea* · *Performance Task Connection: Students need to understand hardware components to troubleshoot build issues and explain why Unreal requires specific hardware in the Unit 3 editor work.*
	3. Parts of a computer (continued) + Dual Credit setup — *practice/consolidation* · *Performance Task Connection: Dual Credit enrollment is required; hardware vocabulary consolidates for use in Unit 2 engine comparisons.*
	4. File systems (paths, directories, naming) — *new idea* · *Performance Task Connection: File system literacy is prerequisite for importing assets and organizing the Content Browser in Unit 3 Chunk 6. Students who cannot navigate folders will break on the first UE project.*
	5. Binary numbers — *new idea* · *Performance Task Connection: Binary is the number system computers use. Understanding it is prerequisite for hex (Chunk 6) and for the Unit 1 pixel coloring practical (Chunk 8).*
	6. Hexadecimal & color codes (RGBA, hex, #RRGGBB) — *new idea* · *Performance Task Connection: Hex color codes are directly used in the Unit 1 pixel coloring practical (Chunk 8) and throughout the course whenever students set colors in materials or Blueprints.*
	7. Hex & RGB practice — *practice/consolidation* · *Performance Task Connection: Consolidation day. Directly supports the pixel coloring practical (Chunk 8).*
	8. Pixel coloring checkpoint — **checkpoint** · *Performance Task Connection: This IS the Unit 1 deliverable. Students prove they can convert between binary, hex, and RGB to represent image data.*
	- **Written:** Doc Annotation on hex color reference → attached to Chunk 6. The Doc Annotation on "how a CPU runs an instruction" moves to a bridge day before Blueprints (see Unit 3). File systems, paths, and naming is folded into Unit 3 when students import assets (see Re-pacing Notes). Compiling vs. interpreting and primitive data types are taught before and during Blueprint introduction respectively (see Re-pacing Notes).
	- **Deliverable:** pixel coloring practical + number/color conversion.

- **Unit 2: Game Engines, Pipelines & the Industry** (3 meetings, W03) — *re-paced 2026-09-17; dropped roles/playtesting chunk to uncovered content*
	1. What a game engine is and why one exists (abstraction), with history of engines folded in as brief context — *new idea* · *Performance Task Connection: Understanding what an engine does and why abstraction matters is prerequisite for the editor work in Unit 3 and for making sense of Unreal's architecture.*
	2. The rendering cycle and render pipeline — *new idea* · *Performance Task Connection: The pipeline is the abstraction layer between game data and what appears on screen. Understanding it is prerequisite for troubleshooting viewport issues in Unit 3 and for the pipeline diagram checkpoint.*
	3. Unit 1 Quiz + game engine history reading — *quiz + independent reading* · *Performance Task Connection: The quiz measures mastery of Unit 1 foundations (binary, hex, data representation) that are prerequisite for all subsequent work.*
	- **Written:** Doc Annotation on Epic's rendering overview → attached to Chunk 2.
	- **Deliverable:** render loop diagram (formative, Chunk 2). No standalone summative for Unit 2; engine concepts are checked formatively and revisited in Unit 3.
	- **CSTA:** 3A-CS-01 (Chunk 1, 2), 3A-CS-02 (Chunk 2), 3A-DA-09 (Chunk 3 — Unit 1 quiz review)
	- **ACT Reading:** WME 402 (all chunks — technical vocabulary), IDT 403 (Chunk 2 — summarize key ideas)

- **Unit 3: Unreal Editor & First Blueprints** (14 meetings, W03–late W07) — *re-paced 2026-09-04; added Exploring UE day 1, moved compiling and data types in from Unit 1*
	1. Exploring Unreal Engine: install, first project, follow a simple tutorial — *new idea* · *Performance Task Connection: Students must be able to open UE and navigate a project before they can build anything. This is the on-ramp for the level layout practical (Chunk 9).*
	2. Levels/viewport + viewport navigation — *new idea* · *Performance Task Connection: Viewport navigation is required for every subsequent editor task. Students who cannot orbit and fly will be unable to build the level layout practical.*
	3. Basic placement tools + transforms (location/rotation/scale) — *new idea, B-day, extra practice* · *Performance Task Connection: Transforms (location/rotation/scale) are the foundation for placing objects in the level layout practical and for understanding Blueprint variable types later. G 406 and G 407 (coordinate plane) apply directly here.*
	4. Snapping/pivot points + Unreal units (small, combined) — *practice/consolidation* · *Performance Task Connection: Precision placement (snapping, pivot) is required for the level layout practical to look intentional rather than random.*
	5. Light types — *new idea* · *Performance Task Connection: Lighting is a component of the level layout practical and the Coin Rush capstone. Students who cannot place and adjust lights will produce visually broken levels.*
	6. Importing assets + file systems and paths (folded in from Unit 1) — *new idea* · *Performance Task Connection: File system literacy is prerequisite for importing assets into UE and for organizing the Content Browser. Students who cannot navigate folders will break on import.*
	7. Content Browser organization — *new idea*, rides into the Doc Hunt on Epic's asset naming conventions · *Performance Task Connection: Content Browser organization is required for the level layout practical (students must find their assets) and for the Doc Hunt deliverable (deriving the naming scheme).*
	8. Basic materials — *new idea* · *Performance Task Connection: Materials are required for the level layout practical (making surfaces look distinct) and for the Coin Rush capstone (score display, collectible appearance).*
	9. **Checkpoint** — level layout practical · *Performance Task Connection: This IS the first Unit 3 deliverable. Students prove they can navigate the editor, place objects, adjust transforms, and light a scene.*
	10. GitHub Desktop workflow (repo/commit/push) — *new idea*, kept standalone · *Performance Task Connection: Version control is required for the second Unit 3 deliverable (committing a Blueprint to a repo) and for all subsequent project work.*
	11. Compiling vs. interpreting (bridge from Unit 1) + Blueprint first contact: Event Graph, Print String, compile — *new idea* · *Performance Task Connection: Understanding compilation is prerequisite for the Blueprint work in Chunks 12-14 and for the Coin Rush capstone where students must compile and test their game.*
	12. Blueprint variables + primitive data types (folded in from Unit 1) + guided/independent practice — *new idea* · *Performance Task Connection: Variables are the foundation for the Coin Rush capstone (score, timer, health). Without variables, no Blueprint can store state.*
	13. Class vs. instance — *new idea* · *Performance Task Connection: Class vs. instance is the conceptual foundation for the Actor/Pawn/Character hierarchy (Chunk 14) and for understanding why changes to a Blueprint affect all instances — critical for the Coin Rush capstone.*
	14. Actor vs. Pawn vs. Character hierarchy (OOP entry point, kept light) + **checkpoint**: Blueprint committed to repo · *Performance Task Connection: This IS the second Unit 3 deliverable. Students must understand the hierarchy to choose the right parent class in the Coin Rush capstone.*
	- **Written:** Doc Hunt on Epic's asset naming conventions (students derive the naming scheme + write the class prefix table used all year) → attached to Chunk 7. Written Build Guide for GitHub Desktop workflow → attached to Chunk 10.
	- **Deliverable:** level layout practical (Chunk 9) + one working Blueprint committed to a repo (Chunk 14).

- **Unit 4: Q1 Capstone - Coin Rush** (8 meetings, late W07–W09) — **PIVOTED OUT 2026-10-08.** Not enough runway to Q1 close (grades due 10/21). Days 26-32 were rebuilt as Ship Game (Videos 11-16) + Devlog Checkpoint 02 + next-project intro. Coin Rush chunk structure preserved below unchanged so it can be replanned for Q2 or a later unit; see Re-pacing Notes (2026-10-08) for the pivot rationale.
	1. Third Person template setup (no player programming this quarter, keeps Q2's Roll-A-Ball videos 01-04 fresh) — *new idea* · *Performance Task Connection: Template setup is the on-ramp for the capstone. Students cannot build Coin Rush without a working project.*
	2. Collectible Actor with overlap events — *new idea* · *Performance Task Connection: Overlap events are the core mechanic of Coin Rush. Without them, no collectible works.*
	3. Score variable and increment (rides on overlap events) — *new idea*, practice · *Performance Task Connection: Score tracking is required for the win/lose conditions in Chunks 5-6.*
	4. HUD widget for score/time — *new idea* · *Performance Task Connection: The HUD is a required component of the deliverable — a playable game must communicate score and time to the player.*
	5. Countdown timer — *new idea*, practice · *Performance Task Connection: The timer drives the lose condition. No timer, no lose state, no complete game.*
	6. Win condition, lose condition, level restart — *new idea* · *Performance Task Connection: Win/lose conditions ARE the deliverable definition. A game without them is a tech demo, not a game.*
	7. Student-designed level + materials/lighting pass + playtest/iterate (combined application day — see Re-pacing Notes) · *Performance Task Connection: This is the application day where all prior skills combine into the final deliverable. Playtesting ensures the game is actually playable.*
	8. **Checkpoint** — package and submit · *Performance Task Connection: This IS the capstone deliverable submission. Packaging and submission prove the game runs outside the editor.*
	- **Written:** Doc Hunt on UMG and Widget Blueprints for the HUD (the video covers everything except the HUD; the HUD is theirs to find) → attached to Chunk 4.
	- **Deliverable:** a playable game with a real win state and a real lose state.

### Days

32 meetings: Unit 1 8 (was 7), Unit 2 3 (2 content chunks + Unit 1 quiz), Unit 3 14 (was 13), Unit 4 8 (unchanged).

### Re-pacing Notes

**Re-paced 2026-09-17.** Unit 2 reduced from 3 content chunks to 2. Chunk 3 (roles in game development + playtesting as disciplines) did not receive a dedicated day and has been moved to Uncovered Content below. The third meeting (Day 10) is a Unit 1 quiz, not a Unit 2 content chunk. Standards orphaned by this cut (CSTA 3A-AP-18, ACT Reading SYN 301, ACT Math S 304) are preserved in Uncovered Content for future scheduling. Day 10's unit tag corrected from 2 to 1 — it is a Unit 1 assessment administered during the Unit 2 calendar week.

**Re-paced 2026-09-09.** Unit 2 ACT math standards corrected: G 406/G 407 (coordinate geometry) removed from Days 9 and 11 — they belong in Unit 3 (transforms/viewport). Replaced with WME 402 (technical vocabulary) and IDT 403 (summarize key ideas) which align with what was actually taught. Added 3A-CS-02 (compare levels of abstraction) to Day 11 for the rendering pipeline. Added explicit Performance Task Connections to all Unit 1 and Unit 2 chunks per the lesson evaluation look-fors (Indicators 1-4).

**Re-paced 2026-09-04.** Unit 1 expanded from 7 to 8 meetings to match actual delivery (syllabus day + Dual Credit setup day were not in the original count; parts of a computer and hex each got a second day). Three content chunks originally in Unit 1 were not taught as standalone days and have been redistributed: file systems/paths folds into Unit 3 Chunk 6 (importing assets), compiling vs. interpreting becomes a bridge lesson before Blueprints (Unit 3 Chunk 11), and primitive data types ride into Blueprint variables (Unit 3 Chunk 12).

Unit 2 compressed from 4 to 3 meetings by merging roles and playtesting into a single day. Roles in game development is vocabulary, not a full new-idea day on its own; playtesting as a discipline pairs naturally with it.

Unit 3 expanded from 13 to 14 meetings: one new Exploring Unreal Engine day at the start, plus the two redistributed content chunks folded into existing days rather than added as standalone days. The net meeting count for Q1 is unchanged (32).

**Sub coverage needed Mon 9/14.** Nick is out. GP1 Day 12 is a reading day (game engine article), no new instruction. See [[GP1 Day 12 - Reading Day (Sub)]].

**Pivot 2026-10-08.** Unit 4 (Coin Rush capstone) pivoted out for SY27 Q1: after Mon 10/12 goes away to Indigenous Peoples' Day, only 7 GP1 meetings remain before the quarter closes 10/23 (grades due 10/21). 7 meetings cannot carry 8 Coin Rush chunks plus a package-and-submit checkpoint at this stage. Replacement plan for Days 26-32: finish the full 16-video Intro to Unreal series (Videos 11-16 build a Flappy-style ship game), the ship game becomes the de facto Q1 project, and the deliverable is Devlog Checkpoint 02 (OBS screen recording + show-me checklist + 3-4 reflection questions, no narration in Q1, narration starts Q2). Day 32 (Thu 10/22) is the intro stub for the next project, whose content is Nick's decision: locked 10/13 as the Roll-A-Ball kickoff via the SY26 recorded series (exemplar + project walk-through; the SY26 16-video set needs processing into SY27 Q2 use). Coin Rush's 8-chunk structure is preserved above unchanged so it can be replanned whole for Q2 or a later unit. The Chunk 14 "Blueprint committed to repo" assessment table row moves with this pivot: the repo/commit deliverable rides Q2's project instead.

**Sub coverage needed, 9/24–9/30/26.** Nick is out of town and a certified substitute with no content knowledge will cover GP1's Thu 9/24 (long/B-day), Tue 9/29, Wed 9/30, and Thu 10/1 (long/B-day) meetings. These 4 days land inside Unit 3 as EdPuzzle video + worksheet days — no new instruction from the sub. **Re-paced 2026-09-23:** Day 15 ran long on Video 01, so Day 16 was re-aimed to finish Video 02 and the whole video block shifted one meeting. Days 17-21 now cover Basic Placement Tools (Video 03), Transforms (Video 04), Rotation (Video 05), Scale (Video 06), and Level Setup (Video 07 + full Transforms Worksheet consolidation). Importing & Materials (Video 08, Chunks 6+8) moved from Day 21 to Day 23, eating one TBD day. See [[GP1 Sub Prep - Sept 2026]] for the applied plan. Known flag: the hardest chunk (coordinate math, Video 04) lands on a sub day instead of a live day.

**Sub coverage needed Tue 10/13/26 (one-off).** Nick is out, last-minute. Day 26 runs as EdPuzzle Video 11 (FAB Import & Ship Blueprint) follow-along; Video 11 posted to students 10/13. Day file: [[GP1 Day 26 - Ship Blueprint (Sub)]].

### Priority Content Standards

- **[[CSTA Standards|CSTA]]:** 3A-DA-09, 3A-DA-10, 3A-CS-01, 3A-CS-02, 3A-CS-03, 3B-CS-01, 3B-CS-02, 3A-AP-13, 3A-AP-15, 3A-AP-16, 3A-AP-17, 3A-AP-18, 3A-AP-19, 3A-AP-20, 3A-AP-21, 3A-AP-23, 3B-AP-12, 3B-AP-20, 3B-AP-24, 3A-IC-24
- **[[ISBE Computer Science Standards|ISBE]]:** 9-10.DA.09, 9-10.DA.10, 9-10.CS.01, 9-10.CS.02, 9-10.CS.03, 9-10.AP.13, 9-10.AP.15, 9-10.AP.16, 9-10.AP.17, 9-10.AP.18, 9-10.AP.19, 9-10.AP.20, 9-10.AP.21, 9-10.AP.23, 9-10.AP.24, 9-10.IC.25, 9-10.ET.B, 11-12.CS.03, 11-12.AP.20, 11-12.AP.23, 11-12.AP.28
- **[[ISTE Standards|ISTE]]:** 1.1.d, 1.3.a, 1.3.b, 1.4.a, 1.4.b, 1.4.c, 1.5.c, 1.5.d, 1.6.d

Anchors: **3A-DA-09** (translate between bit representations of characters, numbers, and images) is Unit 1's reason for existing. **3A-AP-16** (use events to initiate instructions) is Unit 4's overlap-event work. **11-12.AP.20** (conversion of source code into machine code using compilers) is the compiling lesson. **1.3.b** (evaluate accuracy, validity, bias, origin, relevance of digital content) was planned for a Unit 2 marketing-page versus reference-page comparison; that chunk has been moved to Uncovered Content.

### Aligned ACT Standards

- **Math:** N 301, N 302, N 402 (Unit 1 place value and exponents) · N 403, N 405, G 406, G 407, G 401, G 402 (Unit 3 transforms and rotation) · A 301, A 401, AF 401, AF 403, S 301 (Unit 4 variables, timer, score)
- **Reading:** WME 402 all quarter · IDT 403, TST 404, PPV 401 (Unit 1 and 2 Doc Annotations and readings) · ARG 401, ARG 402 (Unit 2 brief) · CLR 401, CLR 402, TST 403 (Unit 3 Doc Hunt and Build Guide) · REL 403 (Unit 4 debugging)

### Uncovered Content (Q1)

Chunks that were planned but did not receive a dedicated day. Preserved here for future scheduling in Q2+ or as a reading day filler.

- **Roles in game development + playtesting and balancing as disciplines** — originally Unit 2 Chunk 3. Students would research game development roles and write a one-pager, then compare playtesting approaches. Standards: CSTA 3A-AP-18, ACT Reading SYN 301, ACT Math S 304. The SYN 301 comparison (Epic's marketing page vs. technical reference page) was attached to this chunk.

### Instructional Gaps Identified

Student prior-knowledge gaps, not content gaps.

- **Place value outside base 10.** Nearly all students arrive with no exposure to any base but ten. Binary and hex are new learning, not review.
- **Exponents, specifically powers of 2.** Shaky at the 16-19 band and required for binary.
- **The coordinate plane in three dimensions.** Students know x and y from algebra. Z is new, and Unreal's z-up left-handed convention actively conflicts with what math class taught them.
- **Signed coordinates and signed rotation.**
- **File system literacy.** Students raised on search bars and cloud storage often cannot navigate a folder tree. This breaks asset import on day one of Unit 3.
- **Typing accuracy and exact spelling.** Blueprint node search and variable naming are unforgiving.
- **Reading reference documentation.** Most have read tutorials, never a reference doc. This is the gap the written pathway exists to close, and Q1 is where it has to start.
- **Tolerance for ambiguity and debugging persistence.** The most consequential gap in the course.

### Supplementation Needed

**Scaffolds and ACT-aligned support**

- Binary and hex conversion warm-up, 5 minutes at the start of every meeting for the first two weeks, framed in ACT place-value language (N 302).
- Powers-of-2 reference card at every station.
- Coordinate plane bridge lesson connecting algebra's x and y to Unreal's x, y, and z, stating the handedness difference explicitly rather than letting students discover it as a bug.
- File system scavenger hunt before any asset import.
- Vocabulary wall built from [[Unreal Terms & Concepts]], targeting WME 402. Students add entries from their own Doc Hunts.
- **Documentation reading protocol** (locate, paraphrase, apply, then name what the doc does not tell you). Taught explicitly in Unit 1, used every quarter after. This is the backbone of the reading pathway.
- Doc Annotation graphic organizer, reused all year so the format becomes automatic.
- Debugging protocol poster and a "name three things you tried" rule before asking for help.

**Materials to build**

- [ ] Unit 1 slide decks: parts of a computer, binary, hexadecimal, RGBA and hex (file systems and data types moved to Unit 3; compiling moved to Unit 3)
- [ ] Unit 2 slide decks: game engines, rendering pipeline, roles and playtesting (independent reading materials needed for Chunk 3)
- [ ] All Q1 videos, roughly 10 to 11, filmed across the quarter rather than before it
- [ ] Documentation reading protocol handout and Doc Annotation graphic organizer
- [ ] Written Build Guide: GitHub Desktop workflow
- [ ] Doc Hunt: Epic asset naming conventions, with the class prefix table as the deliverable
- [ ] Doc Hunt: UMG and Widget Blueprints for the Coin Rush HUD
- [ ] Coin Rush starter project, asset pack, rubric, and required-feature checklist
- [ ] Number and color conversion practical, plus answer key

---

## Q2 (35 meetings, 1,920 min) 10/26/26 to 1/22/27

Roll-A-Ball in Unreal Blueprint. **Re-paced 2026-10-15: one video per day, no standalone practice days.** The re-pace trades the S&S's video+practice alternation for straight video days with B days (72 min) carrying the catch-up cushion, and keeps the four pre-break checkpoint builds as the slack-absorbers. Decisions in [[GP1 Semester Map - SY27 Q2]]; the map's week table is the date plan, the units below are the content plan. All 16 videos exist (SY26 recordings, transcripts + EdPuzzle sets already processed into the SY27 video notes). The four written-instruction conversions (Docs Hunt 02/15, Build Guide 04, Transfer Brief 12) are **unscheduled by design** per Nick 10/15 - the map runs video pacing only, and the written versions get offered as alternatives later. Quarter shape for the fence: 25 meetings before winter break carry Days 33-57 (setup days, V01-V16, CP1-CP4, buffer, capstone kickoff, demo day); the capstone build runs W17-W18 (1/5-1/14) and closes at CP5 Day 64; Days 65-67 reserved for post-project content TBD.

### Units

- **Unit 1: Roll-A-Ball - Player to Capstone** (32 meetings, W10-W18, Days 33-64, one unit for the whole quarter) - phases are pacing markers, not unit boundaries; the checkpoints (CP1-CP5) are where the phases land.

**Phase A - Setup** (Days 33-34, 2 meetings)

1. Q2 launch + GitHub lesson + test assignment start (Day 33) - *not a video chunk; setup day* · *Performance Task Connection: the GitHub accept → clone → commit → push cycle is the submission spine for every checkpoint in the project, starting with the test assignment.*
2. Test assignment finish + Roll-A-Ball starter project into student hands (Day 34) - *setup/consolidation* · *Performance Task Connection: opens the actual project repo every student pushes to all quarter.*

**Phase B - Player, Input & Movement** (Days 35-40, 6 meetings)

3. Video 01 Player Blueprint: Pawn setup, collision presets, Game Mode, physics on (Day 35) - *new idea*
4. Video 02 Enhanced Input System Mapping (Day 36, B) - *new idea*, video kept (written Doc Hunt conversion unscheduled by design)
5. Video 03 Player Movement (Day 37) - *new idea*
6. Video 04 Camera Movement: spring arm/camera (Day 38, B) - *new idea*, video kept (Build Guide conversion unscheduled by design)
7. Video 05 Physics & Jump: physics materials, angular damping (Day 39) - *new idea*
8. **Checkpoint 1 build** (Day 40) - ball moves, jumps, camera follows, project committed · *Performance Task Connection: first graded evidence that the GitHub cycle works on a real project.*

**Phase C - Obstacles, Pickups & Game State** (Days 41-49, 9 meetings)

9. Video 06 Obstacle Blueprints: base obstacle class, inheritance in practice (Day 41) - *new idea*
10. Video 07 Pick Up Items pt. 1 (Day 42, B) - *new idea*
11. Video 08 Pick Up Items pt. 2 (Day 43) - *practice/consolidation (incremental, not fully new)*
12. Video 09 Pick Up Items pt. 3 (Day 44) - *new idea*
13. **Checkpoint 2 build** (Day 45) - obstacles + pickups collectible, committed
14. Video 10 Player Health: conditionals, persistent state (Day 46, B) - *new idea*
15. Video 11 Game Over Screen: first UI widget (Day 47) - *new idea*
16. **Checkpoint 3 build** (Day 48) - health + game-over loop committed (V10-V11 range; lands with the Q2 progress-report grade, so the posted grade carries a committed checkpoint build)
17. Video 12 Ground Traps (Day 49, B) - *new idea, applies the conditionals/state pattern to a new context (written Transfer Brief conversion unscheduled by design)*

**Phase D - World, Models & Effects** (Days 50-55, 6 meetings)

18. Video 13 Landscape Mode pt. 1: sculpting (Day 50) - *new idea*
19. Video 14 Landscape Mode pt. 2: texturing/painting (Day 51) - *new idea*
20. Video 15 Importing and Replacing Models (Day 52) - *new idea, video kept (Doc Hunt + licensing comparison conversion unscheduled by design)*
21. Video 16 Niagara Particles & Audio Cues (Day 53, B) - *new idea*
22. **Checkpoint 4 build** (Day 54) - landscape world with effects, committed (gate: evidence scope narrows to V13-V14 if V15/V16 bump)
23. Buffer (Day 55) - catch-up or polish; absorbs any single lost meeting from W10-W15

**Phase E - Capstone: Original Roll-A-Ball Game** (Days 56-64, 9 meetings)

24. Capstone kickoff: build begins (Day 56) - *application day* · *Performance Task Connection: students design their own level (landscape taught V13/V14) with their own customizations (V15/V16 content).*
25. Demo day (Day 57, B) - last before winter break, students demo their world-in-progress · *Performance Task Connection: mid-build demo keeps the level design moving across the break fence.*
26. Build days (post-break W17, Days 58-60) - customization and level design, the videos' skills applied
27. Final week W18: build/finish (Days 61-63) + **Checkpoint 5 final demo** (Day 64, B) - *the quarter's deliverable: their own original Roll-A-Ball game.*

- **Written:** none scheduled. The four conversions (V02 Doc Hunt, V04 Build Guide, V12 Transfer Brief, V15 Doc Hunt) are planned as later-pass alternatives per Nick 10/15; each replaces its video's day, and the video stays published as the answer key.
- **Deliverables:** CP1-CP4 checkpoint builds (each committed), CP5 final demo 1/14 (their own customized game). Same-day proof submissions ride six video days (V01, V02, V03, V06, V12, V14 - screenshots or a short recording, per the map's proof table); V03's proof is the first OBS recording and doubles as the CP1 tool primer. Commit-and-push after every video is the standing proof for the rest.

### Days

32 unit meetings in Phase A-E plus a 3-meeting reserved block (Days 65-67, outside the unit, post-project content TBD) = 35. W11 has only 2 meetings (RCPU + Election Day); W14, W17, W19 have 3 (Staff PD Mondays). No checkpoint or deadline inside a 2-meeting week.

### Re-pacing Notes

**Re-paced 2026-10-15 (Nick + Sena).** The S&S's original one-video-per-2-meetings alternation (video day, then practice day) is out. Reason: Nick's call that the class runs one video per day with no practice assignments, using the B days' extra minutes and the checkpoint builds as the catch-up mechanics instead. Unit meeting counts collapsed accordingly (Unit 1 10→8, Unit 2 11→9, Unit 3 7→6, Unit 4 stays 7 content meetings + gains the reserve block's fence). Two setup days (Days 33-34, GitHub + starter project) are new chunks not in the original S&S - tool-setup days are real content per the standing rule, and GitHub Desktop was never actually taught in Q1 (its chunk died in the 10/8 pivot), so Day 33 is first contact, not a refresher. Checkpoints renumbered CP1-CP5 to cover the whole arc rather than the original S&S's "checkpoint build" labels; CP4 carries a gate that scopes its evidence to V13-V14 if V15/V16 bump. V15/V16 bump-to-W17 is the standing release valve, decided at CP3's gate. **CP3 moved to Day 48 (Wed 12/2) and V12 to Day 49** (swapped 10/15, Nick): CP3 now lands with the Q2 progress-report grade (also 12/2), so the posted grade carries a committed checkpoint build; V12 rides Day 49's B day. CP3's evidence scope is V10-V11, not V10-V13; its brief runs presence-based (screenshots, count-and-type) so it grades inside the progress-report window. The written-conversion schedule is deferred, not dropped: the four task types return as alternatives when planned later. Day 32 (Thu 10/22) is now a Q1 buffer + early GitHub signup day, and the exemplar/launch content moved to Day 33 - see that day file.

### Priority Content Standards

- **CSTA:** 3A-AP-13, 3A-AP-14, 3A-AP-15, 3A-AP-16, 3A-AP-17, 3A-AP-18, 3A-AP-19, 3A-AP-20, 3A-AP-21, 3A-AP-23, 3A-CS-03, 3A-IC-28, 3B-AP-12, 3B-AP-14, 3B-AP-16, 3B-AP-17, 3B-AP-21, 3B-AP-22
- **ISBE:** 9-10.AP.13, 9-10.AP.14, 9-10.AP.15, 9-10.AP.16, 9-10.AP.17, 9-10.AP.18, 9-10.AP.19, 9-10.AP.20, 9-10.AP.21, 9-10.AP.23, 9-10.AP.24, 9-10.CS.03, 9-10.IC.29, 11-12.AP.14, 11-12.AP.16, 11-12.AP.18, 11-12.AP.19, 11-12.AP.24, 11-12.AP.26
- **ISTE:** 1.3.a, 1.3.b, 1.4.a, 1.4.c, 1.4.d, 1.5.c, 1.5.d, 1.6.a, 1.6.b, 1.6.d

Anchors: **3A-AP-20** (evaluate licenses that limit or restrict use of computational artifacts) is the video 15 Doc Hunt, and it is the standard most courses claim and never actually teach. **3A-IC-28** (beneficial and harmful effects of intellectual property laws on innovation) rides along with it. **3B-AP-22** (modify an existing program to add functionality and discuss unintended implications) is exactly what adding health to a working game does.

### Aligned ACT Standards

- **Math:** G 406, G 407, A 406, N 405 (Phase B movement and vectors) · AF 401, AF 403, A 301, A 401, S 403 (Phase C health, score, timing) · G 403, G 405, N 403 (Phase D landscape sizing) · S 301, S 302, S 304 (Phase E playtest data)
- **Reading:** WME 402 all unit · CLR 401, CLR 402, IDT 403 (Enhanced Input docs work in Phase B) · TST 403, REL 403 (Camera guidance in Phase B) · CLR 402, REL 403 (Ground Traps pattern application in Phase C) · SYN 301, PPV 401, TST 404 (asset licensing and Fab docs in Phase D) · ARG 401, ARG 402 (design justification in Phase E)

### Instructional Gaps Identified

- **Vector math and direction in 3D.** Students think in 2D. Forward vectors and axis mapping are the first hard wall.
- **Rate and proportional reasoning.** Tuning speed, force, and damping requires it, and it is the largest ACT math gap at the 16-19 band.
- **Order of operations with signed values.** Negative force and torque produce results students cannot predict.
- **"State" as a concept.** Health, score, and game over require a mental model of persistent state. Students have no prior frame for it.
- **Reading a reference doc to build something, with no steps given.** The Enhanced Input material in Phase B is the first time reading official docs is load-bearing rather than practice, and it will be hard. Expect to co-read it the first time.
- **Following a multi-step procedure without skipping steps.** Video tutorials punish skimming, written guides punish it harder, and students skim.
- **Legal reading.** License text is the least accessible prose students will meet all year.
- **Stamina across a 16-part build.** Mid-quarter attrition is the predictable failure mode.

### Supplementation Needed

**Scaffolds and ACT-aligned support**

- Rate and proportion warm-ups built from actual tuning values in the project, framed in ACT language (AF 401).
- Vector direction mini-lesson with a physical demonstration before video 03.
- **Co-read the Enhanced Input docs as a class the first time** (video first, docs alongside), modeling the documentation reading protocol out loud, before any doc-based work happens alone.
- Tuning log worksheet: change one value, predict, test, record. Builds S 304 and AF 403 while doing real work.
- License comparison organizer with plain-language glosses for the legal terms, targeting WME 402 and SYN 301.
- Checkpoint project files at videos 05, 09, 12, and 16 so a student who falls behind has a known-good restart instead of dropping the project.
- Pair debugging protocol.

**Materials to build**

- [ ] PINNED: GitHub test assignment repo + accept link (needed Day 33, Mon 10/26)
- [ ] PINNED: Roll-A-Ball starter project repo + accept link (needed Day 34, Tue 10/27)
- [ ] PINNED: GP1 Classmoji/Classroom 50 classroom setup (needed Day 33)
- [ ] Doc Hunt: Enhanced Input System Mapping (replaces video 02) - unscheduled; offer later per Nick 10/15
- [ ] Written Build Guide: Camera Movement (replaces video 04) - unscheduled; offer later
- [ ] Transfer Brief: Ground Traps (replaces video 12) - unscheduled; offer later
- [ ] Doc Hunt: Fab import and asset licensing (replaces video 15) - unscheduled; offer later
- [ ] License comparison organizer, with two real licenses selected - rides the V15 day if adopted
- [ ] Capstone rubric, required-feature checklist, and design justification prompt (before Day 56)
- [ ] Tuning log template
- [ ] Five checkpoint project files (at V05, V09, V12, V16, and one final pre-CP5 state) so a student who falls behind has a known-good restart
- [ ] Vector direction demo materials

---

## Q3 (32 meetings, 1,752 min) 1/25/27 to 4/2/27

2D Platformer in Unreal Blueprint, videos 01 through 13. Four convert to written instruction: Video 01 Setup & Asset Import → Written Build Guide; Video 05 2D Input & Movement → Transfer Brief; Video 07 PaperZD Plugin → Doc Hunt; Video 10 Jump Animation → Transfer Brief. Q3 and Q4 are one continuous project: the 22-part build is the engine, and the Q4 capstone is the student's own original game made from it.

### Units

- **Unit 1: Sprites, Color & Project Setup** (7 meetings, W20–W21)
	1. Retrieval/re-teach: binary/hex/RGBA refresher via Pokemon sprite coloring sheets, paper first — *retrieval, not a fresh new idea* (Q1 was five months earlier — treat as re-teach, not review)
	2. Written Build Guide 01 Setup & Asset Import — *new idea*
	3. Sprites, spritesheets, texture atlases — *new idea*
	4. Practice: sprite/atlas work with imported assets
	5. Video 02 Animations from Sprites (Flipbooks) — *new idea*
	6. Practice: flipbook guided + independent
	7. **Checkpoint**/consolidation
	- **Written:** Written Build Guide (Setup & Asset Import) → Chunk 2.
	- **Deliverable:** none new this unit; feeds into Unit 2.

- **Unit 2: Paper Character, Camera, Input & Conditionals** (6 meetings, W22–W23)
	1. Video 03 Paper Character Blueprint — *new idea*
	2. Practice
	3. Video 04 2D Camera Settings — *new idea*
	4. Transfer Brief 05 2D Input & Movement — *new idea*
	5. Practice: input/movement guided + independent
	6. Video 06 Conditionals & Flipping the Sprite (anchored on a visible bug — the sprite faces the wrong way) — *new idea* + **checkpoint**
	- **Written:** Transfer Brief (2D Input & Movement) → Chunk 4.
	- **Deliverable:** none new this unit; feeds into Unit 3.

- **Unit 3: PaperZD & Animation State Machines** (8 meetings, W24–W25)
	1. Doc Hunt 07 PaperZD Plugin: setup/install — *new idea*
	2. Practice: plugin
	3. Video 08 Movement Animations pt. 1 — *new idea*
	4. Practice: guided pt. 1
	5. Video 09 Movement Animations pt. 2, State Machines (stays on video deliberately — the single hardest concept in the course, full allocation preserved) — *new idea*
	6. Practice: state machines, checking ~80% before advancing — do not rush past this chunk
	7. Transfer Brief 10 Jump Animation: boolean transition conditions — *new idea*, rides on the now-stable state machine
	8. **Checkpoint**/independent practice
	- **Written:** Doc Hunt (PaperZD Plugin) → Chunk 1. Transfer Brief (Jump Animation) → Chunk 7.
	- **Deliverable:** none new this unit; feeds into Unit 4.

- **Unit 4: Tilesets & Building a 2D World** (11 meetings, W26–W28)
	1. Paper map design activity (no computer, planning — was planned in SY26 and never built)
	2. Video 11 Tilesets pt. 1: tile grid math — *new idea*
	3. Practice
	4. Video 12 Tilesets pt. 2: layering/decoration — *new idea*
	5. Practice
	6. Video 13 Building a 2D World Challenge kickoff: game feel tuning (jump/gravity) — *new idea*
	7. Practice: game feel tuning
	8. Build day 1
	9. Build day 2
	10. Playtesting
	11. **Checkpoint** — final consolidation/submission
	- **Deliverable:** unchanged.

### Days

32 meetings: Unit 1 7, Unit 2 6, Unit 3 8, Unit 4 11.

### Re-pacing Notes

Fits within existing budget once re-chunked. Unit 3 (state machines) was already given generous allocation in the original scope and needed no borrowing to give Chunks 5–6 full demo-then-80%-practice treatment.

### Priority Content Standards

- **CSTA:** 3A-DA-09, 3A-DA-10, 3A-DA-12, 3A-CS-01, 3A-CS-03, 3A-AP-13, 3A-AP-15, 3A-AP-16, 3A-AP-17, 3A-AP-18, 3A-AP-19, 3A-AP-20, 3A-AP-21, 3B-AP-14, 3B-AP-16
- **ISBE:** 9-10.DA.09, 9-10.DA.10, 9-10.DA.12, 9-10.CS.01, 9-10.CS.03, 9-10.AP.13, 9-10.AP.15, 9-10.AP.16, 9-10.AP.17, 9-10.AP.18, 9-10.AP.19, 9-10.AP.20, 9-10.AP.21, 11-12.AP.16, 11-12.AP.18
- **ISTE:** 1.1.d, 1.3.a, 1.4.a, 1.4.b, 1.5.a, 1.5.c, 1.5.d, 1.6.b

Anchors: **3A-DA-09** returns in its strongest form, since a spritesheet is literally an image as bit representation. **3A-DA-12** (create computational models representing relationships among data elements) is the animation state machine. **3B-AP-16** (code reuse using libraries and APIs) is the PaperZD Doc Hunt, and reading the plugin's own docs is what makes that standard real rather than nominal.

### Aligned ACT Standards

- **Math:** N 302, N 402 (Unit 1 hex re-teach) · G 407, N 404, A 406 (Unit 2 sprite flip by sign of velocity) · S 404 (Unit 3 transition conditions as combinations of events using and, or, not) · G 403, G 405, G 406, N 403 (Unit 4 tile grid arithmetic)
- **Reading:** WME 402 all quarter · TST 403, CLR 401 (Unit 1 Setup Build Guide) · CLR 402, REL 403 (Unit 2 and 3 Transfer Briefs) · CLR 401, IDT 403, TST 404, PPV 401 (Unit 3 PaperZD Doc Hunt, where a third-party doc reads nothing like Epic's) · REL 403 (Unit 3 state machine cause-effect)

### Instructional Gaps Identified

- **Hex and place value, again.** Q1 was five months earlier. Plan to re-teach, not review. Assuming retention here is the mistake that makes Unit 1 fail.
- **Coordinate systems and pivot points.** Sprite pivots are not intuitive and produce animation bugs students cannot diagnose.
- **Grid and rectangle arithmetic.** Tileset work is area, dimension, and multiple reasoning, and it is where 16-19 band students stall.
- **State machines as an abstraction.** The single hardest conceptual jump in the year. Students have no prior model for a system that is in exactly one of several states.
- **Boolean logic with and, or, not.** Transition conditions require it and students guess instead of reasoning.
- **Reading documentation not written by Epic.** PaperZD's docs are thinner, differently organized, and assume more. Students who can navigate Epic's docs will still stall here, which is exactly why it is worth doing.

### Supplementation Needed

**Scaffolds and ACT-aligned support**

- Binary, hex, and RGBA re-teach block opening Unit 1. Budget it as instruction, not review.
- Pokemon sprite coloring sheets, on paper, before any digital sprite work.
- State machine paper modeling activity before video 09: students diagram their own morning routine as a state machine, then a character's.
- Truth table warm-ups for and, or, not, framed in ACT language (S 404).
- Tile grid math worksheet using the actual tileset dimensions, framed in ACT language (G 403, G 405).
- **Structure comparison** before the PaperZD Doc Hunt: put an Epic doc page and a PaperZD doc page side by side and have students map how each is organized (TST 404, PPV 401) before they have to use either under pressure.
- Paper map design activity before students build in the editor.

**Materials to build**

- [ ] Written Build Guide: Setup & Asset Import (replaces video 01)
- [ ] Transfer Brief: 2D Input & Movement (replaces video 05)
- [ ] Doc Hunt: PaperZD Plugin (replaces video 07)
- [ ] Transfer Brief: Jump Animation (replaces video 10)
- [ ] Epic versus PaperZD documentation structure comparison activity
- [ ] Sound Notifies video, scripted in SY26 and never filmed
- [ ] Paper map design activity, planned in SY26 and never built
- [ ] State machine paper modeling handout
- [ ] Tile grid math worksheet
- [ ] Truth table warm-up set

---

## Q4 (35 meetings, 1,896 min) 4/5/27 to 6/11/27

2D Platformer videos 14 through 22, then the year's capstone. Three convert to written instruction: Video 14 Enemy Blueprint Setup → Written Build Guide; Video 15 Enemy Animation → Transfer Brief; Video 20 Player Health → Transfer Brief. Videos 16, 17, and 18 (Behavior Trees) stay on video — densest new vocabulary of the year, do not convert or under-allocate. Hard constraint: the capstone (Unit 3) must be finished and graded by 5/26/27, the seniors' last full day.

### Units

- **Unit 1: Enemies & AI** (13 meetings, W29–W32)
	1. Written Build Guide 14 Enemy Blueprint Setup: base enemy class, inheritance — *new idea*
	2. Practice: base enemy class
	3. Transfer Brief 15 Enemy Animation — *new idea*
	4. Practice: enemy animation
	5. Video 16 Behavior Tree (stays on video, dense vocabulary) — *new idea*
	6. Practice: Behavior Tree guided, checking ~80%
	7. Practice: Behavior Tree independent (extra day — densest vocab of the year, do not compress)
	8. Video 17 Blackboard — *new idea*
	9. Practice: Blackboard guided + independent
	10. Video 18 Nav Mesh — *new idea*
	11. Practice: Nav Mesh guided + independent — **this is W30's single meeting**, deliberately a practice day, not a new-content day
	12. Enemy locomotion state machine (integrates BT + Blackboard + Nav Mesh + Q3's state-machine transfer) — *new idea*
	13. **Checkpoint** — full enemy AI integration test
	- **Written:** Written Build Guide (Enemy Blueprint Setup) → Chunk 1. Transfer Brief (Enemy Animation) → Chunk 3.
	- **Deliverable:** none new this unit; feeds into Unit 2.

- **Unit 2: Combat, Health & Damage** (7 meetings, W33–W34)
	1. Video 19 Enemy Stomp Box — *new idea*
	2. Practice: stomp box, debug discovery
	3. Transfer Brief 20 Player Health (rides on the Q2 health concept) — *new idea*
	4. Practice: player health, debug discovery
	5. Video 21 Player Damage — *new idea*
	6. Practice: damage system integration, debugging
	7. **Checkpoint** — full combat loop test
	- **Written:** Transfer Brief (Player Health) → Chunk 3.
	- **Deliverable:** none new this unit; feeds into Unit 3.

- **Unit 3: Q4 Capstone - Original 2D Platformer** (7 meetings, W35 to 5/26)
	1. Kickoff: scope contract review, build begins
	2. Build day 2
	3. Build day 3
	4. Playtest round 1 + written critique begins
	5. Revision day
	6. Playtest round 2 + written critique finalized
	7. **Checkpoint** — final submission and grading, MUST complete by 5/26
	- **Deliverable:** unchanged — due and graded 5/26/27, hard and non-negotiable so seniors finish.

- **Unit 4: Publish, Portfolio & Playtest Showcase** (8 meetings, 5/27–6/11, juniors only)
	1. Packaging/publishing workflow — *new idea*
	2. Practice: packaging/publishing
	3. Written postmortem: drafting — *new idea*
	4. Practice: postmortem drafting/revision
	5. Portfolio page setup — *new idea*
	6. Practice: portfolio page build/polish
	7. Cross-class playtest showcase prep — practice/consolidation
	8. **Checkpoint** — showcase day / final submission
	- **Written:** Doc Annotation on Epic's packaging documentation → attached to Chunk 1.
	- **Deliverable:** unchanged.

### Days

35 meetings: Unit 1 13, Unit 2 7, Unit 3 7, Unit 4 8.

### Re-pacing Notes

Fits within existing budget once re-chunked. The original counts already gave Behavior Tree/Blackboard/Nav Mesh generous room; Unit 1 now gets two consecutive practice meetings (Chunks 6–7) around the densest vocabulary rather than one, and W30's lone meeting lands on a practice day, not a new-idea day. The 5/26 hard deadline is unaffected since no meetings moved across the Unit 2/3 boundary.

### Priority Content Standards

- **CSTA:** 3A-AP-13, 3A-AP-15, 3A-AP-16, 3A-AP-17, 3A-AP-18, 3A-AP-19, 3A-AP-21, 3A-AP-22, 3A-AP-23, 3B-AP-08, 3B-AP-09, 3B-AP-10, 3B-AP-14, 3B-AP-15, 3B-AP-17, 3B-AP-19, 3B-AP-20, 3B-AP-21, 3B-AP-22, 3B-AP-23, 3B-IC-25
- **ISBE:** 9-10.AP.13, 9-10.AP.15, 9-10.AP.16, 9-10.AP.17, 9-10.AP.18, 9-10.AP.19, 9-10.AP.21, 9-10.AP.22, 9-10.AP.23, 9-10.ET.E, 11-12.AP.10, 11-12.AP.11, 11-12.AP.12, 11-12.AP.16, 11-12.AP.17, 11-12.AP.19, 11-12.AP.22, 11-12.AP.23, 11-12.AP.24, 11-12.AP.26, 11-12.AP.27, 11-12.IC.29
- **ISTE:** 1.2.a, 1.4.a, 1.4.c, 1.4.d, 1.5.d, 1.6.d, 1.7.c

Anchors: **3B-AP-09** (implement an artificial intelligence algorithm to play a game against a human opponent) is the enemy AI unit, word for word. **3B-AP-19** (develop programs for multiple computing platforms) is the packaging work in Unit 4. **3B-AP-23** (evaluate key qualities of a program through a process such as a code review) is the capstone critique round, and making the critique written is what turns it into a reading and writing standard too.

### Aligned ACT Standards

- **Math:** N 404, N 405, G 406, G 407, AF 401 (Unit 1 detection range and patrol speed) · AF 403, AF 401, A 401, S 403 (Unit 2 health and damage) · S 301, S 302, S 304, S 402 (Units 3 and 4 playtest data and postmortem)
- **Reading:** WME 402 all quarter · TST 403, CLR 401 (Unit 1 Enemy Build Guide) · CLR 402, REL 403 (Units 1 and 2 Transfer Briefs) · ARG 401, ARG 402, IDT 403 (Unit 3 design justification and written critique) · IDT 403, TST 404, PPV 401, SYN 301 (Unit 4 packaging Doc Annotation and postmortem)

### Instructional Gaps Identified

- **Distance and range reasoning in the coordinate plane.** Enemy detection is a distance check and students cannot picture it.
- **Inheritance as a concept.** Base class and child class is abstract for students who have only ever built one standalone Blueprint at a time.
- **Behavior Tree and Blackboard vocabulary.** Dense, and unlike anything they have encountered. The words block the concept, which is why these three videos keep their video support.
- **Scope estimation and project management.** Students consistently commit to a capstone three times larger than they can finish. This is the direct cause of abandoned projects.
- **Writing to make and support a claim.** Students can describe what they built. Arguing that a design decision was correct is a different skill and the postmortem is the first time it is graded.
- **Senior disengagement after 5/26.** Structural, not motivational. Plan around it rather than fight it.
- **Giving and receiving critique.** Playtest feedback lands as insult unless the protocol is explicit.

### Supplementation Needed

**Scaffolds and ACT-aligned support**

- Inheritance lesson using non-code examples before video 14, concrete to abstract, since 14 is now a written guide and carries less support.
- Behavior Tree and Blackboard vocabulary preview card, issued before video 16.
- Distance-check warm-ups using coordinates from students' own levels, framed in ACT language (N 405, N 404).
- **Capstone scope contract.** Students commit to a specific feature list, get it approved, and are graded against what they committed to rather than against ambition. This is the primary structural fix for the abandoned-project pattern.
- Hard 5/26 capstone deadline with a formal review, so seniors finish and are graded before they leave.
- Structured playtest protocol with sentence stems for written critique, targeting ARG 401.
- Claim, evidence, reasoning frame for the postmortem, so ARG 402 has a scaffold rather than a blank page.
- Junior-only extension unit after 5/26, so the final 8 meetings are real work rather than filler.

**Materials to build**

- [ ] Written Build Guide: Enemy Blueprint Setup (replaces video 14)
- [ ] Transfer Brief: Enemy Animation (replaces video 15)
- [ ] Transfer Brief: Player Health (replaces video 20)
- [ ] Doc Annotation: Epic packaging documentation
- [ ] Capstone scope contract template and approval rubric
- [ ] Playtest protocol with written critique sentence stems
- [ ] Postmortem prompt with a claim, evidence, reasoning frame
- [ ] Packaging and publishing guide
- [ ] Portfolio page template
- [ ] Inheritance concrete-to-abstract lesson
- [ ] Behavior Tree vocabulary preview card

---

## Written Instruction Build Queue

Everything above, gathered in production order so it can be worked as a single list. 15 conversions plus 6 supporting artifacts.

**Before 8/24 (Q1 opening)**

- [ ] Documentation reading protocol handout
- [ ] Doc Annotation graphic organizer
- [ ] Unit 1 Doc Annotation sources selected (hex reference, CPU article)

**During Q1**

- [ ] Doc Annotation: Epic rendering overview
- [ ] SYN 301 comparison: Epic marketing page versus technical reference page
- [ ] Doc Hunt: Epic asset naming conventions
- [ ] Written Build Guide: GitHub Desktop workflow
- [ ] Doc Hunt: UMG and Widget Blueprints

**Before 10/26 (Q2 opening)**

- [ ] Doc Hunt: Enhanced Input System Mapping - deferred 10/15 (video pacing only for Q2's map; offer later)
- [ ] Written Build Guide: Camera Movement - deferred 10/15
- [ ] PINNED: GitHub test assignment + Roll-A-Ball starter repos, GP1 classroom setup (see Q2 Materials to build)

**During Q2**

- [ ] Transfer Brief: Ground Traps - deferred 10/15 (offer later)
- [ ] Doc Hunt: Fab import and asset licensing - deferred 10/15 (offer later)
- [ ] License comparison organizer

**Before 1/25 (Q3 opening)**

- [ ] Written Build Guide: Setup & Asset Import
- [ ] Epic versus PaperZD documentation structure comparison

**During Q3**

- [ ] Transfer Brief: 2D Input & Movement
- [ ] Doc Hunt: PaperZD Plugin
- [ ] Transfer Brief: Jump Animation

**Before 4/5 (Q4 opening)**

- [ ] Written Build Guide: Enemy Blueprint Setup
- [ ] Transfer Brief: Enemy Animation

**During Q4**

- [ ] Transfer Brief: Player Health
- [ ] Doc Annotation: Epic packaging documentation

## Open Items

- [ ] Confirm which of videos 14 and 15 is Enemy Blueprint Setup and which is Enemy Animation. Both are published under the same title; the SY26 scripts call them Enemy Class and Enemy Animation. This matters now, since 14 becomes a Build Guide and 15 becomes a Transfer Brief.
- [ ] Decide how converted videos are gated. The plan assumes the video unlocks after the written deliverable is submitted. EdPuzzle or the LMS has to actually enforce that or strong readers get no benefit and weak readers skip the reading.
- [ ] Q1 video list is an estimate of 10 to 11. Lock the actual list once the Unit 1 and 2 decks exist.
- [ ] Decide whether the Coin Rush capstone is individual or paired. Paired would let 3A-AP-22 and 1.7.c land in Q1 instead of waiting until Q4.
- [ ] Q1 Unit 3 still runs one meeting tight even after reallocation (see its Re-pacing Notes) — pick a remediation option before Q1 W03.
