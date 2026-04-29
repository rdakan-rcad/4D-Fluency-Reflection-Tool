# Delegation & Diligence Discussion Tool — Design Document

**Version:** 1.0
**Date:** 2026-04-29
**Owner:** Ringling College of Art + Design
**Status:** Active development

---

## 1. Purpose

A single-page web application that helps faculty plan, build, and reflect on AI-built teaching tools. It walks participants through structured questions designed around the **4D framework** (Delegation, Diligence, Discernment, and a synthesis step) during a hands-on workshop where they will build prototypes with AI coding agents.

The tool's job is not to collect data — it's to **slow faculty down and make them think**. Every question is designed so that you can't skim past it. The submitted responses are a useful artifact for the facilitator, but the cognitive work happens during the filling out, not after.

### 1.1 Workshop context

The workshop has two phases separated by 1–2 hours of hands-on prototyping:

- **Phase 1: Brainstorming & Planning** — done before participants touch a coding agent. Helps them clarify what they want to build, articulate quality standards, and think through risks.
- **Phase 2: Reflection & Next Steps** — done after they have a working prototype. Forces them to compare what they built against what they planned and articulate their next steps.

Phases share no data. Faculty might attend Phase 1 and Phase 2 in different groups, on different days, or skip one altogether.

---

## 2. User flows

### 2.1 Landing: Phase Selector

Single screen with two cards. No data collection. Faculty pick which phase they're doing.

```
[Phase 1: Brainstorming & Planning]   →   Phase 1 Welcome
[Phase 2: Reflection & Next Steps]    →   Phase 2 Welcome
```

### 2.2 Phase 1 flow (10 steps)

```
Welcome (name + dept)
  ↓
1. Brainstorm        — list 3–10 obstacles/opportunities
2. Assess Ideas      — for each idea: who benefits + existing tools
3. Rank & Choose     — drag to prioritize, pick one, define success
4. Discernment       — quality markers + AI-evaluation questions
5. Tool Awareness    — student data, LMS, complexity
6. Task Delegation   — Automation/Augmentation/Agency + why + how
7. Creation Diligence  — data, privacy, who to consult
8. Transparency Diligence — explainability, limitations
9. Deployment Diligence   — worst case, testing plan
10. Summary & Submit — one-sentence concept + review + submit
  ↓
Confirmation (CSV download, start over)
```

The "YOUR FOCUS" banner showing the chosen idea persists on screens 4–10 so faculty don't lose track of what they're working on.

### 2.3 Phase 2 flow (5 steps)

```
Welcome (name + email + dept)
  ↓
1. Prototype Assessment   — what they built + closeness rating + biggest gap
2. Quality & Discernment  — quality assessment + surprises + professional errors
3. Delegation Revisited   — change mode? + harder/easier than expected
4. Diligence Revisited    — new concerns + fix first + who to review
5. Next Steps             — most important step + resources needed + workshop feedback
  ↓
Summary & Submit
  ↓
Confirmation (CSV download, start over)
```

---

## 3. Visual design system

### 3.1 Brand palette

| Color | Hex | Usage |
|-------|-----|-------|
| Ringling Gold | `#FFD100` | Primary accent, header bar, active step indicators, primary buttons |
| Black | `#000000` | Primary text, header background |
| White | `#FFFFFF` | Page background, card backgrounds |
| Dark Gray | `#333333` | Body text, helper text |
| Light Gray | `#F5F5F5` | Section backgrounds, inactive elements |
| Medium Gray | `#E0E0E0` | Borders, dividers |
| Delegation Blue | `#2B6CB0` | Delegation section accents (steps 1–6 of Phase 1) |
| Diligence Red | `#C53030` | Diligence section accents (steps 7–9 of Phase 1) |

### 3.2 Typography

- **Stack:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Body:** 16px regular
- **Section titles:** 24px bold
- **Helper text:** 14px italic, gray
- **Step labels:** 9–11px, all caps

### 3.3 Layout

- Maximum content width: **720px**, centered
- Card-based sections with subtle shadows (`0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)`)
- 40px padding on cards (24px on mobile)
- Generous whitespace — feels deliberative, not form-like

### 3.4 Progress indicator

Phase 1 has a 10-step horizontal indicator at the top of question screens. Each step shows:
- A numbered circle (or checkmark when completed)
- A short text label (1–2 lines)
- A colored accent bar below (blue for Delegation, red for Diligence, gold for Synthesis)

Completed steps are clickable for back-navigation. The mobile breakpoint collapses this to "Step X of N: Label".

Phase 2 uses the same design with 5 steps.

---

## 4. Information architecture

### 4.1 The 4D framework, mapped to screens

| Framework dimension | Phase 1 screens | Phase 2 screens |
|---|---|---|
| **Delegation** (what to give to AI, what to keep) | 1, 2, 3, 5, 6 | 3 |
| **Diligence** (responsibility for outcomes) | 7, 8, 9 | 4 |
| **Discernment** (knowing good work when you see it) | 4 | 2 |
| **Synthesis** | 10 | 5 |

