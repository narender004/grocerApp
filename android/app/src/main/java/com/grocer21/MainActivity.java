package com.grocer21;

import android.os.Bundle;
import android.widget.ImageView;

import com.facebook.react.ReactActivity;
import com.tsepeti.splashscreen.RCTSplashScreen;

public class MainActivity extends ReactActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    RCTSplashScreen.openSplashScreen(this, true, ImageView.ScaleType.FIT_XY);
    super.onCreate(savedInstanceState);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "grocer";
  }
}
