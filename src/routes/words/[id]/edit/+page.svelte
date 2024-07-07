<script lang="ts">
  import Button from "$lib/components/Button.svelte"
  import Input from "$lib/components/Input.svelte"
  import { ChevronLeft, MoveLeft, PlusIcon } from "lucide-svelte"
  import { Swipe, SwipeItem } from "svelte-swipe"

  const swipeConfig = {
    autoplay: false,
    delay: 2000,
    showIndicators: true,
    transitionDuration: 1000,
    defaultIndex: 0
  }
  // TODO: add "press / to focus"
</script>

<div class="flex flex-col px-16 pt-12 pb-16 max-w-2xl w-full self-center min-h-screen">
  <header class="flex flex-row items-center justify-between">
    <Button class="bg-transparent  -ml-2"><ChevronLeft class="h-5 w-5" /> Go Back</Button>
  </header>

  <div class="py-5"></div>

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

    <!-- TODO: support reordering someday -->
    <!-- <div class="flex flex-row items-center gap-x-6 justify-between">
      <p class="text-xl text-balance">すみません</p>
      <p class="text-lg text-balance text-right max-w-96">
        excuse me; pardon me; I'm sorry; I beg your pardon
      </p>
    </div> -->

    <!-- <section class="fixed bottom-24 rounded-full w-72 h-20 bg-red-500">
      Drop here to delete
    </section> -->
    <!-- 
    <div class="h-72">
      FUck this shit it only supports the fixed height 
      <Swipe>
        <SwipeItem>
          <div class="flex flex-row items-center gap-x-6 justify-between">
            <p class="text-xl text-balance">すみません</p>
            <p class="text-lg text-balance text-right max-w-96">
              excuse me; pardon me; I'm sorry; I beg your pardon
            </p>
          </div>
        </SwipeItem>
        <SwipeItem>del</SwipeItem>
      </Swipe>
    </div> -->

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
      <div class="flex flex-row items-center gap-x-6">
        <input type="checkbox" class="rounded" name="" id="" />
        <div class="flex flex-row items-center justify-between gap-x-4 w-full">
          <p class="text-xl text-balance" contenteditable>
            <ruby>下<rt>くだ</rt></ruby>さい
          </p>
          <p class="text-lg text-balance text-right max-w-96" contenteditable>please (give me)</p>
        </div>
      </div>
      <div class="flex flex-row items-center gap-x-6">
        <input type="checkbox" class="rounded" name="" id="" />
        <div class="flex flex-row items-center justify-between gap-x-4 w-full">
          <p class="text-xl text-balance" contenteditable>
            <ruby>下<rt>くだ</rt></ruby>さい
          </p>
          <p class="text-lg text-balance text-right max-w-96" contenteditable>please (give me)</p>
        </div>
      </div>
      <div class="flex flex-row items-center gap-x-6">
        <input type="checkbox" class="rounded" name="" id="" />
        <div class="flex flex-row items-center justify-between gap-x-4 w-full">
          <p class="text-xl text-balance" contenteditable>
            <ruby>下<rt>くだ</rt></ruby>さい
          </p>
          <p class="text-lg text-balance text-right max-w-96" contenteditable>please (give me)</p>
        </div>
      </div>
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

    <Button class="justify-center text-base mt-6 bg-neutral-100 py-0.5">+</Button>
  </div>
</div>

<div class="fixed left-0 bottom-4 w-full flex flex-col items-center">
  <div class="max-w-xl px-4 w-full flex flex-row items-center gap-x-3">
    <Button class="flex-1 justify-center py-1.5 text-base">Cancel</Button>
    <Button class="flex-1 justify-center py-1.5 text-base bg-green-300 text-green-950">Save</Button>
  </div>
</div>

<!-- TODO: add prettierplugintailwindcss -->
