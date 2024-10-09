<script lang="ts">
  // Imports
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { onDestroy } from "svelte";
  import "$lib/timer.css";

  // Variables

  export let wantedTime: string;
  export let name: string; // E.g. Nightmare of all non-chemistry types
  export let description: string; // E. g. chemistry exam
  export let name2: string;
  const theTime: Date = new Date(wantedTime);
  let currentTime: Date = new Date();

  let dayFormat: string;
  let hourFormat: string;
  let minuteFormat: string;
  let secondFormat: string;

  // Time constants
  const msDay = 24 * 60 * 60 * 1000;
  const msHour = 60 * 60 * 1000;
  const msMinute = 60 * 1000;
  const msSecond = 1000;

  // Create tweened stores for each part of the countdown
  const days = tweened(0, { duration: 300, easing: cubicOut });
  const hours = tweened(0, { duration: 300, easing: cubicOut });
  const minutes = tweened(0, { duration: 300, easing: cubicOut });
  const seconds = tweened(0, { duration: 300, easing: cubicOut });

  const updateTime = () => {
    currentTime = new Date();

    const timeDiff = theTime.getTime() - currentTime.getTime();

    // If time has passed, stop updating the countdown
    if (timeDiff <= 0) {
      clearInterval(interval);
      days.set(0);
      hours.set(0);
      minutes.set(0);
      seconds.set(0);
      return;
    }

    // Update the tweened stores
    days.set(Math.floor(timeDiff / msDay));
    hours.set(Math.floor((timeDiff % msDay) / msHour));
    minutes.set(Math.floor((timeDiff % msHour) / msMinute));
    seconds.set(Math.floor((timeDiff % msMinute) / msSecond));
  };

  const interval = setInterval(updateTime, 1000);

  onDestroy(() => {
    clearInterval(interval);
  });

  // Initial call to update the countdown
  updateTime();

  // Set the correct form of time
</script>

{#if theTime.getTime() >= currentTime.getTime()}
  <article>
    <div class="counting-parent">
      <div>
        <p>{$days.toFixed()}</p>
        <p class="label">d</p>
      </div>
      <div>
        <p>{$hours.toFixed()}</p>
        <p class="label">h</p>
      </div>
      <div>
        <p>{$minutes.toFixed()}</p>
        <p class="label">min</p>
      </div>
      <div>
        <p>{$seconds.toFixed()}</p>
        <p class="label">s</p>
      </div>
    </div>
    <div class="description-parent">
      <p class="name">
        {name}
        {#if name2 !== ""}
          <br />
          {name2}
        {/if}
        <br /><span class="description">{description}</span>
      </p>
    </div>
  </article>
{/if}
