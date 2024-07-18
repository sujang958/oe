<script lang="ts">
  import { goto } from "$app/navigation"
  import { page } from "$app/stores"
  import BottomArea from "$lib/components/BottomArea.svelte"
  import Button from "$lib/components/Button.svelte"
  import GoBackButton from "$lib/components/GoBackButton.svelte"
  import WordListEdit from "$lib/components/WordListEdit.svelte"
  import { WordLists } from "$lib/stores/WordList"
  import type { WordList } from "$lib/types/WordList"
  import { onMount } from "svelte"
    import toast from "svelte-french-toast"
  // TODO: add "press / to focus"

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
  <GoBackButton />

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
      console.log(wordlist)
      $WordLists[id] = wordlist
      history.back()
      toast.success("Saved")
    }}>Save</Button
  >
</BottomArea>

<!-- TODO: add prettierplugintailwindcss -->
