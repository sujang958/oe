<script lang="ts">
  import { Plus } from "lucide-svelte"
  import Button from "./Button.svelte"
  import Input from "./Input.svelte"
  import type { WordList } from "$lib/types/WordList"

  import Textarea from "./Textarea.svelte"

  export let wordlist: WordList = {
    id: "-1",
    title: "",
    words: []
  }

  let checkedWord: Array<boolean> = []
  let checkedIndex = checkedWord.filter((checked) => checked).map((_, i) => i)
  let allChecked = false

  // $: console.log(wordlist.words, checkedIndex, )

  $: checkedIndex = checkedWord.map((checked, i) => (checked ? i : null)).filter((v) => v != null)
  $: if (checkedWord.filter((c) => c).length == wordlist.words.length) {
    allChecked = true
  } else {
    allChecked = false
  }
</script>

<div class="flex flex-col py-6 gap-y-4">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="flex flex-col gap-y-1.5">
    <p class="text-sm font-medium">Title</p>
    <Input
      on:change={(event) => {
        if (event.target instanceof HTMLInputElement)
          wordlist = { ...wordlist, title: event.target.value }
      }}
      bind:value={wordlist.title}
    />
  </label>

  <div class="mt-4 relative">
    <p class="text-sm font-medium">Words</p>
    <div class="py-3 flex flex-row items-center gap-x-4 sticky top-16 z-10 bg-white">
      <input
        type="checkbox"
        class="rounded w-3.5 h-3.5"
        id=""
        bind:checked={allChecked}
        on:click={() => {
          if (!allChecked) checkedWord = wordlist.words.map(() => true)
          else checkedWord = []
        }}
      />
      <!-- <Button class="bg-neutral-100">Select All</Button> -->
      <!-- <Button class="bg-neutral-100">Deselect All</Button> -->
      <!-- <Button class="bg-neutral-100">Undo</Button> TODO: how tf -->
      <Button
        class="bg-red-200 text-red-900"
        on:click={() => {
          const _checkedIndex = structuredClone(checkedIndex)

          checkedWord = checkedWord.filter((_, i) => !_checkedIndex.includes(i))

          wordlist = {
            ...wordlist,
            words: wordlist.words.filter((_, i) => !_checkedIndex.includes(i))
          }
        }}
        >Delete {checkedIndex.length > 0
          ? `${checkedIndex.length} item${checkedIndex.length > 1 ? "s" : ""}`
          : ""}</Button
      >
    </div>

    <section class="flex flex-col gap-y-4 mt-4">
      {#each wordlist.words as word, i}
        <div class="flex flex-row items-center gap-x-6">
          <input type="checkbox" class="rounded" name="" id="" bind:checked={checkedWord[i]} />
          <div class="flex flex-row items-center justify-between gap-x-4 w-full">
            <!-- <Input class="py-0.5 px-2 w-[38%]" placeholder="word" bind:value={word.word}></Input> -->
            <Textarea class="py-0.5 px-2 w-[40%]" bind:value={word.word} placeholder="word" />
            <Textarea class="py-0.5 px-2 w-[50%]" bind:value={word.meaning} placeholder="meaning" />
          </div>
        </div>
      {/each}
    </section>
  </div>
  <!-- 
  <div class="flex flex-row items-center gap-x-6">
        <input type="checkbox" class="rounded" name="" id="" />
        <div class="flex flex-row items-center justify-between gap-x-4 w-full">
          <p class="text-xl text-balance max-w-[50%]" contenteditable>
            {word.word}
            <ruby>下<rt>くだ</rt></ruby>さい 
          </p>
          <textarea name="" id="">efjoefjo</textarea>
          <p class="text-lg text-balance max-w-[30%] text-right" contenteditable>{word.meaning}</p>
        </div>
      </div> -->

  <Button
    on:click={() => {
      wordlist = { ...wordlist, words: [...wordlist.words, { word: "", meaning: "" }] }
      allChecked = false
    }}
    class="justify-center text-base mt-6 bg-neutral-100 py-1"><Plus class="h-4 w-4" /></Button
  >
</div>
