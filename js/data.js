// Site-specific editorial choices, not measured performance scores.
export const priorities = {
  clarity: {
    label: "01 / CLARITY FIRST",
    title: "Make the next step obvious.",
    description:
      "Use clear labels, semantic HTML, and one meaningful action at a time.",
    tradeoff:
      "Fewer options on screen can mean an extra step for advanced tasks.",
  },
  speed: {
    label: "02 / SPEED FIRST",
    title: "Spend bytes where they matter.",
    description:
      "Keep assets local and small. Load native modules and let HTML do the heavy lifting.",
    tradeoff:
      "A lighter page may leave out rich media that would help tell the story.",
  },
  resilience: {
    label: "03 / RESILIENCE FIRST",
    title: "Plan for the imperfect visit.",
    description:
      "Keep core content readable without JavaScript, and make every control keyboard-accessible.",
    tradeoff:
      "Progressive enhancement takes extra planning and testing across different conditions.",
  },
};
export function getMix(value) {
  if (value < 34)
    return {
      title: "A focused reading room",
      description:
        "Start with text, native links, and minimal assets. Make the essential story load first.",
      caution: "Watch for: stripping away useful visual explanations.",
    };
  if (value > 66)
    return {
      title: "An expressive visual journal",
      description:
        "Use purposeful imagery and interactive storytelling, with accessible alternatives and a clear loading budget.",
      caution: "Watch for: heavier downloads and distracting motion.",
    };
  return {
    title: "A balanced notebook",
    description:
      "Use a strong typographic layout, a few purposeful graphics, and small interactive details.",
    caution: "Watch for: adding features simply because there is space.",
  };
}
