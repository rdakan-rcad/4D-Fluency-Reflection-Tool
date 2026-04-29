# Delegation & Diligence Discussion Tool — Question Reference

All prompts, questions, and helper text that participants see in the app, organized by phase and screen.

---

## Landing: Phase Selector

**Title:** Delegation & Diligence Discussion Tool
**Subtitle:** Building with AI: A Guided Planning Tool for Faculty

**Orientation:**
> Welcome! This workshop has two phases. Choose the one your facilitator has directed you to.

### Phase 1 card
- **Label:** Phase 1
- **Title:** Brainstorming & Planning
- **Description:** Start here. Define your idea, set quality standards, and plan your tool.

### Phase 2 card
- **Label:** Phase 2
- **Title:** Reflection & Next Steps
- **Description:** Return here after building your prototype to reflect on what you made.

---

# PHASE 1: BRAINSTORMING & PLANNING

## Welcome screen

**Title:** Phase 1: Brainstorming & Planning
**Subtitle:** Building with AI: A Guided Planning Tool for Faculty

**Orientation:**
> This tool will walk you through a series of questions to help you plan an AI-built teaching tool. Your responses will be shared with the workshop facilitator. Take your time — these questions are designed to make you think, not to be filled out quickly.

### Fields
- **Your name** *(required)* — placeholder: "Full name"
- **Your department or discipline** *(optional)* — placeholder: "e.g. Graphic Design, Liberal Arts"

---

## Step 1: Brainstorm

**Section:** Delegation — Brainstorm

**Description:**
> Before you touch a coding agent, you need clarity on what you're trying to accomplish. Start by listing as many obstacles, opportunities, or unmet needs in your teaching practice as you can think of. Don't filter yourself — just get your ideas down.

### Question
**Label:** What obstacles, opportunities, or unmet needs do you see in your teaching?

**Helper:**
> Think about what frustrates you, what takes too long, or what your students struggle with that a tool might help address. List at least 3 (up to 10).

- Each idea is a single text input with placeholder: "Describe an obstacle, opportunity, or need..."
- Minimum: 3 ideas. Maximum: 10 ideas.
- Add/remove rows with + and × buttons.

---

## Step 2: Assess Ideas

**Section:** Delegation — Assess Ideas

**Description:**
> Now let's think about each idea individually. For each one, consider who would benefit and whether something similar already exists.

For **each** brainstormed idea, the participant answers:

### Sub-question A
**Label:** Who benefits from solving this?

Radio options:
- Me (saves my time or effort)
- My students (new or better learning experience)
- Both
- My department or institution

### Sub-question B
**Label:** Is there an existing tool or feature that's close? What's wrong with it?

- Free text. Placeholder: "Too expensive, too clunky, missing a key function..."

---

## Step 3: Rank & Choose

**Section:** Delegation — Rank & Choose

**Description:**
> Now prioritize your ideas. Drag them into order from most promising to least. Then select the one you'd like to explore for the rest of this workshop.

### Ranking
**Label:** Drag your ideas into priority order

**Helper:**
> Your top-ranked idea should be #1. Grab the handle on the left to drag and reorder.

### Selection
**Label:** Which idea do you want to explore today?

**Helper:**
> Pick the one you're most excited about building.

### After selection
**Label:** What does success look like for this idea? How would you know the tool is working?

- Free text.

---

## Step 4: Discernment

**Section:** Delegation — Discernment

**Description:**
> Before you delegate work to a tool, you need to know what good work looks like. These questions help you articulate the quality standards that should guide any tool you build.

### Defining Quality
*"For the product or outcome your tool would help create:"*

**Q1. What does an excellent version look like?**

> Helper: Name 3–5 specific quality markers — not vague terms, but observable characteristics a professional would point to.

**Q2. What does a mediocre version look like?**

> Helper: What are the telltale signs of "good enough" work that doesn't reach excellence?

**Q3. What does failure look like?**

