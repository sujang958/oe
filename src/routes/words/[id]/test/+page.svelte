<script lang="ts">
  import BottomArea from "$lib/components/BottomArea.svelte"
  import Button from "$lib/components/Button.svelte"
  import Input from "$lib/components/Input.svelte"
  import { ChevronLeft, MoveLeft } from "lucide-svelte"

  // TODO: add "press / to focus"
</script>

<div class="flex flex-col px-16 pt-12 pb-16 max-w-2xl w-full self-center min-h-screen">
  <header class="flex flex-row items-center justify-between">
    <Button on:click={() => history.back()} class="bg-transparent hover:underline"><ChevronLeft class="h-5 w-5" /> Go Back</Button>
    <p class="text-base font-meidum">Japanese Restaurants</p>
  </header>

  <div class="py-5"></div>

  <div class="flex-1 flex flex-col items-center justify-center">
    <p class="text-base font-medium text-neutral-500 -mt-8">1 / 21</p>
    <div class="py-4"></div>
    <p class="text-5xl font-bold"><ruby>下</ruby>さい</p>
    <div class="py-5"></div>
    <Input class="w-56" placeholder="Type your answer" />
  </div>
</div>

<BottomArea>
  <Button class="flex-1 justify-center py-1.5 text-base">Skip</Button>
  <Button class="flex-1 justify-center py-1.5 text-base bg-blue-400 text-blue-900">Check</Button>
</BottomArea>