### 4.2 Question design principles

1. **No skimmable questions.** Every prompt is something you can't answer with a one-word response.
2. **Helpers narrow the prompt.** Italic helper text under labels gives examples or framing.
3. **Conditional surfacing.** Follow-up questions appear only when relevant (e.g. "describe the privacy concern" only shows when the participant says "Yes" or "Not sure").
4. **Forced reflection through repetition.** Phase 2 deliberately echoes Phase 1's structure (delegation, diligence) so participants notice what changed in their thinking.
5. **Brainstorm before commit.** Faculty must list at least 3 ideas before they're allowed to narrow down — this prevents premature anchoring.

---

## 5. Technical architecture

### 5.1 Stack

- **Frontend:** Single HTML file with embedded CSS and JavaScript. Zero framework dependencies. Works in any modern browser.
- **Backend:** Google Apps Script web app (`doPost`) that appends rows to a Google Sheet.
- **Storage:** Google Sheets (one tab per phase) + browser localStorage (auto-save during the session).
- **Hosting:** Static file hosting (Netlify recommended). Drag-and-drop deploy.

### 5.2 File structure

```
4D Facilitator/
├── index.html                # Complete app (HTML + CSS + JS)
├── google-apps-script.js     # Apps Script backend
├── README.md                 # Setup instructions
└── DESIGN.md                 # This document
```

### 5.3 State management

Two completely independent state objects, each backed by its own localStorage key:

| Phase | localStorage key | State variable |
|---|---|---|
| Phase 1 | `dd_tool_responses` | `responses` |
| Phase 2 | `dd_tool_phase2` | `p2Responses` |

This separation guarantees Phase 2 never carries Phase 1 data — important because the same participant might use a different Phase 2 group, or different participants might share a device.

#### Phase 1 state shape

```javascript
{
  name: string,
  department: string,
  ideas: [
    { text: string, who_benefits: string, existing_tool: string },
    // ... up to 10
  ],
  ranked_order: number[],         // indices into ideas[], reorderable
  selected_idea_index: number,    // which idea they're exploring
  q3: string,                     // success criteria
  d1..d6: string,                 // discernment questions
  q5, q6, q7: string,             // tool awareness radios
  q8: string,                     // AI mode (Automation/Augmentation/Agency)
  q8_why, q8_how: string,         // mode follow-ups
  q9..q15: string,                // diligence text
  q10: string, q10_detail: string, // privacy radio + conditional detail
  q16: string,                    // tool concept
  timestamp: ISO string,
}
```

#### Phase 2 state shape

```javascript
{
  name: string,
  email: string,
  department: string,
  p2q1..p2q15: string,
  timestamp: ISO string,
}
```

### 5.4 Auto-save

Every text input is debounced (500ms) and saved on every change. Radio buttons save on `change` event. Faculty can refresh, navigate away, or close the tab without losing data. They can also resume mid-session.

### 5.5 Navigation

A single `goToScreen(target)` function (Phase 1) and `p2GoToScreen(target)` (Phase 2) handle all transitions. Both:

1. Save current fields
2. Hide all `.screen` elements
3. Show the target screen
4. Update the progress indicator
5. Build dynamic content (assess cards, rank list, summary) on-demand

Completed steps in the progress bar are clickable for back-navigation. The "Back" button on each screen does the same.

### 5.6 Drag-and-drop ranking

The Rank & Choose screen uses HTML5 Drag and Drop API for desktop, with a parallel touch event handler for tablets. A floating ghost element follows the finger on touch. Both pathways call the same `reorderRank(fromPos, toPos)` function.

---

## 6. Data flow

### 6.1 Submission

```
Participant clicks Submit
  ↓
saveCurrentFields() → localStorage
  ↓
Build flat payload (with phase: 1 or phase: 2)
  ↓
fetch(GOOGLE_SCRIPT_URL, { method: 'POST', mode: 'no-cors', ... })
  ↓
Google Apps Script doPost(e)
  ↓
Routes by phase to "Phase 1 Responses" or "Phase 2 Responses" tab
  ↓
Auto-creates headers if first row, then appendRow()
```

### 6.2 Failure handling

If the POST fails (no internet, misconfigured URL, CORS issue), a non-blocking warning banner appears: *"Your responses couldn't be synced. Don't worry — you can download them as a CSV."*

The CSV download button is **always** available on the confirmation screen, not just on failure. This is the primary fallback and an offline-first guarantee.

### 6.3 CSV format

Both phases produce a readable two-column CSV (Question, Response) with:
- Header rows for participant info (Name, Email if Phase 2, Department, Timestamp)
- Section dividers (`--- SECTION NAME ---`)
- All questions and their answers (blank if unanswered)

Filename format: `DD_Tool_[Name].csv` (Phase 1) or `DD_Tool_Phase2_[Name].csv` (Phase 2).

---

## 7. Google Sheets integration

### 7.1 Sheet structure

A single Google Sheet with two tabs:

