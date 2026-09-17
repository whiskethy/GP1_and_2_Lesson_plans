---
course: GP2
quarter: Q1
unit: 3
type: planning
status: active
---

# GP2 Unit 3: Pointers, References & the Object Model

## Unit Overview

| | |
|---|---|
| **Course** | Game Programming 2 |
| **School Year** | SY27 |
| **Teacher** | Gutierrez |
| **Grades** | 11/12 |
| **Unit Number** | 3 |
| **Unit Title** | Pointers, References & the Object Model |
| **Meetings** | 7 (~W05–W06, days TBD) |

### Driving Question

What does it mean for a pointer to "point" — and why does Unreal wrap every object reference in a smart pointer?

### Unit Narrative

The "hardest concept" unit. Students learn plain-C++ pointers and references, then see how Unreal wraps them in TObjectPtr and UPROPERTY. The UObject base class and the reflection/object model explain why the generated code in Unit 2 exists. AActor and components connect to their GP1 Blueprint knowledge. Garbage collection — flagged as the single hardest concept for Blueprint-only students — gets a full day with a worked example and guided practice tracing object lifetime. The unit closes with a Code Read trace of PlayerBall.h: the first whole-file Code Read and the skill that will carry the rest of the course.

## Unit At A Glance

| | |
|---|---|
| **Performance Task** | A Code Read trace of PlayerBall.h |
| **Product** | A written structured trace of PlayerBall.h identifying purpose, inputs/outputs, control flow, and what the code does not tell you |
| **Audience** | Themselves and the class |

## Desired Results

### Priority Standards

| Framework | Standards |
|---|---|
| CSTA 3A | 3A-CS-01, 3A-CS-02, 3A-AP-16, 3A-AP-20, 3B-AP-20 |
| ISBE 9-10 | 9-10.CS.01, 9-10.CS.02, 9-10.AP.16, 9-10.AP.20 |
| ACT Math | A 301, A 401 |
| ACT Reading | CLR 401, CLR 402, TST 403, TST 404, IDT 403, REL 403 |

### Enduring Understandings

1. A pointer stores an address, not a value. A reference is an alias. Unreal's TObjectPtr wraps a raw pointer so the engine can track and manage the object's lifetime.
2. UObject is the base of everything Unreal manages. The reflection system (UCLASS, UPROPERTY, UFUNCTION) is what makes Blueprint and garbage collection possible — the macros are not decoration, they are registration.
3. Garbage collection is not magic. UPROPERTY is what keeps an object alive. Remove UPROPERTY and the engine may destroy the object under you. This is the concept that separates "I can follow a tutorial" from "I can read code."

### Learning Targets

| LT | Learning Target | Standards | Chunk |
|---|---|---|---|
| LT3-1 | Explain the difference between a pointer and a reference in plain C++, and trace pointer usage in a short example. | CSTA 3A-CS-01, ACT CLR 401, A 301 | 1 |
| LT3-2 | Explain why Unreal wraps raw pointers in TObjectPtr and use TObjectPtr in a class declaration. | CSTA 3A-AP-16, ACT CLR 402, A 401 | 2 |
| LT3-3 | Describe the UObject base class, the reflection system, and how UCLASS/UPROPERTY/UFUNCTION register objects with the engine. | CSTA 3A-CS-02, ACT TST 404, IDT 403 | 3 |
| LT3-4 | Explain the AActor/component relationship and how composition replaces deep inheritance hierarchies in Unreal. | CSTA 3A-AP-20, ACT TST 403 | 4 |
| LT3-5 | Trace object lifetime through garbage collection and explain why UPROPERTY keeps objects alive. | CSTA 3B-AP-20, ACT REL 403, IDT 403 | 5 |
| LT3-6 | Integrate pointers, TObjectPtr, and GC understanding in guided and independent practice; meet 80% checkpoint. | CSTA 3A-AP-16, 3A-AP-20, ACT CLR 401, REL 403 | 6 |
| LT3-7 | Trace PlayerBall.h in a structured Code Read: identify purpose, inputs/outputs, control flow, calls, callers, and what the code does not tell you. | CSTA 3A-AP-16, ACT CLR 401, CLR 402, TST 403, TST 404 | 7 |

