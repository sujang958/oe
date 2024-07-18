<script lang="ts">
    import type { WordList } from "$lib/types/WordList"

  export let wordList: WordList
</script>

<a href="/words/{wordList.id}" class="rounded-lg px-4 py-3 bg-neutral-100 cursor-pointer">
  <p class="text-2xl font-bold">{wordList.title}</p>
  <p class="text-base mt-0.5">{wordList.words.length} words</p>
  <div class="py-2"></div>
  <div class="text-sm text-neutral-500">Recent pratice on June 12, 2024</div>
  <!-- TODO: how do i implement this shit? -->
</a>