| Tab name | Created when | Columns |
|---|---|---|
| Phase 1 Responses | First Phase 1 submission | Timestamp, Name, Department, All Brainstormed Ideas, Selected Idea, Who Benefits, Existing Tool/Gap, Success Criteria, Excellent/Mediocre/Failure Versions, What to Check First, Hardest for AI, Signs Tool Makes Work Worse, Student Data Required, LMS Integration, Technical Complexity, AI Mode, Why/How This Mode, Data Needed, Privacy Concerns/Detail, Who to Consult, How It Works, Limitations, Worst Case, Testing Plan, Tool Concept |
| Phase 2 Responses | First Phase 2 submission | Timestamp, Name, Email, Department, What You Built, Closeness to Vision, Biggest Gap, Quality Assessment, AI Surprises, Professional Errors, Change Delegation Mode?, Harder/Easier Than Expected, New Concerns, Fix or Test First, Who Should Review, Most Important Next Step, Help & Resources Needed, Workshop Recommendation |

### 7.2 Apps Script routing

```javascript
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  if (data.phase === 2) {
    handlePhase2(ss, data);  // → Phase 2 Responses tab
  } else {
    handlePhase1(ss, data);  // → Phase 1 Responses tab (default)
  }
}
```

The `phase: 2` field is added by the Phase 2 submit handler in the frontend. Phase 1 submissions don't include a `phase` field, so they default to Phase 1 — preserving backwards compatibility.

---

## 8. Accessibility

- All form inputs have associated `<label>` elements
- Tab navigation works through every interactive element
- Color is never the only signal — checkmarks, text labels, and structural changes all reinforce state
- Focus states visible on buttons, cards, and form fields (3px gold outline)
- Sufficient contrast on all text (WCAG AA minimum)
- ARIA roles on the AI mode card group (`role="radio"`, `aria-checked`)
- Drag handles have `aria-label`s; up/down semantic still possible via keyboard

---

## 9. Responsive behavior

| Breakpoint | Layout |
|---|---|
| Desktop / laptop (primary) | Full 720px layout, horizontal progress bar, side-by-side button rows |
| Tablet (≥600px) | Same as desktop, just narrower |
| Phone (<600px) | Card padding reduces to 24px, progress bar collapses to "Step X of N" text, button rows stack vertically |

Phones aren't the primary target — workshop participants use laptops or tablets — but the tool degrades gracefully.

---

## 10. Configuration

A single constant at the top of the JavaScript controls the Google Sheets endpoint:

```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_DEPLOYED_SCRIPT_URL_HERE';
```

If left as the placeholder, the app skips the network call entirely (no errors, no warnings) and faculty can still download CSVs locally. This makes the tool fully usable offline or in test mode.

---

## 11. Constants & tunable values

| Value | Location | Default |
|---|---|---|
| Maximum brainstormed ideas | `MAX_IDEAS` | 10 |
| Minimum required ideas | inline check in `updateIdeaCounter` | 3 |
| Auto-save debounce | `debounce(fn, ms)` | 500ms |
| Phase 1 step count | `STEPS.length` | 10 |
| Phase 2 step count | `P2_STEPS.length` | 5 |

---

## 12. Future considerations

The current architecture deliberately stays simple — single HTML file, one Google Sheet, no auth. This keeps the deployment story trivial for a workshop facilitator who isn't a developer.

If usage grows beyond a single workshop, plausible next steps:

1. **Authentication** — replace anonymous submissions with Google Sign-In so faculty can return to edit their own responses across sessions.
2. **Cross-phase linking** — allow Phase 2 to optionally pull a participant's Phase 1 data by matching on email, so the reflection can show "you originally said X, now what?"
3. **Facilitator dashboard** — a separate view that aggregates responses across a cohort to surface patterns.
4. **Real database** — migrate from Sheets to Firestore if response volume exceeds Sheets' practical limits (~5M cells) or if structured queries become useful.

These are **not** in scope for v1. The tool is intentionally a workshop instrument, not a product.

---

## 13. Decisions log

| Decision | Why |
|---|---|
| Single HTML file, no framework | Workshop facilitators must be able to host it without a build step. Drag-and-drop to Netlify. |
| Google Sheets backend (not a real DB) | Faculty already trust Google. Sheets is auditable, exportable, and free. |
| Phase 1 and Phase 2 don't share data | Workshop logistics: people might switch groups, attend different days, or skip a phase. Mixing data would be misleading. |
| Minimum 3 brainstormed ideas | Forces divergent thinking before commitment. One idea is anchoring; three is brainstorming. |
| Drag-and-drop, not arrow buttons, for ranking | Faster, more tactile, expected behavior for ordering. |
| "YOUR FOCUS" banner persists from screen 4 onward | Faculty get deep into diligence questions and forget which idea they're reasoning about. |
| Email collected only in Phase 2 | Phase 1 doesn't need it; Phase 2 might require follow-up about deployment. |
| CSV download is always available, not just on submission failure | Some faculty want a personal record they can show their group regardless of whether the sync worked. |

---

*End of design document.*
