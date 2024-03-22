"use client"

import { cn } from "@/lib/utils";
import { useQuizzStore } from "@/store/quizz";
import { Answers } from "@prisma/client";
import { CheckCircle, Circle, CircleX } from "lucide-react";
import { useState } from "react";

type Props = {
    answers: Answers[];
    correctAnswear: BigInt
    onSelectAnswer: (isSelected: boolean) => void
}

export default function AnswearList({ answers, correctAnswear, onSelectAnswer }: Props) {
    const [selectedAnswerId, setSelectedAnswerId] = useState<BigInt | null>(null);
    const [setQuestionsRight, setQuestionsWrong, questionsRight, questionsWrong] = useQuizzStore(state => [state.setQuestionsRight, state.setQuestionsWrong, state.questionsRight, state.questionsWrong])

    return (
        <div className="flex flex-col space-y-6 mt-4">
            {answers.map((answer) => {
                const isSelected = selectedAnswerId === answer.id;
                const isCorrect = correctAnswear === answer.id;
                const bgColor = isSelected && (isCorrect ? "bg-emerald-100" : "bg-red-100");

                console.log(isSelected)
                return (
                    <div onClick={() => {
                        if (selectedAnswerId) return;

                        setSelectedAnswerId(answer.id);
                        onSelectAnswer(true);

                        if (isCorrect) {
                            setQuestionsRight(questionsRight + 1);
                        } else {
                            setQuestionsWrong(questionsWrong + 1);
                        }
                    }} className={cn("flex px-4 rounded py-3 cursor-pointer", bgColor, !isSelected && "hover:bg-slate-50")} key={answer.id}>
                        <p className="flex-1 font-light text-lg">{answer.title}</p>
                        {isSelected ?
                            (isCorrect ? <CheckCircle className="text-emerald-500" /> : <CircleX className="text-red-500" />) : (
                                <Circle className="text-slate-200" />
                            )}
                    </div>
                )
            })}
        </div>
    )
}