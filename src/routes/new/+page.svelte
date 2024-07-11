<script lang="ts">
    import BottomArea from "$lib/components/BottomArea.svelte"
    import Button from "$lib/components/Button.svelte"
import GoBackButton from "$lib/components/GoBackButton.svelte"
    import WordListEdit from "$lib/components/WordListEdit.svelte"
  import {goto} from "$app/navigation"
  import {ChevronLeft} from "lucide-svelte"
    import type { WordList } from "$lib/types/WordList"

  let wordlist: WordList = {title: "", words: []}
</script>
<div class="flex flex-col px-16 pt-12 pb-16 max-w-2xl w-full self-center min-h-screen">
  <Button on:click={() => goto("/")} class="bg-transparent -ml-2 -mt-2 py-1">
    <ChevronLeft class="h-4 w-4" />
    Go home</Button>

  <div class="py-3"></div>

  <WordListEdit bind:wordlist={wordlist} />

</div>

<BottomArea>
  <Button class="bg-red-200 text-red-900 text-base w-full justify-center py-1.5">Cancel</Button>
  <Button class="bg-blue-400 text-blue-900 text-base w-full justify-center py-1.5">Save</Button>
</BottomArea>