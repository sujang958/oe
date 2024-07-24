<script lang="ts">
  import BottomArea from "$lib/components/BottomArea.svelte"
  import Button from "$lib/components/Button.svelte"
  import { WordLists } from "$lib/stores/WordList"
  import WordListEdit from "$lib/components/WordListEdit.svelte"
  import { goto } from "$app/navigation"
  import { ChevronLeft } from "lucide-svelte"
  import type { WordList } from "$lib/types/WordList"
  import toast from "svelte-french-toast"
  import TopArea from "$lib/components/TopArea.svelte"
  import GoBackButton from "$lib/components/GoBackButton.svelte"

  let wordlist: WordList = {
    title: "",
    words: [{ meaning: "", word: "" }],
    id: crypto.randomUUID()
  }
</script>

<div class="flex flex-col px-8 md:px-16 pt-12 pb-16 max-w-2xl w-full self-center min-h-screen">
  <TopArea>
    <GoBackButton where="/" />
  </TopArea>

  <div class="py-6"></div>

  <p class="text-2xl font-bold">Creating a new wordlist</p>

  <div></div>

  <WordListEdit bind:wordlist />
</div>

<BottomArea>
  <Button class="bg-red-200 text-red-900 text-base w-full justify-center py-1.5">Cancel</Button>
  <Button
    on:click={() => {
      $WordLists = { ...$WordLists, [wordlist.id]: wordlist }
      toast.success("Created")
      goto("/")
    }}
    class="bg-blue-400 text-blue-900 text-base w-full justify-center py-1.5">Save</Button
  >
</BottomArea>
