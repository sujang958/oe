<script>

    import { twMerge } from "tailwind-merge"

</script>
<section class={twMerge("fixed left-0 bottom-4 w-full flex flex-col items-center", $$props.class)}>
  <div class="max-w-xl px-4 w-full flex flex-row items-center gap-x-3">
    <slot />
  </div>
</section>