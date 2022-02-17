package com.withreactnative;

import com.facebook.react.ReactActivity;
import android.os.Bundle; // import for react navigation

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "withReactNative";
  }

  /**
   * Following React Navigation documentation steps in "Installing dependencies into a bare React Native Project"
   * Click on the link below to access the documentation:
   *    https://reactnavigation.org/docs/getting-started/#installing-dependencies-into-a-bare-react-native-project
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
}
