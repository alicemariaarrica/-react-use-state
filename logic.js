
import { useState } from 'react'; +
import { data } from '../data/Data.js';

export const createFunction = () => {

    const [selectedCard, setSelectedCard] = useState(data[0]);


    const selectCard = (card) => {
        setSelectedCard(card);
    };

    return { selectedCard, selectCard };
};
