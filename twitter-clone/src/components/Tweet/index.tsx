import React, { useEffect, useState } from "react";
import { Image, ImageProps, ImageSourcePropType, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { TweetProps } from "../../screens/Home";
import { styles } from "./styles"





export const Tweet = ({ tweet, ...rest }) => {

    function ImageLoad() {
        if (tweet.image) {
            return <>
                <Image
                    source={{ uri: tweet.image }}
                    style={{ width: 300, height: 200, marginTop: 2, borderRadius: 20, marginBottom: 8, position:'relative' }}
                />
            </>
        }
        return <></>;
    }

    const [comments,setComments] = useState(0);
    const [retreets,setRetweets] = useState(0);
    const [likes,setLikes] = useState(0);
    
    function loadTweetContent(tweetReceived: TweetProps): void {
        setComments(tweetReceived.commentNumber);
        setRetweets(tweetReceived.retweetNumber);
        setLikes(tweetReceived.likeNumber);
    }

    // loadTweetContent(tweet);

    return <TouchableOpacity activeOpacity={1} style={styles.buttonSkill} {...rest}>
        
        <View style={styles.contentTweet}>
            
            <TouchableOpacity>
                <Image
                    source={{ uri: tweet.icon }}
                    style={styles.image}
                />
            </TouchableOpacity>
            <View style={styles.columnTweet}>

                <View style={styles.contentUser}>
                    <Text style={styles.textName}>
                        {tweet.name}
                        <Text style={styles.textUser}>
                            {` @${tweet.user}`}
                        </Text>
                    </Text>

                    <View style={styles.contentHours}>
                        <Text>
                            {tweet.horas}
                        </Text>
                        <TouchableOpacity>
                        <Image
                            source={{ uri: "https://cdn-icons.flaticon.com/png/512/5355/premium/5355826.png?token=exp=1656540592~hmac=de44a03ea790dbb8bba11eb07d952ebc" }}
                            style={{ width: 15, height: 15, marginTop: 2, marginLeft: 4 }}
                        />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.contentText}>
                    <Text style={{ fontSize: 16 }}>
                        {tweet.textContent}
                    </Text>
                
                </View>

                <View>
                    <ImageLoad />
                </View>
                <View style={styles.contentIcons}>
                    <TouchableOpacity style={styles.contentUser}>
                        
                        <Image
                            source={{ uri: "https://cdn-icons.flaticon.com/png/512/5941/premium/5941106.png?token=exp=1656541286~hmac=5adcacb4abf8f10a33a9eef471e23da5" }}
                            style={{ width: 15, height: 15, marginRight: 10 }}
                        />
                        <Text>
                            {tweet.commentNumber}
                        </Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contentUser}>
                        <Image
                            source={{ uri: "https://cdn-icons-png.flaticon.com/512/1388/1388895.png" }}
                            style={{ width: 15, height: 15, marginRight: 10 }}
                        />
                        <Text>
                            {tweet.retweetNumber}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contentUser}>
                        <Image
                            source={{ uri: "https://cdn-icons.flaticon.com/png/512/5941/premium/5941212.png?token=exp=1656541286~hmac=54c8b68d0886b31ca34a15c05df3d071" }}
                            style={{ width: 15, height: 15, marginRight: 10 }}
                        />
                        <Text>
                            {tweet.likeNumber}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contentUser}>
                        <Image
                            source={{ uri: "https://cdn-icons.flaticon.com/png/512/1358/premium/1358023.png?token=exp=1656541428~hmac=c108436d30c7dabf491a02c16bd2d1a6" }}
                            style={{ width: 15, height: 15 }}
                        />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    </TouchableOpacity>
}