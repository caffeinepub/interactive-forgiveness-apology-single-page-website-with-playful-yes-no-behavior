# Specification

## Summary
**Goal:** Update the forgiven-state (post-“Yes”) message text to the user’s exact provided sentence, rendered verbatim with no translation or rewording.

**Planned changes:**
- In `frontend/src/App.tsx`, replace the forgiven-state sentence “I never doubted you, not even for a moment. 💕” with the exact user-provided text: “sorry mujhe maaf kardo, mere bolne se aapko shak lagta hai but mai nahi karta hun shak aapse , sorry kiki aaj se try karunga sahi se baat karna I'm really sorry aapko asa feel karane keliye”.
- Ensure the forgiven-state message renders this text exactly as written (no localization/formatting changes that alter punctuation, casing, or spacing).

**User-visible outcome:** After clicking “Yes”, the forgiveness/thank-you screen shows the user’s exact sentence verbatim instead of the previous English message.
