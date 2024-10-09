<script lang="ts">
  import Timer from "./Timer.svelte";
  import "$lib/main.css";
</script>

<main>
  <Timer
    wantedTime={"2024-10-15T11:50"}
    name="Budeš zničena názvoslovím, S1."
    name2="S2, budeš zničena kalorimetrickou rovnicí."
    description="Test z chemie (S1), test z fyziky (S2)"
  />
  <Timer
    wantedTime={"2024-10-15T10:55:30"}
    name="Budeš zničena názvoslovím, S2"
    name2="S1, budeš zničena kalorimetrickou rovnicí."
    description="Test z chemie (S2)"
  />
  <Timer
    wantedTime={"2025-06-27T08:00:27"}
    name="Nejlepší den roku 2025!"
    name2=""
    description="Konec školy! "
  />
</main>
