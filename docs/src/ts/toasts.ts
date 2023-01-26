export const initToasts = () => {
  document.querySelectorAll("[data-open-toast]").forEach((button) => {
    button.addEventListener("click", () => {
      const templateId = (button as HTMLElement).dataset.template;
      const template = document.getElementById(
        templateId!
      ) as HTMLTemplateElement;
      const toast = template?.content.firstElementChild?.cloneNode(
        true
      ) as HTMLElement;
      document.body.appendChild(toast);
    });
  });
};
