---
course: GP2
quarter: Q1
day: 24
date: Wed 10/7
day_type: A
chunk: '22'
type: new idea (EdPuzzle)
class_minutes: 48
unit: 3
status: completed
updated: 2026-10-06
sub: false
riddle: What kind of band never plays music?
joke: How did the barber win the race?
---

# GP2 Day 24 - Roll-A-Ball Video 01 (Project Setup)

Day 24: start of the Roll-A-Ball in C++ project, video-driven. Focus is Video 01 (clone the starter, convert to C++, compile from VS). Students who finish may start Video 02. Videos 01 and 02 must be recorded and published before this day.

## Learning Target

Clone the starter Roll-A-Ball project, convert it from a Blueprint-only project to a C++ project by creating a C++ class, and compile it from Visual Studio so the class appears in the editor.

**Standards:** ISBE 11-12.AP.20 (source code to machine code via compilers) · CSTA 3B-AP-22 (modify an existing program) · CSTA 3B-AP-20 (version control and IDEs) · ACT WME 402

**Performance Task Connection:** CP1 (Day 33) requires the project to compile from VS with committed code. Every subsequent deliverable rides on the workflow built today: clone, edit in VS, compile, see the change in Unreal, commit. A student who cannot do today's loop cannot do Day 25 through Day 33.

## Shared Block

| Field | Value |
|---|---|
| Learning target | Clone the starter Roll-A-Ball project, convert it to a C++ project, and compile it from Visual Studio so the class appears in the editor. |
| New concept | Converting a Blueprint project to C++: creating the first C++ class makes a Source folder and turns the project into a C++ project that compiles from VS. One concept; the 31000 config step is part of the tooling, not a second idea. |
| Content standard | ISBE 11-12.AP.20 (conversion of source code into machine code using compilers) |
| ACT standard | WME 402 |
| Unit performance task link | CP1 requires compiling this exact project from VS with committed code. Today's loop (clone, class, compile, commit) is the workflow every checkpoint evidence uses. |
| Rides on | Unit 1's VS setup (Day 10) and VS + GitHub workflow (Days 12-13), plus the Blueprint Roll-A-Ball they built last year in GP1. |
| Vocabulary | Source folder, .sln (solution file), Unreal Build Tool Configuration, Regenerate Project, compile/build |
| Prior-knowledge gaps | Clone-from-repo flow got one live pass in Unit 1; students who missed Days 12-13 will need the written instructions. Compiler as a concept was taught in Unit 1's early days and is now load-bearing. |

**Do Now** (retrieval, not a cold open)

| # | Type | Question |
|---|---------|----------|
| 1 | Review | Yesterday was the Unit 1 Checkpoint. What is the difference between `=` and `==` in C++? |
| 2 | Review | In Unit 1 you built programs in Visual Studio. What does the compiler do to your code when you hit build? |
| 3 | Preview | The project you're about to clone has Blueprints but no C++ code files at all. What do you think has to exist in the project before it can understand C++? |

*(Review Q2 reaches back past the last three days on purpose: the compiler question is the day's load-bearing retrieval, tied to today's standard. The quiz question keeps yesterday's retrieval current.)*

**Worked example**

The video IS the worked example: Nick creates the C++ class, sets the Unreal Build Tool Configuration (31000, Regenerate Project on, Apply), opens the .sln, compiles from VS, and shows the class in the editor, narrating each move. Students follow along on their own clones.

**Guided practice + 80% checkpoint**

Students run the same loop on their machines with Nick circulating: clone, class, config, .sln, compile. The ~80% checkpoint is a screen check at the start of independent work: 9 of 11 students have the project compiled and open in Unreal with their class visible. Students not there yet get triage in priority order (clone failed, config skipped, compile error).

**Independent work**

Verify the class in the editor, commit and push the new Source folder via GitHub Desktop, screenshot the class in the editor, submit to Classroom. Fast finishers roll into Video 02.

**Exit ticket**

1. Creating a C++ class changed the project's file structure. What appeared that was not there before, and what kind of project is it now?
2. Before compiling, we changed two things in the Unreal Build Tool Configuration. What were they, and why does "Regenerate Project" matter?
3. How do you prove in Unreal that the conversion and compile actually worked?

**Exit ticket mastery criteria:** Names the Source folder and identifies the project as a C++ project (not Blueprint-only). Identifies the 31000 value and Regenerate Project turned on, and explains regeneration in any wording that means VS can rebuild/keep the project files in sync. The class the student created is visible in the editor.

## Agenda

1. Do Now review (5 min)
2. Clone and open: follow the written instructions on Classroom, GitHub Desktop, open the .uproject in Unreal 5.8.3 (8 min)
3. Video 01 follow-along: create the C++ class, Unreal Build Tool Configuration (31000, Regenerate Project, Apply), open the .sln, compile from VS (25 min)
4. Independent: class visible in editor, commit + push, screenshot to Classroom. Fast finishers start Video 02 (10 min)
5. Exit ticket (5 min)

**~80% checkpoint:** Screen check at the start of item 4. 9 of 11 students have the compiled project open with their class visible.

## Differentiation & Accommodations

- **Engagement:** the game is Roll-A-Ball, which this class built in Blueprint last year. Same game, new engine layer, visible payoff: their code file inside a project they already know.
- **Representation:** video walks every step; the clone instructions are written on Classroom; the config menu and its exact values are shown on screen in the video.
- **Action & Expression:** exit ticket written or verbal. Follow-along pace lets students pause and rewind rather than raise a hand.
- **Accommodations:** written clone instructions for students who missed the Unit 1 git days. Extended time is inherent (independent block plus Friday's C day). Priority triage list in guided practice so the stuck students get Nick first.
- **Student Voice:** students past the checkpoint help neighbors (pair help, earned like the amnesty day rule) and choose to roll into Video 02.

## Materials

| Item | Status | Link |
|------|--------|------|
| Starter repo (5.8.3, converted and pushed) | ✅ | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Classmoji assignment (clone click-target) | ✅ | app.classmoji.io → GP2 SY27 → Roll-A-Ball. Created 10/6 via MCP: repo + module published, one published assignment "Clone the starter project", no deadline, no autograde tests, all 11 student repos provisioned as `roll-a-ball-<username>` and verified against the roster. Details: [[GP2 - Roll-A-Ball Clone Instructions]] teacher notes. |
| Video 01 recording script | ✅ | [[SY27 Q1 - Video 01 - Project Setup]] |
| Video 01 (recorded, editing 10/6; publish before class Wed 10/7) | ✅ | published 10/7 per Nick; script: [[SY27 Q1 - Video 01 - Project Setup]] |
| Video 02 (VS/Unreal parts recorded 10/7; slide segment + assembly pending) | 🚧 | Nick does the slide segment as voiceover; script: [[SY27 Q1 - Video 02 - Header Source Split]] |
| Written clone instructions (Classroom post) | ✅ | [[GP2 Worksheets/GP2 - Roll-A-Ball Clone Instructions]] |
| Daily slides 10.7 | ✅ | Do Now + agenda live on the GP2 Daily Slides deck (verified read-back 10/7) |

## What Changed

**Planned:** Clone starter project, convert to C++, compile from VS; independent block commits/pushes and screenshots to Classroom; fast finishers start Video 02.
**Actually happened:** Went as planned.
**Carried over:** Nothing — fully covered as planned.

## Notes after teaching

## Connections

← [[GP2 Day 23 - Unit 1 Checkpoint Quiz & Amnesty]] | [[GP2 Q1 Calendar]] | [[GP2 Day 25 - Roll-A-Ball Video 02 (Header-Source Split)]] →