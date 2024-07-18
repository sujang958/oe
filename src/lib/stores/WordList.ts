import type { WordList } from "$lib/types/WordList"
import { persisted } from "svelte-persisted-store"

export const WordLists = persisted<Record<string, WordList>>("wordlists", {})
