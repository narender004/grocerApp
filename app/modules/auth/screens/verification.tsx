/**
 * Verification Screen
 * @format
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import OtpInputs from 'react-native-otp-inputs';

import { VerificationViewProps } from '../types';
import { verifyCode, loginWithPhone } from '../slice';
import * as Configs from '@app/config';
import { strings } from '@app/strings';
import { Label, Button, Countdown } from '@app/components';
import { AuthContainer } from './container';
import { styles } from './styles';

const VerificationScreen = (props: VerificationViewProps) => {
  const dispatch = useDispatch();

  const [code, setCode] = useState('');
  const [finishTime, setFinishTime] = useState(
    dayjs().add(Configs.OTP_TIMEOUT, 'seconds'),
  );

  const phone = props.route.params.phone;

  const onPressResend = () => {
    setFinishTime(dayjs().add(Configs.OTP_TIMEOUT, 'seconds'));
    dispatch(loginWithPhone({ phone }));
  };

  const onSubmit = () => {
    if (code.length !== Configs.OTP_LENGTH) {
      return;
    }
    dispatch(verifyCode({ code, phone }));
  };

  const showTimer = finishTime.isAfter(dayjs());

  return (
    <AuthContainer
      headerProps={{ title: strings.header.verification, canGoBack: true }}
    >
      <View style={styles.contentContainer}>
        <Label style={styles.verificationCaptionStyle}>
          {`${strings.auth.verification_sent_caption} `}
          <Label style={[styles.verificationCaptionStyle, styles.bold]}>
            {props.route?.params.phone}.
          </Label>
        </Label>

        <View style={styles.otpBoxContainer}>
          <OtpInputs
            handleChange={setCode}
            numberOfInputs={Configs.OTP_LENGTH}
            autofillFromClipboard={false}
            inputContainerStyles={styles.otpInputContainer}
            inputStyles={styles.otpInputStyle}
            onSubmitEditing={onSubmit}
          />
        </View>

        <Label style={styles.notReceiveCodeTextStyle}>
          {showTimer ? strings.auth.resend_otp : strings.auth.not_receive}{' '}
          {showTimer ? (
            <Countdown
              finishTime={finishTime}
              format="{m}:{s}"
              onTimeFinish={() => setFinishTime(dayjs())}
              labelProps={{
                style: [styles.notReceiveCodeTextStyle, styles.timerStyle],
              }}
            />
          ) : (
            <Label
              style={[styles.notReceiveCodeTextStyle, styles.resendLabelStyle]}
              onPress={onPressResend}
            >
              {strings.auth.resend}
            </Label>
          )}
        </Label>

        <Button
          type="secondary"
          title={strings.auth.submit.toUpperCase()}
          containerStyle={styles.buttonStyle}
          disabled={code.length !== Configs.OTP_LENGTH}
          onPress={onSubmit}
        />
      </View>
    </AuthContainer>
  );
};

export default VerificationScreen;
