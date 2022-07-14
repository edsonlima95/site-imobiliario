
type TitleProps = {
    title: string,
    subTitle: string,
    description: string,
}

function Title({ title, subTitle, description }: TitleProps) {

    return (
        <div className="w-5/12 text-center flex flex-col items-center mt-24 mb-10">
            <span className="text-4xl font-bold text-gray-800 mb-5">{title} <strong className="text-red-600">{subTitle}</strong></span>
            <div className="w-10/12">
                <span className="text-gray-400 text-xl">{description}</span>
            </div>
        </div>
    )

}

export default Title