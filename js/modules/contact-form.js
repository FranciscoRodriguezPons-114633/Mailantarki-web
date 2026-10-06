/*
 * Contact form (layout only). Validation and feedback states are wired;
 * sending is not connected yet.
 * TODO: form endpoint — replace the preview message with a real submit
 * (fetch to Formspree / Netlify / own API) when the backend is defined.
 */
export function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  const status = form?.querySelector("[data-contact-status]");

  if (!form || !status) return;

  const setStatus = (message, state) => {
    status.textContent = message;
    status.dataset.state = state;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      form.querySelector(":invalid")?.focus();
      setStatus("Please complete the required fields.", "error");
      return;
    }

    const project = form.elements.project;
    const projectName = project.options[project.selectedIndex]?.text || "";
    setStatus(`Preview only: the form is not connected yet. Enquiry for ${projectName}.`, "preview");
  });

  form.addEventListener("input", () => {
    if (status.dataset.state === "error" && form.checkValidity()) setStatus("", "");
  });
}
