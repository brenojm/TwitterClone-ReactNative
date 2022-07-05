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
            icon: "https://pbs.twimg.com/profile_images/1468284895936008200/4H03Rfzz_400x400.jpg",
            name: "Não Injustiçado",
            user: "MichaelMasi",
            horas: "19h",
            textContent: "Eu não errei em Abu Dhabi",
            commentNumber: 9,
            retweetNumber: 1,
            likeNumber: 1,
        },

        {
            id: 3,
            icon: "https://cdn-1.motorsport.com/images/amp/6D1vgkJ0/s1000/lewis-hamilton-mercedes-amg-1.jpg",
            name: "Sincero",
            user: "breno",
            horas: "12h",
            textContent: "Overwatch morreu em 2017",
            commentNumber: 32,
            retweetNumber: 40,
            likeNumber: 478,
        },
        {
            id: 10,
            icon: "https://pbs.twimg.com/profile_images/1532170986946281472/d1qK4OCu_400x400.jpg",
            name: "Scuderia Ferrari",
            user: "ferrari",
            horas: "9h",
            textContent: "Ferrari é uma fabricante italiana de carros esportivos de luxo com sede em Maranello. Fundada por Enzo Ferrari em 1939 na divisão de corridas da Alfa Romeo com o nome Auto Avio Costruzioni, a empresa construiu seu primeiro carro em 1940.",
            commentNumber: 98,
            retweetNumber: 25,
            likeNumber: 999,
            image: "https://lookcharms.com/wp-content/uploads/2022/02/charles-leclerc-ferrari-f1-75-.jpg"
        },
        {
            id: 10,
            icon: "https://cdn.discordapp.com/attachments/852702431770050620/992168136004616392/FLZ-bvVaIAExhj9.png",
            name: "Cauã",
            user: "EhoSix6",
            horas: "6h",
            textContent: "The FitnessGram PACER Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.",
            commentNumber: 6,
            retweetNumber: 6,
            likeNumber: 6,
        },
        {
            id: 10,
            icon: "https://cdn.discordapp.com/attachments/842558398376837141/992168947384332440/3FD4753C-5E88-457F-A141-740EE8B4DBCA.JPG",
            name: "Breh",
            user: "Breh",
            horas: "9h",
            textContent: "",
            commentNumber: 420,
            retweetNumber: 69,
            likeNumber: 540,
            image: "https://media.discordapp.net/attachments/842558398376837141/992168830799454288/IMG_5875.JPG"
        },
        {
            id: 10,
            icon: "https://cdn.discordapp.com/attachments/842558398376837141/992168947384332440/3FD4753C-5E88-457F-A141-740EE8B4DBCA.JPG",
            name: "Brenin",
            user: "brenomagrani",
            horas: "4h",
            textContent: "typescript >>> javascript",
            commentNumber: 1,
            retweetNumber: 4,
            likeNumber: 5,
        },
        {
            id: 10,
            icon: "https://pbs.twimg.com/profile_images/1535215663643516929/h3HWsSsE_400x400.jpg",
            name: "Mercedes AMG",
            user: "mercedes",
            horas: "9h",
            textContent: "There’s no place like home.",
            commentNumber: 98,
            retweetNumber: 25,
            likeNumber: 999,
            image: "https://pbs.twimg.com/media/FWclYFwXEAU8tJ9?format=jpg&name=4096x4096"
        },
        {
            id: 10,
            icon: "https://pbs.twimg.com/profile_images/1411300597916225538/4vbQyi4b_400x400.jpg",
            name: "AstonMartin F1",
            user: "astonmartin",
            horas: "2h",
            textContent: "A Aston Martin terá um novo grande pacote de atualizações em Silverstone. O objetivo é se colocar nas primeiras colocações do grid.",
            commentNumber: 98,
            retweetNumber: 25,
            likeNumber: 999,
            image: "https://pbs.twimg.com/media/FVZOQsaXEAEGCaS?format=jpg&name=small"
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