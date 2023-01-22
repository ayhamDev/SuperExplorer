// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { ipcRenderer } = require("electron");
window.addEventListener("DOMContentLoaded", () => {
  // Tool bar
  const minimize_btn = document.querySelector(".minimize_btn");
  const maximize_btn = document.querySelector(".maximize_btn");
  const close_btn = document.querySelector(".close_btn");
  maximize_btn.addEventListener("click", () => {
    ipcRenderer.send("maximize");
  });
  minimize_btn.addEventListener("click", () => {
    ipcRenderer.send("minimize");
  });
  close_btn.addEventListener("click", () => {
    ipcRenderer.send("close");
  });
});
