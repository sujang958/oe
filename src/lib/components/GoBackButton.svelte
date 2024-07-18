<script>
  import { ChevronLeft } from "lucide-svelte"
  import Button from "./Button.svelte"
  import { twMerge } from "tailwind-merge"
  import { goto } from "$app/navigation"

  export let where = ""
</script>

<Button
  on:click={() => (where ? goto(where) : history.back())}
  class={twMerge("bg-transparent hover:bg-neutral-100 py-1", $$props.class)}
  ><ChevronLeft class="h-4 w-4" /> Go Back</Button
>
