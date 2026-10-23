---
status: active
project: classes
type: reference
course: GP1
created: 2026-10-22
updated: 2026-10-22
---

# GP1 - Ship Game Devlog Checkpoint 02 Brief

Draft 10/22. The student-facing body of "GP1: Ship Game Devlog Checkpoint 02" (due today, Day 32). **FINAL as Nick's Google Doc 10/22: https://docs.google.com/document/d/1ebqM-3jIVCaUJACPLuRNMN9zlYn4JXi34st400sjgMA** - he built it from this draft, fixed the naming examples, intentionally dropped the Video 16 optional-credit line, and left Part 6's Question 1-4 slots blank as student answer lines (the actual questions live in the Classroom assignment text; the 4 keepers + 3 surplus below remain the vault record). Not mirrored further - the doc wins once it exists.

## Teacher notes (do not post)

- OBS instructional video: EdPuzzle media `68af7ef6583ac51a7cc699e5`, posted on Classroom by Nick; the doc references it, do not duplicate its steps here.
- Standing Devlog format, re-confirmed 10/22 against the SY26 brief ([[SY26 Q1 - GP1 & GP2 Intro to Unreal Videos]] era doc "GP1 & GP2 - Q1 Project Submission - Video Requirements", docs.google.com/document/d/121YvsfAXptljgqsM9h4kypxHtzXnd8QH6XiGAQNQ4ug): presence-based checklist, strategic items double as mastery evidence, **no narration** (SY26 required voice-over; SY27 moved it to Q2), 5-minute cap per recording, multiple recordings allowed, order doesn't matter, 3-4 reflection questions in the assignment.
- Part 0 prep requirement kept per Nick 10/22 but scoped: it applies to the items students created in the videos (ship, ring, player controller, Game Mode, input), not imported Fab assets.
- Checklist restructured 10/22 (Nick): every item is written to prove multiple learning targets at once - the play-through shot alone carries ship+Game Mode, movement, collision chain, UI, and the ring.
- Every student submits, even if they are not through all 15 videos. Students record what exists today.

---

## Copy for the doc

# Submitting Your Ship Game

Today your ship game gets submitted as a screen recording. You record your game doing everything on the checklist below, then submit the recording and answer the questions. If your game can't show every checklist item yet, submit what it can show - everyone submits, today.

## Part 1: Prep before you record

These are about the things YOU built in the videos. Imported Fab assets don't need renaming - leave those alone.

- The game runs without errors.
- Every file you created in the videos follows the TYPE_Name format: BP_Spaceship, BP_Ring, SM_Ring, M_Ring, BP_GameMode, the Player Controller, the Widget.
- All your files are in the proper folders.
- At least 5 rings in the game, with blocks and obstacles in the way to make it a challenge.
- Nothing extra left in the game: no test blocks, no spare ships, nothing you were experimenting with and abandoned.

## Part 2: Set up OBS

Watch this first: [OBS setup video](https://edpuzzle.com/media/68af7ef6583ac51a7cc699e5) - also on Classroom. It covers everything below in order.

1. Open OBS.
2. Add a Display Capture source so OBS sees your screen.
3. Set up the capture area so the recording shows only the Unreal editor.
4. Test it once: Start Recording, move the ship a second, Stop Recording, then watch the file (it saves to your Videos folder by default).

[SCREENSHOT: OBS with the source list open and Display Capture highlighted.]

[SCREENSHOT: OBS bottom bar, Start Recording circled.]

## Part 3: Recording rules

- Unreal fills the screen. It should be the only thing in the video.
- Each recording is at most 5 minutes.
- You can submit more than one recording to cover the whole checklist.
- The checklist items do not have to be shown in order.
- No narration needed today.

## Part 4: The checklist (what the video needs to show)

Every item earns its points just for showing up on screen. Notice how much one clip can prove - use that. Pause between items and let the viewer read the screen.

- [ ] **The full run.** Press play and play your game for a few moments: the ship flying forward, hitting a spinning ring, the ring disappearing, the score ticking up. This one clip proves the most - ring exists with its material and spin, the ship exists and moves, collisions work end to end, and the widget + Player Controller score chain is hooked up. (Videos 13, 14, 15)
- [ ] The spacebar impulse, the ship bouncing. (Proves your input wiring. Video 12)
- [ ] Your Event Graph(s), scrolling slowly so the nodes are readable. If you did Video 16, include the Add Points function visible in there too - no points off if you didn't. (Proves the Blueprint work behind everything above. Videos 12-15)
- [ ] Your folders: Blueprints, Materials, Meshes open in the Content Browser, your files visible and TYPE_Name named - BP_Spaceship, BP_Ring, SM_Ring, and the rest. (Proves organization and naming. Videos 07-11)
- [ ] Your customizations - whatever you changed that the videos didn't tell you to: label text, font, colors, collider size, obstacle layout. Name them as you show them.

## Part 5: Submit

1. Watch your recording back before you upload. If a section is unreadable or you skipped a checklist item, that's a 2-minute re-record, not a grade penalty.
2. Upload the recording to Classroom under **GP1: Ship Game Devlog Checkpoint 02**.
3. Answer the questions in the same assignment.

## Part 6: Questions

Answer these in the Classroom assignment with your recording.

1. What does your ship game do - what is the player trying to do, and how does the score tell them they did it?
2. Which customization did you pick on purpose, and why that one?
3. Which checklist item are you proudest to show, and why?
4. What would you add or change next if you had another week? One specific thing.

**Extra on offer, cut freely:**

5. What was the hardest thing to get working, and what fixed it?
6. If a friend pressed play on your game cold, what would the first ten seconds already show them?
7. What does the score ticking up prove about the chain: Overlap event, Player Controller, Widget?

## Connections

[[GP1 Day 32 - Devlog Checkpoint 02]] · [[GP1 - Blueprint Mini-Checkpoint Brief]]