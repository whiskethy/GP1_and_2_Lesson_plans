---
course: GP1
quarter: Q1
day: 25
date: Thu 10/8
day_type: B
chunk: '11'
type: new idea (EdPuzzle) + checkpoint
class_minutes: 72
unit: 3
status: completed
updated: 2026-10-23
riddle: What has to be broken before you can use it?
joke: Why did the bicycle fall over?
---

# GP1 - Blueprint Visual Programming + Mini-Checkpoint (Day 25)

Day 25 (B day, 72 min) - Video 10 (Blueprint Visual Programming, 15:06, about 26-38 min of student time) then a short Blueprint mini-checkpoint. End goal: every student through Video 10 and past the checkpoint by end of day.

## Learning Target

Read and modify the BP_Ring Blueprint at the node level: explain what execution pins, input pins, and output pins do, tell BeginPlay from Tick, and print live data (the ring's rotation) from the Event Graph.

**Standards:** CSTA 3A-AP-13 · 3A-AP-16 (events initiating instructions) · ACT WME 402

**Performance Task Connection:** Node wiring is the core mechanic of every Coin Rush system (score increment, countdown, win check). Reading the Event Graph correctly is what makes all of Unit 4 buildable.

## Shared Block

| Field | Value |
|---|---|
| Learning target | Read and modify the BP_Ring Blueprint at the node level: explain execution/input/output pins, tell BeginPlay from Tick, and print live data from the Event Graph. |
| New concept | Node-level reading of the graph: execution flow (white triangles, order of operations), data flow (input/output pins, color-coded types), and getting live values (Get Actor Rotation, Rotator to String). BP vs C++ tradeoff is survey-level context, not a second idea. |
| Content standard | CSTA 3A-AP-16 (events initiating instructions) |
| ACT standard | WME 402 |
| Unit performance task link | Every Coin Rush system (score, timer, win/lose) is node wiring. Today is where reading a graph stops being magic and starts being a skill they use daily. |
| Rides on | Day 24 (BP_Ring built: BeginPlay print + Tick spin). Video 10 modifies what they already built. |
| Vocabulary | execution pin, input pin, output pin, data type (color-coded), Event BeginPlay, Event Tick, Get Actor Rotation, Break Transform, Rotator to String, compile |
| Worked example | The video is the worked example: full walkthrough (nodes intro 0:10-6:00, print-rotation exercise 6:00-15:06). |
| Guided practice | Follow-along on their own BP_Ring, teacher circulating. Students not yet through Video 10 skip to the checkpoint with evidence from their last finished video. |
| Do Now | See table below. Review pulls from Day 24 (Blueprint basics) and Day 21 (transforms); Preview mirrors exit ticket Q1. |
| Exit ticket | See below, decided before the build. Checkpoint doubles as build evidence. |
| Prior-knowledge gaps | Students absent yesterday miss the whole BP_Ring base; they catch up in the first block (Video 09 + build), then either join Video 10 or join the checkpoint group late with less support. Naming prefixes come back (BP_ joins SM_, M_). |

**Do Now** (retrieval, not a cold open)

| # | Type | Question |
|---|---------|----------|
| 1 | Review | What are Event BeginPlay and Event Tick, and what is each one for? |
| 2 | Review | What do SM_, M_, and BP_ each tell you about a file before you open it? |
| 3 | Preview | Nodes connect to other nodes. How do you think a node "knows" what to do first, or what to work on next? |

**Agenda**

1. Do Now review (5 min)
2. Video 10 follow-along in Unreal (26-38 min, self-paced): node-based programming intro, BP vs C++ tradeoff survey, then the print-the-rotation exercise on their own BP_Ring. Fast finishers from yesterday skip ahead appropriately.
3. Checkpoint brief (5 min): the evidence tiers and the date-based rule read aloud; rubric on the Classroom assignment.
4. Checkpoint submission (15-18 min): students submit evidence screenshots for every video they have actually finished (07, 08, 09, 10 where reached). Video 10 students do the three-modification build first.
5. Exit ticket (5 min)

**GP1: Intro to Unreal Checkpoint 01** (on Classroom, date-based not pacing-based: each student submits evidence for whatever videos they have finished by today)

Evidence table (one screenshot per video finished):

| Video | Evidence |
|---|---|
| 07 - Level Setup | Level with lighting and sky set up |
| 08 - Importing & Basic Materials | Content Browser with Meshes/Materials folders + ring with material applied |
| 09 - Ring Blueprint | Spinning ring in viewport, or BP_Ring graph with BeginPlay print + Tick spin |
| 10 - Blueprint Visual Programming | Event Graph with all three additions (custom spin value, second BeginPlay print, Get Actor Rotation printed as string), compiled 0 errors + one sentence on why their spin value |

Plus one sentence if they finished Video 10 today: why they picked their spin value. Reflection questions come at Checkpoint 02.

**Exit ticket**

1. What is the difference between an execution pin and an input pin?
2. The ring's spin runs on Tick. Is printing the rotation a Tick job too? Why or why not?
3. Name one thing Blueprint does well and one thing C++ does better. Why would a real studio use both?

**Differentiation & Accommodations**

- **Engagement:** the checkpoint is their own Unreal work being shown and defended, not a quiz; the date-based rule removes the panic of a deadline ahead of their pace.
- **Representation:** video walkthrough; pin colors called out visually; the checkpoint's evidence table restated as a visible checklist in the Classroom post.
- **Action & Expression:** checkpoint evidence is the screenshots themselves, not text; exit ticket written or verbal.
- **Accommodations:** students absent yesterday catch up in block 2's self-paced run; fast finishers (Video 08/09 group) get the checkpoint early and can also push into whatever comes next (no new video assigned today, they help peers or polish the ring).
- **Student Voice:** students choose the spin value and custom message; the "why" questions let them defend their choices.

## Materials

| Item | Link |
| --- | --- |
| EdPuzzle: Video 10 - Blueprint Visual Programming | https://youtu.be/j25YhKRFX1U |
| Blueprint mini-checkpoint brief (Classroom post "GP1: Intro to Unreal Checkpoint 01") | [[GP1 - Blueprint Mini-Checkpoint Brief]] |
