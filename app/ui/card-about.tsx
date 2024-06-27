import clsx from "clsx"

type CardAboutProps = {
    className?: string,
    title: string,
    content: string,
    svg: React.ReactNode
}

export default function CardAbout({ className, title, content,svg, ...props }: CardAboutProps) {
    return (
        <div
            {...props}
            className={clsx(" ", className)}
        >
            <div className=" h-full w-full flex items-start justify-start pb-5 px-5">
                <div className=" p-4 rounded-full scale-100 transform transition-all duration-500 flex items-center justify-center mr-5">
                    <span className=" inline-flex items-center fill-current  h-6 w-6">
                        {svg}
                    </span>
                </div>
                <div>
                    <span className=" md:whitespace-nowrap block text-lg xl:text-xl font-semibold mb-2">
                        {title}
                    </span>
                    <span className=" block text-sm xl:text-base">
                        {content}
                    </span>
                </div>
            </div>
        </div>
    )
}