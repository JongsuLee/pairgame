import { writable } from "svelte/store"

export let score = writable(0)
export let round = writable(1)
export let time = writable(100)
export let startTime = writable(100)
export let interval = writable(0)
export let page = writable<'title' | 'play' | 'score'>('title')
export function resetGameInfoes() {
  score.set(0)
  round.set(1)
  time.set(100)
  startTime.set(100)
  interval.set(0)
}