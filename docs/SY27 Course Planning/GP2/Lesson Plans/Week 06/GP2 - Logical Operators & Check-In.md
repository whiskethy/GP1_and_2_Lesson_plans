---
course: GP2
quarter: Q1
day: 21
date: Fri 10/2
day_type: C
chunk: '13'
type: new idea
class_minutes: 72
unit: 1
status: active
updated: 2026-10-02
riddle: What has one eye, but can't see?
joke: How do you make a robot angry? Keep pushing his buttons.
sub: false
---

# GP2 Q1 Day 21 — Logical Operators & Check-In

**Date:** Fri 10/2 · **Unit:** 1 · **Chunk:** 13 (conditionals, day 3: logical operators)

**Re-planned 2026-10-02** (was TBD stub). Nick's first day back after the sub window. Technical issues derailed the class before the sub window, and actual completion status from Days 19-20 is unknown until students are in the room. So today does two jobs: teach the one piece of conditionals that never got taught (logical operators), and take a real inventory of where students stand so Monday's rescoped plan is built on evidence, not guesses. Loops do not start today. They wait for Monday's replan.

## Learning Target

Combine two conditions into one using `&&` and `||`, writing compound conditionals in working programs, and self-assess standing on all Unit 1 skills so far.

**Standards:** CSTA 3A-AP-15, 3A-AP-17 · ACT WME 402, CLR 401, S 404

**Performance Task Connection:** Compound conditions are how real game logic works: a boss door that needs a key AND a lever, a dodge that fires if you press shift OR double-tap. Every Unreal C++ if statement students touch in Unit 2 and the Roll-A-Ball capstone uses them. S 404 (events as combinations using and, or, not) is the exact ACT skill this day teaches.

## Do Now

| # | Type    | Question |
|---|---------|----------|
| 1 | Review  | Which of these is NOT a comparison operator: `==`, `<=`, `=`, `!=`? Why? |
| 2 | Review  | In a conditional chain, two conditions are both true. Which one runs, and why? |
| 3 | Preview | A game door opens if you have a key OR you smashed the lock. How could ONE if statement check both things at once? |

*(Alternates, cut what you don't want:)*
- Review: What does the `else` block do, and when does it run?
- Preview: You want to print "Boss mode!" only when `score` is over 100 AND `level` is 3. What would go inside the parentheses?

## Exit Ticket

1. Write an if statement that prints "Boss mode!" only when `score` is over 100 AND `level` is 3.
2. Write an if statement that prints "Access granted" when `hasKey` is true OR `hasCrowbar` is true.
3. What's the difference between two separate if statements and one if with `&&`? When would you use each?
4. Status check: what do you still owe from the sub window (Variables Practice, Conditionals Practice), and what's your plan to finish it?
5. Rank yourself 1-4 on variables, functions, conditionals, logical operators. Which one do you most want re-taught Monday?

*(Need 2-3; alternates above. Q1 is the grown-up version of the Preview.)*

**Mastery Criteria:** Writes a working compound conditional with `&&` or `||`, correct syntax (both conditions inside the parentheses, comparison operators not assignment). Q4 gets a real answer, not "nothing owed" — and "nothing owed" is only allowed if it's true.

## Agenda

1. Do Now (5 min)
2. Welcome back + take stock: students open Classroom and their repos, list what's done and what's owed from the sub window (10 min)
3. Logical operators live: `&&` and `||`, worked example on the board, `!` as a quick mention (20 min)
4. Guided practice: two compound conditionals written together, one AND one OR game scenario (15 min)
5. Independent: write one `&&` and one `||` condition in Codédex Build, then owed sub-window work takes over (15 min)
6. Exit ticket (7 min)

**~80% checkpoint:** By the exit ticket, every student has written at least one working compound conditional, or has a hand up with a specific blocker. Nobody sits stuck silently.

**Do not start loops today.** If the room is flying, the stretch is harder compound conditions (three conditions, `!`), not new constructs. Loops need their own day with Nick live, and Monday's plan decides when.

## Differentiation & Accommodations

- **Engagement:** Compound conditions are real game logic — locked doors, boss triggers, dodge inputs
- **Representation:** Annotated worked example on the board; C++ Cheat Sheet; Blueprint Branch comparison for students who took GP1 (`&&` is a Branch with two inputs wired through an AND)
- **Action & Expression:** Code in Codédex Build or VS, student's choice; exit ticket written or verbal
- **Accommodations:** Extended time. Students who owe sub-window work use the independent block for catch-up — no new debt gets added while old debt stands. Pair programming available.
- **Student Voice:** Q5 of the exit ticket directly feeds Monday's replan — students say what gets re-taught

## Materials

| Item | Status | Link |
|------|--------|------|
| Unit 1 Slides (169–180: combining + &&/||/! + chart) | ✅ | [Drive](https://docs.google.com/presentation/d/1_kJrQM3yrKd2PUwhgPgngTF1KFGCZuni8POx-tua1gs/edit) — skip 181-184 (ternary/switch, bumped) |
| C++ Cheat Sheet (live) | ✅ | [Drive](https://docs.google.com/document/d/1Ae39WRmOcdEsln8an0AeS-ROIC7aYN9Bmh-vsDGsDUE/edit) |
| Conditionals Practice problem set (for owed work) | ✅ | [Doc](https://docs.google.com/document/d/1zYbdIVBJtRS9PjgBscb2Lovz6VRGGcddCYvWtcFKu8M/edit) |
| Guided practice scenarios (AND/OR) | 🔲 not built | worked on the board live |
| Logical Operators Practice + Exit Ticket Doc | ✅ | [Doc](https://docs.google.com/document/d/1tfW6tQKIq-SFh56Sp1-UD203a7vpHXPc2QUlaU8_9OM/edit) (source: [[GP2 - Logical Operators Practice + Exit Ticket]]; Codédex Build flow, exit ticket answered as comments, screenshot turn-in) |
| Do Now slides | 🔲 not built | daily slides deck, 10.2 |

## Uncovered Content

- Ternary (`? :`) and `switch` were in Chunk 13's original scope (S&S slides 151-180) and have never been taught. Not taught today either. Queued in [[GP2 Bumped Topics]] — Monday's replan decides whether they land next week or fold into mixed practice before the checkpoint.
- Loops (Chunk 14) remain untaught. Not started today, on purpose. Unit 1 Checkpoint stays unscheduled until loops land.

## Notes after teaching

## Connections

← [[GP2 Q1 Day 20 - Conditionals Practice (Sub)]] | [[GP2 Q1 Calendar]] | [[GP2 Q1 - Days 22-32 TBD]] →