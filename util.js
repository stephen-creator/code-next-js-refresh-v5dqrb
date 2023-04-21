export const render = (elementId, fn) => {
  let result = '';
  try {
    result = fn();
  } catch (e) {
    result = e;
  }

  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = `${elementId}: ${result}`;
  }
};
