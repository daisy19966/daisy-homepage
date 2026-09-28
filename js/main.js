import { priorities, getMix } from "./data.js";

// Original engineering-desk interaction: render a priority and its tradeoff.
const desk = document.querySelector(".decision-card");
if (desk) {
  const buttons = desk.querySelectorAll(".priority");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const choice = priorities[button.dataset.priority];
      if (!choice) return;
      buttons.forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button))
      );
      desk.querySelector(".result-label").textContent = choice.label;
      desk.querySelector(".result-title").textContent = choice.title;
      desk.querySelector(".result-description").textContent =
        choice.description;
      desk.querySelector(".result-tradeoff").textContent = choice.tradeoff;
    });
  });
}

// Keep all project content in HTML so it remains accessible without JavaScript.
const filters = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll(".project-row");
filters.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    let count = 0;
    projects.forEach((project) => {
      const visible =
        category === "all" || project.dataset.category === category;
      project.hidden = !visible;
      if (visible) count += 1;
    });
    filters.forEach((item) =>
      item.setAttribute("aria-pressed", String(item === button))
    );
    document.querySelector(".result-count").textContent =
      `${count} project${count === 1 ? "" : "s"} shown`;
  });
});

// AI-generated mixer: qualitative alternatives with explicit limits.
const balance = document.querySelector(".balance-input");
if (balance) {
  balance.addEventListener("input", () => {
    const value = Number(balance.value);
    const mix = getMix(value);
    document.querySelector(".balance-value").textContent = `${value} / 100`;
    document.querySelector(".mix-title").textContent = mix.title;
    document.querySelector(".mix-description").textContent = mix.description;
    document.querySelector(".mix-caution").textContent = mix.caution;
  });
}