> Helper: What would make a professional in your field immediately dismiss the work?

### Evaluating Tools
*"Now think about a tool that generates or supports the creation of that work:"*

**Q4. If a tool generated or supported the creation of your product, what would you check first?**

**Q5. What aspects of quality in your field are hardest for AI to get right?**

> Helper: Where would human judgment matter most?

**Q6. How would you know if a tool was making your work worse?**

> Helper: Think about subtle risks: flattening your style, narrowing your range, or encouraging safe choices.

---

## Step 5: Tool Awareness

**Section:** Delegation — Tool Awareness

**Description:**
> Understanding what AI coding agents can and can't do helps you scope your project realistically.

### Q1. Does your concept require student data to function?
- Yes
- No
- Not sure

**Inline note (shown if "Yes"):**
> For today's workshop, plan to use sample or synthetic data. Flag the real data requirements for later institutional review.

### Q2. Does your concept require connection to institutional systems like your LMS?
- Yes
- No
- Not sure

**Inline note (shown if "Yes"):**
> LMS integration adds significant complexity. For today, consider building the core logic as a standalone tool and addressing integration later.

### Q3. How technically complex does this feel?
- Simple — a form, converter, or template generator
- Moderate — interactive with some logic and conditions
- Complex — multiple features, AI-powered responses, or dynamic content
- Not sure

---

## Step 6: Task Delegation

**Section:** Delegation — Task Delegation

**Description:**
> How will AI be involved in what you're building?

### Mode selection
**Label:** Which mode of AI use best describes what you're imagining?

#### Card A — Automation
> AI performs a defined task. I know what I want; the tool executes it.
>
> *Examples: A script that reformats your syllabus. A tool that converts notes into quiz questions.*

#### Card B — Augmentation
> AI and I collaborate. The tool helps me think, draft, or create alongside me.
>
> *Examples: A rubric generator you refine iteratively. An interactive case study builder.*

#### Card C — Agency
> AI acts independently for others. The tool interacts with students or colleagues on my behalf.
>
> *Examples: An AI tutor for your course material. A feedback bot that reviews student drafts.*

**Inline note (shown if Agency selected):**
> Agency projects are powerful but substantially harder to get right. If this is your first time building with AI tools, consider starting with Automation or Augmentation and working toward Agency.

### Follow-up questions (appear after a mode is selected)

**Why is [mode] the right fit?**

Helper text varies by mode:
- **Automation:** What makes this task well-defined enough for AI to handle on its own? What are the clear inputs and outputs?
- **Augmentation:** What parts need your judgment or creativity, and where would AI be most helpful as a collaborator?
- **Agency:** What decisions would the AI make on its own? Why can't a human be in the loop each time?

**How do you imagine it working in practice?**

> Helper: Walk through the experience: what does the user do, what does the tool do, and where does AI come in?

---

## Step 7: Creation Diligence

**Section:** Diligence — Creation Diligence

**Description:**
> Building tools that other people will use comes with responsibility. These questions help you think through what could go wrong and what safeguards you need.

### Q1. What data would this tool need to work?

> Helper: Think about inputs (what users type or upload), stored data (what the tool remembers), and external data (what it pulls from other sources).

### Q2. Are there privacy concerns with that data?
- Yes
- No
- Not sure

**Conditional follow-up (shown if "Yes" or "Not sure"):**
> Briefly describe the concern.

### Q3. Who would you need to consult before deploying this at your institution?

> Helper: Think about IT, administration, department heads, IRB, legal, or students themselves.

---

## Step 8: Transparency Diligence

**Section:** Diligence — Transparency Diligence

**Description:**
> If people are going to use your tool, they deserve to understand what it is and how it works.

### Q1. If a user asked "How does this tool work?" — what would you tell them?

> Helper: Try to answer in plain language. If you can't explain it simply, that's worth noting.

### Q2. What should users know about this tool's limitations?

> Helper: What can't it do? Where might it be wrong? What should they double-check?

