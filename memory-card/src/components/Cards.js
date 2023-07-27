function LoadCards(props) {

    function Actions(card) {
        props.changeCardStatus(card);
        props.handleScore(card);   
    };

    return props.cardsArray.map(card => {

        return(
            <img alt="" src={card.src} data-id={card.id} data-clicked={card.clicked} style={{width:'100%', height:'100%'}} onClick={(card) => Actions(card)}></img>          
        )

    });

}

export default LoadCards;