declare module 'player.js' {
  class Player {
    constructor(element: HTMLIFrameElement)
    on(event: string, callback: () => void | Promise<void>): void
    play(): Promise<void>
    unmute(): Promise<void>
    setLoop(loop: boolean): Promise<void>
    setCurrentTime(seconds: number): Promise<void>
  }

  const playerjs: { Player: typeof Player }
  export default playerjs
}
