const text = document.querySelector(".second-text");

/**
 * The function `textLoad` sets the text content of an element to different values at different time
 * intervals.
 */
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Freelancer";
  }, 0);

  setTimeout(() => {
    text.textContent = "React Developer";
  }, 5100);

  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 10100);
};

/* The `textLoad();` function is setting the text content of an element to different values at
different time intervals. It uses `setTimeout()` to change the text content after a specific delay.
In this case, it sets the text content to "Freelancer" after 0 milliseconds, "React Developer" after
5100 milliseconds, and "Web Developer" after 10100 milliseconds. */
textLoad();
/* `setInterval(textLoad, 15000);` is a function that repeatedly calls the `textLoad` function at a
specified time interval. In this case, it calls the `textLoad` function every 15 seconds (15000
milliseconds). This ensures that the text content of the element will continue to change every 15
seconds, cycling through the values "Freelancer", "React Developer", and "Web Developer". */
setInterval(textLoad, 15000);
