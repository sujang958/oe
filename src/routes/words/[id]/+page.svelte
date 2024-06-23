<script lang="ts">
  import Button from "$lib/components/Button.svelte"
  import { ChevronLeft, MoveLeft } from "lucide-svelte"
</script>

<div class="flex flex-col px-16 pt-12 pb-16 max-w-2xl w-full self-center">
  <Button class="bg-transparent  -ml-2"><ChevronLeft class="h-5 w-5" /> Go Back</Button>

  <div class="py-5"></div>

  <p class="text-4xl font-bold">Japanese Restaurants</p>
  <p class="text-lg mt-2 font-medium">21 words | Praticed 29 times</p>
  <div class="py-3.5"></div>
  <div class="flex flex-row items-center justify-evenly w-full gap-x-3">
    <Button class="w-full justify-center p-1.5">Edit</Button>
    <Button class="w-full justify-center p-1.5 bg-sky-300 text-sky-900">Test</Button>
  </div>
  <div class="py-8"></div>
  <p class="text-2xl font-semibold">Words</p>
  <div class="flex flex-col py-6 gap-y-4">
    <div class="flex flex-row items-center gap-x-6 justify-between">
      <p class="text-lg text-balance">すみません</p>
      <p class="text-lg text-balance max-w-80">excuse me; pardon me; I'm sorry; I beg your pardon</p>
    </div>
    <div class="flex flex-row items-center gap-x-6 justify-between">
      <p class="text-lg text-balance">
        <ruby>下<rt>くだ</rt></ruby>さい
      </p>
      <p class="text-lg text-balance">please (give me)</p>
    </div>
  </div>
</div>
