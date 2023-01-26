export const initTabs = () => {
  document.querySelectorAll(".tabs > .active").forEach((activeTab) => {
    const activeBody = document.getElementById(
      (activeTab as HTMLElement).dataset.elementId!
    );
    if (activeBody) {
      activeBody.style.display = "flex";
    }
  });
  document.querySelectorAll(".tabs > *").forEach((tab) => {
    tab.addEventListener("click", () => {
      tab.parentElement?.querySelectorAll("*").forEach((t) => {
        t.classList.remove("active");

        const tBody = document.getElementById(
          (t as HTMLElement).dataset.elementId!
        );
        if (tBody) {
          tBody.style.display = "none";
        }
      });
      tab.classList.add("active");

      const tabBody = document.getElementById(
        (tab as HTMLElement).dataset.elementId!
      );
      if (tabBody) {
        tabBody.style.display = "flex";
      }
    });
  });
};