---

## Step 9: Deployment Diligence

**Section:** Diligence — Deployment Diligence

**Description:**
> Before you put something in front of users, think about testing, failure modes, and ongoing responsibility.

### Q1. What's the worst thing that could happen if this tool gives bad output?

> Helper: This isn't meant to scare you — it's meant to help you think about where human oversight matters most.

### Q2. How would you test whether this tool is working correctly?

> Helper: What would you check? Who would you ask to try it? What inputs would stress-test it?

---

## Step 10: Summary

**Section:** Your Tool Concept

**Description:**
> Pull your thinking together into one clear statement.

### Question
**Label:** In one sentence, describe your tool concept.

- Free text, short.

After this, the participant sees a full review of all their answers and a Submit Responses button.

---

## Confirmation screen

**Message:** Your responses have been submitted. Thank you, [Name].
**Subtext:** You can use the summary below to share your thinking with your group.

Buttons: Download My Responses (CSV) · Start Over

---

# PHASE 2: REFLECTION & NEXT STEPS

## Welcome screen

**Title:** Phase 2: Reflection & Next Steps
**Subtitle:** Looking back at what you built

**Orientation:**
> Now that you've spent time building a prototype, let's reflect on the experience. These questions will help you think critically about what you made, what worked, and what comes next.

### Fields
- **Your name** *(required)* — placeholder: "Full name"
- **Your email** *(required)* — placeholder: "you@example.com"
- **Your department or discipline** *(optional)* — placeholder: "e.g. Graphic Design, Liberal Arts"

---

## Step 1: Prototype Assessment

**Section:** Prototype Assessment

**Description:**
> Let's start by looking at what you actually built.

### Q1. Describe what you built today in 1–2 sentences.

### Q2. On a scale of 1–5, how close is your prototype to what you originally imagined?
- 1 — Very far off
- 2 — Somewhat far off
- 3 — About halfway there
- 4 — Pretty close
- 5 — Exactly what I envisioned

### Q3. What's the biggest gap between what you planned and what you built?

---

## Step 2: Quality & Discernment

**Section:** Quality & Discernment

**Description:**
> Apply your professional standards to what the tool produced.

### Q1. Look at your prototype through the lens of your quality standards. Does the output meet your definition of "excellent," "mediocre," or "failure"?

### Q2. What surprised you about what AI could or couldn't do well?

### Q3. Did the tool make any choices that a professional in your field would catch as wrong or off?

---

## Step 3: Delegation Revisited

**Section:** Delegation Revisited

**Description:**
> Revisit your earlier thinking about how AI should be involved.

### Q1. Now that you've built something, would you change your delegation mode (Automation / Augmentation / Agency)? Why or why not?

### Q2. What tasks turned out to be harder to delegate to AI than you expected?

### Q3. What tasks turned out to be easier than you expected?

---

## Step 4: Diligence Revisited

**Section:** Diligence Revisited

**Description:**
> Think about what you learned about responsibility and risk.

### Q1. What new privacy, ethical, or safety concerns came up during building that you didn't anticipate?

### Q2. If you were to deploy this tool tomorrow, what's the one thing you'd want to fix or test first?

### Q3. Who else should see or review this before it's used with real users?

---

## Step 5: Next Steps

**Section:** Next Steps

**Description:**
> Look ahead at what comes after the workshop.

### Q1. What's the single most important next step for this tool?

### Q2. What help or resources do you need to take that next step?

### Q3. Would you recommend this workshop approach to a colleague? What would you change about it?

---

## Summary screen

**Section:** Your Reflection Summary

**Description:**
> Review your responses before submitting.

The participant sees all their Phase 2 answers grouped by section, then submits.

---

## Confirmation screen

**Message:** Your responses have been submitted. Thank you, [Name].
**Subtext:** You can use the summary below to share your thinking with your group.

Buttons: Download My Responses (CSV) · Start Over

---

*End of question reference.*
