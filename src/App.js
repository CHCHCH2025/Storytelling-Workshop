import React, { useState } from "react";

const steps = [
  {
    title: "Industry Trends & Developments",
    prompt:
      "What is happening in the industry you're targeting? Describe relevant trends, recent shifts, or emerging technologies.",
    tip: "Focus on specific and recent developments. Aim for 2–4 concise sentences.\n\n📊 Slide Suggestion: Use 1 slide to visualize or summarize key industry changes (charts, quotes, headlines).",
    field: "industry"
  },
  {
    title: "Challenge or Opportunity",
    prompt:
      "Based on the trend, what is a key challenge, threat, or opportunity your company might face?",
    tip: "This could be a pain point, a market gap, or a promising shift. Be specific.\n\n📊 Slide Suggestion: Use 1 slide to clearly articulate the challenge or opportunity. You may include visuals or bullet points to show urgency or potential.",
    field: "challenge"
  },
  {
    title: "Your Role, Strategy & Audience",
    prompt:
      "How can you act on this, considering your expertise and your company’s strategy? Who is your audience and why is your idea relevant to them?",
    tip: "Align your action with strategic goals and clearly define your audience.\n\n📊 Slide Suggestion: Use 1 slide for internal alignment (your strategic fit), and 1 slide to introduce and justify your target audience.",
    field: "strategy"
  },
  {
    title: "Decision Tree & Story Framing",
    prompt:
      "Summarize your key observation, state your hypothesis, and define 3–4 actions (What, Why, How). Also write a punchy opening and a closing ask for your audience.",
    tip: `Use the What/Why/How logic for each action. Start with a 15–20 sec hook and end with a specific ask.\n\n📊 Slide Suggestions:\n- 1 slide for top-layer hypothesis and expected outcome\n- For each action, you may use 1 slide per element (WHAT, WHY, HOW), or combine them if simple.\n- 1 slide for opening hook (your first 20 sec snapshot)\n- 1 slide for final ask or conclusion`,
    field: "tree"
  }
];

export default function App() {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState({});

  const handleChange = (e) => {
    setResponses({ ...responses, [steps[step].field]: e.target.value });
  };

  const next = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const back = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}>
      <div style={{ border: "1px solid #ddd", padding: "2rem", borderRadius: "8px", background: "#fff" }}>
        <h2>Step {step + 1}: {steps[step].title}</h2>
        <p><strong>Prompt:</strong> {steps[step].prompt}</p>
        <p style={{ fontStyle: "italic", fontSize: "0.9em", color: "#666" }}>
          Tip: {steps[step].tip}
        </p>
        <textarea
          style={{ width: "100%", minHeight: "150px", marginTop: "1rem" }}
          placeholder="Write your response here..."
          value={responses[steps[step].field] || ""}
          onChange={handleChange}
        />
        <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between" }}>
          <button onClick={back} disabled={step === 0}>Back</button>
          {step < steps.length - 1 ? (
            <button onClick={next}>Next</button>
          ) : (
            <button onClick={() => alert('Story complete! Export coming soon.')}>Finish</button>
          )}
        </div>
      </div>

      {step === steps.length - 1 && (
        <div style={{ border: "1px solid #ddd", marginTop: "2rem", padding: "2rem", borderRadius: "8px", background: "#f9f9f9" }}>
          <h3>📝 Final Pitch Preview</h3>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {Object.values(responses).join("\\n\\n")}
          </pre>
        </div>
      )}
    </div>
  );
}
