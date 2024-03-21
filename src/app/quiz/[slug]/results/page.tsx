"use client"

import { buttonVariants } from "@/components/ui/button"
import { useQuizzStore } from "@/store/quizz"
import Link from "next/link"
import ReactConfetti from "react-confetti"

type Props = {}

export default function page({ }: Props) {
    const [questionsRight, questionsWrong, setQuestionsRight, setQuestionsWrong] = useQuizzStore(state => [state.questionsRight, state.questionsWrong, state.setQuestionsRight, state.setQuestionsWrong])

    const handleResetStore = () => {
        setQuestionsRight(0)
        setQuestionsWrong(0)
    }

    return (
        <>
            <ReactConfetti
                width={2000}
                height={1000}
            />
            <div className="bg-blue-950 flex min-h-screen p-10 text-white">
                <div className="max-w-xl flex-1 flex flex-col mx-auto">
                    <div className="p-5 bg-white text-black flex-1 rounded-3xl my-24 flex flex-col">
                        <div className="flex-1 flex flex-col items-center">
                            <h2 className="scroll-m-20 mt-24 text-3xl tracking-tight leading-snug font-semibold">Gratulujeme 🎉</h2>
                            <p className="text-7xl text-blue-600 font-bold mt-12">{(questionsRight + questionsWrong) - questionsWrong}</p>
                            <p className="text-muted-foreground">Bodov</p>
                            <p className="text-muted-foreground mt-24 text-center">Úžasne! Dokončili ste quizz, s výbornou úspešnosťou <br /> <span className="text-blue-600">{questionsRight}/{questionsRight + questionsWrong}</span> otázok správne.</p>
                        </div>

                        <Link href='/' onClick={handleResetStore} className={buttonVariants()}>Naspäť</Link>

                    </div>

                </div>
            </div>
        </>
    )
}