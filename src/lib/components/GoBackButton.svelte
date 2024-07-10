<script>
  import { ChevronLeft } from "lucide-svelte"

  import Button from "./Button.svelte"
    import { twMerge } from "tailwind-merge"
</script>

<Button
  on:click={() => history.back()}
  class={twMerge("bg-transparent hover:bg-neutral-100 w-28 justify-center py-1 -ml-2 -mt-3", $$props.class)}
  ><ChevronLeft class="h-5 w-5" /> Go Back</Button
>
