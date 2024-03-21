import { create } from 'zustand'

interface QuizzState {
    questionsRight: number
    setQuestionsRight: (questionsRight: number) => void
    questionsWrong: number
    setQuestionsWrong: (questionsWrong: number) => void
}

const useQuizzStore = create<QuizzState>((set) => ({
    questionsRight: 0,
    setQuestionsRight: (questionsRight: number) => set({ questionsRight }),
    questionsWrong: 0,
    setQuestionsWrong: (questionsWrong: number) => set({ questionsWrong }),
}))

export { useQuizzStore }