export const initModals = () => {
  document.querySelectorAll("[data-open-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      const templateId = (button as HTMLElement).dataset.template;
      const template = document.getElementById(
        templateId!
      ) as HTMLTemplateElement;
      const backdrop = template?.content.firstElementChild?.cloneNode(
        true
      ) as HTMLElement;
      document.body.appendChild(backdrop);

      function closeModal(event: Event) {
        if (event.target == event.currentTarget) {
          backdrop.classList.add("removing");
          backdrop.addEventListener("animationend", () => {
            backdrop.remove();
          });
        }
      }

      backdrop.addEventListener("click", closeModal);
      backdrop
        .querySelectorAll("button")
        .forEach((button) => button.addEventListener("click", closeModal));
    });
  });
};
