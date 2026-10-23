---
course: GP2
quarter: Q1
day: 32
date: Fri 10/23
day_type: C
chunk: '29'
type: lesson
class_minutes: 72
unit: 3
status: active
updated: 2026-10-23
sub: false
riddle: What building has the most stories?
joke: What do you call a fly with a sore throat
---

# GP2 Day 32 - Video 06 Catch-Up + First Fab Imports

**Date:** Fri 10/23 (C day, 72 min) - Unit 3 - the last class of Q1

## What Changed (Fri 10/23, morning of)

- CP1 is dropped for Q1 entirely, per Nick's call the morning of. No remap was done this session on purpose: the Q1 Calendar row, the S&S chunk 29 line, and the semester map's CP1 row still name CP1 and need a dedicated cleanup pass. The checkpoint rhythm question (do CP2-CP4 still run as scheduled in Q2) is open.
- Today is instead: get up to Video 06 done, then start importing assets from Fab into the Roll-A-Ball project: maps, materials, props, audio.
- Students have their own Fab accounts and vaults and claim free assets themselves; nothing is shared from Nick's Fab library.
- The old CP1 tier table is preserved at the bottom of this file under Uncovered Content.

## Where the class actually is

Few students are through Video 06 (evidence was due Thu 10/22 EOD, but most are still behind). Catch-up is the spine of the block; Fab imports are the work for anyone who has the Video 06 screenshot or is otherwise unblocked. Nobody is penalized for where they land.

## Learning Target

Students can get their project up to Video 06's state (ball pawn assembled from components, evidence screenshot), and can claim a free asset on Fab, add it to their project, and find it in the Content Drawer.

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | In the Video 06 constructor, which function creates each component (sphere collision, static mesh, spring arm, camera)? |
| 2 | Review | Which of the ball's components is the root, and what does the spring arm do for the camera? |
| 3 | Preview | When you add an asset from Fab to your project, where does it land and what do you call the place you find it inside the editor? |

## Agenda

1. Do Now Review (5 min)
2. Catch-Up: Finish Video 06 + Video 06 evidence screenshot
3. Fab Imports: maps, materials, props, audio (self-paced, for anyone through Video 06)

## The Fab import loop (self-paced, once Video 06 is done)

One new pattern, in five steps:

1. Sign into Fab.com on your own account and claim the free asset you want. Maps, materials, props, or audio are all fine. Known-good example the class used before: the Lowpoly Handpainted Environment (free listing on Fab).
2. Add it to your project from the Fab window or the launcher's Fab library ("Add to Project", pick your Roll-A-Ball project). If the wrong version or project shows, use "Show all projects" and pick this one.
3. Wait for the import to land, then check the Content Drawer: the pack comes in as its own folder of .uasset files.
4. Open a demo map or drag a prop in. First map open can take a while (a "Preparing Shaders" popup is normal, and warnings on demo maps are normal too). To quiet the map warnings: delete the second directional light, and turn off "Enable World Composition" in World Settings.
5. Save, commit, push. The Content folder is big, so pushes after an import take longer than code pushes; start them early, not at the bell.

## Evidence to submit

- Video 06 screenshot (editor viewport, ball visible with camera follow) for anyone finishing today.
- One screenshot of the Content Drawer with an imported asset pack's folder visible, for anyone who got an import in. Submit to Classroom; commit-and-push anything that touched the project.

## Exit Ticket

1. In one sentence: what does CreateDefaultSubobject do in the Video 06 constructor?
2. If you imported from Fab today: which folder did your assets land in, and name one thing that is in it.
3. If you have not imported yet: which asset type (map, material, prop, or audio) are you claiming first, and why that one?

**Mastery Criteria:** The Do Now Preview (Q3) is the weak form of Exit Ticket Q2: start-of-class guesses about where imports land vs end-of-class students naming the folder they actually used. Q1 confirms Video 06's constructor pattern stuck. Anyone submitting the V06 screenshot plus a Content Drawer screenshot has hit the day's bar.

## Reflection questions

- Which Fab asset did you pick, and would you have picked it if it cost $20?
- What is one thing an imported asset can't do for you that your C++ code does?

## Materials

| Item | Status | Link |
|------|--------|------|
| Fab.com (students use their own accounts) | ✅ | [fab.com](https://www.fab.com) |
| Fab reference note (import loop + map fixes) | ✅ | `04 - Development/Unreal/.../Asset Store & Migrating Assets.md` |
| Starter project repo | ✅ | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Classroom post for evidence | 🚧 | Nick posts; V06 screenshot + import screenshot |
| Daily slides | ✅ 10/23 | GP2 deck updated morning-of (Do Now 2-3, agenda, exit ticket, 10.23, riddle/joke carried); verified by read-back. GP1 deck untouched, no Friday class |

## Uncovered Content - CP1 (dropped 10/23)

The tiered evidence checkpoint below was planned for today and dropped by Nick's call the morning of. Kept here so the tier specs can be reused if a replacement checkpoint comes back in Q2 or a mapping pass wants them.

| Tier | Videos | Evidence spec |
|------|--------|---------------|
| Core: project compiles | V01-V02 | Screenshot of a successful build from VS with the project open, committed and pushed |
| Core: debug print evidence | V03 | On-screen Score print in a non-magenta color plus the Warning UE_LOG line (Day 26's challenge, still standing) |
| Core: loop runs | V05 | The for-loop yellow stack (or countdown), predicted out loud before the final run |
| Median: ball pawn assembled | V06 | Editor viewport with the ball visible and camera follow working at default values |
| Median: two tunables | V07 | Details panel showing RollSpeed and JumpForce with at least one value changed from default |
| Median: error ritual | V04 | Before/after pair: Error List with a real error on top, then the same list empty after the fix |
| Stretch: tuning in play | V07 | Short capture of the ball's movement with two different RollSpeed values |

← [[GP2 Day 31 - Roll-A-Ball Video 07 (UPROPERTY and Tuning)]] | [[GP2 Q1 Calendar]] | (End of Q1) →