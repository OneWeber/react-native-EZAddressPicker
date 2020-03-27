
# react-native-easy-address-picker

## Getting started

`$ npm install react-native-easy-address-picker --save`

### Mostly automatic installation

`$ react-native link react-native-easy-address-picker`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-easy-address-picker` and add `RNEasyAddressPicker.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNEasyAddressPicker.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.quenice.cardview.RNEasyAddressPickerPackage;` to the imports at the top of the file
  - Add `new RNEasyAddressPickerPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-easy-address-picker'
  	project(':react-native-easy-address-picker').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-easy-address-picker/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-easy-address-picker')
  	```


## Usage
```javascript
import RNEasyAddressPicker from 'react-native-easy-address-picker';

// TODO: What to do with the module?
RNEasyAddressPicker;
```
  