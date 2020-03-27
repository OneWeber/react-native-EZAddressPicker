
# react-native-easy-address-picker

![GitHub set up](https://github.com/OneWeber/react-native-EZAddressPicker/raw/master/logo/screen1.jpg)
![GitHub set up](https://github.com/OneWeber/react-native-EZAddressPicker/raw/master/logo/screen2.jpg)


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
    
## Show some message     
```js
  import RNEasyAddressPicker from 'react-native-easy-address-picker';
  
  <View style={{flex: 1}}>
    <Text onPress={()=>{
          this.picker.showPicker()
      }}>选择地区</Text>
      <RNEasyAddressPicker
          hasCountry={true}
          ref={picker => this.picker = picker}
          selectCountry={(index) => {}}
          selectCity={(index) => {}}
          clickConfirmBtn={(data) => {console.log(data)}}
      />
  </View>
  ```
## Props
Property | Default | Description
--------- | ------------- | ------------
hasCountry | false | When it is true, it is the world region, and when it is false, it is the China region
confirmBtnColor | '#14c5ca' | the color of confirmbutton
confirmBtnText | 确定 | the text of confirmbutton
cancleBtnColor | '#999' | the color of canclebutton
backdropColor | 'rgba(0,0,0,.3)' | The background color of the shadow layer
selectCountry | () => {} | The function that fires when a country is selected
selectCity | () => {} | The function that fires when a city is selected
selectProvince | () => {} | The function that fires when a province is selected
selectRegion | () => {} | The function that fires when a region is selected
clickConfirmBtn | () => {} | The function triggered when the ok button is clicked will return the currently selected value
isRadius | true | Do I need rounded corners
title | 选择地区 | The title of the default selection box


## Usage
```javascript
import RNEasyAddressPicker from 'react-native-easy-address-picker';

// TODO: What to do with the module?
RNEasyAddressPicker;
```
  
