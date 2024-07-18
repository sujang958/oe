<script lang="ts">
  import BottomArea from "$lib/components/BottomArea.svelte"
  import Button from "$lib/components/Button.svelte"
  import { ChevronLeft,Pencil } from "lucide-svelte"
  import { goto } from "$app/navigation"
  import { page } from "$app/stores"
  import { WordLists } from "$lib/stores/WordList"
  import { onMount } from "svelte"
  import type { WordList } from "$lib/types/WordList"

  const id = $page.params.id

  const wordList: WordList = $WordLists[id] ?? { id: "-1", title: "", words: [] }

  onMount(async () => {
    if (!wordList) goto("/")
  })

  let currentTab: "words" | "stats" = "words" // TODO: load this from the url
</script>

<div class="flex flex-col px-16 pt-12 pb-16 max-w-2xl w-full min-h-screen self-center">
  <Button on:click={() => goto("/")} class="-ml-2 -mt-2 hover:underline bg-transparent">
    <ChevronLeft class="h-4 w-4" />
    Go Back</Button
  >

  <div class="py-5"></div>

  <p class="text-4xl font-bold">{wordList.title}</p>
  <p class="text-lg mt-2 font-medium text-neutral-600">
    {wordList.words.length} words | Praticed 29 times
  </p>

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

  <section class="flex flex-col relative flex-1">
    <header class="relative flex flex-row items-center justify-evenly py-0.5">
      <div
        class={`transition duration-300 left-0 rounded-3xl -z-10 bg-neutral-200/50 absolute top-0 w-1/2 h-full ${currentTab == "words" ? "translate-x-0" : "translate-x-full"}`}
      >
        &nbsp;
      </div>

      <Button
        on:click={() => (currentTab = "words")}
        class="justify-center text-neutral-600 text-base font-semibold flex-1 bg-transparent "
        >Words</Button
      >
      <Button
        on:click={() => (currentTab = "stats")}
        class="justify-center text-neutral-600 text-base font-semibold bg-transparent  flex-1"
        >Stats</Button
      >
    </header>

    <!-- <div class="absolute bg-white z-30 w-full h-screen border border-black left-full">&nbsp;</div>
    <div class="absolute bg-white z-30 w-full h-screen right-full">&nbsp;</div> -->

    <main
      class="relative py-1 mt-3 flex flex-row duration-300 transition {currentTab == 'words'
        ? ''
        : '-translate-x-full'}"
    >
      <div
        class="h-full flex w-full flex-col py-3 gap-y-4 transition duration-300 px-5 rounded-lg relative"
      >
        {#each wordList.words as word}
          <div class="flex flex-row items-center gap-x-6 justify-between">
            <p class="text-xl text-balance font-medium">{word.word}</p>
            <p class="text-lg text-balance text-right max-w-96">
              {word.meaning}
            </p>
          </div>
        {/each}
        <!-- <p class="left-1/2 -translate-x-full text-center text-xs text-neutral-700 absolute -bottom-6">1 word</p> -->
      </div>

      <div
        class={`absolute left-4 top-2 px-5 rounded-lg overflow-visible w-full flex flex-col py-3 gap-y-4 translate-x-full duration-300 transition`}
      >
        <div class="flex flex-row items-center gap-x-6 justify-between">
          <p class="text-lg text-balance">Times practiced</p>
          <p class="text-base text-balance text-right max-w-96">1</p>
        </div>
        <div class="flex flex-row items-center gap-x-6 justify-between">
          <p class="text-lg text-balance">Test History</p>
          <Button>View</Button>
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
  <Button
    on:click={() => goto(`/words/${$page.params.id}/test`)}
    class="flex-1 justify-center text-base py-1.5 bg-blue-400 text-blue-950">Test</Button
  >
  <Button
    on:click={() => goto(`/words/${$page.params.id}/edit`)}
    class="justify-center text-base gap-x-2 py-1.5 px-3.5"
  >
    <Pencil class="h-4 w-4" />
    Edit</Button
  >
</BottomArea>
