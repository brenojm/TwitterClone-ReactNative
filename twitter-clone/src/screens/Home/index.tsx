import React, { useState } from "react";
import { FlatList, Image, ScrollView, View } from "react-native";
import { FabButton } from "../../components/Botao";
import { Tweet } from "../../components/Tweet";
import { styles } from "./styles";


export interface TweetProps {
    id: number,
    icon: string,
    name: string,
    user: string,
    horas: string,
    textContent: string,
    commentNumber: number,
    retweetNumber: number,
    likeNumber: number,

    image?: string,

}

export const Home = () => {

    const [TweetsList, setTweetsList] = useState<TweetProps[]>([
        {
            id: 1,
            icon: "https://entretenimento.plu7.com/wp-content/uploads/2022/06/Recapitulacao-de-Obi-Wan-Kenobi-Episodio-5-Flashes-de-volta-para.jpg",
            name: "Breno1",
            user: "breno",
            horas: "9h",
            textContent: "Ferrari é uma fabricante italiana de carros esportivos de luxo com sede em Maranello. Fundada por Enzo Ferrari em 1939 na divisão de corridas da Alfa Romeo com o nome Auto Avio Costruzioni, a empresa construiu seu primeiro carro em 1940. No entanto, o início da empresa",
            commentNumber: 1,
            retweetNumber: 4,
            likeNumber: 5,
            image: "https://entretenimento.plu7.com/wp-content/uploads/2022/06/Recapitulacao-de-Obi-Wan-Kenobi-Episodio-5-Flashes-de-volta-para.jpg"
        },

        {
            id: 3,
            icon: "https://entretenimento.plu7.com/wp-content/uploads/2022/06/Recapitulacao-de-Obi-Wan-Kenobi-Episodio-5-Flashes-de-volta-para.jpg",
            name: "Breno3",
            user: "breno",
            horas: "9h",
            textContent: "Ferrari é uma fabricante italiana de carros esportivos de luxo com sede em Maranello. Fundada por Enzo Ferrari em 1939 na divisão de corridas da Alfa Romeo com o nome Auto Avio Costruzioni, a empresa construiu seu primeiro carro em 1940. No entanto, o início da empresa",
            commentNumber: 1,
            retweetNumber: 4,
            likeNumber: 5,
            image: "https://entretenimento.plu7.com/wp-content/uploads/2022/06/Recapitulacao-de-Obi-Wan-Kenobi-Episodio-5-Flashes-de-volta-para.jpg"
        },
        {
            id: 10,
            icon: "https://entretenimento.plu7.com/wp-content/uploads/2022/06/Recapitulacao-de-Obi-Wan-Kenobi-Episodio-5-Flashes-de-volta-para.jpg",
            name: "Breno2",
            user: "breno",
            horas: "9h",
            textContent: "Ferrari é uma fabricante italiana de carros esportivos de luxo com sede em Maranello. Fundada por Enzo Ferrari em 1939 na divisão de corridas da Alfa Romeo com o nome Auto Avio Costruzioni, a empresa construiu seu primeiro carro em 1940. No entanto, o início da empresa",
            commentNumber: 1,
            retweetNumber: 4,
            likeNumber: 5,
            image: "https://entretenimento.plu7.com/wp-content/uploads/2022/06/Recapitulacao-de-Obi-Wan-Kenobi-Episodio-5-Flashes-de-volta-para.jpg"
        },



    ]);

    return (
        <>
            <View>

                <View>
                    <View style={styles.header}>
                        <Image source={{ uri: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/05/kenobi.jpg" }} style={[styles.image, { borderRadius: 50 }]} />

                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/733/733579.png" }} style={styles.image} />

                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/3898/3898692.png" }} style={[styles.image, { width: 20, height: 20, tintColor: 'black' }]} />
                    </View>


                    <View>
                        <FlatList
                            data={TweetsList}
                            renderItem={({ item, index }) =>
                                <Tweet
                                    tweet={item}
                                />
                            }
                            keyExtractor={item => item.name}
                        />
                    </View>
                    <FabButton />
                </View>

            </View>
            
        </>

    )
}