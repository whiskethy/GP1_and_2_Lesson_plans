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
updated: 2026-10-23
sub: false
riddle: What kind of band never plays music?
joke: How did the barber win the race?
---

# GP2 Day 24 - Roll-A-Ball Video 01 (Project Setup)

Day 24: start of the Roll-A-Ball in C++ project, video-driven. Focus is Video 01 (clone the starter, convert to C++, compile from VS). Students who finish may start Video 02.

## Learning Target

Clone the starter Roll-A-Ball project, convert it from a Blueprint-only project to a C++ project by creating a C++ class, and compile it from Visual Studio so the class appears in the editor.

**Standards:** ISBE 11-12.AP.20 (source code to machine code via compilers) · CSTA 3B-AP-22 (modify an existing program) · CSTA 3B-AP-20 (version control and IDEs) · ACT WME 402

**Performance Task Connection:** Every Roll-A-Ball deliverable requires the project to compile from VS with committed code, and rides on the workflow built today: clone, edit in VS, compile, see the change in Unreal, commit. A student who cannot do today's loop cannot do the rest of the project.

## Shared Block

| Field | Value |
|---|---|
| Learning target | Clone the starter Roll-A-Ball project, convert it to a C++ project, and compile it from Visual Studio so the class appears in the editor. |
| New concept | Converting a Blueprint project to C++: creating the first C++ class makes a Source folder and turns the project into a C++ project that compiles from VS. One concept; the 31000 config step is part of the tooling, not a second idea. |
| Content standard | ISBE 11-12.AP.20 (conversion of source code into machine code using compilers) |
| ACT standard | WME 402 |
| Unit performance task link | The Roll-A-Ball project is this exact project, compiled from VS with committed code. Today's loop (clone, class, compile, commit) is the workflow every piece of project evidence uses. |
| Rides on | Unit 1's VS setup (Day 10) and VS + GitHub workflow (Days 12-13), plus the Blueprint Roll-A-Ball they built last year in GP1. |
| Vocabulary | Source folder, .sln (solution file), Unreal Build Tool Configuration, Regenerate Project, compile/build |
| Prior-knowledge gaps | Clone-from-repo flow got one live pass in Unit 1; students who missed Days 12-13 will need the written instructions. Compiler as a concept was taught in Unit 1's early days and is now load-bearing. |

**Do Now** (retrieval, not a cold open)

| # | Type | Question |
|---|---------|----------|
| 1 | Review | Yesterday was the Unit 1 Checkpoint. What is the difference between `=` and `==` in C++? |
| 2 | Review | In Unit 1 you built programs in Visual Studio. What does the compiler do to your code when you hit build? |
| 3 | Preview | The project you're about to clone has Blueprints but no C++ code files at all. What do you think has to exist in the project before it can understand C++? |

**Worked example**

The video IS the worked example: it creates the C++ class, sets the Unreal Build Tool Configuration (31000, Regenerate Project on, Apply), opens the .sln, compiles from VS, and shows the class in the editor, narrating each move. Students follow along on their own clones.

**Guided practice**

Students run the same loop on their machines with the teacher circulating: clone, class, config, .sln, compile. Students who are stuck get triage in priority order (clone failed, config skipped, compile error).

**Independent work**

Verify the class in the editor, commit and push the new Source folder via GitHub Desktop, screenshot the class in the editor, submit to Classroom. Fast finishers roll into Video 02.

**Exit ticket**

1. Creating a C++ class changed the project's file structure. What appeared that was not there before, and what kind of project is it now?
2. Before compiling, we changed two things in the Unreal Build Tool Configuration. What were they, and why does "Regenerate Project" matter?
3. How do you prove in Unreal that the conversion and compile actually worked?

## Agenda

1. Do Now review (5 min)
2. Clone and open: follow the written instructions on Classroom, GitHub Desktop, open the .uproject in Unreal 5.8.3 (8 min)
3. Video 01 follow-along: create the C++ class, Unreal Build Tool Configuration (31000, Regenerate Project, Apply), open the .sln, compile from VS (25 min)
4. Independent: class visible in editor, commit + push, screenshot to Classroom. Fast finishers start Video 02 (10 min)
5. Exit ticket (5 min)

## Differentiation & Accommodations

- **Engagement:** the game is Roll-A-Ball, which this class built in Blueprint last year. Same game, new engine layer, visible payoff: their code file inside a project they already know.
- **Representation:** video walks every step; the clone instructions are written on Classroom; the config menu and its exact values are shown on screen in the video.
- **Action & Expression:** exit ticket written or verbal. Follow-along pace lets students pause and rewind rather than raise a hand.
- **Accommodations:** written clone instructions for students who missed the Unit 1 git days. Extended time is inherent (independent block plus Friday's C day). Priority triage list in guided practice so the stuck students get the teacher first.
- **Student Voice:** students with a compiled project help neighbors (pair help, earned like the amnesty day rule) and choose to roll into Video 02.

## Materials

| Item | Link |
|------|------|
| Starter repo (Unreal 5.8.3) | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Classmoji assignment (clone) | app.classmoji.io, GP2 SY27, Roll-A-Ball |
| Video 01 on EdPuzzle | https://youtu.be/bh6Xik_Ib2o / https://edpuzzle.com/media/6ac66fd1d3e1f776bdf0f1cc |
| Video 02 on EdPuzzle (early finishers) | https://youtu.be/jWPaEK7wPvU / https://edpuzzle.com/media/6ac8f7fa09dcc07636842dba |
| Written clone instructions (Classroom post) | [[GP2 - Roll-A-Ball Clone Instructions]] |
### EdPuzzle embeds

**Video 01**

<iframe width="470" height="404" src="https://edpuzzle.com/embed/media/6ac66fd1d3e1f776bdf0f1cc" frameborder="0" allowfullscreen></iframe>

**Video 02 (early finishers)**

<iframe width="470" height="404" src="https://edpuzzle.com/embed/media/6ac8f7fa09dcc07636842dba" frameborder="0" allowfullscreen></iframe>
