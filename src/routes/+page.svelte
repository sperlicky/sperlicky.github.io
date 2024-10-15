<script lang="ts">
  import Timer from "./Timer.svelte";
  import "$lib/main.css";
</script>

<!-- Don't forget to sort the timers! -->

<main>
  <Timer
    timerType="Entire-class"
    wantedTime="2024-10-15T10:55:32"
    name="Budeš zničena názvoslovím, S2<br />S1, budeš zničena kalorimetrickou rovnicí."
    description="Test z chemie (S2), test z fyziky (S1)"
  />
  <Timer
    timerType="Entire-class"
    wantedTime="2024-10-15T11:50"
    name="Budeš zničena názvoslovím, S1.<br />S2, budeš zničena kalorimetrickou rovnicí."
    description="Test z chemie (S1), test z fyziky (S2)"
  />
  <Timer
    timerType="French"
    wantedTime="2024-10-16T10:56:43"
    name="Test for the French!"
    description="Test z francouzštiny."
  />
  <Timer
    timerType="Entire-class"
    wantedTime="2024-10-18T08:56:04"
    name="nezapomeň na PODMÍNKY!!!"
    description="Test z matematiky."
  />
  <!-- <Timer
  timerType="French"
  wantedTime={"2024-10-23T10:55:27"}
  name="Another wednesday, another test for the French!"
  description="Test z francouzštiny (zase)"
  /> -->
  <!-- ↑ Add on 24/10 ↑ -->
  <Timer
    timerType="S1"
    wantedTime="2024-10-21T08:01:11"
    name="Projekt na (nejen) protinožce pro S1!"
    description="Projekt na Austrálii (S1)"
  />
  <Timer
    timerType="Entire-class"
    wantedTime="2024-10-21T14:36:54"
    name="Demokracie nebo ne?"
    description="Test z občanky."
  />
  <Timer
    timerType="S1"
    wantedTime="2024-10-24T08:00:06"
    name="(Non) defining relative-clauses! Enjoy, S1!"
    description="Test z angličtiny (S1)"
  />
  <!-- ↓ Always last! ↓ -->
  <Timer
    timerType="Positive"
    wantedTime="2025-06-27T08:00:27"
    name="Nejlepší den roku 2025!"
    description="Konec školy! "
  />
</main>
