---
course: GP2
quarter: Q2
day: 34
date: Tue 10/27
day_type: A
chunk: '2'
type: practice
class_minutes: 48
unit: 4
status: active
updated: 2026-10-23
sub: false
---

# GP2 Day 34 - Input Practice (Silent-Input Debug Day)

Day 34 (A day, 48 min). Practice day, no new idea: the silent-input hunt. The mapping context either loads in BeginPlay or nothing responds - compile-clean dead keys with no error anywhere. Today is the debugging day for exactly that failure, plus the catch-up lane from last week.

## Learning Target

Hunt a silent input failure systematically: name the three prints in three layers (BeginPlay ran, the mapping-context line ran, the action fired), use each print's presence or absence to point at the broken layer, and catch up Video 06/V07 work from last week.

**Standards:** CSTA 3A-CS-03 (systematic troubleshooting strategies) · ISBE 9-10.CS.03 (same verb, ISBE wording) · ACT REL 403

## Shared Block

| Field | Value |
|---|---|
| Learning target | Debug dead keys by proving what ran before suspecting what fired: three prints, three layers, worst case the last one still speaking names the bug. |
| New concept | None - this is practice on yesterday's wiring. The hunt ladder (BeginPlay / mapping context / BindAction) is yesterday's debug beat applied on their own builds. |
| Content standard | CSTA 3A-CS-03 (systematic troubleshooting strategies others can use) |
| ACT standard | REL 403 (cause-effect tracing: a print's presence narrows which layer of the chain fired) |
| Unit performance task link | CP2's evidence chain starts with input proof under your own control: a student who can kill and restore their own input on purpose owns the debugging frame every later checkpoint uses. |
| Rides on | Day 33's wiring and its "Mapping context added" print; the three stub fire prints from the same build. |
| Vocabulary | silent failure, hunt ladder (BeginPlay ran / wiring line ran / action fired), comment-out as a test, restore-and-verify |
| Prior-knowledge gaps | Students still expect errors to escort broken behavior. The room saw the silent-input failure once on camera; today they build it and fix it themselves. |

**Do Now**

1. Yesterday three keys fired three prints. Name the function each W press actually ran, and the line that made its input reach that function. (BindAction - Roll binding)
2. Build.cs added a module and BeginPlay added a mapping context. In plain words: what does the mapping context DO once it is added?
3. Preview: think of something in this project that could be wired wrong with zero errors shown. First honest answer wins today's hunt.

**Worked example**

Quick whole-class rebuild of yesterday's seeded failure (5 min on the projector): comment out AddMappingContext, full compile, Play - dead keys, no error. Then the ladder written as the students say it back: print 1 proves BeginPlay ran, print 2 proves the wiring line ran, print 3 proves the action fired.

**Guided practice**

Everyone performs the same hunt on their own project: seed the failure (comment out the AddMappingContext line), full compile, observe dead keys plus the missing print, restore, verify. The point is the ritual, not the surprise: the middle print's absence is what points at BeginPlay-level wiring, and nothing in the Error List ever appears.

**Independent work**

Two lanes, self-paced. Catch-up lane: students short of Video 06/V07 after last week finish those first (including the Fab-import work from Friday), then run the hunt with whatever their build has. Wired lane: run the extended hunt - kill the wrong layer on purpose (comment out one BindAction line instead) and observe that the OTHER two prints still fire, which is the ladder paying off. Then finish Day 33's challenge screenshot if not submitted, and commit.

**Exit ticket**

1. Name the hunt ladder in order: which three prints, and what does each one prove ran?
2. Suppose the mapping-context print shows and nothing fires when you press W. Which layer does that point at, and why?
3. Yesterday's failure compiled clean with no errors anywhere. In one sentence: why is a successful compile not proof that the input is wired?

## Agenda

1. Do Now review (5 min)
2. Guided rebuild: seed the silent failure whole-class (5 min)
3. Individual hunt: seed, observe, restore, verify (10 min)
4. Independent lanes: catch-up or extended hunt, challenge finish, commit (20 min)
5. Exit ticket (3 min)

*Unnumbered, parallel: students still owing the Video 06/07 evidence screenshots submit them today - last week's artifacts are CP1's replacement tier evidence and stay live.*

## Materials

| Item | Link |
|------|------|
| Video 08 (reference, catch-up lane rewatch) | same EdPuzzle link as Day 33 |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |