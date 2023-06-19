export const initThemeSwitcher = () => {
  let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document
    .querySelector("[data-theme-switcher]")
    ?.addEventListener("click", (e) => {
      console.log(e);
      prefersDark = !prefersDark;

      (e.target as HTMLButtonElement).innerText = prefersDark
        ? "light_mode"
        : "dark_mode";
      document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light"
      );
    });
};
