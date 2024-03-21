"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import AnswerList from "@/components/answer-list"
import { Answers, Questions as QuestionsType, Quizzes } from "@prisma/client"
import { useState } from "react"
import { useRouter } from "next/navigation"

type ExtendedQuestion = QuestionsType & {
    Answers_Answers_questionToQuestions: Answers[],
    correctAnswer: Answers
}

type Props = {
    quizz: Quizzes & {
        Questions_Questions_quizzToQuizzes: ExtendedQuestion[]
    }
}

export default function Questions({ quizz }: Props) {
    const [questionIndex, setQuestionIndex] = useState<number>(0)
    const [isSelectedAnswer, setIsSelectedAnswer] = useState<boolean>(false)
    const router = useRouter()

    const handleNextQuestion = () => {
        if (questionIndex < quizz.Questions_Questions_quizzToQuizzes.length - 1) {
            setQuestionIndex(questionIndex + 1)
            setIsSelectedAnswer(false)
        } else {
            router.push(`/quiz/${quizz.slug}/results`)
        }
    }

    const isLastQuestion = questionIndex === quizz.Questions_Questions_quizzToQuizzes.length - 1

    return (
        <div className="max-w-xl flex-1 flex flex-col mx-auto">
            <div className="flex justify-between">
                <Link href='/' className="hover:bg-blue-900 rounded-full p-2">
                    <ArrowLeft className="text-white" />
                </Link>
                <div className="p-2">
                    {questionIndex + 1}/{quizz.Questions_Questions_quizzToQuizzes.length}
                </div>
            </div>

            <div className="p-5 bg-white text-black flex-1 rounded-3xl my-24 flex flex-col">
                <div className="flex-1">
                    <h2 className="scroll-m-20 text-3xl font-light tracking-tight leading-snug">{quizz.Questions_Questions_quizzToQuizzes[questionIndex].title}</h2>
                    <AnswerList onSelectAnswer={setIsSelectedAnswer} answers={quizz.Questions_Questions_quizzToQuizzes[questionIndex].Answers_Answers_questionToQuestions} correctAnswear={quizz.Questions_Questions_quizzToQuizzes[questionIndex].correctAnswer} />
                </div>

                <Button onClick={handleNextQuestion} disabled={!isSelectedAnswer}>
                    {isLastQuestion ? "Vyhodnotenie" : "Ďalšia otázka"}
                </Button>
            </div>

        </div>
    )
}