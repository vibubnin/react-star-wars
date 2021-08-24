export const changeCssVariables = (theme) => {
  const root = document.querySelector(":root");
  const cssVariables = ["header", "bgimage"];

  cssVariables.forEach((variable) =>
    root.style.setProperty(
      `--theme-default-${variable}`,
      `var(--theme-${theme}-${variable})`
    )
  );
};