## Assessment Plan

### Unit Assessments

| Assessment | Type | Day |
|---|---|---|
| Code Read: PlayerBall.h trace | Summative (checkpoint) | ~Chunk 7 |

### Learning Checkpoints

| Checkpoint | Type | Chunk |
|---|---|---|
| Pointer vs. reference quiz | Formative (written) | 1 |
| TObjectPtr declaration exercise | Formative (practical) | 2 |
| Object model diagram annotation | Formative (written) | 3 |
| GC lifetime trace exercise | Formative (written) | 5 |
| 80% practice checkpoint | Formative (practical) | 6 |

### Exit Tickets by Learning Target

| ET | Question | Target |
|---|---|---|
| ET3-1 | What does a pointer store? What does a reference store? Draw memory after `int x = 5; int* p = &x; int& r = x;` | LT3-1 |
| ET3-2 | Why does Unreal use TObjectPtr instead of a raw pointer? What happens if you use a raw pointer to hold a UObject? | LT3-2 |
| ET3-3 | What does the reflection system do? What would happen if you removed UCLASS from a class that Blueprint uses? | LT3-3 |
| ET3-4 | What is the difference between an Actor and a Component? Why does Unreal favor composition over inheritance for Actor functionality? | LT3-4 |
| ET3-5 | Trace this object's lifetime: when does GC collect it? What keeps it alive, and what would happen if you removed UPROPERTY from the pointer? | LT3-5 |
| ET3-6 | Complete the guided and independent practice exercises. Meet the 80% checkpoint on pointers + TObjectPtr + GC. | LT3-6 |
| ET3-7 | Submit a structured Code Read trace of PlayerBall.h: purpose, inputs/outputs, control flow, calls, callers, what it does not tell you. | LT3-7 |

## Lesson Schedule

| Day | Date | Type | Min | Unit | Chunk | Lesson | Learning Target |
|---|---|---|---|---|---|---|---|
| TBD | TBD | A | 48 | 3 | 1 | Pointers vs. References | LT3-1 |
| TBD | TBD | C | 72 | 3 | 2 | TObjectPtr | LT3-2 |
| TBD | TBD | A | 48 | 3 | 3 | UObject Base Class & Reflection/Object Model | LT3-3 |
| TBD | TBD | A | 48 | 3 | 4 | AActor & Components | LT3-4 |
| TBD | TBD | C | 72 | 3 | 5 | Garbage Collection & UPROPERTY | LT3-5 |
| TBD | TBD | A | 48 | 3 | 6 | Practice + 80% Checkpoint | LT3-6 |
| TBD | TBD | C | 72 | 3 | 7 | **Code Read: PlayerBall.h Trace** | LT3-7 |

## Written Pathway

- **Code Read** on PlayerBall.h → Chunk 7 (the Unit 3 deliverable)

## Materials

| Item | For | Status | Link |
|---|---|---|---|
| Epic Objects in Unreal Engine | Chunks 2, 3, 5 | ✅ | [Epic Docs](https://dev.epicgames.com/documentation/en-us/unreal-engine/objects-in-unreal-engine) |
| UProperties Reference | Chunk 5 | ✅ | [Epic Docs](https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-uproperties) |
| PlayerBall.h reference code | Chunk 7 | ✅ | See Scope & Sequence |
| Unit 3 slide deck (pointers, references, TObjectPtr, UObject, AActor, GC) | Chunks 1–6 | 🚧 | Not built |
| Pointer/reference bridge lesson (physical analogy) | Chunk 1 | 🚧 | Not built |
| GC lifetime trace worksheet | Chunk 5 | 🚧 | Not built |
| Code Read graphic organizer | Chunk 7 | 🚧 | Not built |
| Unit 3 checkpoint rubric | Chunk 7 | 🚧 | Not built |

## Connections

← [GP2 Unit 2 Planning](GP2 Unit 2 Planning.md) | [GP2 Q1 Calendar](GP2 Q1 Calendar.md) | [Scope & Sequence](Scope & Sequence - Game Programming 2 (GP2).md) →