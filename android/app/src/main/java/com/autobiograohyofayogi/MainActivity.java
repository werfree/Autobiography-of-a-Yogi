package com.autobiograohyofayogi;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
// import com.brentvatne.react.ReactVideoPackage;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "AutobiograohyOfAYogi";
  }

  // @Override
  // protected List<ReactPackage> getPackages() {
  // return Arrays.asList(
  // new MainReactPackage(),
  // new ReactVideoPackage());
  // }
}
