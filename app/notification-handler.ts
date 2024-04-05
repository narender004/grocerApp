/**
 * Notifications handler
 * @format
 */

import React from 'react';
import { Alert } from 'react-native';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import notifee, { AuthorizationStatus } from '@notifee/react-native';
import { connect } from 'react-redux';

class _Notification extends React.Component {
  foregroundListener: any;

  async componentDidMount() {
    const isEnabled = await this.requestPermission();
    if (isEnabled) {
      this.subscribeTopic();
      this.listenForegroundNotification();
      this.listenBackgroundNotification();
    }
  }

  async requestPermission() {
    const settings = await notifee.requestPermission();
    const enabled =
      settings.authorizationStatus === AuthorizationStatus.AUTHORIZED ||
      settings.authorizationStatus === AuthorizationStatus.PROVISIONAL;

    return enabled;
  }

  subscribeTopic() {
    messaging().subscribeToTopic('announcements');
  }

  listenForegroundNotification() {
    messaging().onMessage(
      (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
        this.displayNotification(remoteMessage);
      },
    );
  }

  listenBackgroundNotification() {
    messaging().setBackgroundMessageHandler(
      (remoteMessage: FirebaseMessagingTypes.RemoteMessage) =>
        this.handleNotification(remoteMessage),
    );
  }

  displayNotification(remoteMessage: FirebaseMessagingTypes.RemoteMessage) {
    notifee.displayNotification({
      title: remoteMessage.notification?.title,
      body: remoteMessage.notification?.body,
      android: {
        channelId: 'Miscellaneous',
      },
    });
  }

  async handleNotification(
    remoteMessage: FirebaseMessagingTypes.RemoteMessage,
  ) {
    Alert.alert(
      remoteMessage.notification?.title ?? '',
      remoteMessage.notification?.body,
    );
  }

  componentWillUnmount() {
    this.foregroundListener?.();
  }

  render() {
    return null;
  }
}

const Notification = connect(null, {})(_Notification);

export { Notification };
