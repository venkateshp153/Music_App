// InfoBox.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InfoBox = ({ data, onPress, type, title, display }) => {
  const renderItems = () => {
    return data.map(({ id, title, body, imageSource, name, date, day, month, occation }) => {
      switch (type) {
        case 'announcement':
          return (
            <TouchableOpacity key={id} onPress={() => onPress({ id, title, body })} style={{ width: '100%' }}>
              <View style={styles.announcementItemContainer}>
                <View>
                  <Text style={styles.announcementItemTitle}>{title}</Text>
                  <Text style={styles.announcementItemBody}>{body}</Text>
                </View>
                <View style={styles.flatListIcon}>
                  <AntDesign name="right" />
                </View>
              </View>
            </TouchableOpacity>
          );
        case 'wishthem':
          return (
            <TouchableOpacity key={id} onPress={() => onPress({ id, name, date })}>
              <View style={styles.wishItemContainer}>
                <Image source={{ uri: imageSource }} style={{ height: 35, width: 35, marginBottom: 2, borderRadius: 2 }} />
                <View>
                  <Text style={styles.wishItemLabel}>{name}</Text>
                  <Text style={styles.wishItemLabel}>{date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        case 'holiday':
          return (
            <TouchableOpacity key={id} onPress={() => onPress({ id, day, month, occation })} style={styles.holidayItemContainer}>
              <Text style={styles.holidayMonthLabel}>{month}</Text>
              <Text style={styles.holidayWishsLabel}>{occation}</Text>
              <Text style={styles.holidayDayLabel}>{day}</Text>
            </TouchableOpacity>
          );
        default:
          return null;
      }
    });
  };

  return (
    <>
      <Text style={{ fontWeight: 'bold', marginVertical: 15 }}>{title}</Text>
      <View style={{ flexDirection: display, flexWrap: 'wrap' }}>
        {renderItems()}
      </View>
    </>
  );
};

export default InfoBox;
