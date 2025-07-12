import React, { useState } from 'react';
import './Core.css';

type Analysis = {
  conversionRate: number;
  summary: string;
};

function Core() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [energy, setEnergy] = useState(5);
  const [focus, setFocus] = useState(5);
  const [mood, setMood] = useState(5);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);

  const handleSubmit = () => {
    const cleanInput = input.trim();
    const cleanOutput = output.trim();
    const conversionRate = cleanInput && cleanOutput
      ? Math.floor((cleanOutput.length / (cleanInput.length + cleanOutput.length)) * 100)
      : 0;

    let summary = '';

    if (!cleanInput && !cleanOutput) {
      summary = `No reflection today — that's okay. Tomorrow's a fresh start. 🌱`;
    } else if (cleanInput && !cleanOutput) {
      summary = `You absorbed knowledge but didn't create today. Try applying it tomorrow. 🧠➡️⚡`;
    } else if (!cleanInput && cleanOutput) {
      summary = `Interesting — you created without much input. That's raw creativity. ✍️`;
    } else {
      summary = `Nice! You consumed and reflected. Keep the loop going. 🔄`;
    }

    // Extra: contextualise summary
    summary += ` (Energy: ${energy}/10, Focus: ${focus}/10, Mood: ${mood}/10)`;

    setAnalysis({ conversionRate, summary });
  };

  return (
    <div className="core-container">
      <div className="core-inner">
        <header className="core-header">
          <div className="logo">ZYNCO</div>
          <div className="date-streak">
            <span className="date">{new Date().toDateString()}</span>
            <span className="streak">🔥 Streak: 3 days</span>
          </div>
        </header>

        <main className="core-main">
          <div className="slider-section">
            <label>🔋 Energy Level: {energy}/10</label>
            <input type="range" min="1" max="10" value={energy} onChange={(e) => setEnergy(Number(e.target.value))} />

            <label>🎯 Focus Level: {focus}/10</label>
            <input type="range" min="1" max="10" value={focus} onChange={(e) => setFocus(Number(e.target.value))} />

            <label>🙂 Mood: {mood}/10</label>
            <input type="range" min="1" max="10" value={mood} onChange={(e) => setMood(Number(e.target.value))} />
          </div>

          <div className="input-block">
            <label>📥 What did you CONSUME today?</label>
            <textarea
              placeholder="e.g. Watched a video about deep work..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="output-block">
            <label>📤 What did you CREATE / APPLY / THINK?</label>
            <textarea
              placeholder="e.g. Wrote a blog about productivity..."
              value={output}
              onChange={(e) => setOutput(e.target.value)}
            />
          </div>

          <button className="submit-btn" onClick={handleSubmit}>
            ✨ Get Insight
          </button>

          {analysis && (
            <div className="analysis-box">
              <div className="conversion-bar">
                <div
                  className="conversion-fill"
                  style={{ width: `${analysis.conversionRate}%` }}
                ></div>
              </div>
              <p><strong>Conversion Rate:</strong> {analysis.conversionRate}%</p>
              <p><strong>AI Insight:</strong> {analysis.summary}</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Core;


