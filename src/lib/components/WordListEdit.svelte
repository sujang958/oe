<script lang="ts">
  import { Plus } from "lucide-svelte"
import Button from "./Button.svelte"
  import Input from "./Input.svelte"
</script>

<div class="flex flex-col py-6 gap-y-4">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="flex flex-col gap-y-1.5">
    <p class="text-sm font-medium">Title</p>
    <Input value="Japanese Restaurants" />
  </label>

  <div class="mt-4">
    <p class="text-sm font-medium">Words</p>
    <div class="py-3 flex flex-row items-center gap-x-3">
      <input type="checkbox" class="rounded w-3.5 h-3.5" id="" />
      <!-- <Button class="bg-neutral-100">Select All</Button> -->
      <Button class="bg-neutral-100">Deselect All</Button>
      <Button class="bg-neutral-100">Undo</Button>
      <Button class="bg-red-200 text-red-900">Delete</Button>
    </div>
  </div>

  <section class="flex flex-col gap-y-4">
    <div class="flex flex-row items-center gap-x-6">
      <input type="checkbox" class="rounded" name="" id="" />
      <div class="flex flex-row items-center justify-between gap-x-4 w-full">
        <p class="text-xl text-balance" contenteditable>
          <ruby>下<rt>くだ</rt></ruby>さい
        </p>
        <p class="text-lg text-balance text-right max-w-96" contenteditable>please (give me)</p>
      </div>
    </div>
  </section>

  <Button class="justify-center text-base mt-6 bg-neutral-100 py-1"><Plus class="h-4 w-4" /></Button>
</div>
