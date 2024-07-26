<script lang="ts">
  import { twMerge } from "tailwind-merge"
</script>

<button
  on:click
  type="button"
  class={twMerge(
    "rounded-lg px-2.5 py-0.5 text-sm bg-neutral-200 text-neutral-800 font-medium flex flex-row justify-center items-center gap-x-1.5 transition duration-200 hover:opacity-85",
    $$props.class
  )}
  ><slot />
</button>
