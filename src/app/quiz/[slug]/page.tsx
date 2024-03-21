import db from "@/lib/db"
import { notFound } from "next/navigation"
import Questions from "@/components/questions"
import * as _ from "lodash"

type Props = {
    params: {
        slug: string,
    }
}

const fetchQuizz = async (slug: string) => {
    try {
        let quizz = await db.quizzes.findFirst({
            where: {
                slug
            },
            include: {
                Questions_Questions_quizzToQuizz: {
                    include: {
                        Answers_Answers_questionToQuestions: true,
                        Answers_Questions_correctAnswerToAnswers: true
                    }
                }
            }
        })
        if (!quizz) return

        quizz.Questions_Questions_quizzToQuizz = _.shuffle(quizz.Questions_Questions_quizzToQuizz)
        return quizz
    } catch (error) {
        console.error(error)
    }
}


export default async function page({ params: { slug } }: Props) {
    const quizz = await fetchQuizz(slug)

    if (!quizz) {
        return notFound()
    }


    return (
        <div className="bg-blue-950 flex min-h-screen p-10 text-white">
            {/* @ts-ignore */}
            <Questions quizz={quizz} />
        </div>
    )
}