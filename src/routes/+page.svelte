<script lang="ts">
  import Timer from "./Timer.svelte";
  import "$lib/main.css";
</script>

<!-- Don't forget to sort the timers! -->

<main>
  <!-- <Timer
    timerType="S2"
    wantedTime="1234-56-78"
    name="Thiokyseliny a další pro S2!"
    description="Test z názvosloví (S2)"
  />
  <Timer
    timerType="S1"
    wantedTime="1234-56-78"
    name="Thiokyseliny a další pro S1!"
    description="Test z názvosloví (S1)"
  /> -->
  <!-- zjistit datum! -->
  <Timer
    timerType="French"
    wantedTime="2024-10-23T10:55:27"
    name="Another wednesday, another test for the French!"
    description="Test z francouzštiny (zase)"
  />
  <Timer
    timerType="German"
    wantedTime="2024-10-23T10:57:19"
    name="Wie spät ist es?"
    description="Test z němčiny."
  />

  <Timer
    timerType="S1"
    wantedTime="2024-10-24T08:00:06"
    name="(Non) defining relative-clauses! Enjoy, S1!"
    description="Test z angličtiny (S1)"
  />
  <Timer
    timerType="French"
    wantedTime="2024-11-06T10:56:29"
    name="Anotther test for the French!"
    description="Test z francouzštiny (zase)"
  />
  <Timer
    timerType="Entire-class"
    wantedTime="2024-11-08T08:55:54"
    name="Finding x"
    description="Čtvrtletka z matiky"
  />
  <Timer
    timerType="Positive"
    wantedTime="2025-01-07"
    name="Upečeme se v Peci!"
    description="Lyžák"
  />
  <!-- ↓ Always last! ↓ -->
  <Timer
    timerType="Positive"
    wantedTime="2025-06-27T08:00:27"
    name="Nejlepší den roku 2025!"
    description="Konec školy! "
  />
</main>
