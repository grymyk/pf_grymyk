import Card from './Card.js'

export default function WorkCardListHome({data}) {
    const numberCards = 4;
    
    return (
        <>
            <div className="grid md:grid-cols-2 gap-8 lg:mt-8 pb-40 text-center">
                { data && 
                    data
                    .slice(0, numberCards)
                    .map(({ tools, id, link, imgUrl, title, category, description }) => (
                        <Card
                            tools = { tools }
                            key = { id }
                            link = { link }
                            imgUrl = { imgUrl }
                            title = { title }
                            category = { category }
                            description = { description }
                        />
                ))}
            </div>
        </>
    )
}