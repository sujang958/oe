import type { Word } from "./WordList"

export type TestedWord = {
  word: Word
  answer: string
  result: "CORRECT" | "INCORRECT" | "SKIPPED"
}
