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
  import { goto } from "$app/navigation"

  const id = $page.params.id
  const wordlist =
    $WordLists[id] ??
    ({ id: "-1", title: "", words: [{ word: "Loading", meaning: "" }] } satisfies WordList)

  let words = structuredClone(wordlist.words).map((word) => ({ ...word, id: crypto.randomUUID() }))

  let currentWordIndex = 0
  let answer = ""

  let rect: number
  let isMarking = false

  const testedWord: TestedWord[] = []

  const goNextWord = (word: TestedWord) => {
    testedWord.push(word)
    currentWordIndex += 1
    words = [...words.slice(1)]
    isMarking = false
    answer = ""
  }

  let finished = false

  $: if (words.length <= 0) finished = true

  $: console.log(rect, words)

  // TODO: add "press / to focus"
</script>

<TopArea class="justify-between">
  <GoBackButton where="/words/{id}" />
  <p class="text-base font-meidum">{wordlist.title}</p>
</TopArea>

{#if finished}
  <div
    class="flex flex-col px-8 md:px-16 pt-24 pb-16 max-w-2xl w-full self-center min-h-screen overflow-clip"
  >
    <p class="text-[1.65rem] font-bold">Test Results</p>
    <div class="py-5"></div>
    <section class="border border-neutral-100 rounded-xl px-3 pb-2">
      <p class="py-2 text-lg font-medium">Wrong Answers</p>
      <hr />
      <table class="mt-4 table-fixed w-full">
        <thead>
          <tr>
            <th class="text-left">Word</th>
            <th class="text-left">Correct Answer</th>
            <th class="text-left">Your Answer</th>
          </tr>
        </thead>
        <tbody>
          {#each testedWord.filter((word) => word.result == "INCORRECT") as wordCase}
            <tr>
              <td class="py-2">{wordCase.word.word}</td>
              <td class="py-2">{wordCase.word.meaning}</td>
              <td class="py-2">{wordCase.answer}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </section>
    <div class="py-4"></div>
    <section class="border border-neutral-200 rounded-xl px-3 pb-2">
      <p class="py-2 text-lg font-medium">Skipped Words</p>
      <hr />
      <table class="mt-4 table-fixed w-full">
        <thead>
          <tr>
            <th class="text-left">Word</th>
            <th class="text-left">Correct Answer</th>
            <th class="text-left">Your Guess</th>
          </tr>
        </thead>
        <tbody>
          {#each testedWord.filter((word) => word.result == "SKIPPED") as wordCase}
            <tr>
              <td class="py-2">{wordCase.word.word}</td>
              <td class="py-2">{wordCase.word.meaning}</td>
              <td class="py-2">{wordCase.answer}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </section>
    <div class="py-4"></div>
    <section class="border border-neutral-200 rounded-xl px-3 pb-2">
      <p class="py-2 text-lg font-medium">Correct Answers</p>
      <hr />
      <table class="mt-4 table-fixed w-full">
        <thead>
          <tr>
            <th class="text-left">Word</th>
            <th class="text-left">Correct Answer</th>
            <th class="text-left">Your Answer</th>
          </tr>
        </thead>
        <tbody>
          {#each testedWord.filter((word) => word.result == "CORRECT") as wordCase}
            <tr>
              <td class="py-2">{wordCase.word.word}</td>
              <td class="py-2">{wordCase.word.meaning}</td>
              <td class="py-2">{wordCase.answer}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </section>
  </div>

  <BottomArea class="relative">
    <Button on:click={() => goto(`/words/${id}`)} class="flex-1 justify-center py-1.5 text-base"
      >Go Back</Button
    >
  </BottomArea>
{:else}
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
            {currentWordIndex + 1} / {wordlist.words.length}
          </p>
          <div class="py-4"></div>
          <p class="text-5xl font-bold">{word.word}</p>
          <div class="py-5"></div>
          <Input bind:value={answer} class="w-56" placeholder="Type your answer" />
        </div>
      {/each}
    </main>
  </div>

  <BottomArea class="relative">
    <!-- TODO: add some animations after clicking on the Check button later -->
    {#if isMarking}
      <section
        class="absolute bg-neutral-100 left-4 right-4 bottom-14 rounded-lg p-3.5 flex flex-row items-center justify-between"
      >
        <div>
          <p class="text-2xl font-semibold">'안녕하세요' means 'Hello'</p>
          <p class="text-lg">Mark it 'correct' if you think that your answer is correct.</p>
        </div>
      </section>

      <Button
        class="flex-1 justify-center py-1.5 text-base bg-red-300 text-red-950"
        on:click={() => {
          goNextWord({
            answer,
            word: words.at(0) ?? { meaning: "", word: "" },
            result: "INCORRECT"
          })
        }}><X class="h-4 w-4" /> Incorrect</Button
      >
      <Button
        class="flex-1 justify-center py-1.5 text-base bg-green-300 text-green-950"
        on:click={() => {
          goNextWord({
            answer,
            word: words.at(0) ?? { meaning: "", word: "" },
            result: "CORRECT"
          })
        }}><Check class="h-4 w-4" /> Correct</Button
      >
    {:else}
      <Button
        class="flex-1 justify-center py-1.5 text-base"
        on:click={() => {
          goNextWord({
            answer,
            word: words.at(0) ?? { meaning: "", word: "" },
            result: "SKIPPED"
          })
          toast.success("Skipped")
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
{/if}
