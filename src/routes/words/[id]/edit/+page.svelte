<script lang="ts">
  import { goto } from "$app/navigation"
  import { page } from "$app/stores"
  import BottomArea from "$lib/components/BottomArea.svelte"
  import Button from "$lib/components/Button.svelte"
  import GoBackButton from "$lib/components/GoBackButton.svelte"
  import TopArea from "$lib/components/TopArea.svelte"
  import WordListEdit from "$lib/components/WordListEdit.svelte"
  import { WordLists } from "$lib/stores/WordList"
  import type { WordList } from "$lib/types/WordList"
  import { onMount } from "svelte"
  import toast from "svelte-french-toast"

  const id = $page.params.id
  let wordlist = $WordLists[id] ?? { id: "-1", title: "", words: [] }

  let firstVersion: WordList

  onMount(async () => {
    if (!wordlist) goto("/")

    firstVersion = wordlist
    Object.freeze(firstVersion)
  })
</script>

<div class="flex flex-col px-16 pt-12 pb-16 max-w-2xl w-full self-center min-h-screen">
  <TopArea>
    <GoBackButton where="/words/{id}" />
  </TopArea>

  <div class="py-3"></div>

  <WordListEdit bind:wordlist />
</div>

<BottomArea>
  <Button
    class="flex-1 justify-center py-1.5 text-base"
    on:click={() => {
      wordlist = firstVersion
      history.back()
      toast.error("Canceled")
    }}>Cancel</Button
  >
  <Button
    class="flex-1 justify-center py-1.5 text-base bg-green-400 text-green-950"
    on:click={() => {
      if (wordlist.title.replace(/ /gi, "").length <= 0)
        return toast.error("Title must contain a character at least", { duration: 2500 })

      $WordLists[id] = {
        ...wordlist,
        words: wordlist.words.filter((word) => word.word && word.meaning)
      }
      history.back()
      toast.success("Saved")
    }}>Save</Button
  >
</BottomArea>

<!-- TODO: add prettierplugintailwindcss -->
