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

  const id = $page.params.id
  const wordlist =
    $WordLists[id] ??
    ({ id: "-1", title: "", words: [{ word: "Loading", meaning: "" }] } satisfies WordList)

  let currentWordIndex = 0

  // TODO: add "press / to focus"
</script>

<div class="flex flex-col px-8 md:px-16 pt-12 pb-16 max-w-2xl w-full self-center min-h-screen">
  <TopArea class="justify-between">
    <GoBackButton where="/words/{id}" />
    <p class="text-base font-meidum">{wordlist.title}</p>
  </TopArea>

  <div class="py-5"></div>

  <div class="flex-1 flex flex-col items-center justify-center">
    <p class="text-base font-medium text-neutral-500 -mt-8">
      {currentWordIndex + 1} / {wordlist.words.length}
    </p>
    <div class="py-4"></div>
    <p class="text-5xl font-bold">{wordlist.words[0].word}</p>
    <div class="py-5"></div>
    <Input class="w-56" placeholder="Type your answer" />
  </div>
</div>

<BottomArea class="relative">
  <section
    class="absolute bg-neutral-200 left-4 right-4 bottom-16 rounded-lg p-3.5 flex flex-row items-center justify-between"
  >
    <div>
      <p class="text-2xl font-semibold">'안녕하세요' means 'Hello'</p>
      <p class="text-lg">Mark it 'correct' if you think that your answer is correct.</p>
    </div>
    <!-- <div class="flex flex-col items-end gap-2">
      <Button class="bg-green-300 text-green-950"><Check class="h-4 w-4" /> Correct</Button>
      <Button class="bg-red-300 text-red-950"><X class="h-4 w-4" /> Incorrect</Button>
    </div> -->
  </section>

  <!-- TODO: add some animations after clicking on the Check button later -->

  <Button class="flex-1 justify-center py-1.5 text-base bg-red-300 text-red-950"
    ><X class="h-4 w-4" /> Incorrect</Button
  >
  <Button class="flex-1 justify-center py-1.5 text-base bg-green-300 text-green-950"
    ><Check class="h-4 w-4" /> Correct</Button
  >
  <!-- <Button class="flex-1 justify-center py-1.5 text-base">Skip</Button>
  <Button class="flex-1 justify-center py-1.5 text-base bg-blue-400 text-blue-900">Check</Button> -->
</BottomArea>
