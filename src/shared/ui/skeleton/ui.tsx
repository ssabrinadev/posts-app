import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { View, StyleSheet } from 'react-native';

const SkeletonCard: React.FC = () => (
    <View style={styles.card}>
        <ContentLoader
            viewBox="0 0 400 150"
            height={150}
            width={400}
            backgroundColor="#f0f0f0"
            foregroundColor="#ecebeb"
        >
            <Rect x="15" y="15" rx="5" ry="5" width="70%" height="20" />
            <Rect x="15" y="45" rx="5" ry="5" width="90%" height="10" />
            <Rect x="15" y="65" rx="5" ry="5" width="90%" height="10" />
            <Rect x="15" y="85" rx="5" ry="5" width="90%" height="10" />
        </ContentLoader>
    </View>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        margin: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
});

export default SkeletonCard;
