---
course: GP1
quarter: Q1
day: 29
date: Mon 10/19
day_type: A
chunk: '16'
type: new idea (EdPuzzle)
class_minutes: 48
unit: 4
status: completed
updated: 2026-10-19
riddle: What kind of coat is best put on wet?
joke: Did you hear about the cat that ate a lemon?
---

# GP1 - Basic UI (Day 29)

Day 29 (A day, 48 min) - Video 15 (Basic UI, 16:19, the longest ride remaining). Widget Blueprint and score display. This is the payoff day: rings actually score now.

## Shared Block

| Field | Value |
|---|---|
| Learning target | Build the score data path (Player Controller holds Score, HUD displays it, Widget shows it) and update the displayed score when an overlap fires. |
| New concept | The UI data flow: value lives in one place (BP_PlayerController), display lives elsewhere (Widget), and objects talk through Cast + custom events + functions. One idea: the ferry between game state and screen. |
| Content standard | CSTA 3A-AP-14 (use variables/states to represent game state - Score) |
| ACT standard | A 401 (Score = Score + 1 substitution), WME 402 |
| Unit performance task link | The devlog's "show the score ticking" checklist line is built today. Without today, the game has actions but no visible goal. |
| Rides on | Day 28's overlap event firing when the ship hits the ring - today wires THAT moment to the score. |
| Vocabulary | variable, Integer, Player Controller, Widget Blueprint, Widget, HUD, Canvas Panel, Text Block, anchor, Create Widget, Add to Viewport, custom event, function, Cast, Get Player_Controller, integer-to-text conversion |
| Prior-knowledge gaps | Typing accuracy: node names are unforgiving this video (UpdateScoreText, BP_MyHUD). The video's own copy-paste habit line covers it. Integer from Unit 1's primitive types is a return, not a new concept. |

**Do Now** (retrieval, not a cold open)

| # | Type | Question |
|---|---------|----------|
| 1 | Review | When your ship overlaps a ring, which event fires first - and what node did we use to check WHAT was hit? |
| 2 | Review | What does Destroy Actor do in the ring's story, and would the game feel finished if the ring just vanished with no points? |
| 3 | Preview | When you collect a coin in Fortnite, where does the number 1 for your score actually LIVE - on screen, or somewhere else? |

**Worked example**

The video IS the worked example: Player Controller with Score variable (Integer), Set Score to 0 on Begin Play, WB_ScoreUI widget, BP_MyHUD creating and adding the widget, Update Score custom event, the Get HUD → Cast to BP_MyHUD → Score HUD Update chain, wired from the ship's overlap. Nick's framing stands: it's a lot of small steps, focus on the flow, the rest is copy/paste later.

**Guided practice + 80% checkpoint**

Students follow along. The ~80% checkpoint: 14 of 18 students press play, hit a ring, and SEE "Score: 1" (then 2, 3...) update on screen. The triage order is real this day because the chain has many links: score not ticking → the overlap's Update Score call missing (most likely), widget not showing → Create Widget/Add to Viewport missed on the HUD, wrong number → the Cast target or the +1 placement.

**Independent work**

Move the overlap logic's wiring so the score increments - then make it THEIRS: change "Score:" label text, font size/color, anchor position. Early finishers: add a second text block (they'll meet more when they get further).

**Exit ticket**

1. The Score value and the score DISPLAY are two different things. Where does the value live, and where does the number you see on screen come from?
2. Walk the chain in order: you hit a ring. What does the ship's overlap event call FIRST, and which object's function does that go through before the screen text changes?
3. Why does the video cast to BP_PlayerController and BP_MyHUD instead of just talking to them directly?

**Exit ticket mastery criteria:** Q1: value lives on the Player Controller as a variable (not on screen/in the widget), display derives from it via update calls. Q2: overlap → Cast → Update Score (Controller function) → Get HUD → Cast to BP_MyHUD → Score HUD Update → text changes; ordering named, exact node names not required if the flow is right. Q3: Casts verify WHICH specific class you're talking to (the Controller/HUD you built), so the right function gets called - or accept "so Unreal knows which blueprint's version to use."

## Agenda

1. Do Now review (5 min)
2. Video 15 on EdPuzzle: Player Controller score variable, HUD widget, the update chain, wired from the overlap (rest of period, self-paced with triage)
3. Guided follow-along for anyone mid-video: the overlap → Update Score → HUD chain (parallel, circulating)
4. Exit ticket (5 min)

## Differentiation & Accommodations

- **Engagement:** the score display is the moment the game becomes a game - students will see their own points going up, which is the day's built-in hook.
- **Representation:** the data path gets named as a chain (each Cast = who you're talking to), the widget itself gets built live in the video, and the EdPuzzle Integer question re-anchors the type system concretely (100 vs "You Win" vs 5.2).
- **Action & Expression:** customizing label, font, color, anchor = student voice in a visual end product; exit ticket written or verbal.
- **Accommodations:** extended time inherent; the chain's Cast targets are the first thing to check for students who get lost - the video names them on screen. Students who missed Day 28 use the Do Now to re-anchor on what fires.
- **Student Voice:** UI customization is the expressive layer today.

## Materials

| Item | Link |
|------|------|
| Video 15 - Basic UI on EdPuzzle | assigned on Classroom |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |

## Connections

← [[GP1 Day 28 - Forward Movement + Collision]] | [[GP1 Q1 Calendar]] | [[GP1 Day 30 - Catch-Up (Video 16 Optional)]] →