function LoadCards(props) {

    return props.cardsArray.map(card => {
        console.log(card.id)
        return(
            <img src={card.src} data-id={card.id} style={{width:'100%', height:'100%'}}></img>          
        )

    });

}

export default LoadCards;