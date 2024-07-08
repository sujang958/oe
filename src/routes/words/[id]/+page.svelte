<script lang="ts">
  import BottomArea from "$lib/components/BottomArea.svelte"
  import Button from "$lib/components/Button.svelte"
  import { ChevronLeft, History, MoveLeft } from "lucide-svelte"

  let currentTab: "words" | "stats" = "words" // TODO: load this from the url

  $: console.log(currentTab)
</script>

<div class="flex flex-col px-16 pt-12 pb-16 max-w-2xl w-full self-center">
  <Button class="bg-transparent  -ml-2"><ChevronLeft class="h-5 w-5" /> Go Back</Button>

  <div class="py-5"></div>

  <p class="text-4xl font-bold">Japanese Restaurants</p>
  <p class="text-lg mt-2 font-medium text-neutral-600">21 words | Praticed 29 times</p>

  <!-- <div class="py-3.5"></div> -->

  <!-- <section class="flex flex-row items-center justify-end">
    <Button class="p-1.5"><History class="h-4 w-4" /></Button>
  </section> -->

  <!-- <div class="flex flex-row items-center justify-evenly w-full gap-x-3">
    <Button class="w-full justify-center p-1.5">Edit</Button>
    <Button class="w-full justify-center p-1.5 bg-sky-300 text-sky-900">Test</Button>
  </div> -->

  <!-- <div class="py-8"></div> -->
  <div class="py-6"></div>

  <section class="flex flex-col">
    <header class="relative flex flex-row items-center justify-evenly">
      <div
        class={`transition duration-300 left-0 rounded-lg -z-10 bg-neutral-200/85 absolute top-0 w-1/2 h-full ${currentTab == "words" ? "translate-x-0" : "translate-x-full"}`}
      >
        &nbsp;
      </div>

      <Button
        on:click={() => (currentTab = "words")}
        class="justify-center text-lg font-medium flex-1 bg-transparent">Words</Button
      >
      <Button
        on:click={() => (currentTab = "stats")}
        class="justify-center text-lg font-medium bg-transparent flex-1">Stats</Button
      >
    </header>

    <main class="py-1 mt-2">
      <div class="flex flex-col py-6 gap-y-4">
        <div class="flex flex-row items-center gap-x-6 justify-between">
          <p class="text-xl text-balance">すみません</p>
          <p class="text-lg text-balance text-right max-w-96">
            excuse me; pardon me; I'm sorry; I beg your pardon
          </p>
        </div>
        <div class="flex flex-row items-center gap-x-6 justify-between">
          <p class="text-xl text-balance">
            <ruby>下<rt>くだ</rt></ruby>さい
          </p>
          <p class="text-lg text-balance text-right max-w-96">please (give me)</p>
        </div>
      </div>
    </main>
  </section>

  <!-- <p class="text-2xl font-semibold">Words</p>
  <div class="flex flex-col py-6 gap-y-4">
    <div class="flex flex-row items-center gap-x-6 justify-between">
      <p class="text-xl text-balance">すみません</p>
      <p class="text-lg text-balance text-right max-w-96">
        excuse me; pardon me; I'm sorry; I beg your pardon
      </p>
    </div>
    <div class="flex flex-row items-center gap-x-6 justify-between">
      <p class="text-xl text-balance">
        <ruby>下<rt>くだ</rt></ruby>さい
      </p>
      <p class="text-lg text-balance text-right max-w-96">please (give me)</p>
    </div>
  </div> -->
</div>

<BottomArea>
  <Button class="w-full justify-center text-base py-1.5 bg-blue-300 text-blue-950">Test</Button>
</BottomArea>
