<script lang="ts">
  import { page } from "$app/stores"
  import BottomArea from "$lib/components/BottomArea.svelte"
  import Button from "$lib/components/Button.svelte"
  import GoBackButton from "$lib/components/GoBackButton.svelte"
  import Input from "$lib/components/Input.svelte"
  import TopArea from "$lib/components/TopArea.svelte"
  import { WordLists } from "$lib/stores/WordList"
  import type { WordList } from "$lib/types/WordList"
  import { Check, X } from "lucide-svelte"
  import { onMount } from "svelte"
  import { flip } from "svelte/animate"
  import type { TestedWord } from "$lib/types/Test"
  import toast from "svelte-french-toast"

  const id = $page.params.id
  const wordlist =
    $WordLists[id] ??
    ({ id: "-1", title: "", words: [{ word: "Loading", meaning: "" }] } satisfies WordList)

  let words = structuredClone(wordlist.words).map((word) => ({ ...word, id: crypto.randomUUID() }))

  let currentWordIndex = 0

  let rect: number
  let isMarking = false

  const testedWord: TestedWord[] = []

  const goNextWord = () => {
    words = [...words.slice(1)]
    isMarking = false
  }

  $: console.log(rect, words)

  // TODO: add "press / to focus"
</script>

<TopArea class="justify-between">
  <GoBackButton where="/words/{id}" />
  <p class="text-base font-meidum">{wordlist.title}</p>
</TopArea>

<div
  class="flex flex-col px-16 pt-12 pb-16 max-w-2xl w-full self-center min-h-screen overflow-clip"
>
  <div class="p-0 w-full" bind:clientWidth={rect}></div>

  <!-- TODO: fix this animation later -->

  <main class="flex flex-row items-center flex-1 min-w-max gap-x-16">
    {#each words as word, i (word.id)}
      <div
        animate:flip={{ duration: 400 }}
        style="width: {rect}px"
        class="flex-1 flex flex-col items-center justify-center"
      >
        <p class="text-base font-medium text-neutral-500 -mt-8">
          {i + 1} / {words.length}
        </p>
        <div class="py-4"></div>
        <p class="text-5xl font-bold">{word.word}</p>
        <div class="py-5"></div>
        <Input class="w-56" placeholder="Type your answer" />
      </div>
    {/each}
  </main>
</div>

<BottomArea class="relative">
  <!-- TODO: add some animations after clicking on the Check button later -->
  {#if isMarking}
    <section
      class="absolute bg-neutral-200 left-4 right-4 bottom-14 rounded-lg p-3.5 flex flex-row items-center justify-between"
    >
      <div>
        <p class="text-2xl font-semibold">'안녕하세요' means 'Hello'</p>
        <p class="text-lg">Mark it 'correct' if you think that your answer is correct.</p>
      </div>
    </section>

    <Button
      class="flex-1 justify-center py-1.5 text-base bg-red-300 text-red-950"
      on:click={() => {
        testedWord.push({ word: words.at(0) ?? { meaning: "", word: "" }, result: "INCORRECT" })
        goNextWord()
      }}><X class="h-4 w-4" /> Incorrect</Button
    >
    <Button
      class="flex-1 justify-center py-1.5 text-base bg-green-300 text-green-950"
      on:click={() => {
        testedWord.push({ word: words.at(0) ?? { meaning: "", word: "" }, result: "CORRECT" })
        goNextWord()
      }}><Check class="h-4 w-4" /> Correct</Button
    >
  {:else}
    <Button
      class="flex-1 justify-center py-1.5 text-base"
      on:click={() => {
        testedWord.push({ word: words.at(0) ?? { meaning: "", word: "" }, result: "SKIPPED" })
        toast.success("Skipped")
        goNextWord()
      }}>Skip</Button
    >
    <Button
      class="flex-1 justify-center py-1.5 text-base bg-blue-400 text-blue-900"
      on:click={() => {
        isMarking = true
      }}>Check</Button
    >
  {/if}
</BottomArea>
